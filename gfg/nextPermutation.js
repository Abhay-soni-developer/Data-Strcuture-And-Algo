function generateNextPermutation(arr) {
    const temp = [...arr].sort()
    const permutations = [];
    generateAllPermutation(temp, [], permutations)


    const key = arr.join(",");
    const index = permutations.findIndex(el=>el===key);
    if(index===permutations.length-1) {
        console.log(permutations[0])
        return
    }
    console.log(permutations[index+1])
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

generateNextPermutation([2, 4, 1, 7, 5, 0])
