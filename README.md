# item-api
<img alt="Version" src="https://img.shields.io/github/v/release/yZipperer/item-api">

## Overview:
  This is a product API for grocery and item data. It will return information including prices, names, images descriptions, ids, nutrition information, and much more.

  I built this API when I tried finding product data for a project, but couldn't find any that worked for my needs. The database is small and only contains 95 products, but new products are added every so often.

  Newly introduced was the idea of multiple countries. Now, this project will include data from multiple countries.
  
  ### By the Numbers:
    * 95 total items
    * 88 categories
    * 68 different brands
    * 2 countries
    * $243.85 worth of products
    * 119,761 total calories*

    *some products may not be accounted for due to unreadable or incomplete nutritional information

  ### Contents
    * names
    * price data in USD
    * images for every product
    * nutrition information
    * descriptions
    * desired temperatures
    * displays stats on entire database
      * perfect for admin dashboard
    * ingredients
    * country of sale
    * seasonal
    * unique ids
    * brands
    * categories

## Requirements

  * Node.js
  * command line

## Installation:
  
  git clone https://github.com/yZipperer/item-api.git
  
## Running and Usage:

  1. Navigate into the cloned folder and type ```node app.js``` to start the server
  2. Once the server is running use the command line to call the routes listed below
  
## Routes:

  ```
  http://localhost:8080/            /*all data*/
  http://localhost:8080/docs            /*returns the docs for the routes*/

  --- Please Note ---
  For the country parameter below (see masterList for all country codes), select one of the following (case sensitive):
    - "US"
    - "JP"

  http://localhost:8080/food/:country            /*returns all food data based on country provided*/


  --- Searching ---

  http://localhost:8080/food?brand=putbrandhere            /*search based on brand*/
  http://localhost:8080/food?cat=putcategoryhere            /*search based on category*/
  http://localhost:8080/food?country=putcountrycodehere            /*search based on country*/
  http://localhost:8080/food?cat=putcategoryhere&brand=putbrandhere&country=putcountrycodehere            /*search based on category and brand and country*/

  --- Admin ---
  http://localhost:8080/stats            /*shows stats on the items in the data set*/
  example search: http://localhost:8080/stats?country=US /*see masterList in data folder for country codes*/
  ```

## How to Search the Data (/food route)

  1. You will begin by typing one of the above routes into either a search bar, or you can make a request through a command line
  2. there are 2 route parameters to know
  
    cat     This parameter is used to search based on category
    brand     This parameter is used to search based on brand
    country     This parameter is used to search based on country (see country code list)
    
  3. Use different parameter values to search for what you need
  
  Sample URL:

  http://localhost:8080/food?cat=putCATEGORYhere&brand=putBRANDhere&country=putCOUNTRYCODEhere
  ```

  Sample URL Search for Franz Bread:
  
  http://localhost:8080/food?cat=bakery&brand=Franz
  ```

## Categories and Brands

### Available Categories:

<details>
  <summary>Categories for United States Data</summary>
  
  ***Note: these are case sensitive***

```
  Available Categories:
    * produce
      * bakery
          * sliced-bread
          * white-bread
          * multigrain-bread
          * buttermilk-bread
          * butter-bread
          * hawaiian-bread
          * wheat-bread
          * rolls-bread
          * hoagie
          * muffins
          * english-muffins
      * dry-goods
          * flour
          * sugar
          * oats
          * dry-coffee
          * mixes
            * brownie-mix
      * brownies
      * canned
          * canned-produce
      * dairy
          * milk
              * whole-milk
              * 1-percent-milk
          * Eggs
          * cheese
              * sliced-cheese
              * cream-cheese
          * yogurt
      * water
          * bottled-water
          * case-water
          * jug-water
      * candy
          * boxed-candy
          * bar-candy
          * bagged-candy
      * seafood
          * tuna
      * crackers
        * cheddar-crackers
        * peanut-butter-crackers
      * cookies
        * chocolate-cookies
      * (flavors)
          * strawberry
          * chocolate
          * vanilla
          * cheddar
          * chili-cheese
          * honey
          * cinnamon
          * fruit
      * pasta
          * ravioli
          * meatballs
      * coffee
      * cereal
      * breakfast
      * seasoning
      * vegan
      * vegetarian
      * meat-alternative
      * snacks
        * popcorn
        * chips
          * corn-chip
          * potato-chip
      * granola
      * bar
      * jar
      * cup
      * preserves
      * quick-meal
        * quick-lunch
        * quick-dinner
        * quick-breakfast
      * pizza
```

</details>

<details>
  <summary>Categories for Japan Data</summary>
  
  ***Note: these are case sensitive***

```
  Available Categories:
    * candy
      * wafer
      * gummy
    * (flavors)
        * orange
        * chocolate
        * corn
        * matcha
        * peach
        * green-apple
        * pizza
    * snacks
        * popcorn
        * chips
    * breadsticks
```

</details>

### Available Brands:

