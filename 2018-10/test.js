/*
* TEST.JS - Test challenge functions.
* - Tests functions with Node's built-in assert module.
* - Only tests functions required by the challenge so that other participants can use these tests, too.
* - Tests are based on the examples given in challenge problems since there's no way to know what tests the challenge uses.
*/

// Modules to format and style console logs
const chalk = require('chalk');
const heredoc = require('heredocument');

// Module to test unexported functions
const rewire = require('rewire');

// Built-in Node.js assert module
const assert = require('assert');

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

// Test configuration
const challenges =
  [
    [
      {
        name: 'countRows()',
        actual: solution.__get__('countRows')(),
        expected: 10, // The challenge instructions does say this should return 12, but the given GRID variable clearly has 10 items.
      },
    ],
    [
      {
        name: 'countColumns()',
        actual: solution.__get__('countColumns')(),
        expected: 10,
      },
    ],
    [
      {
        name: 'gridSize()',
        actual: solution.__get__('gridSize')(),
        expected: '10 x 10',
      },
    ],
    [
      {
        name: 'totalCells()',
        actual: solution.__get__('totalCells')(),
        expected: 100,
      },
    ],
    [
      {
        name: 'convertColumn("C4")',
        actual: solution.__get__('convertColumn')('C4'),
        expected: 2,
      },
    ],
    [
      {
        name: 'lightCell("B4")',
        actual: solution.__get__('lightCell')('B4'),
        expected: '',
      },
    ],
    [
      {
        name: 'isRock("D1")',
        actual: solution.__get__('isRock')('D1'),
        expected: true,
      },
    ],
    [
      {
        name: 'isCurrent("E2")',
        actual: solution.__get__('isCurrent')('E2'),
        expected: true,
      },
    ],
    [
      {
        name: 'isShip("B3")',
        actual: solution.__get__('isShip')('B3'),
        expected: true,
      },
    ],
    [
      {
        name: 'lightRow(2)',
        actual: solution.__get__('lightRow')(2),
        expected: ["", "", "v", "", "~", "", "", "", "", ""],
      },
    ],
    [
      {
        name: 'lightColumn("C")',
        actual: solution.__get__('lightColumn')('C'),
        expected: ["", "v", "", "", "", "", "", "~", "", ""], // Challenge instructions also seem to give bad values for this one
      },
    ],
    [
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
    ],
    [
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
    ],
    [
      {
        name: 'allShips()',
        actual: solution.__get__('allShips')(),
        expected: ['C2', 'B3', 'I5'],
      },
    ],
    [
      {
        name: 'firstRock()',
        actual: solution.__get__('firstRock')(),
        expected: 'D1',
      },
    ],
    [
      {
        name: 'firstCurrent()',
        actual: solution.__get__('firstCurrent')(),
        expected: 'E2',
      },
    ],
    [
      {
        name: 'shipReport()',
        actual: solution.__get__('shipReport')(),
        expected: ['C2', 'I5'], // Challenge instructions also seem to give bad values for this one
      },
    ],
    [
      {
        name: 'howDangerous("E2")',
        actual: solution.__get__('howDangerous')('E2'),
        expected: 50,
      },
      {
        name: 'howDangerous(E3)',
        actual: solution.__get__('howDangerous')('E3'),
        expected: 100,
      },
    ],
  ];

// Run tests
let testsPassed = 0;
let testsRun = 0;

for (const [index, challenge] of challenges.entries()) {
  const challengeNumber = index + 1;

  // Log challenge number
  console.log(chalk.bold(`\nChallenge #${ challengeNumber }`));

  for (const test of challenge) {
    testsRun++;

    // Log actual and expected results
    console.log(
      heredoc`
        ${chalk.underline(test.name)}
        Expected: ${ test.expected }
        Actual: ${ test.actual }`
    );

    // Log passed or failed based on test
    try {
      assert.deepEqual(test.actual, test.expected);
    }
    catch {
      console.error(chalk.red('FAILED'));
      continue;
    }

    testsPassed++;
    console.log(chalk.green('PASSED'));
  }
}

console.log(chalk.inverse(`\nTests Passed: ${ testsPassed }/${ testsRun }`));
