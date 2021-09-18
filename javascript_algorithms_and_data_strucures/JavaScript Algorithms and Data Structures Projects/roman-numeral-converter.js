function convertToRoman(num) {
  const arabicArr = [ 1 ,  4  ,  5 ,  9  , 10 ,  40 , 50 ,  90 , 100,  400, 500, 900, 1000];
  const romanArr  = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  let convertedArr = [];

  while(num > 0) {
    for (let i = 0; i < arabicArr.length; i++) {
      if (i+2 <= arabicArr.length) {
        if ((num - arabicArr[i+1]) < 0) {
          convertedArr.push(romanArr[i]);
          num -= arabicArr[i]
          break;
        }
      } else {
        convertedArr.push(romanArr[i]);
        num -= arabicArr[i]
        break;
      }
    }
  }
 return convertedArr.join("");
}

console.log(convertToRoman(36));