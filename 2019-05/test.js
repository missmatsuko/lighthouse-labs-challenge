/*
* TEST.JS - Test challenge functions.
* - Tests functions with Jest.
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
const solution = rewire('./index');

/** TESTS **/

// Challenge #1
test('Challenge #1: `powerOn` function', () => {
  solution.__get__('powerOn')();
  expect(solution.__get__('ship').powerOn).toBe(true);
});

// Challenge #2
test('Challenge #2: `countModules` function', () => {
  expect(solution.__get__('countModules')()).toBe(4);
});

// Challenge #3
test('Challenge #3: `countEssential` function', () => {
  expect(solution.__get__('countEssential')()).toBe(2);
});

// Challenge #4
test('Challenge #4: `loadModule` function', () => {
  const shipModules = solution.__get__('ship').modules;
  const availableModules = solution.__get__('availableModules');
  solution.__get__('loadModule')(3);
  expect(shipModules[shipModules.length - 1]).toEqual(availableModules[3]);
});

test('Challenge #4: `lifeSupport` module is enabled', () => {
  expect(solution.__get__('availableModules')[1].enabled).toBe(true);
});
