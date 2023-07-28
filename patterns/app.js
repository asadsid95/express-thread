// const factory_method = require("./factory_pattern")

// const objects = factory_method('prop for class1', 'prop for class2')

// console.log(objects)

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
// obj1 = new Class1('prop1')
// obj2 = new Class2('prop1')

// [WRONG] however instead of calling object creation, we create a method 
// that will call the 2 classes to create object

// function factory_method(prop1_class1, prop1_class2) {

//     return [new Class1(prop1_class1), new Class1(prop1_class2)]

// };



// const objects = factory_method('prop for class1', 'prop for class2')

// objects.forEach(object => {
//     console.log(object.prop1)
// })


var age = 222 // null is falsy, 'some string' is truthy, 0 is falsy 
// if (age === true) { console.log('print bc its truthy') }
// else { console.log('its falsy') }

var v = ''

// v == true ? console.log('true') : console.log('false')

// v === false ? console.log('true') : console.log('false')


function testTruthy(value) {
    if (value === true) {
        console.log(value, "is truthy.");
    } else if (value === false) {
        console.log(value, "is falsy.");
    } else {
        console.log("neither")
    }
}

// console.log(typeof ('false'))
// console.log(2 == 2)

// testTruthy(true);          // Output: true is truthy.
// testTruthy("Hello");       // Output: Hello is truthy.
// testTruthy(false);            // Output: 42 is truthy.
// testTruthy([1, 2, 3]);     // Output: 1,2,3 is truthy.
// testTruthy({ name: "John" });//

var some_object = {
    "name": "asad"
}
// console.log(typeof (some_object))

//-------------

// import * as Module from './hoisting.js'
// This is ESM and thus requires tweaking of package.json

// const SomeFuncFamily = require('./hoisting')

// console.log(Module.some_func())
// console.log(Module.some_func1())


import * as Module from './builder_pattern.js'

var some_building_obj = new Module.Building()

console.log(some_building_obj)