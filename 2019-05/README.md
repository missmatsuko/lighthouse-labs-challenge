# Lighthouse Labs Challenge - Spring 2019
https://coding-challenge.lighthouselabs.ca

Copying my answers here and updating them as I progress through the challenge.

## Global Objects

There are a few objects you're going to be working with and their initial values. This is only a subset of them, to give you a idea of what they look like. You can see below that they're all messed up:

```
var navigation = {
    x: -2,
    y: "Banana",
    z: "Beep",
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
    frequency: "Kenneth",
    message: "Bugs are cool.",
    beacon: false
};
```

## Challenges

### Challenge #1
"POWER OFF!" quacks LARRY. That sounds like a big problem! You should probably get the power back on, otherwise things are not going to go very well for you in the depths of uncharted space! Unfortunately, the manual for your ship is hard to read in the dark.

"Ship's powerOn property set to false!" LARRY exclaims. "MUST CHANGE VALUE! QUACK!" Okay, that sounds pretty serious. Fortunately, you remember from orientation that there are things called "properties" in JavaScript. You access properties using the '.' operator. With just the light from LARRY's terminal, you need to write a function called `powerOn()` which will change the 'powerOn' property of the 'ship' object. If that's set to 'false', changing it to 'true' should get things going.

**Hint:** LARRY loudly quacks out, "Set values in JavaScript using a single equals sign."

> #### Hint
> This challenge is about creating a Function and working with an Object Property in JavaScript.
>
> **On Functions:**
> [How to define functions in JavaScript](https://www.digitalocean.com/community/tutorials/how-to-define-functions-in-javascript)
> [CodeCademy tutorial on Functions](https://www.codecademy.com/courses/learn-javascript/lessons/functions/exercises/intro-to-functions)
>
> **On Object Properties**
> [Digital Ocean](https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript#adding-and-modifying-object-properties)'s tutorial on modifying object properties.
> [Click here to access the Help Forum.](https://21day-forum.lighthouselabs.ca/)

### Challenge #2
The lights flicker on, and you can see the interior of the ship, along with LARRY, your duck-shaped friend. You feel relieved, until LARRY’s eyes start to glow red and he starts blaring, "SHIP IN DANGER! SHIP IN DANGER!"

What can it be? You've turned the power back on, everything should be back to normal, right? "MODULES NOT ACTIVE!" Modules, what modules? A quick check of the ship's status board reveals an empty array labelled 'modules'.

You flip through the manual to the section labelled 'Modules', where the first page describes a number of available modules. They are stored in memory in the `availableModules` array. Each module is an object, with four properties:

- the `name` of the module is a string
- the `size` of the module is an integer
- the `enabled` and `essential` properties are booleans

Start off by finding out how many modules there are. Make a method called `countModules` to reveal how many modules there are to choose from.

> #### Hint
> While there's a lot of information about the module here, the simple challenge is to find out how many modules there are. They're stored in an array, and what we need is to find out how long the array is. Check out these resources:
>
> Here are some Digital Ocean tutorials on [Understanding Arrays in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-arrays-in-javascript)
>
> You can also work with arrays on [CodeCademy](https://www.codecademy.com/courses/learn-javascript/lessons/arrays/exercises/arrays)
>
> Khan Academy also has some good exercises that you can do [here](https://www.khanacademy.org/computing/computer-programming/programming/arrays/pt/intro-to-arrays)
>
> [Click here to access the Help Forum.](https://21day-forum.lighthouselabs.ca/)

### Challenge #3
"QUACK QUACK QUACK QUACK QUACK QUACK QUACK", goes LARRY, his eyes still glowing red. He’s counting off each of the seven modules on the list - you must be on the right track! Now to find out how many of them are essential.

Use your JavaScript skills to write a function called `countEssential()` which will count how many modules from the `availableModules` array have the essential flag set.

> #### Hint
> This is a bit more complex. We need to loop through the array, and count how many of the modules have the essential flag set. You'll probably want to make a new variable to count the number of essential modules, and then you're going to build a loop. Here's some resources on looping:
>
> - [Learn about Looping](https://www.digitalocean.com/community/tutorials/how-to-construct-for-loops-in-javascript)
> - You can also check out [CodeCademy](https://www.codecademy.com/courses/learn-javascript/lessons/loops/exercises/loops)
>
> [Click here to access the Help Forum.](https://21day-forum.lighthouselabs.ca/)

## Challenge #4
"DANGER QUACK DANGER QUACK!"

LARRY seemed so happy before, but he really is starting to get a bit agitated. Now that you know there are three essential modules, maybe you should start loading them into the ship's systems.

Write a function called `loadModule()`. It needs to take a parameter, called `index`. Your function should be set up like this:

`function loadModule(index) { }`

When `loadModule` gets the index number of a module, it should load it into the ship's `modules` property (which is already an array). Before you load it in, set the `enabled` property to `true`. You need to loop over the availableModules and find the module called "life-support" and get its index, then use it to call `loadModule()`.

**Hint:** You need to either loop through `availableModules` outside of any function or write a seperate function that handles the looping make sure it is called in your code"

> #### Hint
> Oh my gosh, there's a few steps here. First, you need to make a new function. We've done that a few times now. Then you need to get that function to do three things:
>
> 1. Find the module by its index
> 2. Set its `enabled` property to `true` (Remember setting object properties from challenge #1?)
> 3. Add that module to the ship's `modules` array.
>
> The first step is easy, because you just need to access the `availableModules` array with the index, using the [] notation. For the second step, use the same strategy you used to turn the power on in Challenge #1. The last step uses a method called `.push()`. You can read up on how array pushing works [here](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-mutator-methods#push()).
>
> Also, don't forget to find the index of the life-support module and use your new loadModule() method to activate it!
>
> [Click here to access the Help Forum.](https://21day-forum.lighthouselabs.ca/)
