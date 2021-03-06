# On The Rocks
https://brittanyowen.github.io/on-the-rocks/

Users will be able to look up cocktail ingredients and recipes based on their spirit of choice

## API and Data Sample

[TheCocktailDB](https://www.thecocktaildb.com/api.php?ref=apilist.fun)

[Cocktails API, by alcohol type](https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila)

```json
{
    "drinks": [
        {
            "strDrink": "Margarita",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
            "idDrink": "11007"
        },
        {
            "strDrink": "Moranguito",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/urpsyq1475667335.jpg",
            "idDrink": "16196"
        },
        {
            "strDrink": "Paloma",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg",
            "idDrink": "17253"
        }
    ]
}
```

[Cocktails API, by drink id](https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007)

```json
{
    "drinks": [
        {
            "idDrink": "11007",
            "strDrink": "Margarita",
            "strDrinkAlternate": null,
            "strTags": "IBA,ContemporaryClassic",
            "strVideo": null,
            "strCategory": "Ordinary Drink",
            "strIBA": "Contemporary Classics",
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass",
            "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
            "strIngredient1": "Tequila",
            "strIngredient2": "Triple sec",
            "strIngredient3": "Lime juice",
            "strIngredient4": "Salt",
            "strMeasure1": "1 1/2 oz ",
            "strMeasure2": "1/2 oz ",
            "strMeasure3": "1 oz ",
            "strImageSource": "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
            "strImageAttribution": "Cocktailmarler",
            "strCreativeCommonsConfirmed": "Yes",
            "dateModified": "2015-08-18 14:42:59"
        }
    ]
}
```

## Wireframes

Desktop (landscape/portrait) view:

<a href="https://imgur.com/vFBjqzC"><img src="https://i.imgur.com/vFBjqzC.png" title="source: imgur.com" /></a>

Mobile (portrait) view: 

<a href="https://imgur.com/ludvzpz"><img src="https://i.imgur.com/ludvzpz.png" title="source: imgur.com" /></a>

#### MVP 

- clickable buttons for each different alcohol type
- when clicked, "recipe cards" of cocktails containing the selected alcohol will appear with an image, ingredient list, and instructions on how to make the cocktail
- when a different alcohol is selected, clear the previous selection/cocktail recipe cards

#### PostMVP  

- make the buttons alcohol bottles 
- ask for user's DOB and checks if they are 21 before letting them access the site 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25| Test Cocktail API / complete README.md file / get project approved | Complete
|Jan 26| Basic HTML & CSS structure / pseudocode JS file & add axios api call for cocktails by alcohol type  | Complete
|Jan 27| Add buttons and event listeners / add second axios api call for cocktails by drink-id | Complete
|Jan 28| Display multiple cocktail "recipe cards" for each alcohol type / Remove previous selection results before loading next selection results | Complete
|Jan 29| Incorporate Flexbox into CSS / add media query for mobile screens | Complete
|Feb 1| Presentations/Project Submission | Complete

## Priority Matrix

<a href="https://imgur.com/SrCIVPx"><img src="https://i.imgur.com/SrCIVPx.png" title="source: imgur.com" /></a>

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML & CSS Structure | H | 1hr | .5hrs | .5hrs |
| Pseudocode Javascript | M | 2hrs | 1hr | 1hr |
| Adding clickable buttons & event listeners | H | 3hrs | 1hr | 1hr |
| Add/test axios API call | H | 3hrs | 1hr | 1hr |
| Pulling appropriate data from API | H | 3hrs | 2hrs | 2hrs |
| Add/test second API call | H | 3hrs | 2hrs | 2hrs |
| Pulling appropriate data from second API| H | 3hrs | 11hrs | 11hrs |
| JS clear results page before next results show | H | 3hrs | .5hrs | .5hrs |
| Incorporating Flexbox | M | 1hr | 3hrs | 3hrs |
| Styling recipe cards in CSS | M | 3hrs | 4hrs | 4hrs |
| Setting & styling Media Queries in CSS | M | 3hrs | 6hrs | 6hrs |
| Styling buttons | L | 1.5hrs | 2hrs | 2hrs |
| Setting Background image | L | .5hrs | 1hr | 1hr |
| Total | H | 30hrs | 35hrs | 35hrs |

## Code Snippet

```
  let numOfIngredients = document.getElementById(idValue).childElementCount
  
  for (let i = 1; i <= numOfIngredients; i++) {
    let currentItem = drinkCard.querySelector(`.item${i}`)
    let currentText = currentItem.textContent

    if (currentText.includes("null")) {
      currentText = currentText.slice(5)
      currentItem.textContent = currentText
    }
  }
```

## Change Log
 For desktop view, I removed the subtitle and the alcohol tiles above the buttons and placed the buttons at the bottom of the title block. This change was made for brevity. 

 Did not make the buttons into alcohol bottles as listed in my post-MVP. I opted to keep the design simple. 

 For mobile-size screens, I opted to move the alcohol buttons to the left side of the frame rather than have them span the width of the screen, as I had originally planned. The reason for this change was to preserve more screen space for the drink recipes. 