<details>
  <summary>Brands for United States Data</summary>
  
  ***Note: these are case sensitive***

```
  Available Brands:
    * unknown (This is for things like produce and products that don't have a clear brand name)
    * Franz
    * Del Monte
    * Bush's
    * Hunt's
    * Dole
    * Rosarita
    * Manwich
    * Chef Boyardee
    * Gold Medal
    * C&H
    * Quaker
    * Eggland's Best
    * Sargento
    * Meadow Gold
    * TruMoo
    * Grandma Sycamore's
    * Sara Lee
    * Great Grains
    * Aquafina
    * Nestle
    * Crystal Geyser
    * Ball Park
    * Bolthouse Farms
    * Hershey's
    * Yoplait
    * Kraft
    * Campbell's
    * StarKist
    * Whoppers
    * Twizzlers
    * Philadelphia
    * Honey Maid
    * Lay's
    * Nabisco
      * Ritz
      * Chips Ahoy!
      * Nilla
    * Cheez-It
    * Kellogg's
      * Club
      * Froot Loops
    * Pepperidge Farm
      * Goldfish
    * Folgers
    * Pillsbury
      * Funfetti
    * Oreo
    * Thomas'
    * Cheetos
    * Doritos
    * General Mills
      * Cheerios
        * Honey Nut Cheerios
      * Cinnamon Toast Crunch
      * Lucky Charms
    * SunChips
    * McCormick
    * MorningStar Farms
    * Nature Valley
    * Mott's
    * Smucker's
    * Lunchables
    * Totino's
```

</details>

<details>
  <summary>Brands for Japan Data</summary>
  
  ***Note: these are case sensitive***

```
  Available Brands:
    * Nestle
      * KitKat
    * Yaokin
    * Glico
      * Pocky
    * Calbee
```

</details>

  For a more comprehensive list see the masterList in the data folder of each country.
  
## Data Layout:

Sample Data Layout:
```
{
        "name": "Great Grains Multigrain Flax Seed Premium Bread",
        "id": "fbb171",
        "country": "United States",
        "category": ["bakery", "sliced-bread", "multigrain-bread"],
        "brand": "Great Grains",
        "weight": "24 ounces",
        "hot": false,
        "cold": false,
        "frozen": false,
        "description": "MULTIGRAIN w/ Flax Seeds & Omega-3 Premium Wide Pan 5/8\" Sliced Bread is packed with whole grains and Omega-3 and tastes DELICIOUS. HEALTHY MADE DELICIOUS. Naturally Good & All Natural. No high fructose corn syrup. No Trans Fat. 15 Grams of Whole Grains Per Slice. No Cholesterol. 5 Grams of Protien Per Slice. 5 Grams of Fiber Per Slice. 304mg of Omega-3 Per Slice-An Excellent Source. Always Made With Non-GMO Ingredients.",
        "price": {
            "USD": {
                "default": "2.28",
                "formatted": "$2.28/each"
            }
        },
        "image": "http://localhost:8080/fbb171.png",
        "nutrition": {
            "serving size": "45 grams",
            "servings per container": "15",
            "calories": "120",
            "fat": "1.5 grams",
            "cholesterol": "0 milligrams",
            "sodium": "190 milligrams",
            "potassium": "none",
            "carbohydrates": "24 grams",
            "protein": "5 grams"
        },
        "ingredients": "WATER, WHOLE WHEAT FLOUR, ENRICHED UNBLEACHED FLOUR (WHEAT FLOUR, MALT BARLEY FLOUR, NIACIN, FERROUS SULFATE, THIAMIN MONONITRATE, RIBOFLAVIN, FOLIC ACID), 9 GRAIN MIX (HARD RED WHEAT, WHITE WHEAT, BARLEY, RYE, OATS, CORN, MILLET, BUCKWHEAT AND FLAX SEED), OAT FIBER, BROWN SUGAR, SOYBEAN OIL, RYE MEAL, FLAX SEEDS, BLACK SESAME SEEDS, WHEAT GLUTEN, MOLASSES, SALT, YEAST, ENZYME, VINEGAR, CULTURED WHEAT FLOUR, CARAMEL COLOR & ASCORBIC ACID (VITAMIN C)."
    }
```

## Getting Images:

  1. make a request to the desired category
  2. In the returned json there will be an image link
  3. Put the link into the address bar of any browser
  4. As long as the server is running, you should get the image associated with the product

## Contributions:

  Contributions are welcome, especially for product data. Just open up an issue with what you would like to add.

  To contribute, locate the data.json file in the data folder.
  Then, copy and paste one of the latest product entries (at bottom of data.json file). 
  Modify this to include information on the new product.
  Then, add a corresponding image in the images folder (make sure the file name and product id match)
  
  *You should also make sure the product has not already been added. Simply ctrl+F as search through the data.json file, or check the masterList to make sure the product has not been added.

## Troubleshooting

  If you have any problems in usage or contributing, simply open up an issue with your questions.