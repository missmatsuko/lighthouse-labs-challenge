# Challenge #8 - Trash to Treasure
The results are in, and the people of Codeville want you to focus on Smart City upgrades. You've decided to begin by replacing all of the city's trash cans with smart cans: when citizens toss their rubbish into the smart can, it automatically sorts items into waste, recycling, and compost bins.

## Instructions
We need to complete a function called `smartGarbage(trash, bins)`, which will be responsible for increasing the garbage count for waste, recycling, or compost depending on what trash is submitted. Our function will receive two arguments. The first argument, `trash`, is a string that will tell our function what type of item is being submitted. The second argument, `bins`, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the `bins` object, and the return the newly updated object.

## Examples

### Input:
```
const bins = {
    waste: 4,
    recycling: 2,
    compost: 5
}

const trash = 'recycling'
```

### Output:
```
{
        waste: 4,
        recycling: 3,
        compost: 5
    }
```

# Hint
This is the first time we've encountered objects! We will need to access the proper value in the bins object using the `trash` as the key. If you're having trouble with this, take a look online to see how to use [square bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) to access values in a JavaScript object.

Note: When we’re referencing a variable in the bracket notation, we can skip the quotes.

# Tests
- The smartGarbage function should return an object
- The smartGarbage function should return an object with properties for waste, recycling, and compost
- The smartGarbage function increases the appropriate property
- The smartGarbage function does not alter the wrong properties
