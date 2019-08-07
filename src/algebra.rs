use crate::fp_vector::FpVector;
use serde_json::value::Value;

/// A graded algebra over F_p, finite dimensional in each degree, equipped with a choice of ordered
/// basis in each dimension. Basis elements of the algebra are referred to by their degree and
/// index, and general elements are referred to by the degree and an `FpVector` listing the
/// coefficients of the element in terms of the basis.
///
/// Since the graded algebra is often infinite dimensional, we cannot construct a complete
/// description of the algebra. Instead, we use the function `compute_basis(degree)`. When called,
/// the algebra should compute relevant data to be able to perform calculations up to degree
/// `degree`. It is the responsibility of users to ensure `compute_degree(degree)` is called before
/// calling other functions with the `degree` parameter.
pub trait Algebra {
    /// Returns the prime the algebra is over.
    fn get_prime(&self) -> u32;
    fn get_name(&self) -> &str;
    // FiltrationOneProductList *product_list; // This determines which indecomposibles have lines drawn for them.
// Methods:

    /// Computes the list of basis elements up to degree `degree`. This should include any
    /// other preparation needed to evaluate all the other functions that involve a degree
    /// parameter. One should be able to call compute_basis multiple times, and there should be
    /// little overhead when calling `compute_basis(degree)` multiple times with the same `degree`.
    fn compute_basis(&self, degree : i32);

    /// Gets the dimension of the algebra in degree `degree`.
    fn get_dimension(&self, degree : i32, excess : i32) -> usize;

    /// Computes the product `r * s` of the two basis elements, and *adds* the result to `result`.
    fn multiply_basis_elements(&self, result : &mut FpVector, coeff : u32, r_degree : i32, r_idx : usize, s_degree: i32, s_idx : usize, excess : i32);

    /// A filtration one element in Ext(k, k) is the same as an indecomposable element of the
    /// algebra.  This function returns a list of such elements in the format `(name, degree,
    /// index)` for whom we want to compute products with in the resolutions.
    fn get_filtration_one_products(&self) -> &Vec<(String, i32, usize)>;

    /// Each algebra should come with a list of default filtration one products. When called, this
    /// function sets the list of filtration one products to the default list.
    fn set_default_filtration_one_products(&mut self);

    /// Converts a JSON object into a basis element. The way basis elements are represented by JSON
    /// objects is to be specified by the algebra itself, and will be used by module
    /// specifications.
    fn json_to_basis(&self, json : Value) -> (i32, usize);

    /// Converts a basis element into a string for display.
    fn basis_element_to_string(&self, degree : i32, idx : usize) -> String;

    /// Converts an element into a string for display.
    fn element_to_string(&self, degree : i32, element : FpVector) -> String {
        let mut result = String::new();
        let mut zero = true;
        for (idx, value) in element.iter().enumerate() {
            if value == 0 {
                continue;
            }
            zero = false;
            if value != 1 {
                result.push_str(&format!("{} * ", value));
            }
            let b = self.basis_element_to_string(degree, idx);
            result.push_str(&format!("{} + ", b));
        }
        if zero {
            result.push_str("0");
        } else {
            // Remove trailing " + "
            result.pop();
            result.pop();
            result.pop();
        }
        return result;
    }    
}
