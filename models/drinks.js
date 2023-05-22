const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Drink = db.model('Drink', {
    brand: String,
    taste: String,
    price: Number,
});

module.exports = Drink;