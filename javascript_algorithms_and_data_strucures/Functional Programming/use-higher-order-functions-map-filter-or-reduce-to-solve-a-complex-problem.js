const squareList = arr => {
  return arr.filter(num => num > 0  && Number.isInteger(num)).map(num => num*num);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);