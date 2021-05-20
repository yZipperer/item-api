# item-api
<img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/yZipperer/item-api"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/yZipperer/item-api">
## Overview:
  This is a product API for grocery and item data. It will return information including prices, names, images descriptions, ids, and even nutrition information (and USDA nutrition information on produce).

  I built this API when I tried finding large amounts of product data for large retail and grocery stores, but couldn't find any that worked for my needs. The database is small and only contains 37 products, but I work on building up and adding new products as often as possible. I personally plan on eventually using this API for some future projects.
  
  ### By the Numbers:
    * 37 total items
    * 5 categories
    * $64.56 worth of products
    * 49,062.5 total calories

  ### Contents
    * price data in USD
    * images for every product
    * USDA nutrition information
    * descriptions
    * names
    * unique ids
    * 37 products including:
      * fruits
      * canned items
        * canned vegetables
        * canned fruits
        * canned meats
      * dry goods
        * flour
        * sugar
        * oats
      * dairy
        * cheese
        * eggs
        * milk
      * bakery
        * bread
        * rolls

## Requirements

  * Node.js
  * command line

## Installation:
  
  git clone https://github.com/yZipperer/item-api.git
  
## Running and Usage:

  1. Navigate into the cloned folder and type ```node app.js``` to start the server
  2. Once the server is running use the command line to call the routes
  
  ```
  curl http://localhost:8080/
  ```
## Getting Images:

  1. make a request to the desired category
  2. In the returned json there will be an image link
  3. Put the link into the address bar of any browser
  4. As long as the server is running, you should get the image associated with the product
  
## Routes:

  ```
  http://localhost:8080/            /*returns documentation for routes*/
  http://localhost:8080/all            /*returns all data*/
  http://localhost:8080/food            /*returns all food data*/
  http://localhost:8080/food/fruit            /*returns all fruit data*/
  http://localhost:8080/food/canned            /*returns all canned item data*/
  http://localhost:8080/food/drygoods            /*returns all dry goods item data*/
  http://localhost:8080/food/dairy            /*returns all dairy data*/   
  http://localhost:8080/food/bakery            /*returns all bakery data*/  
  ```

## Contributions:
  Contributions are welcome, especially for product data. Just open up an issue with what you would like to add.
