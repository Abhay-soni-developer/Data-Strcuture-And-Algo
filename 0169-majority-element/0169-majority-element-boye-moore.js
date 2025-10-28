/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return findMajorityByBoyerMoore(nums, 2)[0]

};



function findMajorityByBoyerMoore(arr, k) {
    const els = new Array(k-1).fill(null);
    const counts = new Array(k-1).fill(0);

    for(let el of arr) {
        let placed = false;

        // increment count if element already exist in els
        for (let i=0; i<k-1; i++) {
            if(els[i]===el && counts[i]>0) {
                counts[i]++;
                placed=true;
                break;
            }
        }

        if (placed) continue;

        // place new element if any slot is empty
        for (let i=0; i<k-1; i++) {
            if(counts[i]===0) {
                els[i] = el;
                counts[i]=1;
                placed=true;
                break;
            }
        }

        if (placed) continue;

        // decrement each count by one
        for (let i=0; i<k-1; i++) {
            counts[i]--;
        }

    }

    result = verify(arr, els, k)
    return result.sort((a,b)=>a-b)
}


function verify(arr, els, k) {
    const counts = {}

    for(let el of els) {
        counts[el]=0;
    }

    for(let el of arr) {
        if(counts[el]!==undefined) {
            counts[el]++
        }
    }

    return els.filter(el=>{
        return counts[el]>Math.floor(arr.length/k)
    })
}