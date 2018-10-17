/*
* TEST.JS - Test challenge functions.
* - Tests functions with Node's built-in assert module.
* - Only tests functions required by the challenge so that other participants can use these tests, too.
* - Tests are based on the examples given in challenge problems since there's no way to know what tests the challenge uses.
*/

// Built-in Node.js assert module
const assert = require('assert');

// Module to test unexported functions
const rewire = require('rewire');

// Include functions from solution JS file
const solution = rewire('./index');

// Set GRID variable
solution.__set__(
  'GRID',
  [
    ["", "", "", "^", "", "", "", "", "", ""],
    ["", "", "v", "", "~", "", "", "", "", ""],
    ["", "v", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "v", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "^", "~", "~", "", "", "", "^", "", ""],
    ["", "^", "", "~", "~", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", ""],
  ],
);

const challenges =
  [
    {
      number: 1,
      tests: [
        {
          name: 'countRows()',
          actual: solution.__get__('countRows')(),
          expected: 10, // The challenge instructions does say this should return 12, but the given GRID variable clearly has 10 items.
        },
      ]
    },
    {
      number: 2,
      tests: [
        {
          name: 'countColumns()',
          actual: solution.__get__('countColumns')(),
          expected: 10,
        },
      ]
    },
    {
      number: 3,
      tests: [
        {
          name: 'gridSize()',
          actual: solution.__get__('gridSize')(),
          expected: '10 x 10',
        },
      ]
    },
    {
      number: 4,
      tests: [
        {
          name: 'totalCells()',
          actual: solution.__get__('totalCells')(),
          expected: 100,
        },
      ]
    },
    {
      number: 5,
      tests: [
        {
          name: 'convertColumn("C4")',
          actual: solution.__get__('convertColumn')('C4'),
          expected: 2,
        },
      ]
    },
    {
      number: 6,
      tests: [
        {
          name: 'lightCell("B4")',
          actual: solution.__get__('lightCell')('B4'),
          expected: '',
        },
      ]
    },
    {
      number: 7,
      tests: [
        {
          name: 'isRock("D1")',
          actual: solution.__get__('isRock')('D1'),
          expected: true,
        },
      ]
    },
    {
      number: 8,
      tests: [
        {
          name: 'isCurrent("E2")',
          actual: solution.__get__('isCurrent')('E2'),
          expected: true,
        },
      ]
    },
    {
      number: 9,
      tests: [
        {
          name: 'isShip("B3")',
          actual: solution.__get__('isShip')('B3'),
          expected: true,
        },
      ]
    },
    {
      number: 10,
      tests: [
        {
          name: 'lightRow(2)',
          actual: solution.__get__('lightRow')(2),
          expected: ["", "", "v", "", "~", "", "", "", "", ""],
        },
      ]
    },
    {
      number: 11,
      tests: [
        {
          name: 'lightColumn("C")',
          actual: solution.__get__('lightColumn')('C'),
          expected: ["", "v", "", "", "", "", "", "~", "", ""], // Challenge instructions also seem to give bad values for this one
        },
      ]
    },
    {
      number: 12,
      tests: [
        {
          name: 'lightCell("Z3")',
          actual: solution.__get__('lightCell')('Z3'),
          expected: false,
        },
        {
          name: 'lightCell("A11")',
          actual: solution.__get__('lightCell')('A11'),
          expected: false, // Challenge seems to accept other values for this
        },
      ]
    },
    {
      number: 13,
      tests: [
        {
          name: 'allRocks()',
          actual: solution.__get__('allRocks')(),
          expected: ['D1', 'E3', 'F3', 'E4', 'F4', 'B8', 'H8', 'B9', 'B10'],
        },
        {
          name: 'allCurrents()',
          actual: solution.__get__('allCurrents')(),
          expected: ['E2', 'C8', 'D8', 'D9', 'E9', 'E10', 'F10'],
        },
      ]
    },
    {
      number: 14,
      tests: [
        {
          name: 'allShips()',
          actual: solution.__get__('allShips')(),
          expected: ['C2', 'B3', 'I5'],
        },
      ]
    },
    {
      number: 15,
      tests: [
        {
          name: 'firstRock()',
          actual: solution.__get__('firstRock')(),
          expected: 'D1',
        },
      ]
    },
    {
      number: 16,
      tests: [
        {
          name: 'firstCurrent()',
          actual: solution.__get__('firstCurrent')(),
          expected: 'E2',
        },
      ]
    },
  ];

for (const challenge of challenges) {
  for (const test of challenge.tests) {
    assert.deepEqual(
      test.actual,
      test.expected,
      `
        Challenge #${ challenge.number }
        - ${ test.name }
          - Expected: ${ test.expected }
          - Actual: ${ test.actual }
      `
    );
  }
}
