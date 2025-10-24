class Solution {
    getMinMax(arr) {
        if(arr.length===0) return [];
        if(arr.length===1) return [arr[0], arr[0]];
        
        let min=arr[0]
        let max=arr[0]
        let pointer = 1;
        
        if((arr.length&1)===0) {
            if(arr[0]<arr[1]) {
                min=arr[0]
                max=arr[1]
            } else {
                min=arr[1]
                max=arr[0]
            }
            pointer=2
        }

        
        for(let i=pointer; i<arr.length-1; i=i+2) {
            
            if(arr[i]<arr[i+1]) {
                if(min>arr[i]) {
                    min=arr[i]
                }
                if(max<arr[i+1]) {
                    max=arr[i+1]
                }
            } else {
                if(min>arr[i+1]) {
                    min=arr[i+1]
                }
                if(max<arr[i]) {
                    max=arr[i]
                }  
            }
        }
        
        return [min, max]
    }
}
