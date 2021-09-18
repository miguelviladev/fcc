function steamrollArray(arr) {
  const flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

function steamrollArray1(arr) {
  return [].concat(...arr).some(Array.isArray) ? steamrollArray([].concat(...arr)) : [].concat(...arr);
}


console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray1([1, [2], [3, [[4]]]]));