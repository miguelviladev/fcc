function diffArray(arr1, arr2) {
  let sumArr = [...arr1].concat(arr2);
  let newArr = [];
  for (let i = 0; i < sumArr.length; i++){
    if (sumArr.indexOf(sumArr[i]) === sumArr.lastIndexOf(sumArr[i])){
      newArr.push(sumArr[i]);
    }
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));