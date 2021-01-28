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
  <ul class="list" id=${recipeInfo.idDrink}>
  <li class="item1">${recipeInfo.strMeasure1} ${recipeInfo.strIngredient1}</li>
  <li class="item2">${recipeInfo.strMeasure2} ${recipeInfo.strIngredient2}</li>
  <li class="item3">${recipeInfo.strMeasure3} ${recipeInfo.strIngredient3}</li>
  <li class="item4">${recipeInfo.strMeasure4} ${recipeInfo.strIngredient4}</li>
  <li class="item5">${recipeInfo.strMeasure5} ${recipeInfo.strIngredient5}</li>
  <li class="item6">${recipeInfo.strMeasure6} ${recipeInfo.strIngredient6}</li>
  <li class="item7">${recipeInfo.strMeasure7} ${recipeInfo.strIngredient7}</li>
  <li class="item8">${recipeInfo.strMeasure8} ${recipeInfo.strIngredient8}</li>
  <li class="item9">${recipeInfo.strMeasure9} ${recipeInfo.strIngredient9}</li>
  <li class="item10">${recipeInfo.strMeasure10} ${recipeInfo.strIngredient10}</li>
  <li class="item11">${recipeInfo.strMeasure11} ${recipeInfo.strIngredient11}</li>
  <li class="item12">${recipeInfo.strMeasure12} ${recipeInfo.strIngredient12}</li>
  <li class="item13">${recipeInfo.strMeasure13} ${recipeInfo.strIngredient13}</li>
  <li class="item14">${recipeInfo.strMeasure14} ${recipeInfo.strIngredient14}</li>
  <li class="item15">${recipeInfo.strMeasure15} ${recipeInfo.strIngredient15}</li>
  </ul>
  <h2>Recipe:</h2>
  <p>${recipeInfo.strInstructions}</p>
  `
  let recipeContainer = document.querySelector('.cocktails')
  let newContainer = document.createElement('p')
  newContainer.insertAdjacentHTML('beforeend', recipeDetails)  
  recipeContainer.append(newContainer)
  
  removeNull()


}


function removeNull() {
  const list = document.getElementsByTagName('ul')
  let idValue = ''
  
  for (let i = 0; i < list.length; i++) {
    idValue = list[i].getAttribute('id')
  }

  for (let i = 0; i <= 15; i++) {
    let drinkCard = document.getElementById(idValue)
    let ingredientItem = drinkCard.lastElementChild
    let itemText = ingredientItem.textContent
    if (itemText === "null null" || itemText === ' ') {
      drinkCard.removeChild(drinkCard.lastElementChild)
    } 
  }

}


function removeCocktails() {
  const removeInfo = document.querySelector('.cocktails')
  while (removeInfo.lastChild) {
    removeInfo.removeChild(removeInfo.lastChild)
  }    
}


// pseudocode: 
// Clear null values in ingredient list items 
// write a function removeNull that identifies the list items that have an innerText value of "null null" or " "
// remove list item if it has this innerText value  