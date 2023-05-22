/*
    Delete a machine using :machineid
*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return async function(req, res, next) {
        if (typeof res.locals.machine === 'undefined') {
            return next();
        }

        try {
            await res.locals.machine.deleteOne();
            return res.redirect('/');
        } catch (error) {
            return next(error);
        }
    }
}