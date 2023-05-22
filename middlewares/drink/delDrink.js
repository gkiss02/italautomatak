/*
    Delete a drink using :drinkid
*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return async function(req, res, next) {
        if (typeof res.locals.drink === 'undefined') {
            return next();
        }

        try {
            await res.locals.drink.deleteOne();
            return res.redirect('/drinks');
        } catch (error) {
            return next(error);
        }
    }
}

