const createCounter = (n: number) => {
  return () => n++
}

const expect = (val1: unknown) => {
  return {
    toBe: (val2: unknown) => {
      if (val1 === val2) {
        return {
          value: true
        }
      }
      
      throw new Error('Not Equal')
    },
    notToBe: (val2: unknown) => {
      if (val1 !== val2) {
        return {
          value: true
        }
      }
      
      throw new Error('Equal')
    }
  }
}

function fizzBuzz(n: number) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
      let string = '';
  
      if (i % 3 === 0) string += 'Fizz'
      if (i % 5 === 0) string += 'Buzz'
  
      console.log(string || i)
  }
}

function getMaxHiddenChips(imageDim: number[], k: number) {
  // Write your code here
  let hiddenChipsCount = 0;
  let chipsCanBeHiddenArr = [...imageDim]

  imageDim.forEach((chipDim) => {
      const indexOfChipToHide = chipsCanBeHiddenArr.findIndex((chip) => chipDim * k <= chip);

      if (indexOfChipToHide !== -1) {
          hiddenChipsCount++;
          chipsCanBeHiddenArr.splice(indexOfChipToHide, 1);
      }
  });

  return hiddenChipsCount
}