/** CONSTANTS **/

// These first 3 were provided by the challenge
const navigation = {
  x: -2,
  y: 'Banana',
  z: 'Beep',
  speed: 'raaaaid',
};

const ship = {
  powerOn: false,
  modules: [],
  antenna: {
    active: false
  },
};

const radio = {
  frequency: 'Kenneth',
  message: 'Bugs are cool.',
  beacon: false,
};

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
    name: 'navigation',
    size: 8204,
    enabled: true,
    essential: true,
  },
];

module.exports = {
  navigation,
  ship,
  radio,
  availableModules,
};
