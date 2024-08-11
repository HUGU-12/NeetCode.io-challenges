// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]
// Example 3:

// Input: strs = [""]

// Output: [[""]]
// Constraints:

// 1 <= strs.length <= 1000.
// 0 <= strs[i].length <= 100
// strs[i] is made up of lowercase English letters.


function groupAnagrams(strs) {
  const output = [];
  const anagramPool = strs.map(word => Array.from(word).sort().join(''));
  const primitives = Array.from(new Set(anagramPool));

  for(let i = 0; i < primitives.length; i++){
      output.push([]);
      for(let j = 0; j < strs.length; j++){
          if(primitives[i] === anagramPool[j]){
              output[i].push(strs[j]);
          }
      }
  }
  return output;
}

console.log(groupAnagrams(strs));