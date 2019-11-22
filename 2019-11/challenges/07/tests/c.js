const interviews = [
  'smart city',
  'rebuild the lighthouse',
  'arts funding',
  'transportation',
  'arts funding',
  'rebuild the lighthouse',
  'sports funding',
  'tax cuts',
  'smart city',
  'arts funding',
  'smart city'
]

const results = termTopics(interviews)
assert.deepStrictEqual(results, [3, 3, 1]);
