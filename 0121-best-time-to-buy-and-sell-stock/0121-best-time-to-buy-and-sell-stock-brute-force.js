/**
 * @param {number[]} prices
 * @return {number}
 */

// BRUTE-FORCE-APPROAC
var maxProfit = function(prices) {
    let highestProfit = 0;


    for(let i=0; i<prices.length-1; i++) {
        for(let j=i+1; j<=prices.length-1; j++) {
            if(prices[j]-prices[i]>highestProfit) {
                highestProfit=prices[j]-prices[i]
            }
        }
    }

    return highestProfit;
};
