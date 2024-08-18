// Is Palindrome
// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Example 1:

// Input: s = "Was it a car or a cat I saw?"

// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:

// Input: s = "tab a cat"

// Output: false
// Explanation: "tabacat" is not a palindrome.

// Constraints:

// 1 <= s.length <= 1000
// s is made up of only printable ASCII characters.

const s = 'Was it a car or a cat I saw?';

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  const regex = /[\W_]/;
  
  while(left < right){
    while(left < right && regex.test(str[left])) {left++;}
    while(left < right && regex.test(str[right])) {right--;}

    if(str[left].toLowerCase() !== str[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome(s));


