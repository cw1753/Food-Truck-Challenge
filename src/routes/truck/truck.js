const router = require('express').Router();

router.get('/', (req, res) => {
    res.json(req.app.locals.data)
});

router.get('/:truckName', (req, res) => {
    res.send(req.params.truckName)
});

module.exports = router;