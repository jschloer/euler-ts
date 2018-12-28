/*
 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
function evenlyDivisibleSequence(num: number) {
  const divisible = (candidate: number) =>
    Array(num)
      .fill(false)
      .reduce((previous, current, index) => {
        return previous && candidate % (index + 1) === 0;
      }, true);
  let val = 2;

  while (!divisible(val)) {
    val = val + 2;
  }
  return val;
}
console.log(`10:${evenlyDivisibleSequence(10)}`);
console.log(`20:${evenlyDivisibleSequence(20)}`);
