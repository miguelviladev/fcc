function bouncer(arr) {
  let cleanArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      cleanArr.push(arr[i]);
    }
  }
  return cleanArr;
}

bouncer([7, "ate", "", false, 9]);