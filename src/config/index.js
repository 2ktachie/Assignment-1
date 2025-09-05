const { Router } = require('express');
const fixturesRoutes = require('./fixtures');

const routes = Router();

routes.use('/fixtures', fixturesRoutes);

module.exports = routes;