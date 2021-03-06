
// global variables 
let dateOfBirth = document.getElementById('dob')
let submitBtn = document.getElementById('submit')
let message = document.getElementById('message')
let ageContainer = document.querySelector('.age')
message.style.display = "none"
let alcoholBtns = document.querySelector('.alcohol')
alcoholBtns.style.display = "none"
buttons = document.querySelector('div')
let recipeContainer = document.querySelector('.cocktails')
const list = document.getElementsByTagName('ul')


// logs and checks user's birthday 
// under 21, show message; over 21, show alcohol buttons and hide birthday query 
function getBirthday(e) {
  e.preventDefault
  if (dateOfBirth.value < "2000") {
    ageContainer.style.display = "none"
    alcoholBtns.style.display = "inherit"
    message.style.display = "none"
  } else {
    message.style.display = "initial"
    message.textContent = 'Must be 21+ to enter the site'
  }
}


submitBtn.addEventListener('click', getBirthday)


// completes the url with the id selected and grabs the idDrink value 
// calls searchByDrinkId function 
async function searchByAlcohol(id) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`
  
  try {
    const results = await axios.get(url)
    const info = results.data.drinks

    info.forEach((info) => {
      searchByDrinkId(info.idDrink)
    })

  }
  catch (error) { 
    console.log(error)
  }
}


// completes the 2nd url with the drink id to get access to the individual drink details
// calls getRecipeInfo function
async function searchByDrinkId(drinkId) {
  const url2 = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
  
  try {
    const results2 = await axios.get(url2)
    const recipeInfo = results2.data.drinks[0]
    
    getRecipeInfo(recipeInfo)
    
  }
  catch (error) {
    console.log(error)
  }
}


// event listener for alcohol buttons, assigns the id variable accordingly
// calls removeCocktails function then searchByAlcohol function
buttons.addEventListener('click', (e) => {
  e.preventDefault()
  removeCocktails()
  let id = (e.target).textContent
  searchByAlcohol(id)
})


// selects details to pull to DOM
// calls removeNull function
function getRecipeInfo(recipeInfo) {
  
  const recipeDetails = `
  <img src="${recipeInfo.strDrinkThumb}" alt="picture of ${recipeInfo.strDrink} cocktail"/>
  <h1>${recipeInfo.strDrink}</h1>
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
  let newContainer = document.createElement('p')
  newContainer.insertAdjacentHTML('beforeend', recipeDetails)  
  recipeContainer.append(newContainer)
  
  removeNull()

}


// filters the data pulled to omit null values 
function removeNull() {
  let idValue = ''
  
  for (let i = 0; i < list.length; i++) {
    idValue = list[i].getAttribute('id')
  }
  
  let drinkCard = document.getElementById(idValue)

  for (let i = 0; i <= 15; i++) {
    let ingredientItem = drinkCard.lastElementChild
    let itemText = ingredientItem.textContent
    if (itemText === "null null" || itemText === ' ') {
      drinkCard.removeChild(drinkCard.lastElementChild)
    }
  }

  let numOfIngredients = document.getElementById(idValue).childElementCount
  
  for (let i = 1; i <= numOfIngredients; i++) {
    let currentItem = drinkCard.querySelector(`.item${i}`)
    let currentText = currentItem.textContent

    if (currentText.includes("null")) {
      currentText = currentText.slice(5)
      currentItem.textContent = currentText
    }
  }
}


// clears page before next alcohol category is selected 
function removeCocktails() {
  while (recipeContainer.lastChild) {
    recipeContainer.removeChild(recipeContainer.lastChild)
  }    
}