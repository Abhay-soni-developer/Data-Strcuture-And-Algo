function diagonalPrime(nums: number[][]): number {
    const length = nums.length;
    let daigonalHighestValue = 0; 
    for(let i=0; i<length; i++) {
        if(daigonalHighestValue<nums[i][i]) daigonalHighestValue=nums[i][i]
        if(daigonalHighestValue<nums[i][length-1-i]) daigonalHighestValue=nums[i][length-1-i] 
    }

    const isPrime = sieveOfEratosthenes(daigonalHighestValue)
    let highestPrime = 0;


    for(let i=0; i<length; i++) {
       const t1 = nums[i][i]
        const t2 = nums[i][length-1-i]

        if(isPrime[t1]===0 && highestPrime<t1) {
            highestPrime=t1
        }

        if(isPrime[t2]===0 && highestPrime<t2) {
            highestPrime=t2
        }
    }


    return highestPrime
};


function sieveOfEratosthenes(n: number): Int8Array {
    const arr = new Int8Array(n+1)
    arr[0]=1
    arr[1]=1

    for(let i=2; i<=n; i++) {
        arr[i]=0;
    }
    
    const upto = Math.floor(Math.sqrt(n))

    for(let i=2; i<=upto; i++){
        if(arr[i]===1) continue;
        for(let k=i; i*k<=n; k++) {
            arr[i*k]=1;
        }
    }

    return arr;
}
