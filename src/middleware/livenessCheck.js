const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Server is live')
});

module.exports = router;