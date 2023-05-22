/*
    Load a machine using :machineid
*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const MachineModel = requireOption(objectrepository, "MachineModel");

    return async function(req, res, next) {
        try {
            const machine = await MachineModel.findOne({ _id:req.params.machineid});
            res.locals.machine = machine;
            return next();
        } catch (error) {
            return next(err);
        }
    }
}