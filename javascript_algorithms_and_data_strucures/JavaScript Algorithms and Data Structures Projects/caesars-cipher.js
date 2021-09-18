function rot13(str) {
  const alph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (alph.indexOf(strArr[i]) >= 0) {
      if (alph.indexOf(strArr[i]) + 13 > alph.length -1) {
        strArr[i] = (alph[alph.indexOf(strArr[i]) -13])
      } else {
        strArr[i] = (alph[alph.indexOf(strArr[i]) + 13])
      }
    }
  }
  return strArr.join("");
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR YBIR?"));