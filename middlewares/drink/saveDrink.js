/*
    Save a drink using :drinkid
    If drink already exists -> update
    else create a new
*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const DrinkModel = requireOption(objectrepository, 'DrinkModel');

    return async function(req, res, next) {
        try {
            if (
                typeof req.body.brand === 'undefined' ||
                typeof req.body.taste === 'undefined' ||
                typeof req.body.price === 'undefined'
            )
                return next();
            

            if (typeof res.locals.drink === 'undefined') res.locals.drink = new DrinkModel();

            res.locals.drink.brand = req.body.brand;
            res.locals.drink.taste = req.body.taste;
            res.locals.drink.price = req.body.price;

            await res.locals.drink.save();
            
            return res.redirect('/drinks');
        } catch (error) {
            return next(error);
        }
    }
}