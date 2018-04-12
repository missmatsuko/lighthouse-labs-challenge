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
const EMPTY = "";
const ROCK = "^";
const CURRENT = "~";

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

const setCell = function(coordXY, cellContent) {
  const [x, y] = coordXYToIndices(coordXY);
  GRID[y][x] = cellContent;
}

const getLocations = function(cellContent) {
  // Makes new GRID-like array of arrays, locationMap: an array of arrays with cells containing cellContent having coordinates
  const locationMap = GRID.map((row, y) => (
    row.map((cell, x) => (cell === cellContent ? indicesToCoordXY(x, y) : false))
  ));
  // Flatten locationMap into single level array and remove false items
  return [].concat(...locationMap).filter((cell) => (cell));
}

const getRanges = function(coordXY) {
  const [xCenter, yCenter] = coordXYToIndices(coordXY);
  let rangeX = [xCenter - 1, xCenter, xCenter + 1];
  let rangeY = [yCenter - 1, yCenter, yCenter + 1];
  return [rangeX, rangeY];
}

const roundToTwo = function(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

/** Challenge Functions **/
const gridSize = function() {
  const width = GRID[0].length;
  const height = GRID.length;
  return `${width} x ${height}`;
}

const totalCells = function() {
  return GRID.reduce((result, row) => (result + row.length), 0);
}

const lightCell = function(coordXY) {
  const [x, y] = coordXYToIndices(coordXY);
  const content = typeof(GRID[y][x]) !== undefined ? GRID[y][x] : false;
  return content;
}

const isSafe = function(coordXY) {
  return checkCell(coordXY, EMPTY);
}

const isRock = function(coordXY) {
  return checkCell(coordXY, ROCK);
}

const isCurrent = function(coordXY) {
  return checkCell(coordXY, CURRENT);
}

const lightRow = function(coordY) {
  const y = coordYToIndex(coordY);
  return GRID[y];
}

const lightColumn = function(coordX) {
  const x = coordXToIndex(coordX);
  return GRID.map(row => row[x]);
}

// Not actually requested in challenge
const allEmpty = function() {
  return getLocations(EMPTY);
}

const allRocks = function() {
  return getLocations(ROCK);
}

const allCurrents = function() {
  return getLocations(CURRENT);
}

const firstRock = function() {
  return allRocks()[0];
}

const firstCurrent = function() {
  return allCurrents()[0];
}

const isDangerous = function(coordXY) {
  const [rangeX, rangeY] = getRanges(coordXY);
  for (let x of rangeX) {
    for (let y of rangeY) {
      if (x >= 0 && y >= 0 && x <= GRID[0].length && y <= GRID.length) {
        if (!isSafe(indicesToCoordXY(x, y))) {
          return true;
        }
      }
    }
  }
  return false;
}

const distressBeacon = function(coordXY) {
  const [rangeX, rangeY] = getRanges(coordXY);

  for (let x of rangeX) {
    for (let y of rangeY) {
      const currentCoordXY = indicesToCoordXY(x, y);
      if (x >= 0 && y >= 0 && x <= GRID[0].length && y <= GRID.length && currentCoordXY != coordXY) {
        if (!isDangerous(currentCoordXY)) {
          return currentCoordXY;
        }
      }
    }
  }
  return false;
}

const percentageReport = function() {
  return ([allEmpty().length, allRocks().length, allCurrents().length]);
}

const safetyReport = function() {
  const numEmpty = GRID.reduce(function(safeCells, row) {
    return row.reduce(function(safeCells, cell) {
      return safeCells + (cell === EMPTY ? 1 : 0);
    }, safeCells);
  }, 0);
  const numCells = totalCells();
  return `${roundToTwo(numEmpty / numCells * 100)}%`;
}

const calcDistance = function(coordXY1, coordXY2) {
  const [x1, y1] = coordXYToIndices(coordXY1);
  const [x2, y2] = coordXYToIndices(coordXY2);
  return roundToTwo(((x2 - x1) ** 2 + (y2 - y1) ** 2) ** (1 / 2));
}

/* Challenge Function Calls */
setCell('J9', ROCK);
