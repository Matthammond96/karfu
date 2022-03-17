var matrixGenerator = require('../index')

const tests = [
  {
    input: [4, 4],
    output: [
      [1, 2, 3, 4, 10],
      [1, 2, 3, 4, 10],
      [1, 2, 3, 4, 10],
      [1, 2, 3, 4, 10],
      [4, 8, 12, 16, 40]
    ]
  }, {
    input: [2, 5],
    output: [
      [1, 2, 3, 4, 5, 15],
      [1, 2, 3, 4, 5, 15],
      [2, 4, 6, 8, 10, 30]
    ]
  }
]

for (const [index, test] of tests.entries()) {
  const result = matrixGenerator(test.input)
  console.log(result)
}

// const result = matrixGenerator(tests[1].input)
// console.log(result)