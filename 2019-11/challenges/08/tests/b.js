const trash = 'recycling'
const bins = {
  waste: 4,
  recycling: 2,
  compost: 5
}

const result = smartGarbage(trash, bins)
const keys = Object.keys(result)
assert.ok(keys.includes('waste'), "Ensure that there is a 'waste' key in the returned object");
assert.ok(keys.includes('recycling'), "Ensure that there is a 'recycling' key in the returned object");
assert.ok(keys.includes('compost'), "Ensure that there is a 'compost' key in the returned object");
