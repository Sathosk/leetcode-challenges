// https://leetcode.com/problems/palindrome-number/description/

const isPalindrome = function(x: number): boolean {
  if (x < 0) return false

  let currentNumber = x;
  let reversedNumber = 0;

  while (currentNumber > 0) {
      const lastDigit = currentNumber % 10; 
      reversedNumber = (reversedNumber * 10) + lastDigit; 
      currentNumber = Math.trunc(currentNumber / 10); 
  }

  return x === reversedNumber
};