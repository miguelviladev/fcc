function repeatStringNumTimes(str, num) {
  let repeatedStr = "";
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      repeatedStr += str;
    }
  }
  console.log(repeatedStr)
  return repeatedStr;
}

repeatStringNumTimes("abc", 3);