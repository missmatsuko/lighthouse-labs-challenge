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
  const coordX = coordXY.slice(0,1);
  const coordY = coordXY.slice(1);
  
  return [coordXToIndex(coordX), coordYToIndex(coordY)];
}

const gridSize = function() {
  let width = GRID[0].length;
  let height = GRID.length;
  return(`${width} x ${height}`);
}

const totalCells = function() {
  return GRID.reduce((result, row) => (result + row.length), 0);
}

const lightCell = function(coordXY) {
  const xy = coordXYToIndices(coordXY);
  const content = GRID[xy[0]][xy[1]]||"";
  return content;
}

const isRock = function(coordXY) {
  return lightCell(coordXY) == ROCK;
}

const isCurrent = function(coordXY) {
  return lightCell(coordXY) == CURRENT;
}

const isSafe = function(coordXY) {
  return lightCell(coordXY) == EMPTY;
}

const lightRow = function(coordY) {
  return GRID[coordY];
}

const lightColumn = function(coordX) {
  x = coordXToIndex(coordX);
  return GRID.map((row) => (row[x]));
}
