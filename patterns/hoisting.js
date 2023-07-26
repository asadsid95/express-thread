// console.log(foo)
// console.log(hello)

{
    let foo = 2
    var bar = 3
    const hello = 'hello'
    // console.log(bar)
}

function some_func() {
    console.log('hello this is from hoisting module')
    return 0
}
function some_func1() {
    console.log('hello this is ALSO from hoisting module')
    return 0
}

export { some_func, some_func1 }
// module.exports = { some_func, some_func1 }