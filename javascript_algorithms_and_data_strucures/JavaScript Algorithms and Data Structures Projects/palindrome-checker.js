function palindrome(str) {
  let strArr = str.toLowerCase().match(/[a-zA-Z0-9]/g);
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== [...strArr].reverse()[i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("-_eye"));
console.log(palindrome("ola cao"));