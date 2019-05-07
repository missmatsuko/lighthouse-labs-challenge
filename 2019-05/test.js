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

/** TESTS **/

// Challenge #1
test('Challenge #1: `powerOn` function', () => {
  code.__get__('powerOn')();
  expect(code.__get__('ship').powerOn).toBe(true);
});

// Challenge #2
test('Challenge #2: `countModules` function', () => {
  expect(code.__get__('countModules')()).toBe(4);
});

// Challenge #3
test('Challenge #3: `countEssential` function', () => {
  expect(code.__get__('countEssential')()).toBe(2);
});

// Challenge #4
test('Challenge #4: `loadModule` function', () => {
  const shipModules = code.__get__('ship').modules;
  const availableModules = code.__get__('availableModules');
  code.__get__('loadModule')(3);
  expect(shipModules[shipModules.length - 1]).toEqual(availableModules[3]);
});

test('Challenge #4: `life-support` module is enabled', () => {
  expect(code.__get__('availableModules')[1].enabled).toBe(true);
});

test('Challenge #4: life-support` module added to shipModules', () => {
  const shipModules = code.__get__('ship').modules;
  const availableModules = code.__get__('availableModules');
  const lifeSupportModule = availableModules[1];
  expect(shipModules[0]).toEqual(lifeSupportModule);
});

// Challenge #5
test('Challenge #5: `findModuleIndex` function', () => {
  expect(code.__get__('findModuleIndex')('propulsion')).toBe(2);
});

test('Challenge #5: `propulsion` module added to shipModules', () => {
  const shipModules = code.__get__('ship').modules;
  const availableModules = code.__get__('availableModules');
  const propulsionModule = availableModules[2];
  expect(shipModules[1]).toEqual(propulsionModule);
});

// Challenge #6
test('Challenge #6: `navigation` module added to shipModules', () => {
  const shipModules = code.__get__('ship').modules;
  const availableModules = code.__get__('availableModules');
  const navigationModule = availableModules[3];
  expect(shipModules[2]).toEqual(navigationModule);
});
