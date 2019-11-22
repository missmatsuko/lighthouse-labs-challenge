const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  return recipes.filter(recipe =>
    bakeryA.some(bakeryAIngredient => recipe.ingredients.includes(bakeryAIngredient)) &&
    bakeryB.some(bakeryBIngredient => recipe.ingredients.includes(bakeryBIngredient))
  )[0].name;
}
