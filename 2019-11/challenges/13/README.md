# Challenge #13 - All of the Lights
To make late-night driving and walking safer(and to save the city energy), you've decided to install smart street lights. These lights turn on and off automatically when they sense someone near by.

You'll need to use JavaScript to create some of the functionality to control the lights.

## Instructions
We will be implementing this using **three** functions.

The first two functions will receive an array of objects that represent street lights which may be `on` or `off`.

- Our first function, `lightsOn`, must set all of the lights to `on` and then return the array of lights.
- The second function, `lightsOff`, must set all the lights to "off" and then return the array of lights.
- The third function, `toggleLights`, will receive an array of many street lights, as well as a boolean value `lightsAreOn` which tells you whether or not all the lights are currently `on`. If `lightsAreOn` is true, your function should turn all of the lights off. If `lightsAreOn` is false, your function should turn all of the lights on.

## Examples

### Input:
```
    // for lightsOff() function
    const lights = [
      {
          id: 1,
          on: true
      },
      {
          id: 2,
          on: true
      },
      {
          id: 3,
          on: true
      },
      {
          id: 4,
          on: true
      },
      {
          id: 5,
          on: true
      }
    ]
```

### Output:
```
[
      {
          id: 1,
          on: false
      },
      {
          id: 2,
          on: false
      },
      {
          id: 3,
          on: false
      },
      {
          id: 4,
          on: false
      },
      {
          id: 5,
          on: false
      }
    ],
```

### Input:
```
// for lightsOn() function
    const lights = [
      {
          id: 1,
          on: false
      },
      {
          id: 2,
          on: false
      },
      {
          id: 3,
          on: false
      },
      {
          id: 4,
          on: false
      },
      {
          id: 5,
          on: false
      }
    ]
```

### Output:
```
[
      {
          id: 1,
          on: true
      },
      {
          id: 2,
          on: true
      },
      {
          id: 3,
          on: true
      },
      {
          id: 4,
          on: true
      },
      {
          id: 5,
          on: true
      }
    ]
```

### Input:
```
    // for toggleLights() function
    const lights = [
      {
          id: 1,
          on: true
      },
      {
          id: 2,
          on: true
      },
      {
          id: 3,
          on: true
      },
      {
          id: 4,
          on: true
      },
      {
          id: 5,
          on: true
      }
    ]

    const lightsAreOn = true
```

### Output:
```
[
      {
          id: 1,
          on: false
      },
      {
          id: 2,
          on: false
      },
      {
          id: 3,
          on: false
      },
      {
          id: 4,
          on: false
      },
      {
          id: 5,
          on: false
      }
    ]
```

# Hint
Lucky for us, we can call any of the functions that we have made before `toggleLights`. Can you see where we might want to call our `lightsOn` or `lightsOff` functions?

# Tests
- The lightsOn function returns an array
- The lightsOn function returns an array with an unchanged number of elements.
- The lightsOn function returns an array with all of the lights turned "on"
- The lightsOff function returns an array
- The lightsOff function returns an array with an unchanged number of elements.
- The lightsOff function returns an array with all of the lights turned "off"
- The toggleLights function returns an array
- The toggleLights function returns an array with an unchanged number of elements.
- If the toggleLights function receives lightsAreOn = true, all the lights should then be turned OFF
