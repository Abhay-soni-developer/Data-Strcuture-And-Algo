// using Sieve of Eratosthenes
function countPrimes(n: number): number  {
    if(n<=2) return 0

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
