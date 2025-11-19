class Solution {
    missingNumber(arr) {
        let dic = new Map()

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                dic.set(arr[i], true)
            }
        }
        let i = 1

        while (dic.get(i)) {
            i++;
        }

        return i
    }
}


// optimized 
class Solution {
    missingNumber(arr) {
        let n = arr.length;
        let i = 0;

        while (i < n) {
            while (arr[i] > 0 && arr[i] <= n && arr[i] !== i + 1) {
                if (arr[arr[i] - 1] === arr[i]) break;
                let temp = arr[arr[i] - 1];
                arr[arr[i] - 1] = arr[i];
                arr[i] = temp;
            }
            i++
        }

        for (let i = 0; i < n; i++) {
            if (arr[i] !== i + 1) {
                return i + 1
            }
        }

        return n + 1
    }
}

missingNumber([2, -3, 4, 1, 1, 7])

// better, by removing shift and unshift you have made it from n^2 to n
// runtime complexity
class Solution {
    addBinary(s1, s2) {
        let l1=s1.length-1;
        let l2=s2.length-1;
        let carry = 0;
        let res=[]
        
        
        while(l1>=0 || l2>=0) {
            let t1,t2;
            
            t1 = s1[l1]===undefined?0:Number(s1[l1])
            t2 = s2[l2]===undefined?0:Number(s2[l2])
            
            const sum = t1 + t2 + carry
            
            res.push(sum%2)
            carry = Math.floor(sum/2)
            
            l1--;
            l2--;
        }
        
        if(carry===1) {
            res.push(1)
        }
        
        while(res[res.length-1]===0) {
            res.pop()
        }
        
        res.reverse()
        
        return res.join("")
    }
}