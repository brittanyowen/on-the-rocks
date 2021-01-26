// cocktails by alcohol type: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`
// cocktails by drink id w/full info: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`

async function searchByAlcohol(id) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`
  
  try {
    const results = await axios.get(url)
    const info = results.data.drinks
    // console.log(results)
    // console.log(info)
    // console.log(info[0])
    // console.log(info[0].idDrink)
    
    info.forEach(function (info) {
      getDrinkInfo(info)
    })

  }
  catch (error) { 
    console.log(error)
  }
}


async function searchByDrinkId(drinkId) {
  const url2 = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
  
  try {
    const results2 = await axios.get(url2)
    const recipeInfo = results2.data.drinks
    console.log(recipeInfo)

    recipeInfo.forEach(function (recipeInfo) {
      getRecipeInfo(recipeInfo)
    })
  }
  catch (error) {
    console.log(error)
  }
}

// event listeners on each button 
// reassigns the id each time a button is clicked
// id is then passed as the parameter of searchByAlcohol

buttons = document.querySelector('div')

buttons.addEventListener('click', (e) => {
  e.preventDefault()
  let id = (e.target).textContent
  searchByAlcohol(id)
})



function getDrinkInfo(info) {
  const drinkInfo = `
  <h1>${info.strDrink}</h1>
  <img src="${info.strDrinkThumb}" alt="picture of ${info.strDrink} cocktail"/>
  `
  
  let recipeContainer = document.querySelector('.cocktails')
  let newContainer = document.createElement('p')
  newContainer.setAttribute('class', `${info.strDrink}`)
  recipeContainer.append(newContainer)
  newContainer.insertAdjacentHTML('beforeend', drinkInfo)
  
  
  let drinkId = info.idDrink
  console.log(drinkId)
  
  searchByDrinkId(drinkId)
}



function getRecipeInfo(recipeInfo) {
  const recipeDetails = `
  <li>${recipeInfo.strMeasure1} ${recipeInfo.strIngredient1}</li>
  <li>${recipeInfo.strMeasure2} ${recipeInfo.strIngredient2}</li>
  <li>${recipeInfo.strMeasure3} ${recipeInfo.strIngredient3}</li>
  <li>${recipeInfo.strMeasure4} ${recipeInfo.strIngredient4}</li>
  <p>${recipeInfo.strInstructions}</p>
  `

  let recipeContainer = document.querySelector('div p')
  console.log(recipeContainer)
  let ingredientContainer = document.createElement('ul')
  recipeContainer.append(ingredientContainer)
  ingredientContainer.insertAdjacentHTML('beforeend', recipeDetails)

}



// pseudocode: 
// 1. isolate each button, set event listeners, return & store the value 

// 2. use stored value as filter parameter in cocktailDB search

// 3. access drink data/drink id 
// forEach loop to access all of the elements in the drink array
// write a function getDrinkInfo that grabs "strDrink", and "strDrinkThumb"
// store and append this inside a new <p> under cocktails <div>
// <h1>strDrink</h1>
// <img src="strDrinkThumb" alt="picture of ${} cocktail"/>


// 4. store drink id as variable and use as param in second API search 

// 5. write a function getRecipeInfo that grabs the "strMeasure", "strIngredient", "strInstructions" and stores the values as drinkInfo. 
// Account for multiple ingredients and measurments (if statement to exclude if value is null)
// append this info as children of <p> created above
// <ul>
// <h2>Ingredients</h2>
// <li>${strMeasure} ${strIngredient}</li>
// </ul>
// <p>strInstructions</p>

// 6. write a function clearRecipeCards that clears the previous search results before loading the next