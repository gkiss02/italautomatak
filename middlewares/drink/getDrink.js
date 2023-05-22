/*
    Save a drink using :drinkid
*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const DrinkModel = requireOption(objectrepository, "DrinkModel");

    return async function(req, res, next) {
        try {
            const drink = await DrinkModel.findOne({ _id:req.params.drinkid});
            res.locals.drink = drink;
            return next();
        } catch (error) {
            return next(error);
        }
    }
}
