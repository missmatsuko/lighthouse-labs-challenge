/*
* ASSUMPTIONS:
* - GRID has at least 1 row, 1 column, and 1 cell.
* - There are no incomplete rows or columns (i.e. all rows have the same number of columns).
* - GRID never has more than 26 columns; valid column letters are A-Z.
* - There will always be at least 1 instance of each SYMBOL in GRID
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

const numberToLetter = function(number) {
  if(number > UPPERCASE_CHAR_CODE_START) {
    number -= UPPERCASE_CHAR_CODE_START;
  }
  return String.fromCharCode(UPPERCASE_CHAR_CODE_START + number);
}

const indexToNumber = function(index) {
  return index + 1;
}

const numberToIndex = function(number) {
  return number - 1;
}

const indicesToCoordinates = function(indices) {
  return `${numberToLetter(indexToNumber(indices.column))}${indexToNumber(indices.row)}`;
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

const getCoordinatesOfSymbol = function(symbol) {
  const coordinatesArray = [];
  GRID.forEach((row, i) => {
    row.forEach((cellContent, j) => {
      if (cellContent == symbol) {
        coordinatesArray.push(indicesToCoordinates({
          column: j,
          row: i,
        }));
      }
    });
  });
  return coordinatesArray;
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
  return getCoordinatesOfSymbol(SYMBOLS.rock);
}

const allCurrents = function() {
  return getCoordinatesOfSymbol(SYMBOLS.current);
}

const allShips = function() {
  return getCoordinatesOfSymbol(SYMBOLS.ship);
}

const firstRock = function() {
  return allRocks()[0];
}

const firstCurrent = function() {
  return allRocks()[0];
}
