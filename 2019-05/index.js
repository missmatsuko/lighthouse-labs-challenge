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
    name: 'propulsion',
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


/** EXECUTIONS **/
const modulesToLoad = ['life-support', 'propulsion'];
enableModule(findModuleIndex('life-support'));
loadModules(findModuleIndices(modulesToLoad));
