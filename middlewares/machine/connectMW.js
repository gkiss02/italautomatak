/*
    Connect the machines and the drinks
*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const MachineModel = requireOption(objectrepository, "MachineModel");
    const DrinkModel = requireOption(objectrepository, "DrinkModel");

    return async function(req, res, next) {
        try {
            if (typeof req.body.selectedDrinks === 'undefined') return next();
            res.locals.machine._drinks = req.body.selectedDrinks;

            await res.locals.machine.save();
            return res.redirect('/');
        } catch (error) {
            return next(error);
        }
    }
}
