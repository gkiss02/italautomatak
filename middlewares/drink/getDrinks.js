/*
    Load all drinks
*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const DrinkModel = requireOption(objectrepository, 'DrinkModel');

    return async function(req, res, next) {
        try {
            const drinks = await DrinkModel.find();
            res.locals.drinks = drinks;
            return next();
        } catch (err) {
            return next(err);
        }
    };
};
