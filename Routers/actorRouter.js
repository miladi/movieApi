const express = require('express');
const actorController = require('../Controllers/actorsController');

function routes() {
    const actorRouter = express.Router();
    const controller = actorController();

    actorRouter.route('/actors')
        .get(controller.get);

    actorRouter.route('/actors/:Id')
        .get(controller.get);

    return actorRouter;
}

module.exports = routes;