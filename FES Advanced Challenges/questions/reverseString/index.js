/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'

// need to create an empty 'reversed' string
// loop over every character in the string
// - add each character to the start of 'reversed'
// using david as an example:
// 0 - str[i] = 'd', reversed = 'd' + '' = 'd'
// 1 - str[i] = 'a', reversed = 'a' + 'd' = 'ad'
// 2 - str[i] = 'v', reversed = 'v' + 'ad' = 'vad'
// 3 - str[i] = 'i', reversed = 'i' + 'vad' = 'ivad'
// 4 - str[i] = 'd', reversed = 'd' + 'ivad' = 'divad'

const reverseString = (str) => {
  // let reversed = ''

  // method 1 = for loop
  // for (let i = 0; i < str.length; ++i) {
  //     reversed = str[i] + reversed;}
  // return reversed

  // method 2 = for of loop
  // for (let char of str) {
  //     reversed = char + reversed;
  // }
  // return reversed

  // method 3 = array
  // const arr1 = str.split('')
  // const reversedArr = arr1.reverse()
  // return reversedArr.join('')

  // method 3 simplified = array
  // return str.split('').reverse().join('')

  // Top tech method: reduce -
  return str
    .split("")
    .reduce((accumulator, currentValue) => currentValue + accumulator);
};

module.exports = reverseString;
