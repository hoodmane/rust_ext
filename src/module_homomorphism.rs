use std::sync::{Mutex, MutexGuard};
use std::sync::Arc;

use crate::fp_vector::{FpVector, FpVectorT};
use crate::matrix::{Matrix, Subspace, QuasiInverse};
use crate::module::Module;

pub trait ModuleHomomorphism<S : Module, T : Module> {
    fn source(&self) -> Arc<S>;
    fn target(&self) -> Arc<T>;
    fn degree_shift(&self) -> i32;

    fn min_degree(&self) -> i32 {
        self.source().min_degree()
    }

    fn apply_to_basis_element(&self, result : &mut FpVector, coeff : u32, input_degree : i32, input_idx : usize);

    fn apply(&self, result : &mut FpVector, coeff : u32, input_degree : i32, input : &FpVector){
        let p = self.prime();
        for (i, v) in input.iter().enumerate() {
            if v==0 { continue; }
            self.apply_to_basis_element(result, (coeff * v) % p, input_degree, i);
        }
    }
    
    fn prime(&self) -> u32 {
        self.source().prime()
    }

    fn lock(&self) -> MutexGuard<i32>;

    fn max_kernel_degree(&self) -> i32;

    fn set_kernel(&self, lock : &MutexGuard<i32>, degree : i32, kernel : Subspace);
    fn kernel(&self, degree : i32) -> Option<&Subspace>;

    fn set_quasi_inverse(&self, lock : &MutexGuard<i32>, degree : i32, quasi_inverse : QuasiInverse);    
    fn quasi_inverse(&self, degree : i32) -> Option<&QuasiInverse>;

    fn image(&self, degree : i32) -> Option<&Subspace> {
        let option_quasi_inverse = self.quasi_inverse(degree);
        return option_quasi_inverse.and_then(|quasi_inverse| quasi_inverse.image.as_ref() );
    }

    fn compute_kernels_and_quasi_inverses_through_degree(&self, lock : &MutexGuard<i32>, degree : i32){
        for i in self.max_kernel_degree() + 1 ..= degree {
            self.compute_kernel_and_quasi_inverse(lock, degree);
        }
    }

    fn compute_kernel_and_quasi_inverse(&self, lock : &MutexGuard<i32>, degree : i32){
        let p = self.prime();
        self.source().compute_basis(degree);
        self.target().compute_basis(degree);
        let source_dimension = self.source().dimension(degree);
        let target_dimension = self.target().dimension(degree);
        let padded_target_dimension = FpVector::padded_dimension(p, target_dimension);
        let columns = padded_target_dimension + source_dimension;
        let mut matrix = Matrix::new(p, source_dimension, columns);
        self.get_matrix(&mut matrix, degree, 0, 0);
        for i in 0..source_dimension {
            matrix[i].set_entry(padded_target_dimension + i, 1);
        }
        let mut pivots = vec![-1;columns];
        matrix.row_reduce(&mut pivots);
        let quasi_inverse = matrix.compute_quasi_inverse(&pivots, target_dimension, padded_target_dimension);
        self.set_quasi_inverse(&lock, degree, quasi_inverse);
        let kernel = matrix.compute_kernel(&pivots, padded_target_dimension);
        self.set_kernel(&lock, degree, kernel);
    }
    // fn get_image_pivots(&self, degree : i32) -> Option<&Vec<isize>> {
    //     let image = self.get_image(degree);
    //     return image.map(|subspace| &subspace.column_to_pivot_row );
    // }
    
    fn get_matrix(&self, matrix : &mut Matrix, degree : i32, start_row : usize, start_column : usize) -> (usize, usize) {
        let source_dimension = self.source().dimension(degree);
        let target_dimension = self.target().dimension(degree);
        if target_dimension == 0 {
            return (0, 0);
        }
        assert!(source_dimension <= matrix.rows());
        assert!(target_dimension <= matrix.columns());
        for input_idx in 0 .. source_dimension {
            // Writing into slice.
            // Can we take ownership from matrix and then put back? 
            // If source is smaller than target, just allow add to ignore rest of input would work here.
            let output_vector = &mut matrix[start_row + input_idx];
            let old_slice = output_vector.slice();
            output_vector.set_slice(start_column, start_column + target_dimension);
            self.apply_to_basis_element(output_vector, 1, degree, input_idx);
            output_vector.restore_slice(old_slice);
        }
        return (start_row + source_dimension, start_column + target_dimension);
    }

}

// Maybe we should use static dispatch here? This would also get rid of a bunch of casting.
pub struct ZeroHomomorphism<S : Module, T : Module> {
    source : Arc<S>,
    target : Arc<T>,
    max_degree : Mutex<i32>,
    degree_shift : i32
}

impl<S : Module, T : Module> ZeroHomomorphism<S, T> {
    pub fn new(source : Arc<S>, target : Arc<T>, degree_shift : i32) -> Self {
        let max_degree =  Mutex::new(source.min_degree() - 1);
        ZeroHomomorphism {
            source,
            target,
            max_degree,
            degree_shift
        }
    }
}

impl<S : Module, T : Module> ModuleHomomorphism<S, T> for ZeroHomomorphism<S, T> {
    fn source(&self) -> Arc<S> {
        Arc::clone(&self.source)
    }

    fn target(&self) -> Arc<T> {
        Arc::clone(&self.target)
    }

    fn degree_shift(&self) -> i32 {
        self.degree_shift
    }

    fn apply_to_basis_element(&self, _result : &mut FpVector, _coeff : u32, _input_degree : i32, _input_idx : usize){}

    fn lock(&self) -> MutexGuard<i32> {
        self.max_degree.lock().unwrap()
    }

    fn max_kernel_degree(&self) -> i32 { 1000000 }

    fn set_quasi_inverse(&self, lock : &MutexGuard<i32>, degree : i32, kernel : QuasiInverse){}
    fn quasi_inverse(&self, degree : i32) -> Option<&QuasiInverse>{ None }

    fn set_kernel(&self, lock : &MutexGuard<i32>, degree : i32, kernel : Subspace){}
    fn kernel(&self, degree : i32) -> Option<&Subspace> { None }
}
