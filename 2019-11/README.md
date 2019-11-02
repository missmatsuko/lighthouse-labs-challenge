# Lighthouse Labs Challenge - Fall 2019
https://coding-challenge.lighthouselabs.ca

Copying my answers here and updating them as I progress through the challenge.

### Challenges
Information from the [Lighthouse Labs Coding Challenge Website](https://coding-challenge.lighthouselabs.ca).

#### Challenge #1 - Door to Door
Our challenge begins in Codeville, a small but thriving town in Serverside, Canada, where you are the current mayor nearing the end of your first term. Election season is nearing, and this town needs you, so you've decided to run for a second term. However, you need some help to make sure the election and your campaign run smoothly. Enter JavaScript, a coding language sure to help you optimize the many elements of the upcoming election and (hopefully) secure your return as Mayor.

As your election campaign ramps up, you plan to go door to door to talk to the citizens of Codeville. There are quite a few neighbourhoods in Codeville, but lucky for you, we have a dedicated crew of volunteers to help out. Being the fair Mayor that you are, you want to make sure the work is distributed evenly between the team. Let's figure out how many neighbourhoods each volunteer should visit.

##### Instructions
Given an array of volunteer names and an array of neighbourhood names, complete the `doorToDoor` function so that it returns the number of neighbourhoods each volunteer should visit if the work of going door to door is split evenly amongst them.

##### Examples

###### Input:
```
const volunteers = [
    'Sally',
    'Jake',
    'Brian',
    'Hamid'
];


const neighbourhoods = [
    'Central Valley',
    'Big Mountain',
    'Little Bridge',
    'Bricktown',
    'Brownsville',
    "Paul's Boutique",
    'Clay Park',
    'Fox Nest'
];
```

###### Output:
```
2
```

#### Hint
We can use JavaScript's handy built-in `.length` method to get the length of each array! This will help you figure out how many volunteers and how many neighbourhoods there are.

#### Challenge #2 - Something to Talk About
Thanks to your tireless volunteers, the word is out that you're running for a second term, and the local media has come calling!

The Lighthouse Gazette wants to interview you about your campaign, but you're a nervous interviewer! To help prepare for your interview you want to use JavaScript to practice campaign stance on important election topics. The list of possible question categories includes:

- arts funding
- economy
- transportation

##### Instructions
Given a question topic, complete a function `interviewAnswer(topic)` that returns your stance on that particular election issue. The answer should be returned as a string.

- When asked about arts funding, the function should return `"We'll have to get creative!"`
- When asked about the economy, the function should return `"Time is money."`
- When asked about transportation, the function should return `"It's going to be a long road, so we better get moving."`

If you're asked about a topic that isn't in the list above, respond with a default statement. (For example, "QUACK!")

##### Examples

###### Input:
```
const topic = 'economy'
```

###### Output:
```
Time is money.
```

###### Input:
```
const topic = 'transportation'
```

###### Output:
```
It's going to be a long road, so we better get moving.
```

#### Hint
We can use `if-statements` to return different responses depending on what topic is passed as a parameter. We may also want to look at `comparison operators` while we're at it.
