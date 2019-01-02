/*
  The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers 
      and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural 
      numbers and the square of the sum.
*/
function sumOfSquares(num: number) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i * i;
  }
  return total;
}
function squareOfSum(num: number) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total * total;
}
function squareDiff(num: number) {
  return squareOfSum(num) - sumOfSquares(num);
}
console.log(`10: ${squareDiff(10)}`);
console.log(`100: ${squareDiff(100)}`);
