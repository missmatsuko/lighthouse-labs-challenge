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

const SYMBOLS = {
  current: "~",
  rock: "^",
  ship: "v",
}

/** FUNCTIONS **/

/** Helper Functions **/
const letterToNumber = function(letter) {
  return letter.toUpperCase().charCodeAt() - UPPERCASE_CHAR_CODE_START;
}

const numberToIndex = function(number) {
  return number - 1;
}

const coordinatesToIndices = function(coordinates) {
  const coordinatesLetter = coordinates.slice(0, 1);
  const coordinatesNumber = coordinates.slice(1);

  return {
    column: numberToIndex(letterToNumber(coordinatesLetter)),
    row: numberToIndex(coordinatesNumber),
  };
}

const checkContent = function(coordinates, symbol) {
  return lightCell(coordinates) === symbol;
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
  return GRID[position.row][position.column] || false;
}

const isRock = function(coordinates) {
  return checkContent(coordinates, SYMBOLS.rock);
}

const isCurrent = function(coordinates) {
  return checkContent(coordinates, SYMBOLS.current);
}

const isShip = function(coordinates) {
  return checkContent(coordinates, SYMBOLS.ship);
}

const lightRow = function(rowNumber) {
  return GRID[numberToIndex(rowNumber)];
}

const lightColumn = function(columnLetter) {
  return GRID.map(gridRow => gridRow[numberToIndex(letterToNumber(columnLetter))]);
}

const allRocks = function() {
  const rockArray = [];
  GRID.forEach((row,i)=>{
    row.forEach((cellContent, j)=>{
      if(cellContent == SYMBOLS.rock) {
        rockArray.push(`${String.fromCharCode(UPPERCASE_CHAR_CODE_START + j + 1)}${i+1}`);
      }
    });
  });
  return rockArray;
}

const allCurrents = function() {
  const rockArray = [];
  GRID.forEach((row,i)=>{
    row.forEach((cellContent, j)=>{
      if(cellContent == SYMBOLS.current) {
        rockArray.push(`${String.fromCharCode(UPPERCASE_CHAR_CODE_START + j + 1)}${i+1}`);
      }
    });
  });
  return rockArray;
}

const allShips = function() {
  const rockArray = [];
  GRID.forEach((row,i)=>{
    row.forEach((cellContent, j)=>{
      if(cellContent == SYMBOLS.ship) {
        rockArray.push(`${String.fromCharCode(UPPERCASE_CHAR_CODE_START + j + 1)}${i+1}`);
      }
    });
  });
  return rockArray;
}
