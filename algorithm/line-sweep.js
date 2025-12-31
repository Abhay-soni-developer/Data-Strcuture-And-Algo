class Solution {
    // line-sweep inspired 
    mergeOverlap(arr) {
        arr.sort((a,b)=>a[0]-b[0])
        const events = []
        let ongoingIntervals = 0;
        let mergedIntervals = []
        
        for(let interval of arr) {
            events.push([interval[0], 1])
            events.push([interval[1], -1])
        }
        
        events.sort((a,b)=>{
            if(a[0]===b[0]) return b[1]-a[1]
            return a[0]-b[0];
        })
        
        let interval = []
        
        for(let i=0; i<events.length; i++) {
            
            if(ongoingIntervals===0) {
               interval.push(events[i][0]) 
            }
            
            ongoingIntervals=ongoingIntervals+events[i][1]
            
            if(ongoingIntervals===0) {
                interval.push(events[i][0])
            }
            
            if(interval.length===2) {
                mergedIntervals.push(interval)
                interval=[]
            }
        }
        
        return mergedIntervals;
    }
}