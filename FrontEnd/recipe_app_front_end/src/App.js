import Recipes from './Components/Recipes/Recipes';

const recipes = [
  {
      "id": 12,
      "title": "Mexican Street Tacos",
      "picture": "http://127.0.0.1:8000/media/recipe_photo_album/MexicanStreetTacos.jpeg",
      "link_to_recipe": "https://damndelicious.net/2019/04/18/mexican-street-tacos/",
      "description": "",
      "meat_type": "RM",
      "category": "MX",
      "best_quantity": "2.00",
      "rating": "4.30",
      "comments": "",
      "last_made_at": "2021-06-08",
      "quick_and_easy": true,
      "is_favorite": false,
      "have_made_before": true,
      "saved_by": 16,
      "created_at": "2021-06-30T13:26:14.667191Z",
      "updated_at": "2021-07-04T01:02:40.966181Z"
  },
  {
      "id": 13,
      "title": "Instant Pot Ground Beef and Pasta",
      "picture": "http://127.0.0.1:8000/media/recipe_photo_album/InstantPotGroundBeefAndPasta.jpeg",
      "link_to_recipe": "https://damndelicious.net/2019/05/31/instant-pot-ground-beef-and-pasta/",
      "description": "Very hearty",
      "meat_type": "RM",
      "category": "IT",
      "best_quantity": "1.50",
      "rating": "4.00",
      "comments": "You can't follow the cooking instructions verbatim because the InstaPot always burns the food, have to find an alternate cooking method going forward. Also remember to make a vegetable on the side.",
      "last_made_at": "2021-06-29",
      "quick_and_easy": true,
      "is_favorite": false,
      "have_made_before": true,
      "saved_by": 16,
      "created_at": "2021-06-30T13:32:43.066139Z",
      "updated_at": "2021-07-04T01:02:47.637954Z"
  },
  {
      "id": 14,
      "title": "Sun Dried Tomato and Chicken Gnocchi",
      "picture": "http://127.0.0.1:8000/media/recipe_photo_album/SunDriedTomatoAndChickenGnocchi.jpeg",
      "link_to_recipe": "https://damndelicious.net/2021/03/26/sun-dried-tomato-chicken-and-gnocchi/",
      "description": "",
      "meat_type": "PL",
      "category": "IT",
      "best_quantity": "1.50",
      "rating": "4.50",
      "comments": "",
      "last_made_at": "2021-06-01",
      "quick_and_easy": false,
      "is_favorite": false,
      "have_made_before": true,
      "saved_by": 20,
      "created_at": "2021-06-30T13:34:26.343314Z",
      "updated_at": "2021-07-04T01:02:53.537480Z"
  },
  {
      "id": 15,
      "title": "Beef Ramen Noodle Stir Fry",
      "picture": "http://127.0.0.1:8000/media/recipe_photo_album/QuickRamenNoodleStirFry.jpeg",
      "link_to_recipe": "https://damndelicious.net/2019/04/24/quick-ramen-noodle-stir-fry/",
      "description": "Old favorite",
      "meat_type": "RM",
      "category": "JP",
      "best_quantity": "2.00",
      "rating": "4.70",
      "comments": "",
      "last_made_at": "2021-04-01",
      "quick_and_easy": true,
      "is_favorite": false,
      "have_made_before": true,
      "saved_by": 17,
      "created_at": "2021-06-30T13:36:09.942503Z",
      "updated_at": "2021-07-04T01:02:59.011873Z"
  },
  {
      "id": 16,
      "title": "Crispy Chicken Parmesan",
      "picture": "http://127.0.0.1:8000/media/recipe_photo_album/chickenparmesan.webp",
      "link_to_recipe": "https://tasty.co/recipe/the-best-crispy-chicken-parmesan",
      "description": "The classic",
      "meat_type": "PL",
      "category": "IT",
      "best_quantity": "1.00",
      "rating": "4.80",
      "comments": "Cook time is typically longer than on the recipe",
      "last_made_at": "2021-06-18",
      "quick_and_easy": true,
      "is_favorite": true,
      "have_made_before": true,
      "saved_by": 16,
      "created_at": "2021-07-04T00:43:22.602428Z",
      "updated_at": "2021-07-04T01:03:04.958923Z"
  },
  {
      "id": 17,
      "title": "Greek Chicken Gyros",
      "picture": "http://127.0.0.1:8000/media/recipe_photo_album/GreekChickenGyros_JJVg3NL.jpeg",
      "link_to_recipe": "https://damndelicious.net/2020/02/23/greek-chicken-gyros/",
      "description": "",
      "meat_type": "PL",
      "category": "GR",
      "best_quantity": "1.00",
      "rating": "0.00",
      "comments": "",
      "last_made_at": "2021-07-03",
      "quick_and_easy": true,
      "is_favorite": false,
      "have_made_before": false,
      "saved_by": 16,
      "created_at": "2021-07-04T00:49:46.340554Z",
      "updated_at": "2021-07-16T16:27:16.139076Z"
  },
  {
      "id": 18,
      "title": "Cajun Shrimp Bake",
      "picture": "http://127.0.0.1:8000/media/recipe_photo_album/CajunShrimpBake.webp",
      "link_to_recipe": "https://tasty.co/recipe/cajun-shrimp-bake",
      "description": "Easy recipe with shrimp, sausage, potatoes and corn on the cob that gets thrown in the oven in one big dish",
      "meat_type": "FI",
      "category": "AM",
      "best_quantity": "2.00",
      "rating": "4.50",
      "comments": "",
      "last_made_at": "2021-07-21",
      "quick_and_easy": true,
      "is_favorite": false,
      "have_made_before": false,
      "saved_by": 16,
      "created_at": "2021-07-16T14:14:43.592713Z",
      "updated_at": "2021-07-21T18:36:15.289734Z"
  },
  {
      "id": 19,
      "title": "Cajun Chicken Pasta",
      "picture": "http://127.0.0.1:8000/media/recipe_photo_album/CajunChickenPasta.jpeg",
      "link_to_recipe": "https://damndelicious.net/2015/11/30/cajun-chicken-pasta/",
      "description": "",
      "meat_type": "PL",
      "category": "IT",
      "best_quantity": "1.50",
      "rating": "4.50",
      "comments": "Double chicken, 1.5 everything else",
      "last_made_at": "2021-07-28",
      "quick_and_easy": false,
      "is_favorite": false,
      "have_made_before": true,
      "saved_by": 16,
      "created_at": "2021-07-29T00:16:08.295215Z",
      "updated_at": "2021-07-29T00:16:08.295239Z"
  },
  {
      "id": 20,
      "title": "Salmon BLT Sliders with Chipotle Mayo",
      "picture": "http://127.0.0.1:8000/media/recipe_photo_album/SalmonBLT.jpeg",
      "link_to_recipe": "https://damndelicious.net/2012/06/06/salmon-blt-sliders-with-chipotle-mayo/",
      "description": "",
      "meat_type": "FI",
      "category": "AM",
      "best_quantity": "2.00",
      "rating": null,
      "comments": "",
      "last_made_at": "2021-08-03",
      "quick_and_easy": true,
      "is_favorite": false,
      "have_made_before": false,
      "saved_by": 16,
      "created_at": "2021-07-30T13:11:58.710810Z",
      "updated_at": "2021-07-30T13:11:58.710858Z"
  }
]

