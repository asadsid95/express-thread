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


// function
// setting in tsconfig to prevent unused parameters; another setting to prevent implicit returns; another setting to prevent unused local 

function calculateTax(income: number, taxYear?): number {

    let taxCredit = 2_000

    if (income < 30_000) {
        return income * 1.1
    }
    return income * 1.3
}

calculateTax(4000)

// object

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date)
    }

}

// advanced types: type aliass, unions and intersections, type narrowing, nullable types, unknown and never types
// type alias
type Employee = {
    // define properties and methods
    readonly id: number,
    name: string,
    retire: (date: Date) => void

}

let employee1: Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date)
    }

}

// Unions and intersections 
function kgToLbs(weight: number | string): number {

    // can accept number or string

    // use narrow
    if (typeof weight === 'number') {
        return weight * 2.3
    } else {
        return parseInt(weight) * 2.3
    }

}