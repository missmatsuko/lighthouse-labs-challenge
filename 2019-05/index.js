/*
* INDEX.JS - My solutions for the coding challenge.
* - Replace this file with your own solution code to test it.
*/

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
