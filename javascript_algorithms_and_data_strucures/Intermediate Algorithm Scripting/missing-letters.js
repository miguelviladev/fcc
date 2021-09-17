function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let strArr = str.split("");
  for (let i = alphabet.indexOf(strArr[0]); i <= alphabet.indexOf(strArr[strArr.length -1]); i++) {
    if (!strArr.includes(alphabet[i])) {
      return alphabet[i];
    }
  }
}

console.log(fearNotLetter("abce"));