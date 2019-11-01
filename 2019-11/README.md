# Lighthouse Labs Challenge - Fall 2019
https://coding-challenge.lighthouselabs.ca

Copying my answers here and updating them as I progress through the challenge.

### Challenges
Information from the [Lighthouse Labs Coding Challenge Website](https://coding-challenge.lighthouselabs.ca).

#### Challenge #1 - Door to Door
[Click here to learn how to navigate the code editor](https://vimeo.com/370123343)

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