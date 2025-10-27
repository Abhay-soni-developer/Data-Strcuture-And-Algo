class Solution {
    // heap would be the best approach
    getSecondLargest(arr) {
        let [highest, secondHighest] = [-Infinity, -Infinity]
        for(let p of arr) {
            if(highest<p) {
                [highest, secondHighest] = [p, highest]
            } else if(secondHighest<p && p<highest) {
                secondHighest=p
            }
        }    
        
        if(secondHighest===-Infinity) return -1;
        return secondHighest;
    }
}