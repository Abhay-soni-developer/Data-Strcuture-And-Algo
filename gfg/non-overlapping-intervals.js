// https://www.geeksforgeeks.org/batch/gfg-160-problems/track/sorting-gfg-160/problem/non-overlapping-intervals

class Solution {
    minRemoval(intervals) {
        const events = []
        let count = 0;
        let set = new Set()
        const saveEvents = []
    
        
        for(let interval of intervals) {
            events.push([interval[0], 1, count])
            events.push([interval[1], -1, count])
            count++;
        }
        
        events.sort((a,b)=>{
            if(a[0]===b[0]) return a[1]-b[1]
            return a[0]-b[0]
        })
        
        
        for(let event of events) {
            if(event[1]===1) {
                set.add(event[2])
            } else if (event[1]===-1 && set.has(event[2])) {
                saveEvents.push(event[2])
                set = new Set()
            }
        }
        
        return intervals.length-saveEvents.length;
    }
}



// greedy but simmpler technique

class Solution {
    minRemoval(intervals) {
        if(intervals.length===0) return 0
        
        intervals.sort((a,b)=>{
            if(a[1]===b[1]) return a[0]-b[0]
            return a[1]-b[1]
        })
        
        let count = 1;
        let lastEnd = intervals[0][1];
        
        for(let i=1; i<intervals.length; i++) {
            if(intervals[i][0]>=lastEnd) {
                lastEnd=intervals[i][1]
                count++;
            }
        }
        
        return intervals.length-count;
    }
}
