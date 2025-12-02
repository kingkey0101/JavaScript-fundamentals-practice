/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */

//1st. convert the array of objects into an array of IDs:
// const stringifyId = (arr) => {
// const idArray = arr.map(obj => obj.id);
// return idArray
// };

// 2nd. convert the array of ID's into an array of unique ID's(no duplicates): (first way: brute force):
// const stringifyId = (arr) => {
// const idArray = arr.map(obj => obj.id);
// const uniqueArray = [];
// let idString = '';
// for (let id of idArray) {
//     if(!uniqueArray.includes(id)) {
//         uniqueArray.push(id)
//     }
// return uniqueArray
// }
// 3rd. join the array to create a string of IDs separated by ", "
// (first way: brute force):

// const stringifyId = (arr) => {
// const idArray = arr.map(obj => obj.id);
// const uniqueArray = [];
// let idString = '';
// for (let id of idArray) {
//     if(!uniqueArray.includes(id)) {
//         uniqueArray.push(id)
//     }
// }
// for(let i =0; i < uniqueArray.length; ++i){
//     // if not on the last element
//     if(i !== uniqueArray.length - 1) {
//         idString += `${uniqueArray[i]}, `
//     }
//     else {
//         idString += uniqueArray[i]
//     }
//     //  ad the id and ", "
//     //  otherwise just add the id

// }
// return idString
// };

// (second way(3rd step): top tech):

// const stringifyId = (arr) => {
// const idArray = arr.map(obj => obj.id);
// const uniqueArray = [];
// let idString = '';
// for (let id of idArray) {
//     if(!uniqueArray.includes(id)) {
//         uniqueArray.push(id)
//     }
// }
// for(let i =0; i < uniqueArray.length; ++i){
//     idString += `${uniqueArray[i]}, `;

// }
// return idString.slice(0, idString.length -2)
// };

// (second way: top tech even easier): .join()

// const stringifyId = (arr) => {
// const idArray = arr.map(obj => obj.id);
// const uniqueArray = [];
// for (let id of idArray) {
//     if(!uniqueArray.includes(id)) {
//         uniqueArray.push(id)
//     }
// }

// return uniqueArray.join(", ")
// };

// (second way: top tech in 3 lines of code using .set):
const stringifyId = (arr) => {
const idArray = arr.map(obj => obj.id);
const uniqueArray = [...new Set(idArray)];
return uniqueArray.join(", ")
};

module.exports = stringifyId;
