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

// Functions
const coordXToIndex = function(coordX) {
  return coordX.charCodeAt() - UC_CHAR_CODE_START - 1;
}

const coordYToIndex = function(coordY) {
  return coordY - 1;
}

const gridSize = function() {
  let width = GRID[0].length;
  let height = GRID.length;
  return(`${width} x ${height}`);
}

const totalCells = function() {
  return GRID.reduce((result, row) => (result + row.length), 0);
}

const lightCell = function(coord) {
  const coordX = coord.slice(0,1);
  const coordY = coord.slice(1);
  const content = GRID[coordYToIndex(coordY)][coordXToIndex(coordX)]||"";
  return content;
}

const isRock = function(coord) {
  return lightCell(coord) == ROCK;
}

const isCurrent = function(coord) {
  return lightCell(coord) == CURRENT;
}

const lightRow = function(coordY) {
  return GRID[coordY];
}

const lightColumn = function(coordX) {
  x = coordXToIndex(coordX);
  return GRID.map((row) => (row[x]));
}
