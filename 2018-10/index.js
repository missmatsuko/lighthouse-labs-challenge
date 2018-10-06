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

const UC_CHAR_CODE_START = "A".charCodeAt() - 1;

/** FUNCTIONS **/

/** Helper Functions **/

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
  const coordinatesLetter = coordinates.slice(0, 1);
  return coordinatesLetter.charCodeAt() - UC_CHAR_CODE_START - 1;
}
