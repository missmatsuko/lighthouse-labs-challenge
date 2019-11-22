assert.deepStrictEqual(castVote('Sally', [2, 2, 1]), [2, 3, 1]);
assert.deepStrictEqual(castVote('Tim', [4, 2, 2]), [5, 2, 2]);
assert.deepStrictEqual(castVote('Beth', [1, 1, 0]), [1, 1, 1]);
