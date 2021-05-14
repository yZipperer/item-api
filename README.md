# item-api

## Overview:
  This is a product API for grocery and item data. It will return information including prices, names, images descriptions, ids, and even USDA nutrition information.
  
  ### By the Numbers:
    * 29 total items
    * 4 categories
    * $44.14 worth of products
    * 36,862.5 total calories

  ### Contents
    * price data in USD
    * images for every product
    * USDA nutrition information
    * descriptions and names
    * 29 products including:
      * fruits
      * canned items
      * dry goods
      * dairy
    


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
  http://localhost:8080/            /*returns all data*/
  http://localhost:8080/food            /*returns all food data*/
  http://localhost:8080/food/fruit            /*returns all fruit data*/
  http://localhost:8080/food/canned            /*returns all canned item data*/
  http://localhost:8080/food/drygoods            /*returns all dry goods item data*/
  http://localhost:8080/food/dairy            /*returns all dairy data*/     
  ```

## Contributions:
  Contributions are welcome, especially for product data. Just open up an issue with what you would like to add.
