/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let index = binarySearch(letters, target)
    console.log(index)
    if(index>letters.length-1) {
        return letters[0]
    }

    return letters[index]
};

function binarySearch(letters, target) {
    let low=0, high=letters.length

    while(low<high) {
        const mid=(low+high)>>1
        if(letters[mid]<=target) low=mid+1;
        else high = mid
    }

    return low;
}