# Challenge #2 - Something to Talk About
Thanks to your tireless volunteers, the word is out that you're running for a second term, and the local media has come calling!

The Lighthouse Gazette wants to interview you about your campaign, but you're a nervous interviewer! To help prepare for your interview you want to use JavaScript to practice campaign stance on important election topics. The list of possible question categories includes:

- arts funding
- economy
- transportation

## Instructions
Given a question topic, complete a function `interviewAnswer(topic)` that returns your stance on that particular election issue. The answer should be returned as a string.

- When asked about arts funding, the function should return `"We'll have to get creative!"`
- When asked about the economy, the function should return `"Time is money."`
- When asked about transportation, the function should return `"It's going to be a long road, so we better get moving."`

If you're asked about a topic that isn't in the list above, respond with a default statement. (For example, "QUACK!")

## Examples

### Input:
```
const topic = 'economy'
```

### Output:
```
Time is money.
```

### Input:
```
const topic = 'transportation'
```

### Output:
```
It's going to be a long road, so we better get moving.
```

# Hint
We can use [if-statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) to return different responses depending on what topic is passed as a parameter. We may also want to look at [comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) while we're at it.

# Tests
- The interviewAnswer function return a response for each topic question.
- The interviewAnswer function should return the correct response for each topic question.
- The interviewAnswer function should return a default statement for topics that aren't in the list.
