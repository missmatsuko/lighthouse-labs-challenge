const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
]
assert.equal(typeof chooseStations(stations)[0], "string");
assert.equal(typeof chooseStations(stations)[1], "string");
