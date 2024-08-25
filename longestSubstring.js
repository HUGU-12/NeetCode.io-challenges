// Longest Substring Without Duplicates
// Given a string s, find the length of the longest substring without duplicate characters.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: s = "zxyzxyz"

// Output: 3
// Explanation: The string "xyz" is the longest without duplicate characters.

// Example 2:

// Input: s = "xxxx"

// Output: 1
// Constraints:

// 0 <= s.length <= 1000
// s may consist of printable ASCII characters.

const input1 = 'zxyzxyz';
const input2 = 'xxxx';

function lengthOfLongestSubstring(s){
  const substring = new Set();
  let leftPointer = 0;
  let rightPointer = 0;
  let result = 0;
  while(rightPointer < s.length){
    if(substring.has(s[rightPointer])){
      substring.delete(s[leftPointer]);
      leftPointer++;
    }else{
      substring.add(s[rightPointer]);
      result = Math.max(result,substring.size)
      rightPointer++;
    }
  }
  return result;
}

console.log(lengthOfLongestSubstring(input1));
console.log(lengthOfLongestSubstring(input2));