const users = [
  {
      "id": 16,
      "first_name": "Ben",
      "last_name": "Sherman",
      "email": "ben@ben.com",
      "password": "$2b$12$EsyEtj1xkRRX9F3.4dlc/OsF3PGL3xBJDA1i1LBFyW3AV0mrq7AFm",
      "created_at": "2021-06-29T12:23:26.823587Z",
      "updated_at": "2021-06-29T12:23:26.823619Z"
  },
  {
      "id": 17,
      "first_name": "Tyrion",
      "last_name": "Lannister",
      "email": "drunkenimp@gmail.com",
      "password": "$2b$12$uEHC91CHjSGSn41s0we9tOmivWkqeHRk2.UUTap236Sa0S0zJtZP2",
      "created_at": "2021-06-29T12:33:45.610785Z",
      "updated_at": "2021-06-29T12:33:45.610821Z"
  },
  {
      "id": 18,
      "first_name": "Jeff",
      "last_name": "Sessions",
      "email": "Woohwoohs@gmail.com",
      "password": "$2b$12$vEMT7xbF5W3lKZSKxmVpPOg5YuwaC3pIthe./qckSQlfiHAxPkAAK",
      "created_at": "2021-06-29T13:28:33.706496Z",
      "updated_at": "2021-07-21T18:43:00.024047Z"
  },
  {
      "id": 19,
      "first_name": "Kiki",
      "last_name": "Sherman",
      "email": "CookingQu33n@gmail.com",
      "password": "$2b$12$SrVDGrJSRlXotew5kOFlfuFl4hW60dglpyLfdvSobFQc2xtxqWm9W",
      "created_at": "2021-06-29T13:30:30.567116Z",
      "updated_at": "2021-06-29T13:30:30.567144Z"
  },
  {
      "id": 20,
      "first_name": "Steve",
      "last_name": "Jordan",
      "email": "FunkyDrummer3000@gmail.com",
      "password": "$2b$12$042lC78/orU63ysEFJC6..ys4YCDDuAcoudWAYDGyFT7BMtMwtxtq",
      "created_at": "2021-06-30T12:30:29.040222Z",
      "updated_at": "2021-06-30T12:30:29.040255Z"
  }
]

function App() {
  return (
    <div>
      <Recipes recipes={recipes}/>
    </div>
  );
}

export default App;
