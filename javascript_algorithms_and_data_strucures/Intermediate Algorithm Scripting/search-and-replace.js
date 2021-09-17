function myReplace(str, before, after) {
  if (before.split("")[0].toUpperCase() === before.split("")[0]) {
    let arr = [...after.split("")];
    arr[0] = arr[0].toUpperCase()
    return str.replace(before, arr.join(""));
  }
  return str.replace(before, after.toLowerCase());
}

let a = "A quick brown fox Jumped over the lazy dog";
console.log(myReplace(a, "Jumped", "leaped"));