// this annotates variable age with number type
// annotation not required for 
// let sales: number = 202_202_202
// let course: string = 'TypeScript course'

// let is_published: boolean = true

// gives compilation error
// let number: number[] = [1, 2, '3', true]

// let number: number[] = []

// number.forEach(n => n.)


// tuple - fixed length of array where each element has a specific type; create it by specifying types of each element of the array
// specifying each element type; any extra element will give compilation error
let user: [number, string] = [1, 'ASAD']
// tuples are good for array length of 2 i.e. k/v pair


// enums - list of related constants
// adding const to enum generates more concise of JS
const enum Size { Small = 's', Medium = 'm', Large = 'lg' }
let mySize: Size = Size.Medium
console.log(mySize)