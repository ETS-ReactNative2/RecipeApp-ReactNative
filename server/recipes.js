/* Example output
  ...
  {
    "id": 241,
    "title": "voluptatem dolorem rerum",
    "author": "reiciendis nobis ex",
    "authorImage": "https://s3.amazonaws.com/uifaces/faces/twitter/djsherman/128.jpg",
    "readyInMinutes": 24,
    "servings": 7,
    "nutrition": {
      "protein": 352,
      "fat": 325,
      "carbs": 660
    },
    "image": "http://lorempixel.com/640/480/food?rnd=10",
    "imageUrls": [
      "http://lorempixel.com/640/480/food?rnd=10"
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
        "image": http://lorempixel.com/640/480/food?rnd=10
      }
      ...
    ],
    "text": "Excepturi assumenda eos totam officia. Adipisci animi nisi aut et dicta. Explicabo hic voluptatibus excepturi ut non assumenda velit dolor.\n \rVoluptas et nesciunt dolores aut beatae possimus voluptatibus accusantium tempore. Ratione et vel non. Ad laboriosam ducimus. Voluptatibus tempora sint facere et sit repellat. Quos quis facere fugit vel perspiciatis delectus. Et non nesciunt error animi.\n \rLabore in deserunt ex aperiam dolores voluptate at. Vel molestiae dolorem. Error molestiae aliquam laboriosam aut cumque recusandae quia ut tenetur."
  },
  ...
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
      "name": faker.lorem.word(),
      "image": faker.image.food() + "?rnd=" + randomNumber(1000)
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
    let protein = Math.ceil(randomNumber(1000)/5)*5
    let fat = Math.ceil(randomNumber(1000)/5)*5
    let carbs = Math.ceil(randomNumber(1000)/5)*5
    let author = faker.lorem.words();
    let authorImage = faker.image.avatar();
    recipes.push({
      "id": id,
      "title": title,
      "author": author,
      "authorImage": authorImage,
      "readyInMinutes": readyInMinutes,
      "servings": servings,
      "nutrition": {
        "protein": protein,
        "fat": fat,
        "carbs": carbs
      },
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