function diagonalPrime(nums: number[][]): number {
    const length = nums.length;
    let daigonalHighestValue = 0; 
    
    for(let i=0; i<length; i++) {
        if(nums[i][i]%2!==0 && daigonalHighestValue<nums[i][i]) daigonalHighestValue=nums[i][i]
        if(nums[i][length-1-i]%2!==0 && daigonalHighestValue<nums[i][length-1-i]) daigonalHighestValue=nums[i][length-1-i] 
    }

    const isPrime = sieveOfEratosthenes(daigonalHighestValue)
    let highestPrime = 0;

    console.log(isPrime)

    for(let i=0; i<length; i++) {
       const t1 = nums[i][i]
        const t2 = nums[i][length-1-i]

        if(isPrime[t1]===1 && highestPrime<t1) {
            highestPrime=t1
        }

        if(isPrime[t2]===1 && highestPrime<t2) {
            highestPrime=t2
        }
    }


    return highestPrime
};


function sieveOfEratosthenes(n: number): Uint8Array {
    const arr = new Uint8Array(n+1).fill(1,2)
    
    arr[0]=0
    arr[1]=0
    
    const upto = Math.floor(Math.sqrt(n))

    for(let i=2; i<=upto; i++){
        if(arr[i]===0) continue;
        for(let k=i; i*k<=n; k++) {
            arr[i*k]=0;
        }
    }

    return arr;
}
