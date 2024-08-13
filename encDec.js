// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]

const input = ['neet','code','love','you','4@4@jasdfhaishfajsdh'];

function encode(strs){
  let string = '';
  for(const word of strs){
    string += `${word.length}@${word}`;
  }
  return string;
}

function decode(strs){
  const message = [];
  let i = 0;
  while (i < strs.length) {
    let j = i;
    while (strs[j] !== '@') {
      j++;
    }
    let length = Number(strs.substring(i, j));
    i = j + 1;
    
    message.push(strs.substring(i , i + length));
    i += length;
  }
  return message;
}

console.log(encode(input));
console.log(decode(encode(input)));
