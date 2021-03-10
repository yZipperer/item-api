# item-api

##Overview:
  An API for fake product data.
  
  ###By the Numbers:
    * 5 total items
    * $4.80 worth of products
    * 331 total calories

  ###Contents
    * price data in USD
    * USDA nutrition information
    * descriptions and names
    * 5 fake products including:
      * fruits
    


##Requirements

  * Node.js
  * command line

##Installation:
  
  git clone https://github.com/yZipperer/item-api.git
  
##Running and Usage:

  1. Navigate into the cloned folder and type 'node app.js' to start the server
  2. Once the server is running use the command line to call the routes
    ```
    curl http://localhost:8080/
    ```
  
##Routes:

- / Returns the route documentation
- /food Returns all the food data
- /food/fruits Returns all the fruits
