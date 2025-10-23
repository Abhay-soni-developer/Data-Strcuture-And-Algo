/**
 * @param {number[]} prices
 * @return {number}
 */


var maxProfit = function(prices) {
    let best = 0;
    let current = 0;

    for(let i=0; i<prices.length-1; i++) {
        let diff = prices[i+1]-prices[i];
        current = Math.max(0, current+diff)
        best=Math.max(current, best)
    }

    return best;
};