const busTimes = buses => {
  return Object.entries(buses)
    .reduce((times, bus) => {
      const busKey = bus[0];
      const busValue = bus[1];
      times[busKey] = busValue.distance / busValue.speed;
      return times;
    }, {});
}
