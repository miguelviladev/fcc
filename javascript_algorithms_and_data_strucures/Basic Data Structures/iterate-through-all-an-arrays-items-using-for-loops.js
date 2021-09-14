function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(arr[i].indexOf(elem));
    
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
    
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));