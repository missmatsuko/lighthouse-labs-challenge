# Lighthouse Labs Challenge - Fall 2018
https://coding-challenge.lighthouselabs.ca

Copying my answers here and updating them as I progress through the challenge.

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
> If you want to read more about values like true and false in JavaScript, check out [this tutorial from Digital Ocean](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript#booleans)
