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
