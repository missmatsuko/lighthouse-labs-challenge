# Lighthouse Labs Challenge - Fall 2018
https://coding-challenge.lighthouselabs.ca

Copying my answers here and updating them as I progress through the challenge.

Solutions can be tested by installing this project and running `npm test`.

## Challenges
```
const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "v", "", "~", "", "", "", "", ""],
  ["", "v", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "v", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];
```

### Challenge #1
As a lighthouse operator, your job is to both watch out for dangers in your area, such as rocks and strong currents, but also to be the knowledge expert for your area of the ocean. With this in mind, let's start using our coding skills to get some information about our `GRID` area. For starters, let's find out how many rows there are in our `GRID`.

Up above you have access to the printed-out grid, and the JS code for the grid. This is your grid, for your lighthouse.

Write a function called `countRows()` which will tell us the number of rows in our `GRID`. Remember that other lighthouse operators are going to be using this function, so it has to be able to work on a `GRID` of any size. It would be easy to write a function that just did return 12; but that wouldn't help operators with bigger or smaller areas!

You do NOT need to pass the `GRID` variable to the `countRows()` function, as it will be able to access it.

> #### Hint
> We'll be checking it against other grids to see if your method works. These grids may have other sizes! They could be bigger than yours, so you need to make sure your code works for all sizes.

### Challenge #2
Now that we know how many rows our `GRID` area has, let's find out the number of columns. My sources at the Lighthouse9000™ company tell me that this shouldn't be too hard, but that you shouldn't overthink it.

Write a function called `countColumns()` that will tell us the number of columns in our `GRID`. Again, remember that this has to work for all the lighthouse operators out there, no matter what size their area is. Also, your code will still be able to see the `GRID` variable, and you won't need to pass it as an argument to the function.

> #### Hint
> All your rows are the same size.

### Challenge #3
Now that we can do rows and columns, let's find out how big the size of our `GRID` is. I checked in with the lead developer at a company I know of, and she told me that this is one of the areas where re-using code is a great idea.

Write a function called `gridSize()` that will tell you the size of your grid in the format width x height. Your function should return a string, and in this example, your function should return the string `'10 x 10'`. But you have to make sure that you figure that string out by actually measuring your grid! Your code should make sure that it uses your `countRows()` and `countColumns()` functions that you've already finished.

> #### Hint
> Remember that your code can see the `GRID` variable, so you don't need to pass any parameters. Also, watch out for spaces in the output. Look at the example above carefully!

### Challenge #4
Awesome job! Other lighthouse operators are jealous of your grid. Just to show off, let's write a new function for the system which will count up how many cells total there are. Given the code you just wrote, this should be pretty easy.

Write a new function called `totalCells()` which will return the total number of cells in your grid. For this grid, it should return `100`, but again make sure that is a calculated value and not just a number you type in for your function to return. We want to make all the other lighthouse operators jealous.

> #### Hint
> Don't forget that you can access the grid up above at the Show Grid and Show Grid Code link. Your code can access the `GRID` variable. Make sure you code is using `return`, not `console.log`

### Challenge #5
Since our `GRID` is written in coordinates like `'A3'` or `'D8'`, we need code that is going to be able to convert those coordinates to the numbers we need to fetch data out of the `GRID` array(s). All of the lighthouse operators have reported in and we know that their areas never go above `'Z'`.

Let's build a function called `convertColumn()` which, when given the coordinate as an argument, will return the number of the column.

For example, calling `convertColumn('C4')` should return `2` as the `'C'` column is the third column, and since JavaScript arrays start at `0`, that would make `2` the third column.

