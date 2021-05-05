# item-api

## Overview:
  A product API for grocery data. This API will return information including prices, names, descriptions, ids, and even USDA nutrition information.
  
  ### By the Numbers:
    * 14 total items
    * 2 categories
    * $19.44 worth of products
    * 1697 total calories

  ### Contents
    * price data in USD
    * USDA nutrition information
    * descriptions and names
    * 14 products including:
      * fruits
      * canned items
    


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
