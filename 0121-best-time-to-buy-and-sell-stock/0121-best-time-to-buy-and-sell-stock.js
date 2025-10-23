/**
 * @param {number[]} prices
 * @return {number}
 */


var maxProfit = function(prices) {
    let minPrice = Infinity;
    let highestProfit = 0;

    
    for (let p of prices) {
        if(p<minPrice) minPrice=p;
        let profit = p-minPrice
        if(profit>highestProfit) highestProfit=profit
    }

    return highestProfit;
};