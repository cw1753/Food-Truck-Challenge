const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('In food')
});

module.exports = router;