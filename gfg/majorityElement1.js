
// brute

function findMajorityBrute(arr) {
        const counter = {}
        const result = []
        for(let p of arr) {
            if(counter[p]) {
                counter[p]++;
            } else {
                counter[p]=1;
            }
        }
    
        
        for(let count in counter) {
            if(counter[count]>Math.floor(arr.length/3)) {
               result.push(count) 
            }
        }
        
        result.sort((a,b)=>a-b)
        
        return result
}


// optimized - self

// 	1.	Init a map countMap = {}.
// 	2.	For each element x in the array:
// 	•	If x not in map:
// countMap[x] = n/k - 1
// 	•	Else:
// countMap[x] -= 1
// 	3.	After processing:
// 	•	If countMap[x] < 0, then x is a “candidate heavy hitter”.


function findMajorityByK(arr, k) {
        const counter = {}
        const result = []
        const threshold=Math.floor(arr.length/k)-1
        
        for(let p of arr) {
            if(counter[p]!==undefined) {
                counter[p]--;
            } else {
                counter[p]=threshold;
            }
        }
    
        for(let count in counter) {
            if(counter[count]<0) {
               result.push(count) 
            }
        }
        
        result.sort((a,b)=>a-b)
        
        return result
    }




// self -- better than before , less nasty comparison
function findMajority2(arr, k) {
    return findMajorityByK(arr, 3)
}

function findMajorityByK1(arr, k) {
        const counter = {}
        const result = []
        const threshold=Math.floor(arr.length/k)
        
        for(let p of arr) {
            if(counter[p]) {
                counter[p]++;
            } else {
                counter[p]=1;
            }
        }
    
        for(let count in counter) {
            if(counter[count]>threshold) {
               result.push(count) 
            }
        }
        
        result.sort((a,b)=>a-b)
        
        return result
    }


// using boyer moore algorithm

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


console.log(findMajorityByBoyerMoore([-5,3,-5], 3))