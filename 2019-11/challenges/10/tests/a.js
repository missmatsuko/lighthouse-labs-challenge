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

assert.ok(Array.isArray(result), "If there is an available spot, your function must return an array")
