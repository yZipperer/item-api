# item-api
<img alt="Version" src="https://img.shields.io/github/v/release/yZipperer/item-api">

## Overview:
  This is a product API for grocery and item data. It will return information including prices, names, images descriptions, ids, nutrition information (USDA nutrition information on produce), and many more things.

  I built this API when I tried finding product data for a project, but couldn't find any that worked for my needs. The database is small and only contains 84 products, but I work on adding more products every so often.
  
  ### By the Numbers:
    * 84 total items
    * 70 categories
    * 61 different brands
    * $217.87 worth of products
    * 115,251 total calories

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
  http://localhost:8080/food            /*returns all food data*/

  --- Searching ---

  http://localhost:8080/food?brand=putbrandhere            /*search based on brand*/
  http://localhost:8080/food?cat=putcategoryhere            /*search based on category*/
  http://localhost:8080/food?cat=putcategoryhere&brand=putbrandhere            /*search based on category and brand*/

  --- Admin ---
  http://localhost:8080/stats            /*shows stats on the items in the data set*/
  ```

## How to Search the Data

  1. You will begin by typing one of the above routes into either a search bar, or you can make a request through a command line
  2. there are 2 route parameters to know
  
    cat     This parameter is used to search based on category
    brand     This parameter is used to search based on brand
    
  3. Use different parameter values to search for what you need
  
  Sample URL:

  http://localhost:8080/food?cat=putCATEGORYhere&brand=putBRANDhere
  ```

  Sample URL Search for Franz Bread:
  
  http://localhost:8080/food?cat=bakery&brand=Franz
  ```

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
      * chips
        * corn-chip
        * potato-chip
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
      * popcorn
      * cereal
      * breakfast
      * seasoning
      * vegan
      * vegetarian
      * meat-alternative
      * snacks
      * granola
      * bar
      * jar
      * cup
      * preserves
      * quick-meal

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
```

  For a more comprehensive list see the masterList in the data folder.
  
## Data Layout:

Sample Data Layout:
```
{
        "name": "Great Grains Multigrain Flax Seed Premium Bread",
        "id": "fbb171",
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
