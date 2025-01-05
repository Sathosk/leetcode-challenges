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

// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
    const seenNumbers: Record<number, number> = {}

    for (let i = 0; i < nums.length; i++) {
      const currentNumber = nums[i]

      const targetPair = target - currentNumber
      const targetPairIndex = seenNumbers[targetPair]

      if (targetPairIndex !== undefined) {
        return [targetPairIndex, i]
      } else {
        seenNumbers[currentNumber] = i
      }
    }

    return []
};