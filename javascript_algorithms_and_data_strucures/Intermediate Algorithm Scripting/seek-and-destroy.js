function destroyer(arr) {
  return arr.filter(elm => {
    return !Object.values(arguments).slice(1).includes(elm);
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
