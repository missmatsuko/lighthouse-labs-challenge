/*
* ASSUMPTIONS:
* - GRID has at least 1 row, 1 column, and 1 cell.
* - There are no incomplete rows or columns (i.e. all rows have the same number of columns).
* - GRID never has more than 26 columns; valid column letters are A-Z.
*/

/** CONSTANTS **/
const GRID = [
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
];

const UPPERCASE_CHAR_CODE_START = "A".charCodeAt() - 1;

/** FUNCTIONS **/

/** Helper Functions **/
const letterToNumber = function(letter) {
  return letter.toUpperCase().charCodeAt() - UPPERCASE_CHAR_CODE_START;
}

const coordinatesToIndices = function (coordinates) {
  const coordinatesLetter = coordinates.slice(0, 1);
  const coordinatesNumber = coordinates.slice(1);

  return {
    column: letterToNumber(coordinatesLetter) - 1,
    row: coordinatesNumber - 1,
  };
}

/** Challenge Functions **/
const countRows = function() {
  return GRID.length;
}

const countColumns = function() {
  return GRID[0].length;
}

const gridSize = function() {
  return `${ countColumns() } x ${ countRows() }`;
}

const totalCells = function() {
  return countColumns() * countRows();
}

const convertColumn = function(coordinates) {
  return coordinatesToIndices(coordinates).column;
}

const lightCell = function(coordinates) {
  const position = coordinatesToIndices(coordinates);
  return GRID[position.row][position.column];
}
