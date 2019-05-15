# Lighthouse Labs Challenge - Spring 2019
https://coding-challenge.lighthouselabs.ca

Copying my answers here and updating them as I progress through the challenge.

## Set Up
```
# Clone the repo
git clone git@github.com:missmatsuko/lighthouse-labs-challenge.git

# Go into the 2019-05 directory
cd 2019-05

# Install packages
npm ci

# Run script(s)

## Run code
npm run code

## Run tests
npm test
```

## Tests (WIP)
You can test your challenge code by replacing the code in `solutions.js` with your own solutions and running `npm test` after setting up the project.

Make sure to get the latest code for the latest tests.

Tests only cover functions and side-effects specified by the challenge, and are based on solutions that have been accepted by the challenge. It's not guaranteed to completely match Lighthouse Labs' own tests, but hopefully it will help prevent regressions as the challenges continue.

## Challenge
Information from the [Lighthouse Labs Coding Challenge Website](https://coding-challenge.lighthouselabs.ca).

### Global Objects
There are a few objects you're going to be working with and their initial values. This is only a subset of them, to give you a idea of what they look like. You can see below that they're all messed up:

```
var navigation = {
  x: -2,
  y: 4,
  z: 7,
  speed: "raaaaid"
};

var ship = {
  powerOn: false,
  modules: [],
  antenna: {
    active: false
  }
};

var radio = {
  range: {
    low: 88,
    high: 108,
  },
  frequency: 0,
  message: "Bugs are cool.",
  beacon: false
};
```

### Challenges

#### Challenge #1
"POWER OFF!" quacks LARRY. That sounds like a big problem! You should probably get the power back on, otherwise things are not going to go very well for you in the depths of uncharted space! Unfortunately, the manual for your ship is hard to read in the dark.

"Ship's powerOn property set to false!" LARRY exclaims. "MUST CHANGE VALUE! QUACK!" Okay, that sounds pretty serious. Fortunately, you remember from orientation that there are things called "properties" in JavaScript. You access properties using the '.' operator. With just the light from LARRY's terminal, you need to write a function called `powerOn()` which will change the 'powerOn' property of the 'ship' object. If that's set to 'false', changing it to 'true' should get things going.

**Hint:** LARRY loudly quacks out, "Set values in JavaScript using a single equals sign."

> ##### Hint
> This challenge is about creating a Function and working with an Object Property in JavaScript.
>
> **On Functions:**
> [How to define functions in JavaScript](https://www.digitalocean.com/community/tutorials/how-to-define-functions-in-javascript)
> [CodeCademy tutorial on Functions](https://www.codecademy.com/courses/learn-javascript/lessons/functions/exercises/intro-to-functions)
>
> **On Object Properties**
> [Digital Ocean](https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript#adding-and-modifying-object-properties)'s tutorial on modifying object properties.

#### Challenge #2
The lights flicker on, and you can see the interior of the ship, along with LARRY, your duck-shaped friend. You feel relieved, until LARRY’s eyes start to glow red and he starts blaring, "SHIP IN DANGER! SHIP IN DANGER!"

What can it be? You've turned the power back on, everything should be back to normal, right? "MODULES NOT ACTIVE!" Modules, what modules? A quick check of the ship's status board reveals an empty array labelled 'modules'.

You flip through the manual to the section labelled 'Modules', where the first page describes a number of available modules. They are stored in memory in the `availableModules` array. Each module is an object, with four properties:

- the `name` of the module is a string
- the `size` of the module is an integer
- the `enabled` and `essential` properties are booleans

Start off by finding out how many modules there are. Make a method called `countModules` to reveal how many modules there are to choose from.

> ##### Hint
> While there's a lot of information about the module here, the simple challenge is to find out how many modules there are. They're stored in an array, and what we need is to find out how long the array is. Check out these resources:
>
> Here are some Digital Ocean tutorials on [Understanding Arrays in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-arrays-in-javascript)
>
> You can also work with arrays on [CodeCademy](https://www.codecademy.com/courses/learn-javascript/lessons/arrays/exercises/arrays)
>
> Khan Academy also has some good exercises that you can do [here](https://www.khanacademy.org/computing/computer-programming/programming/arrays/pt/intro-to-arrays)

#### Challenge #3
"QUACK QUACK QUACK QUACK QUACK QUACK QUACK", goes LARRY, his eyes still glowing red. He’s counting off each of the seven modules on the list - you must be on the right track! Now to find out how many of them are essential.

Use your JavaScript skills to write a function called `countEssential()` which will count how many modules from the `availableModules` array have the essential flag set.

> ##### Hint
> This is a bit more complex. We need to loop through the array, and count how many of the modules have the essential flag set. You'll probably want to make a new variable to count the number of essential modules, and then you're going to build a loop. Here's some resources on looping:
>
> - [Learn about Looping](https://www.digitalocean.com/community/tutorials/how-to-construct-for-loops-in-javascript)
> - You can also check out [CodeCademy](https://www.codecademy.com/courses/learn-javascript/lessons/loops/exercises/loops)

#### Challenge #4
"DANGER QUACK DANGER QUACK!"

LARRY seemed so happy before, but he really is starting to get a bit agitated. Now that you know there are three essential modules, maybe you should start loading them into the ship's systems.

Write a function called `loadModule()`. It needs to take a parameter, called `index`. Your function should be set up like this:

`function loadModule(index) { }`

When `loadModule` gets the index number of a module, it should load it into the ship's `modules` property (which is already an array). Before you load it in, set the `enabled` property to `true`. You need to loop over the availableModules and find the module called "life-support" and get its index, then use it to call `loadModule()`.

**Hint:** You need to either loop through `availableModules` outside of any function or write a seperate function that handles the looping make sure it is called in your code"

> ##### Hint
> Oh my gosh, there's a few steps here. First, you need to make a new function. We've done that a few times now. Then you need to get that function to do three things:
>
> 1. Find the module by its index
> 2. Set its `enabled` property to `true` (Remember setting object properties from challenge #1?)
> 3. Add that module to the ship's `modules` array.
>
> The first step is easy, because you just need to access the `availableModules` array with the index, using the [] notation. For the second step, use the same strategy you used to turn the power on in Challenge #1. The last step uses a method called `.push()`. You can read up on how array pushing works [here](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-mutator-methods#push()).
>
> Also, don't forget to find the index of the life-support module and use your new loadModule() method to activate it!

#### Challenge #5
"BREATHE EASIER!" LARRY quacks out. "LITERALLY. Life support module loaded. Propulsion needed."

You can re-use your code from before, but this time you should do what all good programmers do: modularize your code. Write a function called `findModuleIndex()` which will take in a name that you’re looking for, and return the index of that module in the `availableModules` array. Remember: it has to have the `essential` flag, too!

Use your `findModuleIndex` function to find the "propulsion" module and then load it into the ship's system.

> ##### Hint
> The good news here is that if you succeeded at the last challenge, you've got all the logic you need to do this one. Remember the work you did to find the `life-support` module's index? Write a function that does that when you pass it the name of the module as a parameter.
>
> *Hint:* Make sure you are building on top of the last challenge. ;P

#### Challenge #6
"NAVIGATION SYSTEM needed," LARRY tells you. Navigation is important - you can't move through space without it!

Use your already-defined methods and load in the "navigation" module. It's pretty simple once you have the functions to do it, and LARRY's eyes are finally easing from red back to normal.

> ##### Hint
> Great news, you have the ability to find a module's index. We need the navigation module's index, and then we want to load that module in, by index.

#### Challenge #7
You look over at LARRY, expecting him to quack out his next prompt, but it seems LARRY is now the one malfunctioning! You open up the manual, and find the section on LARRY. Apparently, loading modules can *sometimes* cause LARRY to get stuck in an infinite loop.

You can fix him, you'll just need to write some code! Write and call a function called `resetLARRY()` which will prompt LARRY to quack ten times so he breaks out of his loop.

There is a function called `LARRY.quack()` that you can use in your code.

> ##### Hint
> Okay, the hint here is that we have given you the method you need to run. You need to make a loop. This loop needs to run ten times, calling the `LARRY.quack()` method we've given you. Here is the material on loops again on [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-construct-for-loops-in-javascript).

#### Challenge #8
The little duck-shaped robot shudders back and forth for a moment, and his eyes flash as he releases a barrage of ten quacks. "Thank you!" he exclaims.

"COMMUNICATION MODULE NEEDED," LARRY blares suddenly. He repeats it twice more - he’s rather insistent! Luckily, you've got the code for this. Load the module called "communication" using `findModuleIndex()` and `loadModule()` from before.

> ##### Hint
> Now we are back in business! Let's go back to using `findModuleIndex()` and `loadModule()` to get some communication going!

#### Challenge #9
"QUAAAACK radio beacon not sending!" Now that LARRY is reset, he can't help but point out all the things wrong with the ship. The radio beacon is important - it’s the part of the ship that relays messages to Earth about your location and welfare. Resetting it is a two-stage process: first you need to set the message. The message needs to contain the current state of the `navigation` object.

This is where you learn about something called JSON. JSON stands for JavaScript Object Notation, and it allows us to express an entire JS object as a string. There’s a built-in function in JavaScript that will take in an object and turn it into JSON. That function is `JSON.stringify()` - if you pass your object to that function as a parameter, it turns into a string.

You need to write a function called `setMessage()`. This function should set the `message` property on the `radio` object to be the JSON version of the `navigation` object. Don't forget you need to call your `setMessage()` function.

> ##### Hint
> Looks like we've got to make a couple of steps now to get going. You can [read the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) here on how to turn a JavaScript object into a string using `JSON.stringify`. There are some good examples there for you.
>
> Think about the order of things you need to do:
>
> - Make a new function called `setMessage()`
> - Within that function, you need to access the `message` property of the `radio` object (Remember you can do this using the '.' operator)
> - Then you need to make sure you are setting `message` property to the **JSON** version of the `navigation` object

#### Challenge #10
"Beacon not sending!" LARRY is still blaring, and it’s time for step two: activate the beacon.

You check out the radio object, and see that it has a 'beacon' property. Now that the message is set, write a function called `activateBeacon()` which will set the beacon property to `true`

> ##### Hint
> This should be a cake walk now for you. Write a new method, and use that method to change an object property..

#### Challenge #11
"Beacon active!" LARRY sounds as pleased as a robot can be. In fact, you spot the faintest hint of smile on his robot duck bill.

"Calibration QUACK complete! Now start RADIO! NEED to use the RADIO! QUACK QUACK!"

LARRY's prompt sends you back to the ship's manual, where you find an entire section about the radio. You notice that the radio has a feature you missed before, the range! Your particular radio has a range of 88 to 108 MHz, much like the FM radio in your car back on Earth. There's a note in the manual that says that the radio should be tuned to the same frequency as the lower end plus the upper end, and that total divided by two.

Write a function called `setFrequency()` that will set the `frequency` property on the `radio` object using the above formula.

Be careful because not all radios will have the same range, so make sure your code is reuseable. Instead of coding the numbers directly into your equation use dot notation to access them from the radio object, which you can see by clicking the **Show Global Objects** link above.

> ##### Hint
> So we are building a new function, something we've done almost a dozen times now. That part should be easy. And we're setting a property on an object again. Honestly, this is a lot of what you do in programming.
>
> This time, you're going to have to do some math. A lot of people think that programming is about math, but we've done ten challenges without having to really do any. In this case, take the top end of the frequencies, and the bottom end and add them together. That number divided by two is the number you need to set the radio frequency to.
>
> Here is a tutorial on [Math operators](https://www.digitalocean.com/community/tutorials/how-to-do-math-in-javascript-with-operators) from Digital Ocean.
>
> The `range` property is also an object. Remember that the sub-properties of objects can be accessed by chaining together the [dot or bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)

#### Challenge #12
"QUACK! Navigation system offline!" blares LARRY. "Initialization sequence broken!"

You quickly check the documentation for the navigation system and find out that the nav system's initialization sequence needs three values, because you are in three-dimensional space. It needs an X, Y, and Z value.

Your next task is to write a function called `initialize()` which will set the x, y, and z values correctly to start off at 0 in the navigation system. For example, the navigation system's x value is `navigation.x`.

Don't worry about calling your `initialize()` function, this one runs automatically

> ##### Hint
> More functions, more property setting. If you look at the current values on the `navigation` module, they are definitely not set correctly. Let's get them all set to `0`.

#### Challenge #13
Great job resetting the navigation system! You're off to a good start, and you'll surely be back in contact with Earth in no time!

"Navigation system not calibrated! Three calibrations needed! QUAAACK!" There goes LARRY again, trying to help. Another browse through the nav system's documentation shows that each axis (x, y, and z) needs to be calibrated, and each requires a different calibration. Looks like you'll be writing plenty of JavaScript for this!

To start, let's focus on calibrating just the x-axis. The x-axis has 12 possible settings and you'll need to write some code to find the right one. Start by writing a function called `calibrateX()`. There are a lot of steps involved in this one, luckily your manual has great documentation instructing that your function needs to:

- Loop from 1 - 12
- Call the built-in `checkSignal()` function each time, and assign the result to a variable called `signal`
- Make sure your `signal` variable is not `undefined`
- If the value is defined, set the navigation object's x property to that value
- Break out of the loop!

Don't forget to call your `calibrateX()` function to activate it!

> ##### Hint
> There are a few pieces that need to be put together to accomplish this challenge. Fortunately most of them are concepts we already know! You're going to want start by writing a for loop or a while loop that loops 12 times.
>
> This is another case where the function you need to use inside yours has already been built for you. Each time you run your loop, call checkSignal(). You should assign the result of this function to a variable, it should look something like this var response = doSomething()
>
> The `checkSignal()` function returns a value that is either a number or `undefined`. Since you're looking for a number you'll need to check to make sure the result of `checkSignal()` is not `undefined`. [Here is a resource](https://flaviocopes.com/how-to-check-undefined-property-javascript/) that can help guide you on how to check if a value is not undefined.

#### Challenge #14
"X Calibrated!" LARRY quacks happily. "Y and Z need calibration now! QUACK!"

Let's write `calibrateY()` and `calibrateZ()`. The manual says you'll need to loop from 1 to 60, and again you have to call `checkSignal()` each time.

> ##### Hint
> Take everything you did for the last challenge and re-do it for Y and Z, but don't forget to increase the for loop size and to call the calibrateX, calibrateY and calibrateZ functions in order!

#### Challenge #15
"One-step calibration needed," LARRY quacks. The last page of the calibration manual says that for proper calibration, you need to write a function called `calibrate()` which the nav system can call anytime it wants, which will calibrate your X, Y, and Z axes. The good news is, you’ve already done the hard part. Write one function called `calibrate()` which will call your other three functions in it, one after the other.

You don't need call the `calibrate()` function yourself, but don't forget to remove the other `calibrateX`, `calibrateY` and `calibrateZ` calls you already wrote

> ##### Hint
> It doesn't matter which order you call `calibrateX()`, `calibrateY()`, and `calibrateZ()`, but you must do all three of them inside the calibrate() method.
>
> This is a process we call 'abstraction' and 'automation'. Writing a function that calls other functions we have already written allows us to automate several steps we've built. You've already written the three calibration functions, call them one after the other.
