const routes = require('next-routes')();

routes
    .add('/campaigns/new','/campaigns/new')
    .add('/campaigns/:address/dashboard','/campaigns/add')
    .add('/campaigns/:address/vote','/campaigns/requests/index')
    .add('/campaigns/:address/results','/campaigns/requests/new');

module.exports = routes; 