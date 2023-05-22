/*
    Load all machines
*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const MachineModel = requireOption(objectrepository, 'MachineModel');

    return async function(req, res, next) {
        try {
            const machines = await MachineModel.find();
            res.locals.machines = machines;
            return next();
        } catch (err) {
            return next(err);
        }
    };
};
