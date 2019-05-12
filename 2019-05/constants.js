/** CONSTANTS **/

// These first 3 were provided by the challenge
const navigation = {
  x: -2,
  y: 4,
  z: 7,
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
  range: {
    low: 88,
    high: 108,
  },
  frequency: 0,
  message: "Bugs are cool.",
  beacon: false
};

// LARRY with quack function specified by challenge, but not provided
const LARRY = {
  quack: () => {
    LARRY.quackCount++;
  },
  quackCount: 0,
}

/*
  Array of objects ("modules") whose structure is based on challenge descriptions/hints:

  {
    name: 'life-support', // string
    // - name should be unique in array
    // - array must contain these names: 'life-support', 'propulsion', 'navigation', 'communication'
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
  {
    name: 'communication',
    size: 94,
    enabled: false,
    essential: true,
  },
];

module.exports = {
  navigation,
  ship,
  radio,
  LARRY,
  availableModules,
};
