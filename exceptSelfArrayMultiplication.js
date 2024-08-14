// Products of Array Discluding Self
// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in 
// O
// (
// n
// )
// O(n) time without using the division operation?

// Example 1:

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]
// Example 2:

// Input: nums = [-1,0,1,2,3]

// Output: [0,-6,0,0,0]
// Constraints:

// 2 <= nums.length <= 1000
// -20 <= nums[i] <= 20

const nums = [1,2,4,6];

function productExceptSelf(input){
  const output = [];
  let leftOfSelf = 1;
  let rightOfSelf = 1;

  for(let i = 0; i < input.length; i++){
    output[i] = leftOfSelf;
    leftOfSelf *= input[i];
  }
  console.log();
  for(let i = input.length - 1; i >= 0; i--){
    output[i] *= rightOfSelf;
    rightOfSelf *= input[i];
  }
}
productExceptSelf(nums);
