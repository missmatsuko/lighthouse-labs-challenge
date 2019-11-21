# Challenge #17 - We're Rooting For You!
At this year's town festival the Codeville Vegetation Association will be handing out several awards for the best vegetables in a given category. We'll be testing out a new judging system on the best tomatoes to start, which can be judged based on their redness OR their plumpness.

## Instructions
For this challenge, we'll need to implement a function called `judgeVegetable()`that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted (`vegetables.submitter`) the vegetable with the highest ranking in the provided category.

## Examples

### Input:
```
   const vegetables = [
      {
        submitter: 'Old Man Franklin',
        redness: 10,
        plumpness: 5
      },
      {
        submitter: 'Sally Tomato-Grower',
        redness: 2,
        plumpness: 8
      },
      {
        submitter: 'Hamid Hamidson',
        redness: 4,
        plumpness: 3
      }
    ]

    const metric = 'redness'
```

### Output:
```
Old Man Franklin
```

# Hint
This problem involves looping through an array of objects and determining which object has the highest rating in a given category. Solving this could include a for-loop to loop through the vegetables, comparing each by the given `metric` to find the highest one.

One way to start might be by initializing a variable called `bestVeggie` as `vegetables[0]` and then comparing each vegetable within our loop to the bestVeggie to determine if it is greater or not. If it is greater, then we've found ourselves a new `bestVeggie`.

# Tests
- judgeVegetable should return a string
- judgeVegetable should return the name of the submitter of the highest rated veggie
