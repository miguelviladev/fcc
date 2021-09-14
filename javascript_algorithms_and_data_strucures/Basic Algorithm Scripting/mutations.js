function mutation(arr) {
  let letters = arr[1].split("");
  for (let i = 0; i < letters.length; i++) {
    if (arr[0].toLowerCase().includes(letters[i].toLowerCase()) == false) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);