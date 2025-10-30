

// using local min and max
function maximumProfit(prices) {
    let maxProfit = 0;
    let currentBuy = 0;
    for (let i = 0; i <= prices.length - 1; i++) {

        if (currentBuy === 0 && prices[i] < prices[i + 1]) {
            currentBuy = prices[i]
            while (prices[i] < prices[i + 1] && prices.length - 1 > i) {
                i++
            }
            if (i <= prices.length - 1) {
                console.log(i)
                maxProfit += prices[i] - currentBuy;
                currentBuy = 0;
                continue;
            }
        }
    }

    return maxProfit;
}


// better approach , taking the idea into account , that the order is in increasing order 
// instead of finding local max and min , just add the consecutive increasing order differences
// that will amount the same difference between local min and max


function maximumProfit1(prices) {
    let maxProfit=0;

    for(let i=1; i<prices.length; i++) {
        if(prices[i-1]<prices[i]) {
            maxProfit+=prices[i]-prices[i-1]
        }
    }

    return maxProfit;
}

console.log(maximumProfit1([100, 180, 260, 310, 40, 535, 695]))

