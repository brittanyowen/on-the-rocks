// cocktails by alcohol type: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`
// cocktails by drink id w/full info: https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

// pseudocode: 
// 1. isolate each button, set event listeners, return & store the value 

// 2. use stored value as filter parameter in cocktailDB search

// 3. access drink data/drink id 
// write a function getDrinkInfo that grabs "strDrink", and "strDrinkThumb"
// store and append this inside a new <p> under cocktails <div>
// <h1>strDrink</h1>
// <img src="strDrinkThumb" alt="picture of ${} cocktail"/>


// 4. store drink id as variable and use as param in second API search 

// 5. write a function getDrinkRecipe that grabs the "strMeasure", "strIngredient", "strInstructions" and stores the values as drinkInfo. 
// Account for multiple ingredients and measurments (if statement to exclude if value is null)
// append this info as children of <p> created above
// <ul>
// <h2>Ingredients</h2>
// <li>${strMeasure} ${strIngredient}</li>
// </ul>
// <p>strInstructions</p>

// 6. write a function that clears the previous search results before loading the next