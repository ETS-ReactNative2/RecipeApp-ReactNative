React native RecipeApp with mockAPI backend (Axios/Redux/React-Navigation/MockApi)
Built in the span of 2-3 weeks as my first RN app.

![GIF of the React Native App](appShowcase.gif)

## Mock api example output

```js
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
    "text": "Excepturi assumend ut non assumenda velit dsantium tempore.  Et non nesciunt error animi at. Vel molestiae dolorem. Error molestiae aliquam laboriosam aut cumque recusandae quia ut tenetur."
  },
  ...
```
## :arrow_forward: How to Setup/Run the Server

**Step 1:** cd to the ./server folder

**Step 2:** Install the Application with `npm install` 

**Step 3:** Start the server with `npm start` 

## :arrow_forward: How to Setup/Run the Client

**Step 1:** cd to the ./client folder

**Step 2:** Install the Application with `npm install` 

**Step 3:** Rename .env.example to .env and define the url for the server

**Step 4:** Install the client app on an android device using `react-native run-android`