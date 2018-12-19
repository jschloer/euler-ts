/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
  The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
function calc(limit: number) {
  // init sum to 0
  let sum = 0;
  //setup a for loop on all numbers below limit
  for (let i = 0; i < limit; i++) {
    // if number is divisible by 3 or 5, add it to sum
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(`10: ${calc(10)}`);
console.log(`1000: ${calc(1000)}`);
