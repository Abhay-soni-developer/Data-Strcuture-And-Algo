function numPrimeArrangements(n) {
    if(n<=1) return n

    const MOD = 1_000_000_007n;
    const totalPrimeNumber = sieveOfEratosthenes(n)
    return Number(factorial(totalPrimeNumber, MOD) * factorial(n-totalPrimeNumber, MOD)  % MOD)

};

function factorial(n, mod) {
    if(n===0) return 1;
    let result = 1n;
    let a = BigInt(n);
    for(let i=a; i>=2; i--) {
        result = result * i % mod;
    }
    return result;
}

function sieveOfEratosthenes(n) {
    const isPrime = new Array()
    const arr = new Array(n+1)
    
    for(let i=0; i<=n; i++) {
        arr[i]=i;
    }
    
    const upto = Math.floor(Math.sqrt(n))

    for(let i=2; i<=upto; i++){
        if(!arr[i]) continue;
        for(let k=i; i*k<=n; k++) {
            arr[i*k]=false;
        }
    }

    for(let i=2; i<=n; i++) {
        if(arr[i]) isPrime.push(i)
    } 

    return isPrime.length;
}