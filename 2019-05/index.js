const rewire = require('rewire');

// Import function names
const functionNames = require('./functionNames');

// Import constants
const constants = require('./constants');

// Set constants to global namespace
for (const [key, value] of Object.entries(constants)) {
  global[key] = value;
}

// Import solution code
const solutions = rewire('./solutions');

// Set solutions functions to global namespace
for (const functionName of functionNames) {
  global[functionName] = solutions.__get__(functionName);
}
