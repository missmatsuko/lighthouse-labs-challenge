const carPassing = (cars, speed) => {
  cars.push({
    time: Date.now(),
    speed,
  });
  return cars;
}
