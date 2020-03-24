use crate::prime::ValidPrime;
use crate::vector::{FpVector, FpVectorT};
use super::matrix::Matrix;

/// A subspace of a vector space.
/// # Fields
///  * `matrix` - A matrix in reduced row echelon, whose number of columns is the dimension of the
///  ambient space and each row is a basis vector of the subspace.
///  * `column_to_pivot_row` - If the column is a pivot column, the entry is the row the pivot
///  corresponds to. If the column is not a pivot column, this is some negative number &mdash; not
///  necessarily -1!
#[derive(Debug, Clone)]
pub struct Subspace {
    pub matrix : Matrix,
    pub column_to_pivot_row : Vec<isize>
}

impl Subspace {
    pub fn new(p : ValidPrime, rows : usize, columns : usize) -> Self {
        Self {
            matrix : Matrix::new(p, rows, columns),
            column_to_pivot_row : vec![-1; columns]
        }
    }

    /// Given a chain of subspaces `subspace` < `space` < k^`ambient_dimension`, compute the
    /// subquotient `space`/`subspace`. The answer is expressed as a list of basis vectors of
    /// `space` whose image in `space`/`subspace` forms a basis, and a basis vector of `space` is
    /// described by its index in the list of basis vectors of `space` (not the ambient space).
    ///
    /// # Arguments
    ///  * `space` - If this is None, it is the whole space k^`ambient_dimension`
    ///  * `subspace` - If this is None, it is empty
    pub fn subquotient(space : Option<&Subspace>, subspace : Option<&Subspace>, ambient_dimension : usize) -> Vec<usize> {
        match subspace {
            None => {
                if let Some(sp) = space {
                    sp.column_to_pivot_row.iter().filter( |i| **i >= 0).map(|i| *i as usize).collect()
                } else {
                    (0..ambient_dimension).collect()
                }
            },
            Some(subsp) => {
                if let Some(sp) = space {
                    sp.column_to_pivot_row.iter().zip(subsp.column_to_pivot_row.iter())
                      .filter(|(x,y)| {
                          debug_assert!(**x >= 0 || **y < 0);
                          **x >= 0 && **y < 0
                        }).map(|(x,_)| *x as usize).collect()
                } else {
                    (0..ambient_dimension).filter( |i| subsp.column_to_pivot_row[*i] < 0).collect()
                }
            }
        }
    }

    pub fn entire_space(p : ValidPrime, dim : usize) -> Self {
        let mut result = Self::new(p, dim, dim);
        for i in 0..dim {
            result.matrix[i].set_entry(i, 1);
            result.column_to_pivot_row[i] = i as isize;
        }
        result
    }

    /// This adds a vector to the subspace. This function assumes that the last row of the
    /// matrix is zero, i.e. the dimension of the current subspace is strictly less than the number
    /// of rows. This can be achieved by setting the number of rows to be the dimension plus one
    /// when creating the subspace.
    pub fn add_vector(&mut self, row : &FpVector) {
        let last_row = self.matrix.rows() - 1;
        self.matrix[last_row].assign(row);
        self.matrix.row_reduce(&mut self.column_to_pivot_row);
    }

    pub fn add_vectors(&mut self, mut rows : impl std::iter::Iterator<Item=FpVector>) {
        let num_rows = self.matrix.rows();
        'outer: loop {
            let mut first_row = num_rows;
            for i in 0 .. num_rows {
                if self.matrix[i].is_zero() {
                    first_row = i;
                    break;
                }
            }
            if first_row == num_rows {
                return;
            }

            for i in first_row .. num_rows {
                if let Some(v) = rows.next() {
                    assert_eq!(v.dimension(), self.matrix.columns());
                    self.matrix[i] = v;
                } else {
                    break 'outer;
                }
            }
            self.row_reduce();
        }
        self.row_reduce();
    }

    pub fn add_basis_elements(&mut self, mut rows : impl std::iter::Iterator<Item=usize>) {
        let num_rows = self.matrix.rows();
        'outer: loop {
            let mut first_row = num_rows;
            for i in 0 .. num_rows {
                if self.matrix[i].is_zero() {
                    first_row = i;
                    break;
                }
            }
            if first_row == num_rows {
                return;
            }

            for i in first_row .. num_rows {
                if let Some(v) = rows.next() {
                    self.matrix[i].set_entry(v, 1);
                } else {
                    break 'outer;
                }
            }
            self.row_reduce();
        }
        self.row_reduce();
    }

    /// Projects a vector to a complement of the subspace. The complement is the set of vectors
    /// that have a 0 in every column where there is a pivot in `matrix`
    pub fn reduce(&self, vector : &mut FpVector){
        assert_eq!(vector.dimension(), self.matrix.columns());
        let p = self.matrix.prime();
        let mut row = 0;
        let columns = vector.dimension();
        for i in 0 .. columns {
            if self.column_to_pivot_row[i] < 0 {
                continue;
            }
            let c = vector.entry(i);
            if c != 0 {
                vector.add(&self.matrix[row], *p - c);
            }
            row += 1;
        }
    }

    /// A version of `reduce` that doesn't require the vectors to be aligned.
    pub fn shift_reduce(&self, vector : &mut FpVector){
        let p = self.matrix.prime();
        let mut row = 0;
        let columns = vector.dimension();
        for i in 0 .. columns {
            if self.column_to_pivot_row[i] < 0 {
                continue;
            }
            let c = vector.entry(i);
            if c != 0 {
                vector.shift_add(&self.matrix[row], *p - c);
            }
            row += 1;
        }
    }

    pub fn row_reduce(&mut self) {
        self.matrix.row_reduce(&mut self.column_to_pivot_row);
    }

    pub fn contains(&self, vector : &FpVector) -> bool {
        let mut vector = vector.clone();
        self.reduce(&mut vector);
        vector.is_zero()
    }

    pub fn dimension(&self) -> usize {
        self.column_to_pivot_row.iter().rev()
            .find(|&&i| i >= 0)
            .map(|&i| i as usize + 1)
            .unwrap_or(0)
    }

    /// Returns a basis of the subspace.
    pub fn basis(&self) -> &[FpVector] {
        &self.matrix.vectors[..self.dimension()]
    }

    /// Sets the subspace to be the zero subspace.
    pub fn set_to_zero(&mut self) {
        self.matrix.set_to_zero();
        for x in &mut self.column_to_pivot_row {
            *x = -1;
        }
    }

    /// Sets the subspace to be the entire subspace.
    pub fn set_to_entire(&mut self) {
        self.matrix.set_to_zero();
        for i in 0..self.matrix.columns() {
            self.matrix[i].set_entry(i, 1);
            self.column_to_pivot_row[i] = i as isize;
        }
    }
}
