# Challenge #11 - You Can't Hurry Transit
You can't hurry love, or local transit in Codeville. While you've been hard at work on a solution to the larger transit woes, you've decided to implement a new system to at least be a little more transparent about wait times. The city will be installing a smart screen, at the busiest bus stop in town, that will show the estimated arrival times for each of the buses that stop there.

## Instructions
For this challenge, we'll implement a function called `busTimes()`. This function will calculate the arrival time for a collection of busses based on their current speed and distance from the stop. It will receive an object called `buses`, which contains a series of objects for each bus, with the distance of the bus and the speed that the bus is traveling at. Our function should return a new object that shows how long until each bus arrives at the stop.

## Examples

### Input:
```
const buses = {
      pickadilly: {
          distance: 10,
          speed: 5
      },
      uptown: {
          distance: 13,
          speed: 10
      }
    }
```

### Output:
```
    {
      pickadilly: 2,
      uptown: 1.3
    }
```

# Hint
We'll need to loop through each of the buses in the buses object. Looping through objects can be done with a [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop!

We can calculate the arrival time of the bus by dividing it's distance by it's speed.

# Tests
- busTimes returns an object
- The resulting object must have a property for each bus
- The resulting object must have numbers as the values
- The resulting values are correct
