const router = require('express').Router();

// Get all unique Food listed in FoodItems
// REMINDER: Spelling and typo can cause duplication
router.get('/', (req, res) => {
    const badFoodText = ['', 'N/A']
    let foodSet = new Set();
    for(const data of req.app.locals.data) {
        
        if (!badFoodText.includes(data['FoodItems'])){
            foodSet.add(data['FoodItems']);
        }
    }
    res.json([...foodSet])
});

// Get All truck with specific food
// REMINDER: Spelling and bad food description can cause inaccurate result
router.get('/:food', (req, res) => {
    let foodData = [];
    for(const data of req.app.locals.data) {
        const foodItems = data['FoodItems'].toLowerCase();
        if (foodItems.includes(req.params.food.toLowerCase())){
            foodData.push(data);
        }
    }
    res.json([...foodData])
});

module.exports = router;