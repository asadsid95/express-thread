/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    const table = new Array(amount+1).fill(Infinity)
    table[0] = 0

    // iterate over coins
    for(let coin of coins){
        
        // iterate over amounts in table
        for(let i =0; i<table.length; i++){

            //check if current coin is less than or equal to table's indices which are acting as amount
            if(coin <= i){

                // get potential amount -- UNSURE ABOUT THIS PART
                let idx = i - coin;
                let potentialAmt = table[idx] + 1

                table[i] = Math.min(potentialAmt, table[i])
            }
        }
    }

    return table[table.length-1] === Infinity ? -1 : table[table.length -1]
};

coinChange([1,2,5], 11)