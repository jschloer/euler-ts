/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/
function isPrime(num: number, knownPrimes: Array<number>) {
  //uses the given primes to see if a number is divisible by any
  let i = 0;
  while (knownPrimes[i] < num / 2 && num % knownPrimes[i] !== 0) {
    i++;
  }
  return num % knownPrimes[i] !== 0;
}
function calculatePrimes(num: number) {
  //Ok, so 10001 primes is a good bit to calculate. and at each prime we have to check it against a subsection of the existing primes
  // Let's go with that concept. We'll keep an array of the found primes.
  // we'll take advantage of the idea that half of all numbers are even and only consider odds
  // also, because of that, no number can have factors that are greater than half of the number itself
  let knownPrimes = [2, 3, 5, 7];
  for (let i = 9; knownPrimes.length < num; i++) {
    if (isPrime(i, knownPrimes)) {
      knownPrimes.push(i);
    }
  }
  return knownPrimes[num - 1];
}
console.log(`6: ${calculatePrimes(6)}`);
console.log(`100: ${calculatePrimes(100)}`);
console.log(`10001: ${calculatePrimes(10001)}`);
