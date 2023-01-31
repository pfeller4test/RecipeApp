function ConvertRecipe(recipe) {
    const ingredients = [];
    console.log("recipe ", recipe);

    ingredients.push(new Ingredient(recipe.strIngredient1, recipe.strMeasure1));
    ingredients.push(new Ingredient(recipe.strIngredient2, recipe.strMeasure2));
    ingredients.push(new Ingredient(recipe.strIngredient3, recipe.strMeasure3));
    ingredients.push(new Ingredient(recipe.strIngredient4, recipe.strMeasure4));
    ingredients.push(new Ingredient(recipe.strIngredient5, recipe.strMeasure5));
    ingredients.push(new Ingredient(recipe.strIngredient6, recipe.strMeasure6));
    ingredients.push(new Ingredient(recipe.strIngredient7, recipe.strMeasure7));
    ingredients.push(new Ingredient(recipe.strIngredient8, recipe.strMeasure8));
    ingredients.push(new Ingredient(recipe.strIngredient9, recipe.strMeasure9));
    ingredients.push(new Ingredient(recipe.strIngredient10, recipe.strMeasure10));
    ingredients.push(new Ingredient(recipe.strIngredient11, recipe.strMeasure11));
    ingredients.push(new Ingredient(recipe.strIngredient12, recipe.strMeasure12));
    ingredients.push(new Ingredient(recipe.strIngredient13, recipe.strMeasure13));
    ingredients.push(new Ingredient(recipe.strIngredient14, recipe.strMeasure14));
    ingredients.push(new Ingredient(recipe.strIngredient15, recipe.strMeasure15));
    ingredients.push(new Ingredient(recipe.strIngredient16, recipe.strMeasure16));
    ingredients.push(new Ingredient(recipe.strIngredient17, recipe.strMeasure17));
    ingredients.push(new Ingredient(recipe.strIngredient18, recipe.strMeasure18));
    ingredients.push(new Ingredient(recipe.strIngredient19, recipe.strMeasure19));
    ingredients.push(new Ingredient(recipe.strIngredient20, recipe.strMeasure20));
    ingredients.push(new Ingredient(recipe.strIngredient21, recipe.strMeasure21));
    ingredients.push(new Ingredient(recipe.strIngredient22, recipe.strMeasure22));
    ingredients.push(new Ingredient(recipe.strIngredient23, recipe.strMeasure23));
    ingredients.push(new Ingredient(recipe.strIngredient24, recipe.strMeasure24));
    ingredients.push(new Ingredient(recipe.strIngredient25, recipe.strMeasure25));
    return recipe;
}

class Recipe {
    //do stuff
    constructor(ingredients) {
        this.ingredients = ingredients;
    };
}

class Ingredient {
    constructor(name, measurement) {
      this.name = name;
      this.measurement = measurement;
    };
}


