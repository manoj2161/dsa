const fibonacci = (n) => {
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
};
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(5));

// Recursive solution

const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};
console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(5));
