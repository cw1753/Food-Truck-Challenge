# Food-Truck-Challenge

This is a RESTful API to retrieve specific data about food trucks in San Francisco. It contains routes for truck and food information. More route and request will be added in the future.

## Data Source
The food truck data comes from a public database, [link here](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat/data). This data set can also be obtained by using this API https://data.sfgov.org/resource/rqzj-sfat.json.

## Deployed
Heroku (Production): https://food-truck-challenge.herokuapp.com/

## Install
    npm install

## Start Server
    npm start

### You can use nodemon, if installed, for automatic restarting in development enviroment

    nodemon

# REST API

## Food Request

### Get all the types of food:
`GET /api/food/`



### Truck Request

### Get all the unique truck:
`GET /api/truck/`

### Get all the trucks of with specific truckName:
`GET /api/truck/:truckName`
