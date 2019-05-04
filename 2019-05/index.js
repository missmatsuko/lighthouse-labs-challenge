/*
* INDEX.JS - My solutions for the coding challenge.
* - Replace this file with your own solution code to test it.
*/

/** VARIABLES **/
const navigation = {
  x: -2,
  y: "Banana",
  z: "Beep",
  speed: "raaaaid",
};

const ship = {
  powerOn: false,
  modules: [],
  antenna: {
    active: false
  },
};

const radio = {
  frequency: "Kenneth",
  message: "Bugs are cool.",
  beacon: false,
};

// NOTE: An example of this variable was not provided from the challenge
/*
  Array of objects ("modules") whose structure is based on challenge descriptions/hints:

  {
    name: 'life-support', // string (one must be 'life-support', should be unique in the array)
    size: '', // integer
    enabled: '', // boolean
    essential: , //boolean
  },

  Thanks to https://www.starjammersrd.com/equipment/starships/#Other_Systems for name ideas!
*/
const availableModules = [
  {
    name: 'armor',
    size: 0,
    enabled: true,
    essential: false,
  },
  {
    name: 'life-support',
    size: 12,
    enabled: false,
    essential: false,
  },
  {
    name: 'engines',
    size: 200,
    enabled: false,
    essential: true,
  },
  {
    name: 'sensors',
    size: 8204,
    enabled: true,
    essential: true,
  },
];


/** FUNCTIONS **/

/** Helper Functions **/
const getModuleIndexByName = (name) => {
  const moduleIndex = availableModules.findIndex(module => module.name === name);

  return moduleIndex === -1 ? false : moduleIndex;
}

/** Challenge Functions **/
const powerOn = () => {
  ship.powerOn = true;
}

const countModules = () => {
  return availableModules.length;
}

const countEssential = () => {
  return availableModules.reduce((numEssential, module) => {
    return module.essential ? numEssential + 1 : numEssential;
  }, 0);
}

const loadModule = (index) => {
  ship.modules.push(availableModules[index]);
}


/** EXECUTIONS **/
const lifeSupportModuleIndex = getModuleIndexByName('life-support');

if (lifeSupportModuleIndex) {
  availableModules[lifeSupportModuleIndex].enabled = true;
  loadModule(lifeSupportModuleIndex);
}
