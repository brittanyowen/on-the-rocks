// cocktails by alcohol type: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`
// cocktails by drink id w/full info: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`

async function searchByAlcohol(id) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`
  
  try {
    const results = await axios.get(url)
    const info = results.data.drinks
    // console.log(info)

    info.forEach((info) => {
      searchByDrinkId(info.idDrink)
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
    const recipeInfo = results2.data.drinks[0]
    // console.log(recipeInfo)
    
    getRecipeInfo(recipeInfo)

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
  removeCocktails()
  let id = (e.target).textContent
  searchByAlcohol(id)
})


function getRecipeInfo(recipeInfo) {
  
  const recipeDetails = `
  <h1>${recipeInfo.strDrink}</h1>
  <img src="${recipeInfo.strDrinkThumb}" alt="picture of ${recipeInfo.strDrink} cocktail"/>
  <h2>Ingredients:</h2>
  <ul id=${recipeInfo.idDrink}>
  <li>${recipeInfo.strMeasure1} ${recipeInfo.strIngredient1}</li>
  <li>${recipeInfo.strMeasure2} ${recipeInfo.strIngredient2}</li>
  <li>${recipeInfo.strMeasure3} ${recipeInfo.strIngredient3}</li>
  <li>${recipeInfo.strMeasure4} ${recipeInfo.strIngredient4}</li>
  <li>${recipeInfo.strMeasure5} ${recipeInfo.strIngredient5}</li>
  <li>${recipeInfo.strMeasure6} ${recipeInfo.strIngredient6}</li>
  <li>${recipeInfo.strMeasure7} ${recipeInfo.strIngredient7}</li>
  <li>${recipeInfo.strMeasure8} ${recipeInfo.strIngredient8}</li>
  <li>${recipeInfo.strMeasure9} ${recipeInfo.strIngredient9}</li>
  <li>${recipeInfo.strMeasure10} ${recipeInfo.strIngredient10}</li>
  <li>${recipeInfo.strMeasure11} ${recipeInfo.strIngredient11}</li>
  <li>${recipeInfo.strMeasure12} ${recipeInfo.strIngredient12}</li>
  <li>${recipeInfo.strMeasure13} ${recipeInfo.strIngredient13}</li>
  <li>${recipeInfo.strMeasure14} ${recipeInfo.strIngredient14}</li>
  <li>${recipeInfo.strMeasure15} ${recipeInfo.strIngredient15}</li>
  </ul>
  <h2>Recipe:</h2>
  <p>${recipeInfo.strInstructions}</p>
  `
  let recipeContainer = document.querySelector('.cocktails')
  let newContainer = document.createElement('p')
  recipeContainer.append(newContainer)
  newContainer.insertAdjacentHTML('beforeend', recipeDetails)  
  
  console.log(recipeContainer)
  // console.log(typeof recipeDetails)

  // let list = document.querySelector("ul") // only selecting the first one so will always append to this one UGH


}

// function getIngredients(recipeInfo) {

//   const ingredientsArr = [
//     `${recipeInfo.strMeasure1} ${recipeInfo.strIngredient1}`, 
//     `${recipeInfo.strMeasure2} ${recipeInfo.strIngredient2}`, 
//     `${recipeInfo.strMeasure3} ${recipeInfo.strIngredient3}`, 
//     `${recipeInfo.strMeasure4} ${recipeInfo.strIngredient4}`, 
//     `${recipeInfo.strMeasure5} ${recipeInfo.strIngredient5}`, 
//     `${recipeInfo.strMeasure6} ${recipeInfo.strIngredient6}`, 
//     `${recipeInfo.strMeasure7} ${recipeInfo.strIngredient7}`, 
//     `${recipeInfo.strMeasure8} ${recipeInfo.strIngredient8}`, 
//     `${recipeInfo.strMeasure9} ${recipeInfo.strIngredient9}`, 
//     `${recipeInfo.strMeasure10} ${recipeInfo.strIngredient10}`, 
//     `${recipeInfo.strMeasure11} ${recipeInfo.strIngredient11}`, 
//     `${recipeInfo.strMeasure12} ${recipeInfo.strIngredient12}`, 
//     `${recipeInfo.strMeasure13} ${recipeInfo.strIngredient13}`, 
//     `${recipeInfo.strMeasure14} ${recipeInfo.strIngredient14}`, 
//     `${recipeInfo.strMeasure15} ${recipeInfo.strIngredient15}`
//   ]
  

//   const filteredArr = ingredientsArr.filter(element => element !== "null null" && element !== " ")
//   console.log(filteredArr)
//   console.log(filteredArr.length)


//   for (let i = 0; i < filteredArr.length; i++){
//     let recipeContainer = document.querySelector('.cocktails')
//     let list = recipeContainer.querySelector('ul')
//     let ingredientItem = document.createElement('li')
//     list.append(ingredientItem)
//     ingredientItem.textContent = filteredArr[i]
//     // ingredientItem.insertAdjacentHTML('beforeend', ingredientItem.textContent)

//   }

//   // console.log(newArr)

// }


function removeCocktails() {
  const removeInfo = document.querySelector('.cocktails')
  while (removeInfo.lastChild) {
    removeInfo.removeChild(removeInfo.lastChild)
  }    
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