> #### Hint
> You could solve this challenge with a very large `if-else` or `switch` statement. However, it would require a lot of writing and may become unmanagable, so we would not recommend that approach. There are multiple other options. One approach is to create your own array of capital letters and then use `indexOf()` on it in order to determine the array index.
>
> Now that you have done more work with Arrays, this is a case where you are probably going to want to create your own array of letters, and figure out a way to match what the system gives you with what you have stored. Consider checking out [this tutorial on Arrays](https://www.digitalocean.com/community/tutorial_series/working-with-arrays-in-javascript) for help.

### Challenge #6
Okay, let's get our lighthouse actually doing some work! As the lighthouse keeper, sometimes you'll need to shine the light directly on a particular cell in the grid, to alert passing ships to a danger there.

Your job is to write a function called `lightCell()` that takes in the coordinates in the form of `'A3'` or `'J9'` and returns the contents of that specific cell. (Ex: `lightCell('B4');` would return `""`)

> #### Hint
>Good thing you just wrote a function for converting the column. Also, look at the GRID's JS version again. Do you need to do any conversion on the row, too?
>
>In JavaScript, array indexes start at 0! That seems weird and different to count from 0, but we have to think like a computer here. If you want to read about array indexing, here is a good article for you: [Array Indexing on Digital Ocean](https://www.digitalocean.com/community/tutorials/understanding-arrays-in-javascript#indexing-arrays)

### Challenge #7
In the area where the lighthouse is watching, the grid, there are many rocks which ships would need to avoid. Rocks are indicated with the `^` symbol on the grid.

Write a function called `isRock()` which will take in a coordinate in the form of `'C7'` and return a true or a false boolean value depending on whether there is a rock in that cell or not. (Example: `isRock('D1');` would return `true`)

> #### Hint
> Have you already written some code which will help with this? Maybe... `lightCell()`?
> If you want to read more about values like `true` and `false` in JavaScript, check out [this tutorial from Digital Ocean](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript#booleans)

### Challenge #8
There are also areas where the currents are too strong for boats to be effective, and boats run the risk of being smashed up against the rocks if they get caught here. Strong currents are indicated with the `~` symbol.

Write a function called `isCurrent()` which will take in a coordinate in the form of `'A4'` and return a true or a false boolean value depending on whether there is a strong current in that cell or not. (Example: `isCurrent('E2');` would return `true`)

> #### Hint
> Have you already written some code which will help with this? Maybe... `lightCell()`?
> If you want to read more about values like `true` and `false` in JavaScript, check out [this tutorial from Digital Ocean](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript#booleans)

### Challenge #9
And last, but certainly not least, there are cells with ships in them! We need to be able to query any cell in our GRID area and find out if it is occupied by a ship.

Write a function called `isShip()` which will take in a coordinate in the form of `'I9'` and return a `true` or a `false` boolean value depending on whether there is a ship in that cell or not. (Example: `isShip('B3')` would return `true`)

> #### Hint
> Have you already written some code which will help with this? Maybe... `lightCell()`?
> If you want to read more about values like `true` and `false` in JavaScript, check out [this tutorial from Digital Ocean](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript#booleans)

### Challenge #10
Your next job is to write a function so that your lighthouse can sweep a whole row of cells.

Write a function named `lightRow()` that takes in the number of the row and returns its contents. (Example: `lightRow(2);` would return `["", "", "v", "", "~", "", "", "", "", ""]`)

> #### Hint
> Do you remember accessing the contents of an array back in Challenge #2, using an index? It might be easy to overthink this one, but it is a lot easier than you might think. Even though your `GRID` is an array of arrays, you can still get any row you want using an array index. Just to remind you, here is [a great tutorial on accessing arrays by index](https://www.digitalocean.com/community/tutorials/understanding-arrays-in-javascript#indexing-arrays)

### Challenge #11
Now that you can return the contents of the cells of a row, we also need to be able to return the cells of a column.

Write a function called `lightColumn()` that takes in the letter of the column from the grid, and returns an array that is the contents of that grid column. (Ex: `lightColumn('C');` would return `["", "", "", "", "", "", "", "~", "", ""]`)

> #### Hint
> This is a bit more complicated, and this will definitely require a loop. Do you remember when you had to translate the column letter to a number? You need to loop over all the rows, and use that number on each row. [Here is a good tutorial to read on looping](https://www.digitalocean.com/community/tutorials/how-to-construct-for-loops-in-javascript). You can also check out [CodeCademy](https://www.codecademy.com/courses/learn-javascript/lessons/loops/exercises/loops) for their lessons.

### Challenge #12
The weekend lighthouse operator isn't as smart as you are, and sometimes tells the Lighthouse9000™ system to do invalid things, causing the repairman to have to come out and fix the lighthouse. Upgrade the `lightCell()` method so that if an invalid cell is passed in, it returns `false`. (Example: `lightCell('Z3');` would return false as would `lightCell('A11');`)

> #### Hint
> The first character should be less than the last column of your GRID, and the second character should be a number between 1 and the last row. This is where grid sizes become more important.
>
> Developers re-use code all the time. The functions that you wrote back for challenges #1 and #2 can help, as well as challenge #5. Also, this is more boolean logic. You are going to want to use `if` conditional statements. Here is a good tutorial on that: [if statements](https://www.digitalocean.com/community/tutorials/how-to-write-conditional-statements-in-javascript)

### Challenge #13
Environment Canada has called and wants a report sent to them of all the rocks and currents in your grid, for use in their latest map.

Write a function called `allRocks()` which when called will return an array of the coordinates of all the rocks in your grid. (Example: `allRocks()` should return `['D1', 'E3', 'F3', 'E4', 'F4', 'B8', 'H8', 'B9', 'B10']`)

Write a function called `allCurrents()` which, when called, will return an array of the coordinates of all the strong currents in your grid. (Example: `allCurrents()` should return `['E2', 'C8', 'D8', 'D9', 'E9', 'E10', 'F10']`)

> #### Hint
> Environment Canada wants you to send them your function as they may use it on other grids. You need to write code that will `filter` out the cells with rocks in them, not just reply with a hard-coded response. [Here is a tutorial that might help you, from our friends at Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-iteration-methods#filter())

### Challenge #14
While we are reporting on things, let's make a report for all of the ships in our area. This one is for Transport Canada, as they are the ones watching all the movements of ships.

Write a function called `allShips()` which, when called, will return an array of the coordinates of all the ships in your grid.

> #### Hint
> More looping! This is the opposite of the work you did earlier in challenge #5, in that instead of being given a coordinate and turning it into a cell, you have to take a cell and build a coordinate from it. I bet you remember using methods like `.indexOf()` or maybe `.charAt()` to figure out your coordinates. If you take that same array of letters you used before, I bet you can reverse the process.

### Challenge #15
Here is an opportunity to prove how powerful your Lighthouse-powering skills are! Write a function called `firstRock()` which will return the coordinates of the first rock in your grid. Consider how you might use one of your previously written functions to simplify your task!

> #### Hint
> Remember that `[0]` is how we find the first element of an array. So, if you can get an array of all the rocks...

### Challenge #16
That was outstanding! Now do the same thing with `firstCurrent()`. Don't reinvent the wheel here, re-use existing code. This is one of the most important skills you can build as a coder...er, uh, I mean Lighthouse operator.

> #### Hint
> Remember that `[0]` is how we find the first element of an array. So, if you can get an array of all the currents...

### Challenge #17

Transport Canada called back. They want something similar to what you did for `firstRock()` and `firstCurrent()` but they want both the first AND the last ship in your area.

Write a function called `shipReport()` which does not take any parameters, but will return an array of the coordinates of the ship furthest to the west (left) and east (right) of your `GRID`. (Example: `shipReport()` would return `['B3', 'I5']`.)

> #### Hint
> Lower indexes(representing columns) in the row arrays will be west, whereas higher indexes will be east. You probably want to re-use your `allShips()` function which you wrote previously, and decide which one has the lowest and highest indexes.
