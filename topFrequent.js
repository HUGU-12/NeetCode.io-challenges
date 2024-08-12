// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]

const nums = [1,2,2,3,3,3,2];
let k = 2;

function topKFrequent(nums, k){
  const freqMap = new Map();
  for(const number of nums){
    freqMap.set(number, (freqMap.get(number) || 0) + 1);
  }
  
  const freqProfile = [...freqMap].sort((a,b) => b[1] - a[1])
                                  .map(el => el[0]);
  return freqProfile.slice(0,k);
}

console.log(topKFrequent(nums,k));
