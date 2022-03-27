const { set } = require('express/lib/application');

const router = require('express').Router();

// Get all unique truck name listed 
router.get('/', (req, res) => {
    let truckSet = new Set();
    for(const data of req.app.locals.data) {
        truckSet.add(data['Applicant']);
    }
    res.json([...truckSet])
});

// Get all unique truck name and count of those truck
router.get('/count', (req, res) => {
    let truckDict = new Object();
    for(const data of req.app.locals.data) {
        const truck = data['Applicant'];
        if (truck in truckDict){
            truckDict[truck]++
        }
        else {
            truckDict[truck] = 1;
        }
    }
    res.json(truckDict)
});

// Get All truck with specific truck name
router.get('/:truckName', (req, res) => {
    let truckData = [];
    for(const data of req.app.locals.data) {
        const truck = data['Applicant'];
        if (truck == req.params.truckName){
            truckData.push(data);
        }
    }
    res.json(truckData)
});

module.exports = router;