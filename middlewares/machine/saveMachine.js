/*
    Save a machine using :machineid
    If machine already exists -> update
    else create a new
*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const MachineModel = requireOption(objectrepository, 'MachineModel');
    return async function(req, res, next) {
        try {
            if (typeof req.body.machineName === 'undefined') return next();
            
            
            if (typeof res.locals.machine === 'undefined') res.locals.machine = new MachineModel();

            res.locals.machine.name = req.body.machineName;
            await res.locals.machine.save();

            return res.redirect('/');
        } catch (error) {
            return next(error);
        }
    }
}
