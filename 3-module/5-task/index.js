function getMinMax(str) {
 const result = {}
 const array = str.split(' ')
 const numberArr = array
  .filter((el) => {
    return !Number.isNaN(parseFloat(el)) 
  })
  .map((el) => {
    return parseFloat(el)
  })
  numberArr.sort((a, b) => {
    return a - b
  })
 result.min = numberArr[0]
 result.max = numberArr[numberArr.length - 1]

  return result
}

/* function getMinMax(str) {
  const array = str.split(' ')
  const result = array
   .reduce((acc, curEl) => {
    const numberCurEl = parseFloat(curEl)
    if (Number.isNaN(numberCurEl)) {
      return acc
    }

    if (numberCurEl < acc.min || !acc.hasOwnProperty('min')) {
      acc.min = numberCurEl
    }

    if (numberCurEl > acc.max || !acc.hasOwnProperty('max')) {
      acc.max = numberCurEl
    }

    return acc
   }, {})
 
   return result
 } */