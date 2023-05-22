const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Machine = db.model('Machine', {
    name: String,
    _drinks: [{
        type: Schema.Types.ObjectId,
        ref: "Drink"
    }]
});

module.exports = Machine;