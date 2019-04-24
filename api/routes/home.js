const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /'
    });
});

router.post('/', (req, res, next) => {
    const pet = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'Handling POST request to /',
        createdpet: pet
    });
});
module.exports = router;