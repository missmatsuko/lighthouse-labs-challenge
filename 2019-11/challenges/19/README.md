# Challenge #19 - Pumpkin Spice and Everything Nice
This is the Codeville Fall Festival, and nothing says fall more than pumpkin spice. At this year's festival, there will be three ways for the people of Codeville to get their pumpkin spice fix:

1. Pumpkin pie
2. Pumpkin spice lattes
3. Pumpkin spice macarons

## Instructions
Each item differs in both cost and the grams of pumpkin spice per serving. To help festival-goers maximize their pumpkin spice consumption, help them determine the maximum amount of pumpkin spice they can ingest with the amount of money they are bringing to the festival.

- A slice of pumpkin pie costs $5 each, and include a whopping 30g of pumpkin spice
- Pumpkin spice lattes cost $3 each, and include 15g of pumpkin spice
- Pumpkin spice macarons cost $1 each, and include 3g of pumpkin spice

We need to write a function, `pumpkinSpice(money)` that will take in a number, or how much the festival-goer has to spend on treats, and return an array with the 4 elements as outlined below:

- The first element should represent how many slices of pumpkin pie the client can buy
- The second element should represent how many pumpkin spice lattes the client can buy
- The third element should represent how many pumpkin spice macarons the client can buy
- The fourth element should represent how many grams of pumpkin spice the client will be buying

Our function should start by calculating how many slices of pumpkin pie we can buy. Then, we'll want to use the remaining money to do the calculations for the lattes, followed lastly by the macarons.

## Examples

### Input:
```
const money = 9
```

### Output:
```
[1, 1, 1, 48]
```

# Hint
We can use a [while loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) to executes a specified statement as long as the test condition evaluates to true. In this case, as long as we have more than $5, we can continue to buy pumpkin pie.

# Tests
- pumpkinSpice should return an array
- The returned array contains the correct number of pies
- The returned array contains the correct number of lattes
- The returned array contains the correct number of macarons
- The returned array contains the correct count of pumpkin spice
