const interviews = [
  'smart city', 'rebuild the lighthouse', 'arts funding', 'transportation',
  'arts funding', 'rebuild the lighthouse', 'sports funding', 'tax cuts', 'smart city',
  'arts funding', 'smart city'
]

const results = termTopics(interviews)
assert.equal(typeof results[0], "number");
assert.equal(typeof results[1], "number");
assert.equal(typeof results[2], "number");
