//first solution: good for basic junior roles
// const str = "Simplified !";
// const charMap = {};
// for (let char of str) {
//   if (!charMap[char]) {
//     charMap[char] = 1;
//   }
//   else {
//     charMap[char] = charMap[char] +1;
//   }
// }
// console.log(charMap);
//second solution: good for better tech roles
// const str = "Simplified !";
// const charMap = {};
// for (let char of str) {
//     charMap[char] = charMap[char] +1 || 1;
// }
// console.log(charMap);

//third solution: good for top tech roles
// const str = "Simplified !";
// const charMap = {};
// for (let char of str) {
//     charMap[char] = charMap[char] +1 || 1;
// }
// for (let char in charMap){

//     console.log(charMap[char]);
// }


const str = "Simplified !"
const charMap = new Map();

for (let char of str){
    const count = charMap.get(char)
    charMap.set(char, count + 1 || 1)
}
console.log(charMap)