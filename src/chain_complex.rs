use crate::algebra::{Algebra, AlgebraAny};
use crate::module::{Module, ZeroModule, OptionModule};
use crate::module_homomorphism::{ModuleHomomorphism, ZeroHomomorphism};
use std::rc::Rc;

pub enum ChainComplexGrading {
    Homological,
    Cohomological
}

pub trait ChainComplex<M : Module, F : ModuleHomomorphism<M, M>> {
    fn prime(&self) -> u32 {
        self.get_algebra().prime()
    }
    fn get_algebra(&self) -> Rc<AlgebraAny>;
    fn get_min_degree(&self) -> i32;
    fn get_zero_module(&self) -> Rc<M>;
    fn get_module(&self, homological_degree : u32) -> Rc<M>;
    fn get_differential(&self, homological_degree : u32) -> Rc<F>;
    fn compute_through_bidegree(&self, homological_degree : u32, degree : i32);

    fn compute_homology(&self, homological_degree : u32, degree : i32){

    }
}

pub trait CochainComplex<M : Module, F : ModuleHomomorphism<M, M>> {
    fn prime(&self) -> u32 {
        self.get_algebra().prime()
    }
    fn get_algebra(&self) -> Rc<AlgebraAny>;
    fn get_min_degree(&self) -> i32;
    fn get_zero_module(&self) -> Rc<M>;
    fn get_module(&self, homological_degree : u32) -> Rc<M>;
    fn get_differential(&self, homological_degree : u32) -> Rc<F>;
    fn compute_through_bidegree(&self, homological_degree : u32, degree : i32);

    fn compute_cohomology(&self, homological_degree : u32, degree : i32){
        
    }
}


pub struct ChainComplexConcentratedInDegreeZero<M : Module> {
    module : Rc<OptionModule<M>>,
    zero_module : Rc<OptionModule<M>>,
    d0 : Rc<ZeroHomomorphism<OptionModule<M>, OptionModule<M>>>,
    d1 : Rc<ZeroHomomorphism<OptionModule<M>, OptionModule<M>>>,
    other_ds : Rc<ZeroHomomorphism<OptionModule<M>, OptionModule<M>>>
}

impl<M : Module> ChainComplexConcentratedInDegreeZero<M> {
    pub fn new(module : Rc<M>) -> Self {
        let zero_module_inner = Rc::new(ZeroModule::new(Rc::clone(&module.get_algebra())));
        let zero_module = Rc::new(OptionModule::Zero(Rc::clone(&zero_module_inner)));
        let some_module = Rc::new(OptionModule::Some(Rc::clone(&module)));
        Self {
            d0 : Rc::new(ZeroHomomorphism::new(Rc::clone(&some_module), Rc::clone(&zero_module))),
            d1 : Rc::new(ZeroHomomorphism::new(Rc::clone(&zero_module), Rc::clone(&some_module))),
            other_ds : Rc::new(ZeroHomomorphism::new(Rc::clone(&zero_module), Rc::clone(&zero_module))),
            module : some_module,
            zero_module
        }
    }
}

impl<M : Module> ChainComplex<OptionModule<M>, ZeroHomomorphism<OptionModule<M>, OptionModule<M>>> for ChainComplexConcentratedInDegreeZero<M> {
    fn get_algebra(&self) -> Rc<AlgebraAny> {
        self.module.get_algebra()
    }


    fn get_zero_module(&self) -> Rc<OptionModule<M>>{
        Rc::clone(&self.zero_module)
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

    fn get_differential(&self, homological_degree : u32) -> Rc<ZeroHomomorphism<OptionModule<M>, OptionModule<M>>> {
        match homological_degree {
            0 => Rc::clone(&self.d0),
            1 => Rc::clone(&self.d1),
            _ => Rc::clone(&self.other_ds)
        }
    }

    fn compute_through_bidegree(&self, homological_degree : u32, degree : i32) {
        if homological_degree == 0 {
            self.module.compute_basis(degree);
        }
    }
}
