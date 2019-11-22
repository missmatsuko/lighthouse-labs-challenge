const lightsOn = function(lights) {
  return lights.map(light => {
    light.on = true;
    return light;
  });
}

const lightsOff = function(lights) {
  return lights.map(light => {
    light.on = false;
    return light;
  });
}

const toggleLights = function(lights, lightsAreOn) {
  return lights.map(light => {
    light.on = !light.on;
    return light;
  });
}
