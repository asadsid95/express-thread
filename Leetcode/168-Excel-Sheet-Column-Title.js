
function convertToTitle(columnNumber){
    
    let result=''
    while (columnNumber > 0){
        const offset  = (columnNumber - 1) % 26
        result= String.fromCharCode(65 + offset) + result

        columnNumber = Math.floor((columnNumber - 1) / 26)
    }

    return result
}

console.log(convertToTitle(698))

let str = 'hello'

let addtostr = 'world' + str

console.log(addtostr)