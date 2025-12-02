const palindrome = (str) => {
  //  return str.split('').every((char, index)=>(
  //  char === str[str.length - 1 - index]
  //  ))

  // Only loop the char in first half of the string = more efficient ex abba and abcba
  const middle = Math.floor(str.length / 2); //to round the middle number down to closest whole number (abcba)
  for (let i = 0; i < middle; ++i) {
    console.log('iterated')
    const oppositeIndex = str.length - 1 - i;
    if (str[i] !== str[oppositeIndex]) {
      return false;
    }
  }
  return true;
};

console.log(palindrome('abcba'))
