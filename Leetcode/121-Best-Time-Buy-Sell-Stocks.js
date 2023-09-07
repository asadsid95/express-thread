/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit = 0

    let buy = 0
    let sell = 1

    while(sell < prices.length){
        
            if(prices[sell] > prices[buy]){
                let diff = prices[sell] - prices[buy]
        
                profit = Math.max(profit, diff)
            } else {
                buy = sell
            }
            sell++

    // console.log(prices.length)
    }
    return profit
}

console.log(maxProfit([7,1,5,3,6,4]))