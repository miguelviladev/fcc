var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [...arr].sort(function(a,b){
    return a === b ? -1 : a < b ? -1 : 1;
  });
}
console.log(nonMutatingSort(globalArray));