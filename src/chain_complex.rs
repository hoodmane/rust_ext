use crate::fp_vector::{FpVector, FpVectorT};
// use crate::once::OnceRefOwned;
use crate::matrix::{Matrix, Subspace }; //QuasiInverse
use crate::algebra::Algebra;
use crate::module::{Module, ZeroModule, OptionModule};
use crate::module_homomorphism::{ModuleHomomorphism, ZeroHomomorphism};
use std::rc::Rc;


pub trait ChainComplex<M : Module, F : ModuleHomomorphism<M, M>> {
    fn get_prime(&self) -> u32 {
        self.get_algebra().get_prime()
    }
    fn get_algebra(&self) -> Rc<dyn Algebra>;
    fn get_min_degree(&self) -> i32;
    fn get_module(&self, homological_degree : u32) -> Rc<M>;
    fn get_differential(&self, homological_degree : u32) -> &F;
    fn compute_through_bidegree(&self, homological_degree : u32, degree : i32) {}
    fn computed_through_bidegree_q(&self, homological_degree : u32, degree : i32) -> bool { true }
    // fn set_kernel(&self, homological_degree : usize, degree : i32, kernel : Subspace);
    // fn set_image(&self, degree : i32, homological_degree : usize, image : Subspace);
    // fn get_kernel(&self, homological_degree : usize, degree : i32) -> &Subspace;
    // fn get_image(&self, homological_degree : usize, degree : i32) -> Option<&Subspace>;
    // fn get_quasi_inverse(&self, degree : i32, homological_degree : usize) -> &QuasiInverse;

    fn compute_kernel_and_image(&self,  homological_degree : u32, degree : i32){
        let p = self.get_prime();
        let d = self.get_differential(homological_degree);
        let lock = d.get_lock();
        if homological_degree == 0 {
            let module = self.get_module(0);
            let dim = module.get_dimension(degree);
            let kernel = Subspace::entire_space(p, dim);
            d.set_kernel(&lock, degree, kernel);
        }
        let source_dimension = d.get_source().get_dimension(degree);
        let target_dimension = d.get_target().get_dimension(degree);
        let padded_target_dimension = FpVector::get_padded_dimension(p, target_dimension, 0);
        let columns = padded_target_dimension + source_dimension;
        let mut matrix = Matrix::new(p, source_dimension, columns);
        d.get_matrix(&mut matrix, degree, 0, 0);
        for i in 0..source_dimension {
            matrix[i].set_entry(padded_target_dimension + i, 1);
        }
        let mut pivots = vec![-1;columns];
        matrix.row_reduce(&mut pivots);
        let kernel = matrix.compute_kernel(&pivots, padded_target_dimension);
        let kernel_rows = kernel.matrix.get_rows();
        d.set_kernel(&lock, degree, kernel);        
        let image_rows = matrix.get_rows() - kernel_rows;
        // let quasi_inverse = matrix.compute_quasi_inverses();
        // d.copy_image_from_matrix(degree, &mut matrix, &pivots, image_rows, target_dimension);
        // d.copy_quasi_inverse_from_matrix(degree, &mut matrix, image_rows, padded_target_dimension);
    }
}


pub struct ChainComplexConcentratedInDegreeZero<M : Module> {
    module : Rc<OptionModule<M>>,
    zero_module : Rc<OptionModule<M>>,
    d0 : ZeroHomomorphism<OptionModule<M>, OptionModule<M>>,
    d1 : ZeroHomomorphism<OptionModule<M>, OptionModule<M>>,
    other_ds : ZeroHomomorphism<OptionModule<M>, OptionModule<M>>
}

impl<M : Module> ChainComplexConcentratedInDegreeZero<M> {
    pub fn new(module : Rc<M>) -> Self {
        let p = module.get_prime();
        let zero_module_inner = Rc::new(ZeroModule::new(Rc::clone(&module.get_algebra())));
        let zero_module = Rc::new(OptionModule::Zero(Rc::clone(&zero_module_inner)));
        let some_module = Rc::new(OptionModule::Some(Rc::clone(&module)));
        Self {
            d0 : ZeroHomomorphism::new(Rc::clone(&some_module), Rc::clone(&zero_module)),
            d1 : ZeroHomomorphism::new(Rc::clone(&zero_module), Rc::clone(&some_module)),
            other_ds : ZeroHomomorphism::new(Rc::clone(&zero_module), Rc::clone(&zero_module)),
            module : some_module,
            zero_module
        }
    }
}

impl<M : Module> ChainComplex<OptionModule<M>, ZeroHomomorphism<OptionModule<M>, OptionModule<M>>> for ChainComplexConcentratedInDegreeZero<M> {
    fn get_algebra(&self) -> Rc<dyn Algebra> {
        self.module.get_algebra()
    }

    fn get_module(&self, homological_degree : u32) -> Rc<OptionModule<M>> {
        if homological_degree == 0 {
            Rc::clone(&self.module)
        } else {
            Rc::clone(&self.zero_module)
        }
    }

    fn get_min_degree(&self) -> i32 {
        self.module.get_min_degree()
    }

    // fn get_max_degree(&self) -> i32 {
    //     self.ccdz.head().module.get_max_degree()
    // }

    fn get_differential(&self, homological_degree : u32) -> &ZeroHomomorphism<OptionModule<M>, OptionModule<M>> {
        match homological_degree {
            0 => &self.d0,
            1 => &self.d1,
            _ => &self.other_ds
        }
    }

    // fn get_quasi_inverse(&self, degree : i32, homological_degree : usize) -> QuasiInverse {
    //     let qi_pivots = self.image_deg_zero[degree].get();
    //     QuasiInverse {
            
    //     }
    // }
}
