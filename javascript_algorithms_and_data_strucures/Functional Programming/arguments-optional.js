function addTogether() {
  const [x, y] = arguments;
  if (typeof(x) !== "number") {
    return undefined;
  }
  else if (y === undefined) {
    function addY(y) {
      return (typeof(y) !== "number") ? undefined : x + y;
    }
    return addY;
  }
  else if (typeof(y) !== "number") {
    return undefined;
  }
  else {
    return x + y;
  }
}

addTogether(2, 3)
console.log(addTogether(5)(7))