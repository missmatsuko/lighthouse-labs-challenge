const sphereVolume = function (radius) {
  return 4 / 3 * PI * radius ** 3;
}

const coneVolume = function (radius, height) {
  return PI * radius ** 2 * height / 3;
}

const prismVolume = function (height, width, depth) {
  return height * width * depth;
}

const solidVolume = function(solid) {
  switch(solid.type) {
    case 'sphere':
      return sphereVolume(solid.radius);
    case 'cone':
      return coneVolume(solid.radius, solid.height);
    case 'prism':
      return prismVolume(solid.height, solid.width, solid.depth);
    default:
      return 0;
  }
}

const totalVolume = function (solids) {
  return solids.reduce((lastVolume, solid) => {
    return lastVolume + solidVolume(solid);
  }, 0);
}
