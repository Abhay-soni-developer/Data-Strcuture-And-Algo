/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0;
    let j = 0;
    let merged = [];

    while (i < nums1.length || j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i])
            i++
        } else if (nums1[i] > nums2[j]) {
            merged.push(nums2[j])
            j++
        } else if (nums1[i] === nums2[j]) {
            merged.push(nums1[i])
            merged.push(nums2[j])
            i++;
            j++;
        }

        if(i===nums1.length) {
            while(j<nums2.length) {
                merged.push(nums2[j])
                j++;
            }
        } else if (j===nums2.length) {
             while(i<nums1.length) {
                merged.push(nums1[i])
                i++;
            }
        }

    }

    if (merged.length % 2 === 0) {
        return (merged[(merged.length / 2)-1] + merged[(merged.length / 2)]) / 2;
    } else {
        return merged[Math.floor(merged.length / 2)]
    }

};