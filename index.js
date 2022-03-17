
module.exports = function (inputShape) {

  const x = inputShape[1] + 1
  const y = inputShape[0] + 1

  let result = []

  for (let i = 1; i < y + 1; i++) {
    let row = []
    let sumRow = []
    
    for (let j = 1; j < x + 1; j++) {
      if (j === x) {
        const sum = row.reduce((prev, cur) => prev + cur)
        row.push(sum)
        sumRow.push(sum * (y - 1))
      } else {
        row.push(j)
        sumRow.push(j * (y - 1))
      }
    }

    if (i === y) {
      result.push(sumRow)
    } else {
      result.push(row)
    }
  }

  return result
}
