function checkPositive(arr) {
  return arr.some(function(val){
    return val > 0;
  });
}
checkPositive([1, 2, 3, -4, 5]);