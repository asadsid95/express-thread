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
var user = [1, 'ASAD'];
var mySize = "m" /* Size.Medium */;
console.log(mySize);
// function
// setting in tsconfig to prevent unused parameters; another setting to prevent implicit returns; another setting to prevent unused local 
function calculateTax(income, taxYear) {
    var taxCredit = 2000;
    if (income < 30000) {
        return income * 1.1;
    }
    return income * 1.3;
}
calculateTax(4000);
