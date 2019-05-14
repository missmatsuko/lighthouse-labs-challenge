/*
* TEST.JS
* - Tests challenge functions with Jest testing framework.
* - Only tests functions and side-effects specified by the challenge so that other participants can use these tests, too.
* - Tests are based answers accepted by the challenge, since there's no way to know what tests the challenge uses.
*/


/** IMPORTS **/

/*
  Why use rewire?
  - Make it easy for participants to use; they should be able to copy & paste code directly from the challenge editor
  - Variables can be overwritten/changed before running tests
*/
const rewire = require('rewire');
const code = rewire('./index');
const functionNames = require('./functionNames');
const constants = require('./constants');


/** VARIABLES and FUNCTIONS **/

// Get functions from code
const codeFuncs = {};
for (const functionName of functionNames) {
  codeFuncs[functionName] = code.__get__(functionName);
}

// Get variables from code
// (their values are as after solution code has run)
const codeVars = {};
for (const variableName of Object.keys(constants)) {
  codeVars[variableName] = code.__get__(variableName);
}

/** TESTS **/

// Challenge #1
test('Challenge #1: `powerOn` function', () => {
  // Run `powerOn` function
  codeFuncs.powerOn();

  // Check that `ship.powerOn === true`
  expect(codeVars.ship.powerOn)
    .toBe(true);
});

// Challenge #2
test('Challenge #2: `countModules` function', () => {
  expect(codeFuncs.countModules())
    .toBe(5);
});

// Challenge #3
test('Challenge #3: `countEssential` function', () => {
  expect(codeFuncs.countEssential())
    .toBe(3);
});

// Challenge #4
test('Challenge #4: `loadModule` function', () => {
  // Load module at index 3
  codeFuncs.loadModule(3);

  // Check that module at index 3 has been loaded to ship.modules
  expect(codeVars.ship.modules[codeVars.ship.modules.length - 1])
    .toEqual(codeVars.availableModules[3]);
});

test('Challenge #4: `life-support` module enabled', () => {
  expect(codeVars.availableModules[1].enabled)
    .toBe(true);
});

test('Challenge #4: `life-support` module added to ship.modules', () => {
  expect(codeVars.ship.modules[0])
    .toEqual(codeVars.availableModules[1]);
});

// Challenge #5
test('Challenge #5: `findModuleIndex` function', () => {
  expect(codeFuncs.findModuleIndex('propulsion'))
    .toBe(2);
});

test('Challenge #5: `propulsion` module added to ship.modules', () => {
  expect(codeVars.ship.modules[1])
    .toEqual(codeVars.availableModules[2]);
});

// Challenge #6
test('Challenge #6: `navigation` module added to ship.modules', () => {
  expect(codeVars.ship.modules[2])
    .toEqual(codeVars.availableModules[3]);
});

// Challenge #7
test('Challenge #7: `resetLARRY` function', () => {
  // Mock `LARRY.quack`
  const LARRY = codeVars.LARRY;
  LARRY.quack = jest.fn();

  // Run `resetLARRY` function
  codeFuncs.resetLARRY();

  // Check `LARRY.quack` was run 10 times
  expect(LARRY.quack).toHaveBeenCalledTimes(10);
});

test('Challenge #7: `LARRY.quack` run 10 times', () => {
  // Check that LARRY.quackCount is 10
  expect(codeVars.LARRY.quackCount).toBe(10);
});

// Challenge #8
test('Challenge #8: `communication` module added to ship.modules', () => {
  expect(codeVars.ship.modules[3])
    .toEqual(codeVars.availableModules[4]);
});

// Challenge #9
test('Challenge #9: `radio.message` is JSON representation of `navigation`', () => {
  expect(codeVars.radio.message)
    .toEqual('{"x":-2,"y":4,"z":7,"speed":"raaaaid"}');
});

// Challenge #10
test('Challenge #10: `activateBeacon` function', () => {
  // Run `activateBeacon` function
  codeFuncs.activateBeacon();

  // Check that `radio.beacon === true`
  expect(codeVars.radio.beacon)
    .toBe(true);
});

// Challenge #11
test('Challenge #11: `setFrequency` function', () => {
  // Run `setFrequency` function
  codeFuncs.setFrequency();

  // Check that `radio.frequency === (radio.range.low + radio.range.high) / 2`
  expect(codeVars.radio.frequency)
    .toEqual((codeVars.radio.range.low + codeVars.radio.range.high) / 2);
});

// Challenge #12
// test('Challenge #12: `initialize` function', () => {
  // Run `initialize` function
  // codeFuncs.initialize();

  // Check that all navigation coordinates are set to 0
  // expect(codeVars.navigation.x)
  //   .toEqual(0);
  // expect(codeVars.navigation.y)
  //   .toEqual(0);
  // expect(codeVars.navigation.z)
  //   .toEqual(0);
// });

// Challenge #13
test('Challenge #13: `calibrateX` function', () => {
  // Check signal value is first not `undefined` value
  expect(codeVars.navigation.x)
    .toEqual(3);
});

// Challenge #14
test('Challenge #14: `calibrateY` function', () => {
  // Check signal value is next not `undefined` value
  expect(codeVars.navigation.y)
    .toEqual(12);
});

test('Challenge #14: `calibrateZ` function', () => {
  // Check signal value is next not `undefined` value
  expect(codeVars.navigation.z)
    .toEqual(13);
});
