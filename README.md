# item-api
<img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/yZipperer/item-api"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/yZipperer/item-api"><img alt="Version" src="https://img.shields.io/github/v/release/yZipperer/item-api">

## Overview:
  This is a product API for grocery and item data. It will return information including prices, names, images descriptions, ids, nutrition information (and USDA nutrition information on produce), and many more things.

  I built this API when I tried finding product data for a project, but couldn't find any that worked for my needs. The database is small and only contains 37 products, but I work on adding more products every so often.
  
  ### By the Numbers:
    * 37 total items
    * 5 categories
    * 18 brands
    * $71.63 worth of products
    * 52,782 total calories

  ### Contents
    * price data in USD
    * images for every product
    * USDA nutrition information
    * descriptions
    * names
    * unique ids
    * 18 different brands
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
  ```

## How to Search the Data

  1. You will begin by typing one of the above routes into either a search bar, or you can make a request through a command line
  2. there are 2 route parameters to know
    - cat     This parameter is used to search based on category
    - brand     This parameter is used to search based on brand
  3. Use different parameter values to search for what you need
  
  Sample URL:
  '''
  http://localhost:8080/food?cat=putCATEGORYhere&brand=putBRANDhere
  '''

  Sample URL Search for Franz Bread:
  '''
  http://localhost:8080/food?cat=bakery&brand=Franz
  '''

  ***Note: these are case sensitive***
  Available Categories:
  - bakery
  - dairy
  - canned
  - fruit
  - dryGoods

  Available Brands:
  - unknown (This is for things like produce and products that don't have a clear brand name)
  - Franz
  - Del Monte
  - Bush's
  - Hunt's
  - Dole
  - Rosarita
  - Manwich
  - Chef Boyardee
  - Gold Medal
  - C&H
  - Quaker
  - Eggland's Best
  - Sargento
  - Meadow Gold
  - TruMoo
  - Grandma Sycamore's
  - Sara Lee
  - Great Grains

## Getting Images:

  1. make a request to the desired category
  2. In the returned json there will be an image link
  3. Put the link into the address bar of any browser
  4. As long as the server is running, you should get the image associated with the product

## Contributions:
  Contributions are welcome, especially for product data. Just open up an issue with what you would like to add.
