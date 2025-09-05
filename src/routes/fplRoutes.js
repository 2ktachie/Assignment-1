const { Router } = require('express');
const { getAugustFixtures } = require('../controller/fplController');

const routes = Router();

routes.get('/august', getAugustFixtures);

module.exports = routes;