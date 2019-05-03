/*
* INDEX.JS - My solutions for the coding challenge.
* - Replace this file with your own solution code to test it.
*/

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
