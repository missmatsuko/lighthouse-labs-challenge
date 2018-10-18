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
const S = 'v';
const R = '^';
const C = '~';
const _ = '';
const grids = [
  [
    /*        A B C D E F G H I J */
    /*  1 */ [_,_,_,R,_,_,_,_,_,_],
    /*  2 */ [_,_,S,_,C,_,_,_,_,_],
    /*  3 */ [_,S,_,_,R,R,_,_,_,_],
    /*  4 */ [_,_,_,_,R,R,_,_,_,_],
    /*  5 */ [_,_,_,_,_,_,_,_,S,_],
    /*  6 */ [_,_,_,_,_,_,_,_,_,_],
    /*  7 */ [_,_,_,_,_,_,_,_,_,_],
    /*  8 */ [_,R,C,C,_,_,_,R,_,_],
    /*  9 */ [_,R,_,C,C,_,_,_,_,_],
    /* 10 */ [_,R,_,_,C,C,_,_,_,_],
  ],
];

// Test configuration
const challenges =
  [
    [
      {
        name: 'countRows()',
        func: solution.__get__('countRows'),
        args: [],
        expected: [
          10, // The challenge instructions does say this should return 12, but the given GRID variable clearly has 10 items.
        ],
      },
    ],
    [
      {
        name: 'countColumns()',
        func: solution.__get__('countColumns'),
        args: [],
        expected: [
          10,
        ],
      },
    ],
    [
      {
        name: 'gridSize()',
        func: solution.__get__('gridSize'),
        args: [],
        expected: [
          '10 x 10',
        ],
      },
    ],
    [
      {
        name: 'totalCells()',
        func: solution.__get__('totalCells'),
        args: [],
        expected: [
          100,
        ],
      },
    ],
    [
      {
        name: 'convertColumn("C4")',
        func: solution.__get__('convertColumn'),
        args: ['C4'],
        expected: [
          2,
        ],
      },
    ],
    [
      {
        name: 'lightCell("B4")',
        func: solution.__get__('lightCell'),
        args: ['B4'],
        expected: [
          '',
        ],
      },
    ],
    [
      {
        name: 'isRock("D1")',
        func: solution.__get__('isRock'),
        args: ['D1'],
        expected: [
          true,
        ],
      },
    ],
    [
      {
        name: 'isCurrent("E2")',
        func: solution.__get__('isCurrent'),
        args: ['E2'],
        expected: [
          true,
        ],
      },
    ],
    [
      {
        name: 'isShip("B3")',
        func: solution.__get__('isShip'),
        args: ['B3'],
        expected: [
          true,
        ],
      },
    ],
    [
      {
        name: 'lightRow(2)',
        func: solution.__get__('lightRow'),
        args: [2],
        expected: [
          ["", "", "v", "", "~", "", "", "", "", ""],
        ],
      },
    ],
    [
      {
        name: 'lightColumn("C")',
        func: solution.__get__('lightColumn'),
        args: ['C'],
        expected: [
          ["", "v", "", "", "", "", "", "~", "", ""], // Challenge instructions also seem to give bad values for this one
        ],
      },
    ],
    [
      {
        name: 'lightCell("Z3")',
        func: solution.__get__('lightCell'),
        args: ['Z3'],
        expected: [
          false,
        ],
      },
      {
        name: 'lightCell("A11")',
        func: solution.__get__('lightCell'),
        args: ['A11'],
        expected: [
          false, // Challenge seems to accept other values for this
        ],
      },
    ],
    [
      {
        name: 'allRocks()',
        func: solution.__get__('allRocks'),
        args: [],
        expected: [
          ['D1', 'E3', 'F3', 'E4', 'F4', 'B8', 'H8', 'B9', 'B10'],
        ],
      },
      {
        name: 'allCurrents()',
        func: solution.__get__('allCurrents'),
        args: [],
        expected: [
          ['E2', 'C8', 'D8', 'D9', 'E9', 'E10', 'F10'],
        ],
      },
    ],
    [
      {
        name: 'allShips()',
        func: solution.__get__('allShips'),
        args: [],
        expected: [
          ['C2', 'B3', 'I5'],
        ],
      },
    ],
    [
      {
        name: 'firstRock()',
        func: solution.__get__('firstRock'),
        args: [],
        expected: [
          'D1',
        ],
      },
    ],
    [
      {
        name: 'firstCurrent()',
        func: solution.__get__('firstCurrent'),
        args: [],
        expected: [
          'E2',
        ],
      },
    ],
    [
      {
        name: 'shipReport()',
        func: solution.__get__('shipReport'),
        args: [],
        expected: [
          ['C2', 'I5'], // Challenge instructions also seem to give bad values for this one
        ],
      },
    ],
    [
      {
        name: 'howDangerous("E2")',
        func: solution.__get__('howDangerous'),
        args: ['E2'],
        expected: [
          50,
        ],
      },
      {
        name: 'howDangerous(E3)',
        func: solution.__get__('howDangerous'),
        args: ['E3'],
        expected: [
          100,
        ],
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
    for (const [gridIndex, grid] of grids.entries()) {
      testsRun++;

      // Run the solution code against this grid
      solution.__set__('GRID', grid);
      const actual = test.func.apply(this, test.args);

      // Log actual and expected results
      console.log(
        heredoc`
          ${chalk.underline(test.name)}
          Expected: ${ test.expected[gridIndex] }
          Actual: ${ actual }`
      );

      // Log passed or failed based on test
      try {
        assert.deepEqual(actual, test.expected[gridIndex]);
      }
      catch (error) {
        console.error(chalk.red('FAILED'));
        continue;
      }

      testsPassed++;
      console.log(chalk.green('PASSED'));
    }
  }
}

console.log(chalk.inverse(`\nTests Passed: ${ testsPassed }/${ testsRun }`));
