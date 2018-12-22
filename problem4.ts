/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
function isPalindromic(num: number) {
  let numString = num.toString();
  for (let i = 0; i < numString.length / 2; i++) {
    if (numString[i] !== numString[numString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
function largestPalindrome(num: number) {
  let largest = 0;
  for (let i = num; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      let product = i * j;
      if (isPalindromic(product) && product > largest) {
        largest = product;
        console.log(`currentLargest-${largest} = ${i} * ${j}`);
      }
    }
  }
  //now try the next smllest number
  return largest;
}
console.log(`12321:${isPalindromic(12321)}`);
console.log(`44441:${isPalindromic(44441)}`);
console.log(`123421:${isPalindromic(123421)}`);
console.log(`99 - ${largestPalindrome(999)}`);
