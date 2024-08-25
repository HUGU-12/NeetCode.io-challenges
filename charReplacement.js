// Longest Repeating Substring With Replacement
// You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

// After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

// Example 1:

// Input: s = "XYYX", k = 2

// Output: 4
// Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

// Example 2:

// Input: s = "AAABABB", k = 1

// Output: 5
// Constraints:

// 1 <= s.length <= 1000
// 0 <= k <= s.length
const s1 = 'XYYX'; const k1 = 2;
const s2 = 'AAABABB'; const k2 = 1;

function characterReplacement(s, k) {
  const freqMap = new Map();
  let leftPointer = 0;
  let result = 0;
  for(let i = 0; i < s.length; i++){
      
      freqMap.set(s[i],(freqMap.get(s[i]) || 0) + 1);
      const maxFreq = Math.max(...freqMap.values());
      const subLength = i - leftPointer + 1;

      if(subLength - maxFreq <= k) result = Math.max(result,subLength);
      else{
          freqMap.set(s[leftPointer],freqMap.get(s[leftPointer]) - 1);
          leftPointer++;
      }
  }
  return result;
}

console.log(characterReplacement(s1,k1));
console.log(characterReplacement(s2,k2));
