// console.log(foo)
// console.log(hello)

{
    let foo = 2
    var bar = 3
    const hello = 'hello'
    console.log(bar)
}

function some_func() {
    console.log('hello this is from hoisting module')
}

// export { some_func }
module.exports = { some_func }