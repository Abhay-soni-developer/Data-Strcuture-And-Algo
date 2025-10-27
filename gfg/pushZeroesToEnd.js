function pushZerosToEnd(arr) {
        let pos = 0;
        
        for(let i=0; i<=arr.length-1; i++) {
            if(arr[i]!==0) {
                [arr[pos], arr[i]]=[arr[i], arr[pos]]
                pos++;
            }
        }
        
        return arr;
    }

let arr = [1, 2, 0, 4, 3, 0, 5, 0, 4, 5 , 6, 1, 0]

pushZerosToEnd(arr)

console.log(arr)

