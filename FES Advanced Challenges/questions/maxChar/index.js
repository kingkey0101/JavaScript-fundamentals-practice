/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

const maxCharacter = (str) => {
  //create character map
//   const charMap = {};
//   let max = 0
//   let maxChar = ''
//   for (let char of str){
//     charMap[char] = charMap[char] + 1 || 1
//   }
// //   return charMap
//   //loop over every char in the character map
//   for(let char in charMap){
//     if (charMap[char] > max){
//         max = charMap[char];
//         maxChar = char;
//     }
//   }
//   return maxChar;
    //if the value of hte char is greater than max(initially set this to 0)
    //set max to the value
    //set maxChar to the character

 // return maxChar 

 //top tech version:
   const charMap = new Map()
  let max = 0
  let maxChar = ''
  for (const char of str){
    charMap.set(char, charMap.get(char) + 1 || 1)
  }
  for(const [char, count] of charMap){
    if (count > max){
        max = count;
        maxChar = char;
    }
  }
  return maxChar;
};

module.exports = maxCharacter;
