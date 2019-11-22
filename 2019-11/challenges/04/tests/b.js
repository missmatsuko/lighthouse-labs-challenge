assert.deepStrictEqual(registerToVote('Bobby', ['Jimmy', 'Suzie', 'Bobby']), ['Jimmy', 'Suzie']);
assert.deepStrictEqual(registerToVote('Floyd', ['Tomasa', 'Tennille', 'Tayna', 'Eufemia', 'Floyd']), ['Tomasa', 'Tennille', 'Tayna', 'Eufemia']);
assert.deepStrictEqual(registerToVote('Bradley', ['Jake', 'Alanna', 'Bradley', 'Stephanie']), ['Jake', 'Alanna', 'Stephanie']);
