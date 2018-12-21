/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
function factors(num: number): Array<number> {
  let i = 2;
  while (num % i !== 0 && i < num / 2) {
    i++;
  }
  if (num % i === 0) {
    //found a factor, so return it, plus the factors of hte remaining num
    return [i, ...factors(num / i)];
  } else return [num];
}
function highestFactor(num: number) {
  //recursively find the largest number that divvvides into the given number
  let foundFactors = factors(num);
  return foundFactors.reduce((prevValue, currentValue) => {
    return prevValue > currentValue ? prevValue : currentValue;
  }, 1);
}
console.log(`13195: ${highestFactor(13195)}`);
console.log(`13195: ${highestFactor(600851475143)}`);
