// brute force
// function twoSum(nums: number[], target: number): number[] {
//     for(let i=0; i<=nums.length-2; i++) {
//         for(let j=i+1; j<=nums.length-1; j++) {
//             // console.log("combo :: ",i, "  ", j)
//             if(nums[i]+nums[j]===target) {
//                 return [i,j];
//             }
//          }
//     }
// };

// optimized
function twoSum(nums: number[], target: number): number[] {
    const hashTable = {}
    nums.forEach((num, index)=>{
        if(hashTable[num]===undefined) {
            hashTable[num] = [];
        }
        hashTable[num].push(index) 
    })
    nums.sort((a,b)=>a-b)
    const result = twoSumsFromSortedArray(nums, target)
    if(result[0]===result[1]) {
        return hashTable[result[0]]
    } else {
        return [hashTable[result[0]][0], hashTable[result[1]][0]]
    }
};


function twoSumsFromSortedArray(nums: number[], target: number): number[] {
   let i:number = 0
   let j:number = nums.length-1

   while(i<j) {
    if(nums[i]+nums[j]===target) {
        return [nums[i], nums[j]]
    } else if (nums[i]+nums[j]>target) {
        j=j-1
    } else if (nums[i]+nums[j]<target) {
        i=i+1
    }
   }
};