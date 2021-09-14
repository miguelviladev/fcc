function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = 0;
  for (let i = 0; i <= words.length-1; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");