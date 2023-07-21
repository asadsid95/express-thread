class Class1 {
    constructor(prop1) {
        this.prop1 = prop1
    }
}
class Class2 {
    constructor(prop1) {
        this.prop1 = prop1
    }
}

// typical way of creating objects
obj1 = new Class1('prop1')
obj2 = new Class2('prop1')

// however instead of calling object creation, we create a method 
// that will call the 2 classes to create object

function factory_method(prop1_class1, prop1_class2) {

    return [new Class1(prop1_class1), new Class1(prop1_class2)]

};

module.export = factory_method;
// factory_method('prop for class1', 'prop for class2')