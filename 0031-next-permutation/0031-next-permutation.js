function nextPermutation(arr) {
    let i = null;
    let j = null;

    for(let k=arr.length-2; k>=0; k--){
        if(arr[k]<arr[k+1]) {
            i=k;
            break;
        }
    }
    
    if(i===null) {
        arr.sort((a,b)=>a-b)
        return arr;
    }
    
    j=i+1;
    let smallest = arr[i+1];

    for(let k=arr.length-1; k>i; k--) {
        if(arr[k]>arr[i] && smallest>arr[k]) {
            j=k
            smallest=arr[k]
        }

        if(smallest===arr[j] && arr[j]===arr[k] && k>j) {
            j=k;
        }
    }

    const temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp 

    console.log(arr)

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
