function countingSort(startRange, endRange, arr) {
    const frequencyCounter = new Array(endRange-startRange+1).fill(0)       
        
        for(let el of arr) {
            frequencyCounter[el-startRange]=frequencyCounter[el-startRange]+1  
        }
        
        let i=0;
        let counter=0;
        
        while(i<=arr.length-1) {
            while(frequencyCounter[counter]>0) {
                arr[i]=startRange+counter;
                frequencyCounter[counter]=frequencyCounter[counter]-1;
                i++;
            }
            counter++;
        }
        
        return arr;
}