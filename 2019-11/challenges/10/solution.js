const whereCanIPark = (spots, vehicle) => {
  const allowedMarkers = ['R'];

  if (vehicle === 'small' || vehicle === 'motorcycle') {
    allowedMarkers.push('S');

    if (vehicle === 'motorcycle') {
      allowedMarkers.push('M');
    }
  }

  return spots.reduce((allowedSpot, row, rowIndex) => {
    if (allowedSpot === false) {
      // Try to find a spot
      const columnIndex = row.findIndex(marker => {
        return allowedMarkers.includes(marker);
      });

      if (columnIndex >= 0) {
        allowedSpot = [columnIndex, rowIndex];
      }
    }

    return allowedSpot;
  }, false);
}
