const renderMW = require('../middlewares/renderMW');
const delMachineMW = require('../middlewares/machine/delMachine');
const getMachineMW = require('../middlewares/machine/getMachine');
const getMachinesMW = require('../middlewares/machine/getMachines');
const saveMachineMW = require('../middlewares/machine/saveMachine');
const connectMW = require('../middlewares/machine/connectMW');
const delDrinkMW = require('../middlewares/drink/delDrink');
const getDrinkMW = require('../middlewares/drink/getDrink');
const getDrinksMW = require('../middlewares/drink/getDrinks');
const saveDrinkMW = require('../middlewares/drink/saveDrink');

const MachineModel = require('../models/machines');
const DrinkModel = require('../models/drinks');

module.exports = function(app) {
    const objectRepository = {
        MachineModel: MachineModel,
        DrinkModel: DrinkModel
    };

    app.get('/',
    getMachinesMW(objectRepository),
    renderMW(objectRepository, 'index')
    );

    app.use('/machine/new',
    saveMachineMW(objectRepository),
    renderMW(objectRepository, 'machineeditnew')
    );

    app.use('/machine/edit/:machineid',
    getMachineMW(objectRepository),
    saveMachineMW(objectRepository),
    renderMW(objectRepository, 'machineeditnew')
    );

    app.get('/machine/delete/:machineid',
    getMachineMW(objectRepository),
    delMachineMW(objectRepository)
    );

    app.use('/machine/view/:machineid',
    getMachineMW(objectRepository),
    getDrinksMW(objectRepository),
    connectMW(objectRepository),
    renderMW(objectRepository,'drinkview')
    );

    app.get('/drinks',
    getDrinksMW(objectRepository),
    renderMW(objectRepository, 'drink')
    );

    app.use('/drink/new',
    saveDrinkMW(objectRepository),
    renderMW(objectRepository, 'drinkeditnew')
    );

    app.use('/drink/edit/:drinkid',
    getDrinkMW(objectRepository),
    saveDrinkMW(objectRepository),
    renderMW(objectRepository, 'drinkeditnew')
    );

    app.get('/drink/delete/:drinkid',
    getDrinkMW(objectRepository),
    delDrinkMW(objectRepository)
    );
}

