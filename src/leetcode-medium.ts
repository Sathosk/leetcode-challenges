// https://leetcode.com/problems/unique-length-3-palindromic-subsequences/

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

// https://leetcode.com/problems/shifting-letters-ii/description/

function shiftingLetters(s: string, shifts: number[][]): string {
  const stringLength = s.length;
  const diff = Array(stringLength + 1).fill(0);
  
  // Populate the difference array
  for (const [start, end, direction] of shifts) {
      if (direction === 1) {
          diff[start] += 1;
          diff[end + 1] -= 1;
      } else {
          diff[start] -= 1;
          diff[end + 1] += 1;
      }
  }

  // Compute the net shifts using prefix sum
  const netShifts = Array(stringLength).fill(0);
  let shift = 0;
  for (let i = 0; i < stringLength; i++) {
      shift += diff[i];
      netShifts[i] = shift;
  }

  // Apply the shifts to the string
  const aCode = 'a'.charCodeAt(0);
  const alphabetLength = 26; // Number of letters in the alphabet

  const result = [...s].map((char, i) => {
      const charCode = char.charCodeAt(0);
      const newCharCode = ((charCode - aCode + netShifts[i]) % alphabetLength + alphabetLength) % alphabetLength + aCode;
      
      return String.fromCharCode(newCharCode);
  });

  return result.join('');
}