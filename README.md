# Food-Truck-Challenge

This is a RESTful API to retrieve specific data about food trucks in San Francisco. It contains routes for truck and food information. More route and request will be added in the future.

## Features
Can get a list of all the truck and food. Can search by truck name

## Data Source
The food truck data comes from a public database, [link here](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat/data). This data set can also be obtained by using this API https://data.sfgov.org/resource/rqzj-sfat.json.

## Deployed
Heroku (Production): https://food-truck-challenge.herokuapp.com/

## From the repo:
1. clone this project locally
2. Run `npm install` in your bash /command line
2. Run `npm start` in your bash /command line to start the server

    You can use nodemon, if installed, for automatic restarting in development environment

        nodemon

# REST API

## Food Request

### Get all the types of food (REMINDER: Spelling and typo can cause duplication):
#### Request
`GET /api/food/`
#### Respond
    [
        "Snow Cones: Soft Serve Ice Cream & Frozen Virgin Daiquiris",
        "Asian Fusion - Japanese Sandwiches/Sliders/Misubi"
    ]

### Get All truck with specific food (REMINDER: Spelling and bad food description can cause inaccurate result):
#### Request
`GET /api/food/:food`
#### Respond
    [
        {
            "locationid": "1590834",
            "Applicant": "El Alambre",
            "FacilityType": "Truck",
            ...
        }
    ]
If the food is not found:

    []

### Truck Request

### Get all the unique truck:
#### Request
`GET /api/truck/`
#### Respond
    [
        "The Geez Freeze",
        "Datam SF LLC dba Anzu To You",
        "Casita Vegana",
    ]
### Get count of unique truck:
#### Request
`GET /api/truck/count`
#### Respond
    {
        "The Geez Freeze": 1,
        "Datam SF LLC dba Anzu To You": 1,
        "Casita Vegana": 1
    }


### Get all the trucks of with specific truckName:
#### Request
`GET /api/truck/:truckName`
#### Respond
    [
        {
            "locationid": "1590834",
            "Applicant": "El Alambre",
            "FacilityType": "Truck",
            ...
        }
    ]
If the truckName is not found:

    []
