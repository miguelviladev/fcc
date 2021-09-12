// const sum = (...args) => {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//  return sum;
//}

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}