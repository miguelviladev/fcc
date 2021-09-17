function smallestCommons(arr) {
  let minMultiple = 1;
  let isMinMultiple = false;
  let numRange = [];
  for(let i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {numRange.push(i);}
  for(let i = minMultiple; !isMinMultiple; minMultiple++){
    for(let j = 0; j < numRange.length; j++) {
      if(minMultiple % numRange[j] !== 0) {
        isMinMultiple = false;
        break;
      };
      isMinMultiple = true;
    }
  }
  return minMultiple - 1;
}

console.log(smallestCommons([1,5]));