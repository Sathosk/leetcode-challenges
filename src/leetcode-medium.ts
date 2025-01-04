// https://leetcode.com/problems/unique-length-3-palindromic-subsequences/

const s = "adc"

const countPalindromicSubsequence = function(s: string): number {
    const letterArray = s.split('')
    let uniquePalindromeQuantity = 0
    const leftCharLetterUsed = new Set()

    letterArray.forEach((letter, index) => {
      if (leftCharLetterUsed.has(letter)) return
      leftCharLetterUsed.add(letter)

      const lastIndex = s.lastIndexOf(letter)

      if (index === lastIndex) return

      const usedMiddleLetterSet = new Set()

      for (let i = index + 1; i < lastIndex; i++) {
        const currentMiddleLetter = s[i]


        if (usedMiddleLetterSet.has(currentMiddleLetter)) continue
        usedMiddleLetterSet.add(s[i])

        // console.log('sequence found', s[index] + currentMiddleLetter + s[lastIndex])
        uniquePalindromeQuantity++
      }

    })


    return uniquePalindromeQuantity
};

console.log(countPalindromicSubsequence(s))
