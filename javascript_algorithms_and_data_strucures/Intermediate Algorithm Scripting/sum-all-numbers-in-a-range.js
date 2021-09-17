function sumAll(arr) {
  let sum = 0;
  let newArr = [...arr].sort(function(a,b){
    return a === b ? -1 : a < b ? -1 : 1;
  });
  for(let i = newArr[0]; i <= newArr[1]; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));