
var TimeMap = function() {
    this.db = new Map()
};

TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.db.has(key)) {
        this.db.set(key, [])
    }

    const arr = this.db.get(key)
    arr.push([timestamp, value])
};

TimeMap.prototype.get = function(key, timestamp) {
    if(this.db.has(key)) {
        const arr = this.db.get(key);
        const target = timestamp;
        let [low, high] = [0, arr.length]

        while(low<high) {
            const mid = Math.floor((high+low)/2)

            if(arr[mid][0]>target) high = mid;
            else low = mid+1;
        }

        if(low===0) {
            return ""
        }

        return arr[low-1][1]
    }
    return ""
};