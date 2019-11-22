# Challenge #21 - The Great Codeville Bake-off
The town festival is tomorrow and the organizers have only just realized that they've booked two bakeries to cater desserts, but only have one kitchen available. Instead of just choosing one bakery, let's help them figure out a way to work together.

Both of bakeries have a specialty, so they have each have a stock of specific ingredients.

Lucky for the festival organizers, we've found a recipe book in the town library with TONS of fusion recipes, unfortunately it's 1000 of pages long and we don't have much time. Let's write a function that helps determine which recipes match the ingredients that both bakeries have in stock.

## Instructions
We need to complete a function called `chooseRecipe()`, which will receive three parameters:

1. An array of ingredients in stock at Bakery A
2. An array of ingredients in stock at Bakery B
3. An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)
We are limiting our search to two ingredient recipes. We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.

Our `chooseRecipe()` function should return the name of the correct recipe.

Note: In the tests there will always be a single correct answer, and you will NOT need to consider special cases. For example, you do NOT need to worry about cases where one bakery has BOTH the ingredients for a recipe.

## Examples

### Input:
```
    const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard']
    const bakeryB = ['milk', 'butter', 'cream cheese']
    const recipes = [
        {
            name: 'Coconut Sponge Cake',
            ingredients: ['coconut', 'cake base']
        },
        {
            name: 'Persian Cheesecake',
            ingredients: ['saffron', 'cream cheese']
        },
        {
            name: 'Custard Surprise',
            ingredients: ['custard', 'ground beef']
        }
    ]
```

### Output:
```
Persian Cheesecake
```

# Hint
This one is a doozy! We might want to start by creating a helper function called `ingredientCheck()` that will take in one bakery at a time, and as well as the `recipes.ingredients` array to check if the given bakery possesses any of the ingredients from that recipe.

We can use JavaScript's handy built in [.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method to easily check whether an array contains a specific value.

# Tests
- The chooseRecipe function returns a string
- The chooseRecipe function returns the name of the proper recipe
