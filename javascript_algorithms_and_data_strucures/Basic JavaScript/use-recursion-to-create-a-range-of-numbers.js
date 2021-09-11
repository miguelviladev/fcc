function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var rangenumbers = rangeOfNumbers(startNum, endNum - 1);
    rangenumbers.push(endNum);
    return rangenumbers;
  }
};