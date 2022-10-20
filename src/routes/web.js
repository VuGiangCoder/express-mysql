const express = require('express');
const homeController = require('../controller/homeController')
let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/message', homeController.sendMessage)
    return app.use('/',router);


}
module.exports = initWebRouters;