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


// import * as Module from './builder_pattern.js'

// var some_building_obj = new Module.Building()

// console.log(some_building_obj)




const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

// console.log("Started async requests that are NOT dependent on each other …");

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3]).then(res => {

    // console.log(res)

    res.forEach(res1 =>
        res1.json().then(res => {
            // console.log('ehllo') 
        }))
}).catch(err => console.log(err))


// fetchPromise.then((response) =>

//     // if (!response.ok) {
//     //     catch (console.log("stop~"))
//     // }

//     // console.log(`Received response: ${response.status}`);
//     // console.log(response.json())
//     response.json()
// ).then(res => console.log(res)).catch(error => { console.log('error: ' + error) })
//     ;

async function async_func() {

    const fetchPromise11 = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );

    const fetchPromise22 = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );

    const fetchPromise33 = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );

    console.log(fetchPromise11.json())

}

// async_func()

// Sample Express.js middleware function
function loggerMiddleware(req, res, next) {
    console.log(`Received ${req.method} request for ${req.url}`);
    next(); // Call next() to pass control to the next middleware or route handler
}

// Another sample middleware function to authenticate the request
function authenticationMiddleware(req, res, next) {
    // Assume we have some authentication logic here
    const isAuthenticated = false;
    if (isAuthenticated) {
        next(); // User is authenticated, pass control to the next middleware
    } else {
        res.status(401).json({ error: 'Unauthorized' }); // User is not authenticated, return an error response
    }
}

// Using the middleware in an Express.js app
// const express = require('express');
// const app = express();

// // Registering the middleware functions for all routes
// app.use(loggerMiddleware);
// app.use(authenticationMiddleware);

// // Route handler for the root endpoint
// app.get('/', (req, res) => {
//     res.send('Hello, world!');
// });

// // Route handler for another endpoint
// app.get('/api/data', (req, res) => {
//     res.json({ message: 'Data retrieved successfully!' });
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });

// console.log(some_anon_func)

const some_anon_func = (data) => {

    console.log(data)

    return console.log('some_anon_func')

}

// console.log(some_anon_func('some data'))

const other_anon_function = function (data) {

    console.log(`data for ${data}`)
    return console.log('other_anon_function')

}

// console.log(other_anon_function())

const named_function_expression = function sum(a, b) {
    console.log(a + b)

}

named_function_expression(2, 3)

function lets_try_this(data) {
    this.name = data

    console.log(this.name)

}

lets_try_this('hello')