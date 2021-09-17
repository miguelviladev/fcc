function sumPrimes(num) {
  let primeSum = 0;
  for(let i = num; i >= 2; i--) {
    if (i%2 == 0 && i!==2) continue;
      let isPrime = true;
      for(let j = i-1; j > 1; j--) {
        if (i%j == 0) {
          isPrime = false;
          break;
        }
      }
      isPrime ? primeSum += i : null;
  }
  return primeSum;
}

sumPrimes(20);