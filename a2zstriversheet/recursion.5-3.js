// summation using recursion
function sum(n=0) {
    if(n===0) return 0;
    return n + sum(n-1)
}


console.log(sum(5))