function diagonalPrime(nums: number[][]): number {
    const length = nums.length;
    let daigonalHighestValue = 0; 
    const daigonal=[]
    for(let i=0; i<length; i++) {
        daigonal.push(nums[i][i])
        if(i!==length-1-i) daigonal.push(nums[i][length-1-i])
        if(daigonalHighestValue<nums[i][i]) daigonalHighestValue=nums[i][i]
        if(daigonalHighestValue<nums[i][length-1-i]) daigonalHighestValue=nums[i][length-1-i] 
    }

    console.log(daigonal)
    const isPrime = sieveOfEratosthenes(daigonalHighestValue)
    let highestPrime = 0;
    
    console.log(isPrime)

    daigonal.forEach(num=>{
        if(isPrime[num]===0 && highestPrime<num) {
            highestPrime=num
        }
    })

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
