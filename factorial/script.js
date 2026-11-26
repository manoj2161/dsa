// const factorial = (n) => {
//   let fact = 1;
//   for (let i = n; i > 1; i--) {
//     fact = i * fact;
//   }
//   return fact;
// };
// const factorial = (n) => {
//   let fact = 1;
//   for (let i = 2; i <= n; i++) {
//     fact = i * fact;
//   }
//   return fact;
// };

// console.log(factorial(0));
// console.log(factorial(5));
// console.log(factorial(6));

const factorial = (n) => {
  if (n ===0) {
    return 1;
  }

  return n * factorial(n - 1);
};
console.log(factorial(3));
