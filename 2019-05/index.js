const rewire = require('rewire');

// Import constants
const constants = require('./constants');

// Set constants to global namespace
for (const [key, value] of Object.entries(constants)) {
  global[key] = value;
}

// Import solution code
const solutions = rewire('./solutions');

// Export functions for tests
for (const name of [
  'powerOn',
  'countModules',
  'countEssential',
  'loadModule',
  'findModuleIndex',
]) {
  global[name] = solutions.__get__(name);
}
