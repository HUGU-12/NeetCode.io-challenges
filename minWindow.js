// Minimum Window With Characters
// Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".

// You may assume that the correct output is always unique.

// Example 1:

// Input: s = "OUZODYXAZV", t = "XYZ"

// Output: "YXAZ"
// Explanation: "YXAZ" is the shortest substring that includes "X", "Y", and "Z" from string t.

// Example 2:

// Input: s = "xyz", t = "xyz"

// Output: "xyz"
// Example 3:

// Input: s = "x", t = "xy"

// Output: ""
// Constraints:

// 1 <= s.length <= 1000
// 1 <= t.length <= 1000
// s and t consist of uppercase and lowercase English letters.


function minWindow(s, t) {
  const map = new Map();
  for(const ch of t){
    map.set(ch,(map.get(ch) || 0) + 1);
  }
  let match = 0;
  let left = 0;
  let minlen = s.length + 1;
  let minStr;
  for(let right = 0; right < s.length; right++){
    if(map.has(s[right])){
      map.set(s[right],map.get(s[right]) - 1);
      if(map.get(s[right]) === 0) match++;
    }
    while(match === map.size){
      if(right - left + 1 < minlen){
        minlen = right - left + 1;
        minStr = s.substring(left,right + 1);
      }
      if(map.has(s[left])){
        if(map.get(s[left]) === 0) match--;
        map.set(s[left],map.get(s[left]) + 1);
      }
      left++;
    }
  }
  return minlen > s.length ? '' : minStr;
}

const s = 'OUZODYXAZV'; 
const s1 = 'XYZ';
const s2 = 'X'; 
const s3 = 'aa'; const t3 = 'aa'
const t = 'XYZ'
const s4 = "ADOBECODEBANC"
const t4 = "ABC";
const s5 = "aaaaaaaaaaaabbbbbcdd"
const t5 = "abcdd"
const s6 = "a"
const t6 = "b"


console.log(minWindow(s, t));  
console.log(minWindow(s1, t));  
console.log(minWindow(s2, t));
console.log(minWindow(s3, t3));
console.log(minWindow(s4, t4));
console.log(minWindow(s5, t5));
console.log(minWindow(s6, t6));

