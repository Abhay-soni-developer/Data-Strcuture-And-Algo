function diagonalPrime(nums: number[][]): number {
    const length = nums.length;
    let daigonalHighestValue = 0; 
    const daigonal=[]
    for(let i=0; i<length; i++) {
        daigonal.push(nums[i][i])
        daigonal.push(nums[i][length-1-i])
        if(daigonalHighestValue<nums[i][i]) daigonalHighestValue=nums[i][i]
        if(daigonalHighestValue<nums[i][length-1-i]) daigonalHighestValue=nums[i][length-i-1] 
        }

    const isPrime = sieveOfEratosthenes(daigonalHighestValue)
    let highestPrime = 0;
    
    daigonal.forEach(num=>{
        if(isPrime[num] && highestPrime<num) {
            highestPrime=num
        }
    })

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
