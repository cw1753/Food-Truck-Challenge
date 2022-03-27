const express = require('express');
const foodRoutes = require('./food/food');
const truckRoutes = require('./truck/truck');

const router = express.Router();
router.use("/food", foodRoutes);
router.use("/truck", truckRoutes);

module.exports = router;