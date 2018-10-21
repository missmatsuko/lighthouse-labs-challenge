/*
* INDEX.JS - My solutions for the coding challenge.
* - Replace this file with your own solution code to test it.
*
/

/*
* Assumptions:
* - GRID has at least 1 row, 1 column, and 1 cell.
* - There are no incomplete rows or columns (i.e. all rows have the same number of columns).
* - GRID never has more than 26 columns; valid column letters are A-Z.
* - There will always be at least 2 instances of each SYMBOL in GRID
*/

/** CONSTANTS **/
const UPPERCASE_CHAR_CODE_START = "A".charCodeAt() - 1;

const SYMBOLS = {
  current: {
    marker: '~',
    danger: 50,
  },
  empty: {
    marker: '',
    danger: 0,
  },
  rock: {
    marker: '^',
    danger: 100,
  },
  ship: {
    marker: 'v',
    danger: 0,
  },
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

const checkContent = function(coordinates, marker) {
  return lightCell(coordinates) === marker;
}

const getSymbolFromMarker = function(marker) {
  return Object.keys(SYMBOLS).find(key => SYMBOLS[key].marker === marker);
}

const getCoordinatesOfMarker = function(marker) {
  const coordinatesArray = [];
  GRID.forEach((row, i) => {
    row.forEach((cellContent, j) => {
      if (cellContent == marker) {
        coordinatesArray.push(indicesToCoordinates({
          column: j,
          row: i,
        }));
      }
    });
  });
  return coordinatesArray;
}

const decimalToPercentage = function(decimal, decimalPlaces = 0) {
  return (decimal * 100).toFixed(decimalPlaces);
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

  if (position.row < countRows() && position.column < countColumns()) {
    return GRID[position.row][position.column];
  }

  return false;
}

const isRock = function(coordinates) {
  return checkContent(coordinates, SYMBOLS.rock.marker);
}

const isCurrent = function(coordinates) {
  return checkContent(coordinates, SYMBOLS.current.marker);
}

const isShip = function(coordinates) {
  return checkContent(coordinates, SYMBOLS.ship.marker);
}

const lightRow = function(rowNumber) {
  return GRID[numberToIndex(rowNumber)];
}

const lightColumn = function(columnLetter) {
  return GRID.map(gridRow => gridRow[numberToIndex(letterToNumber(columnLetter))]);
}

const allRocks = function() {
  return getCoordinatesOfMarker(SYMBOLS.rock.marker);
}

const allCurrents = function() {
  return getCoordinatesOfMarker(SYMBOLS.current.marker);
}

const allShips = function() {
  return getCoordinatesOfMarker(SYMBOLS.ship.marker);
}

const firstRock = function() {
  return allRocks()[0];
}

const firstCurrent = function() {
  return allCurrents()[0];
}

const shipReport = function() {
  const ships = allShips();
  return [ships[0], ships[ships.length - 1]];
}

const howDangerous = function(coordinates) {
  return SYMBOLS[getSymbolFromMarker(lightCell(coordinates))].danger;
}

const percentageReport = function() {
  const denominator = totalCells();
  return [decimalToPercentage(allRocks().length / denominator, 2), decimalToPercentage(allCurrents().length / denominator, 2)];
}

const safetyReport = function() {
  return GRID.map((gridRow) => {
    return gridRow.map((cellContent) => {
      return SYMBOLS[getSymbolFromMarker(cellContent)].danger;
    });
  });
}
