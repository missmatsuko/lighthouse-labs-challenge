const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 10, 'community centre']
]
assert.deepStrictEqual(chooseStations(stations), ["Bright Lights Elementary"]);
