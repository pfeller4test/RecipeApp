var btnSearch = document.getElementById("buttonSearch");
var searchBox = document.getElementById("searchQuery");
var searchTerm;
var basic_URL = "https://www.themealdb.com/api/json/v1/1/";
var ingred = "filter.php?i=";
var details = "lookup.php?i=";
var mealId;

var app = document.getElementById("root");
var logo = document.createElement("img");
var container = document.createElement("div");
var errorElem = document.getElementById("noResults");
var regCheck = /\d+$/g;
var regEx = /\W+\D+/g;
var testNums;
var testChars;

container.setAttribute("class", "container");
app.appendChild(logo);
app.appendChild(container);

/*
Start the actual work of calling API search, and building the page of results
*/
const client = new RestClient(basic_URL);

btnSearch.onclick = async function () {
  container.innerHTML = "";
  searchTerm = searchBox.value;
  //test for non letters
  testNums = regCheck.test(searchTerm);
  testChars = regEx.test(searchTerm);

  if (testNums || testChars) {
    errorElem.innerText = "Please use aphabetic characters to search.";
    searchBox.value = "";
  } else {
    errorElem.innerText = "";
    searchBox.value = "";

    const getResult = await client.Get(ingred + searchTerm);
    console.log(getResult);
    if (getResult && getResult.meals) {
      getResult.meals.forEach((meals) => {
        var card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("id", "recipe");
      
        card.onclick= async function () {
          //when the card is click this is the function waiting for code to execute

          container.innerHTML = "";
          mealId = meals.idMeal;
          
          var recipeResult = await client.Get(details + mealId);
          var recipe = recipeResult.meals[0];
          console.log(recipe);

          //var h1 = document.createElement("h1");
          var h2 = document.createElement("h2")
          var p = document.createElement("p");
          var img = document.createElement("img");
          p.setAttribute('style', 'white-space: pre-line;');

          img.src = recipe.strMealThumb;
          h2.textContent = recipe.strMeal;
          p.textContent = recipe.strInstructions;
          
          //console.log("INstructions ", p.textContent);

          const keyItems = Object.keys(recipe);

          console.log(keyItems);

          container.appendChild(h2);
          container.appendChild(p);
          container.appendChild(img);
          container.appendChild(p);
                  
        };

        //***** This section below is building out the card element (and its children)

        // Create an h1 and set the text content to the Meal name
        var h1 = document.createElement("h1");
        h1.textContent = meals.strMeal;

        // Create a p and set the text content to it
        var p = document.createElement("p");
        var img = document.createElement("img");
        img.src = meals.strMealThumb;
        p.appendChild(img);

        var p2 = document.createElement("p");
        p2.textContent = meals.idMeal;

        // Append the cards to the container element
        container.appendChild(card);

        // Each card will contain an h1 and a p
        card.appendChild(h1);
        card.appendChild(p);
        card.appendChild(p2);
      });
    } else {
      //display message of no results for search term
      errorElem.setAttribute("style", "font-weight: bold;");
      errorElem.innerText =
        "There were no results for your search term.\nEnsure you are using an ingredient, not a recipe name.\nPlease try again.";
    }
  }
};
