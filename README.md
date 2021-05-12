# item-api

## Overview:
  This is a product API for grocery and item data. It will return information including prices, names, images descriptions, ids, and even USDA nutrition information.
  
  ### By the Numbers:
    * 27 total items
    * 3 categories
    * $38.52 worth of products
    * 35,442.5 total calories

  ### Contents
    * price data in USD
    * images for every product
    * USDA nutrition information
    * descriptions and names
    * 24 products including:
      * fruits
      * canned items
      * dry goods
    


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
  
## Routes:

  ```
  http:localhost:8080/            /*returns all data*/
  http:localhost:8080/food            /*returns all food data*/
  http:localhost:8080/food/fruit            /*returns all fruit data*/
  http:localhost:8080/food/canned            /*returns all canned item data*/           
  ```

## Contributions:
  Contributions are welcome, especially for product data. Just open up an issue with what you would like to add.
