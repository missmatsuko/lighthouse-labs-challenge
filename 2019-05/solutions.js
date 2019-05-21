/*
* SOLUTION.JS
* - My solutions for the coding challenge.
* - Replace this file with your own solution code to test it.
*/

/** VARIABLES **/
const modulesToLoad = ['life-support', 'propulsion', 'navigation', 'communication'];

const numberVowelMap = {
  '0': 'o',
  '1': 'i',
  '2': 'u',
  '3': 'e',
  '4': 'a',
  '5': 'y',
}

/** FUNCTIONS **/

/** Helper Functions **/
const findModuleIndices = (names) => {
  return names.map(name => findModuleIndex(name));
}

const loadModules = (indices) => {
  for (const index of indices) {
    loadModule(index);
  }
}

const enableModule = (index) => {
  availableModules[index].enabled = true;
}

const calibrateAxis = (axis) => {
  let iterations = 60;

  if (axis === 'x') {
    iterations = 12;
  }

  for (const iteration of new Array(iterations)) {
    const signal = checkSignal();

    if (signal !== undefined) {
      navigation[axis] = signal;
      break;
    }
  }
}

/** Challenge Functions **/
const powerOn = () => {
  ship.powerOn = true;
}

const countModules = () => {
  return availableModules.length;
}

const countEssential = () => {
  return availableModules.filter(module => module.essential).length;
}

const loadModule = (index) => {
  const module = availableModules[index];

  if (module) {
    ship.modules.push(module);
  }
}

const findModuleIndex = (name) => {
  const moduleIndex = availableModules.findIndex(module => module.name === name);

  return moduleIndex === -1 ? false : moduleIndex;
}

const resetLARRY = () => {
  for (const iteration of new Array(10)) {
    LARRY.quack();
  }
}

const setMessage = () => {
  radio.message = JSON.stringify(navigation);
}

const activateBeacon = () => {
  radio.beacon = true;
}

const setFrequency = () => {
  radio.frequency = (radio.range.low + radio.range.high) / 2;
}

const initialize = () => {
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
}

const calibrateX = () => {
  calibrateAxis('x');
}

const calibrateY = () => {
  calibrateAxis('y');
}

const calibrateZ = () => {
  calibrateAxis('z');
}

const calibrate = () => {
  calibrateX();
  calibrateY();
  calibrateZ();
}

const setSpeed = (speed) => {
  const parsedSpeed = parseInt(speed);

  if (parsedSpeed >= 0) {
    navigation.speed = parsedSpeed;
  }
}

const activateAntenna = () => {
  ship.antenna.active = true;
}

const sendBroadcast = () => {
  for (const iteration of new Array(100)) {
    broadcast();
  }
}

const configureBroadcast = () => {
  setFrequency();
  activateAntenna();
  sendBroadcast();
}

const decodeMessage = (message) => {
  for (const [number, vowel] of Object.entries(numberVowelMap)) {
    const regex = new RegExp(number, 'g');
    message = message.replace(regex, vowel);
  }
  return message;
}

const returnToEarth = () => {
  const coordinates = {
    'x': parseInt(decodeMessage(broadcast('x')), 16),
    'y': parseInt(decodeMessage(broadcast('y')), 16),
    'z': parseInt(decodeMessage(broadcast('z')), 16),
  }

  for (const [axis, coordinate] of Object.entries(coordinates)) {
    navigation[axis] = coordinate;
  }
}

/** EXECUTIONS **/
enableModule(findModuleIndex('life-support'));
loadModules(findModuleIndices(modulesToLoad));
resetLARRY();
setMessage();
configureBroadcast();
returnToEarth();
