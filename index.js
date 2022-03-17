
module.exports = function (inputShape) {

  const x = inputShape[1] + 1
  const y = inputShape[0] + 1

  let result = []

  for (let i = 1; i < y + 1; i++) {
    let row = []
    
      for (let j = 1; j < x + 1; j++) {
        if (j === x) {
          const sum = row.reduce((prev, cur) => prev + cur)
          row.push(sum)
        } else {
          row.push(j)
        }
      }

    if (i === y) {
      const sumRow = []

      for (const [index, value] of result[0].entries()) {
        sumRow.push(value * (y - 1))
      }

      result.push(sumRow)
    } else {
      result.push(row)
    }
  }

  return result
}