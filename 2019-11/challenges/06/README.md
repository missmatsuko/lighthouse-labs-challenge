# Challenge #6 - Turn Out for What
Phew, with our help the city staff were able to select the voting stations on time and the election went off without a hitch! Now that the votes have been cast, the Election staff needs to verify the votes by matching each voter's signature to their voter ID.

## Instructions
Complete the function `voterTurnout()`, that will take in two arrays. The first array is a list of voter ids, and the second array is a list of voter signatures, which correspond to the voter ids. Our task here is to first check that each array have the same number of items and then confirm that each of the voter ids matches the corresponding voter signature.

If the arrays do not contain the same number of items, then we know something is amiss and our function should return `false`. If they contain the same number of elements, then we should proceed to check if the two arrays are identical, meaning they contain the **same names in the same order**. If they are, our function should return `"All clear, we can count the votes!"`, if they are not it should return `"FRAUD!"`.

## Examples

### Input:
```
      const voter_signatures = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Fake McFakerson',
        'Jane Janesford'
      ]

      const voter_ids = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Simon Simonson',
        'Jane Janesford'
      ]
```

### Output:
```
FRAUD!
```

### Input:
```
      const voter_signatures = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Simon Simonson',
        'Jane Janesford'
      ]

      const voter_ids = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Simon Simonson',
        'Jane Janesford'
      ]
```

### Output:
```
'All clear, we can count the votes!
```

# Hint
We need to determine if the two arrays are identical by comparing them to one another. First, we'll need to make sure they are the same length. We can do this by using [.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) and the strict inequality (`!==`) operator.

Next, we'll need to loop through one of the arrays, comparing each item of one array to the same item in the second array using the index. You can a see step by step breakdown of how to compare two arrays [here](https://gomakethings.com/how-to-check-if-two-arrays-are-equal-with-vanilla-js/)

# Tests
- If the signatures do not match the ids the voterTurnout function should return "FRAUD!".
- If all of the signatures match the ids the voterTurnout function should return "All clear, we can count the votes!".
- If the voter ids array and voter signatures array are not the same length, return false
