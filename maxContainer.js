// Max Water Container
// You are given an integer array heights where heights[i] represents the height of the 
// i
// t
// h
// i 
// th
//   bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

// Example 1:

// Input: height = [1,7,2,5,4,7,3,6]

// Output: 36
// Example 2:

// Input: height = [2,2,2]

// Output: 4
// Constraints:

// 2 <= height.length <= 1000
// 0 <= height[i] <= 1000
const heights1 = [1,7,2,5,4,7,3,6];
const heights2 = [2,2,2];

function maxArea(heights){
  let left = 0;
  let right = heights.length - 1;
  let result = 0;
  while(left < right){
    const contLength = right - left;
    const area = contLength * Math.min(heights[left],heights[right]);
    result = Math.max(result,area);
    if(heights[left] < heights[right]) left++;
    else right--;
  }
  return result;
}

console.log(maxArea(heights1));
console.log(maxArea(heights2));
