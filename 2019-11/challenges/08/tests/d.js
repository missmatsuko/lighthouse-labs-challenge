const trash = 'recycling'
const bins = {
  waste: 4,
  recycling: 2,
  compost: 5
}
const result = smartGarbage(trash, bins)

assert.equal(result.waste, 4);
assert.equal(result.compost, 5);
