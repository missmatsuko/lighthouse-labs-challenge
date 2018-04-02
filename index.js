// Constants
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

// Functions
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
  return lightCell(coordXY) == ROCK;
}

const isCurrent = function(coordXY) {
  return lightCell(coordXY) == CURRENT;
}

const lightRow = function(coordY) {
  return GRID[coordY];
}

const lightColumn = function(coordX) {
  const x = coordXToIndex(coordX);
  return GRID.map(row => row[x]);
}

const isSafe = function(coordXY) {
  return lightCell(coordXY) == EMPTY;
}

const allRocks = function() {
  // Makes GRID into array of arrays with rocks having coordinates
  const rockMap = GRID.map((row, y) => (
    row.map((cell, x) => (cell == ROCK ? indicesToCoordXY(x, y) : ''))
  ));
  // Flatten array of arrays into single level array and remove empty items
  return [].concat(...rockMap).filter((cell) => (cell !== ""));
}
