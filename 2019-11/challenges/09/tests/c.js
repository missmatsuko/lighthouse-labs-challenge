const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const length = cars.length

const speed = 38
const result = carPassing(cars, speed)

assert.ok(result[2].time < result[3].time)
