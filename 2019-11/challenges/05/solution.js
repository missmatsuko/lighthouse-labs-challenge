const chooseStations = (stations) => {
  return stations
    .filter(station => {
      const capacity = station[1];
      const type = station[2];

      return capacity >=20 && ['school', 'community centre'].includes(type);
    })
    .map(station => station[0])
  ;
}
