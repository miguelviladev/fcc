function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(str.split("")[0])) return str + "way";
  let arr = [...str.split("")]
  for (let i = 0; i < arr.length; i++) {
    if (!vowels.includes(arr[0])) {
      arr.push(arr[0]);
      arr.shift();
    }
  }
  return arr.join("") + "ay";
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("aconsonant"));
console.log(translatePigLatin("glove"));