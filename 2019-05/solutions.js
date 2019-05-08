/*
* SOLUTION.JS
* - My solutions for the coding challenge.
* - Replace this file with your own solution code to test it.
*/

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

const resetLARRY = () => {
  for (const iteration of new Array(10)) {
    LARRY.quack();
  }
}


/** EXECUTIONS **/
const modulesToLoad = ['life-support', 'propulsion', 'navigation', 'communication'];
enableModule(findModuleIndex('life-support'));
loadModules(findModuleIndices(modulesToLoad));
resetLARRY();
