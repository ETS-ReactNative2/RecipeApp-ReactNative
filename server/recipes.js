/* Example output
  ...
  {
    "id": 241,
    "title": "voluptatem dolorem rerum",
    "readyInMinutes": 24,
    "servings": 7,
    "image": "http://lorempixel.com/640/480/food",
    "imageUrls": [
      "http://lorempixel.com/640/480/food"
    ],
    "categories": [
      "Sides",
      "Duck",
      "Dinner",
      "Pork"
    ],
    "ingredients": [
      {
        "amount": 6,
        "unit": "ounces",
        "unitShort": "oz",
        "name": "voluptas"
      }
    ],
    "text": "Excepturi assumenda eos totam officia. Adipisci animi nisi aut et dicta. Explicabo hic voluptatibus excepturi ut non assumenda velit dolor.\n \rVoluptas et nesciunt dolores aut beatae possimus voluptatibus accusantium tempore. Ratione et vel non. Ad laboriosam ducimus. Voluptatibus tempora sint facere et sit repellat. Quos quis facere fugit vel perspiciatis delectus. Et non nesciunt error animi.\n \rLabore in deserunt ex aperiam dolores voluptate at. Vel molestiae dolorem. Error molestiae aliquam laboriosam aut cumque recusandae quia ut tenetur."
  },
*/


var faker = require('faker');

var units = [
  {"long": "cups","short": "c"},
  {"long": "tablespoons","short": "T"},
  {"long": "teaspoons","short": "t"},
  {"long": "ounces","short": "oz"} 
];

var defaultCategories = ["Breakfast","Brunch","Lunch","Dinner","Snacks","Appetisers",
"Soups","Salads","Sides","Rice","Noodles","Pasta","Pies","Burgers","Mince",
"Sausages","Chicken","Turkey","Duck","Poultry","Pork","Lamb","Beef","Meat","Seafood",
"Stir Fry","Sauces","Vegetarian","Desserts","Baking","Drinks"];

function randomNumber(maxNumber){
  return Math.floor(Math.random() * maxNumber) + 1; 
}

function generateIngredients(){
  let ingredients = [];

  for (let i = randomNumber(10); i > 0; i--) {
    let unit = units[Math.floor(Math.random()*units.length)];
    ingredients.push({
      "amount": randomNumber(6),
      "unit": unit.long,
      "unitShort": unit.short,
      "name": faker.lorem.word()
    });
  }
  return ingredients;
}


function generateRecipes () {
  let recipes = [];
  
  for (let id = 0; id < 500; id++) {
    
    let title = faker.lorem.words();
    let readyInMinutes = Math.ceil(randomNumber(120)/5)*5; 
    let servings = randomNumber(16);
    let image = faker.image.food() + '?rnd=' + randomNumber(1000);
    let categories = (defaultCategories.sort(() => 0.5 - Math.random())).slice(0, randomNumber(4));
    let ingredients = generateIngredients();
    let text = faker.lorem.paragraphs();
    recipes.push({
      "id": id,
      "title": title,
      "readyInMinutes": readyInMinutes,
      "servings": servings,
      "image": image,
      "imageUrls": [
          image
      ],
      categories,
      ingredients,
      "text": text
    });
  }
  return { "recipes": recipes };
}

module.exports = generateRecipes;