function chunkArrayInGroups(arr, size) {
  let finalArr = [];
  for (let i = 0; i <= arr.length; i++) {
    finalArr.push(arr.splice(0,size));
  }
  if (arr.length != 0) {
    finalArr.push([...arr])
  }
  return finalArr;
}

function chunkArrayInGroups1(arr, size) {
  let finalArr = [];
  while (arr.length != 0) {
    finalArr.push(arr.splice(0,size));
  }
  return finalArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

chunkArrayInGroups1([0, 1, 2, 3, 4, 5, 6], 3)