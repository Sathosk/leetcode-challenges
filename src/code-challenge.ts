const asdf: string = 'string'

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

try {
  console.log(expect(5).toBe(6)) // to be true
} catch (error) {
  console.log('error', error)
}
