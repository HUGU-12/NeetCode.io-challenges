// Permutation String
// You are given two strings s1 and s2.

// Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

// Both strings only contain lowercase letters.

// Example 1:

// Input: s1 = "abc", s2 = "lecabee"

// Output: true
// Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

// Example 2:

// Input: s1 = "abc", s2 = "lecaabee"

// Output: false
// Constraints:

// 1 <= s1.length, s2.length <= 1000
// const s1 = "abc"; const s2 = 'lecabee';
// const s_2 = 'lecaabee'

// function checkInclusion(s1,s2){
//   if(s1.length > s2.length) return false;
//   const permutations = new Map();
  
//   for(const char of s1){
//     permutations.set(char,(permutations.get(char) || 0) + 1);
//   }  
// }
// console.log(checkInclusion(s1,s2));
// console.log(checkInclusion(s1,s_2));
const s1 = "abc";
const s2 = "lecabee";
const s3 = "lecaabee";

function checkInclusion(s1, s2) {
  if(s1.length > s2.length) return false;

  const s1Map = new Map();
  const s2Map = new Map();

  for(const ch of s1){
    s1Map.set(ch,(s1Map.get(ch) || 0) + 1);  
  }

  let left = 0;
  for(let i = 0; i < s2.length; i++){
    s2Map.set(s2[i],(s2Map.get(s2[i]) || 0) + 1);

    if(i - left + 1 === s1.length){
      let matches = 0;
      for(const [key,value] of s1Map){
        if(s2Map.get(key) === value) matches++;
      }
      if(matches === s1.length) return true;
      s2Map.set(s2[left],s2Map.get(s2[left]) - 1);
      if(s2Map.get(s2[left]) === 0) s2Map.delete(s2[left]);
      left++;
    }
  }
  return false;
}

console.log(checkInclusion(s1, s2)); 
console.log(checkInclusion(s1, s3));
