/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


// helper function

const setZeros = (r,c, matrix) => {

    // make two passes (one for keeping row fixed and another for keeping column fixed)
    for (let i=0;  i < matrix.length; i++) {
        matrix[i][c] = 0
    }

    for(let i=0; i < matrix[0].length; i++) {
        matrix[r][i] = 0
    }

}


var setZeroes = function(matrix) {
    
    // temp array
    const zerosA = [];

    // iterate over matrix to find location of zeroes and store in zerosA
    for(let r=0; r < matrix.length; r++) {

        // iterate over specific row's columns
        for (let c=0; c < matrix[0].length; c++) {
            if(matrix[r][c] === 0) zerosA.push([r,c])
        }
    }
    
    // iterate over zeroA and set zeros
    for(let address of zerosA) {
        let row = address[0]
        let col = address[1]
        
        setZeros( row, col, matrix)
    }

};