/** CONSTANTS **/
const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "", "", "~", "", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

const UC_CHAR_CODE_START = "A".charCodeAt() - 1;
const CURRENT = "~";
const ROCK = "^";
const EMPTY = "";

/** FUNCTIONS **/

/** Helper Functions **/
const coordXToIndex = function(coordX) {
  return coordX.charCodeAt() - UC_CHAR_CODE_START - 1;
}

const coordYToIndex = function(coordY) {
  return coordY - 1;
}

const coordXYToIndices = function(coordXY) {
  const coordX = coordXY.slice(0, 1);
  const coordY = coordXY.slice(1);

  return [coordXToIndex(coordX), coordYToIndex(coordY)];
}

const indexXToCoord = function(index) {
  return String.fromCharCode(index + UC_CHAR_CODE_START + 1);
}

const indexYToCoord = function(index) {
  return index + 1;
}

const indicesToCoordXY = function(x, y) {
  return `${indexXToCoord(x)}${indexYToCoord(y)}`;
}

const checkCell = function(coordXY, cellContent) {
  return lightCell(coordXY) === cellContent;
}

const getLocations = function(cellContent) {
  // Makes new GRID-like array of arrays, locationMap: an array of arrays with cells containing cellContent having coordinates
  const locationMap = GRID.map((row, y) => (
    row.map((cell, x) => (cell === cellContent ? indicesToCoordXY(x, y) : false))
  ));
  // Flatten locationMap into single level array and remove false items
  return [].concat(...locationMap).filter((cell) => (cell));
}

/** Challenge Functions **/
const gridSize = function() {
  const width = GRID[0].length;
  const height = GRID.length;
  return (`${width} x ${height}`);
}

const totalCells = function() {
  return GRID.reduce((result, row) => (result + row.length), 0);
}

const lightCell = function(coordXY) {
  const xy = coordXYToIndices(coordXY);
  const content = GRID[xy[0]][xy[1]] || "";
  return content;
}

const isRock = function(coordXY) {
  return checkCell(coordXY, ROCK);
}

const isCurrent = function(coordXY) {
  return checkCell(coordXY, CURRENT);
}

const isSafe = function(coordXY) {
  return checkCell(coordXY, EMPTY);
}

const lightRow = function(coordY) {
  return GRID[coordY];
}

const lightColumn = function(coordX) {
  const x = coordXToIndex(coordX);
  return GRID.map(row => row[x]);
}

const allRocks = function() {
  return getLocations(ROCK);
}

const allCurrents = function() {
  return getLocations(CURRENT);
}
