function diagonalPrime(nums: number[][]): number {
    const length = nums.length;
    let daigonalHighestValue = 0; 
    const mainDaigonal = []
    const antiDaigonal = []
    for(let i=0; i<length; i++) {
        mainDaigonal.push(nums[i][i])
        antiDaigonal.push(nums[i][length-1-i])
        if(nums[i][i]>=nums[i][length-1-i]) {
            if(daigonalHighestValue<nums[i][i]) {
                daigonalHighestValue=nums[i][i]
            }
        } else {
            if(daigonalHighestValue<nums[i][length-1-i]) {
                daigonalHighestValue=nums[i][length-1-i]
            }
        }
    }
    const isPrime = sieveOfEratosthenes(daigonalHighestValue)
    console.log(isPrime)
    let highestPrime = null;
    
    mainDaigonal.forEach(num=>{
        if(isPrime[num]) {
            highestPrime=num
        }
    })

    antiDaigonal.forEach(num=>{
        if(isPrime[num]) {
            highestPrime=num
        }
    })

    if(highestPrime===null) return 0;
    return highestPrime
};


function sieveOfEratosthenes(n: number): {} {
    const isPrime = {}
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
        if(arr[i]) isPrime[i]=i
    } 

    return isPrime;
}
