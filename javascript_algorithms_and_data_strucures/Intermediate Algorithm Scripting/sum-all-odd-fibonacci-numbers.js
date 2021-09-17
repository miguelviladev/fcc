function sumFibs(num) {
  let num1 = 0; let sum = 0; let num2 = 1; let sumOdd = 0;
  for (let i = 1; num1 <= num; i++) {
    if(num1 % 2 !== 0) {
      sumOdd += num1;
    }
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return sumOdd;
}

sumFibs(10);