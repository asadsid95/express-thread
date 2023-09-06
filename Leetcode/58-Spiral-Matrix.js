/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  
    // variables to keep track of current row and column boundaries
    let left = 0,
        top = 0,
        right = matrix[0].length - 1,
        bottom = matrix.length - 1

    // empty array to contain all elements as they are traversed in spiral order
    let result = []

    // initial direction to start off
    let direction = 'right'

    while ( left <= right && top <= bottom) { 
    
        if(direction === 'right'){

            // instead of i = 0, initial it with left so that it adapts as spiral closes into the center
            for(let i = left; i<=right; i++){
                // for elements in the same row but different columns
                result.push(matrix[top][i])
            }
            console.log('right fired')
            top++
        } else if (direction === 'down') {
            for (let i = top; i<=bottom; i++) {
                result.push(matrix[i][right])
            }
            console.log('down fired')

            right--
        } else if (direction==='left') {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i])
            }
            console.log('left fired')

            bottom--
        } else if (direction==='up'){
            for(i=bottom; i >= top; i--) {
                result.push(matrix[i][left])
            }
            console.log('up fired')

            left++
        }
        
    
            direction = (direction==='right') ? 'down' : 
                            (direction==='down') ? 'left' : 
                            (direction==='left') ? 'up' :
                            'right'

    }

    return result
};

spiralOrder(
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
)