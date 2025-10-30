// brute force
function generateNextPermutation(arr) {
    const temp = [...arr].sort()
    const permutations = [];
    generateAllPermutation(temp, [], permutations)

    const key = arr.join(",");
    const index = permutations.findIndex(el=>el===key);
    if(index===permutations.length-1) {
        return permutations[0]
    }
    return permutations[index+1]
}


function generateAllPermutation(arr, result=[], resultSet=[]) {
    if(result.length===arr.length) {
        resultSet.push([...result].join(","))
        return;
    }
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i]===null) continue;
        result.push(arr[i])
        arr[i]=null;
        generateAllPermutation(arr, result, resultSet)
        arr[i]=result.pop()
    }
}



// When you list permutations in sorted order (lexicographic order), going from one to the next is like going from 1234 → 1243 → 1324 → ....

// The algorithm to get the “next” one is:
// 	1.	Walk from right to left and find the first “pivot” where the sequence stops being non-increasing.
// 	•	More precisely: find the first index i from the right such that arr[i] < arr[i+1].
// 	•	This i is the position we need to modify.
// 	•	If you can’t find such an i, that means the array is in descending order → it’s already the last permutation.
// 	2.	From the right side again, find the smallest element that is greater than arr[i]. Call its index j.
// 	3.	Swap arr[i] and arr[j].
// 	4.	Reverse the suffix from i+1 to the end.
// 	•	Why reverse? Because the suffix was descending before the swap. After the swap, to get the smallest possible suffix (so the overall permutation is the closest larger one), we sort that suffix ascending. Since it was descending, “reverse” = “sort ascending in O(n)”.

// example


// List of permutations around it goes:
// [1,2,5,4,3]
// [1,3,2,4,5]? No.
// Correct next is [1,3,2,4,5]? Also no. Let’s do it properly.

// Step 1. Find pivot

// Scan from the right:
// 	•	3 > 4? no
// 	•	4 > 5? no
// 	•	5 > 2? yes → pivot i = 1 (value = 2)

// So pivot is 2 at index 1.

// Step 2. Find element just larger than 2 on the right

// Right side = [5, 4, 3]
// Smallest element > 2 is 3 at index 4.

// Swap them:
// [1, 3, 5, 4, 2]

// Step 3. Reverse suffix after pivot index 1

// Current suffix after index 1: [5, 4, 2]
// Reverse it → [2, 4, 5]

// Result:
// [1, 3, 2, 4, 5] ✅
// That actually is the next permutation.

// So the algorithm works.

// ⸻


function generateOnlyNextPermuatation(arr) {
    let i = null;
    let j = null;

    for(let k=arr.length-2; k>=0; k--){
        if(arr[k]<arr[k+1]) {
            i=k;
            break;
        }
    }
    
    if(i===null) {
        reverse(arr, 0, arr.length-1)
        return arr;
    }
    
    j=arr.length-1

    while(arr[i]>=arr[j]) {
        j--;
    }

    const temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp 

    reverse(arr, i+1, arr.length-1)

    return arr;

}


function reverse(arr, start, end) {
    while(start<end) {
        [arr[start],arr[end]]=[arr[end],arr[start]]
        start++;
        end--;
    }
}

console.log(generateOnlyNextPermuatation([2, 4, 1, 7, 5, 0]))

// generateNextPermutation([1,2,3,4,5])
