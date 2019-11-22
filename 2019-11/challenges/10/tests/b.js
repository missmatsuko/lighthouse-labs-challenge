const spots = [
  ['s', 's', 's', 'S', 'R', 'M'],
  ['s', 'M', 's', 'S', 'R', 'M'],
  ['s', 'M', 's', 'S', 'R', 'm'],
  ['S', 'r', 's', 'm', 'R', 'M'],
  ['S', 'r', 's', 'm', 'R', 'M'],
  ['S', 'r', 'S', 'M', 'M', 'S']
]

const vehicle = 'regular'

const result = whereCanIPark(spots, vehicle)

const stringResult = result[0] + "_" + result[1]

const possibleAnswers = [
  "4_0", "1_4", "2_4", "3_4", "4_4"
]
const isOneOfTheRightAnswers = possibleAnswers.includes(stringResult)

assert.ok(isOneOfTheRightAnswers)
