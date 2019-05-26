'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address/dashboard', '/campaigns/add').add('/campaigns/:address/vote', '/campaigns/requests/index').add('/campaigns/:address/results', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGtCQUMwQixBQUQxQixrQkFFSyxBQUZMLElBRVMsQUFGVCxpQ0FFeUMsQUFGekMsa0JBR0ssQUFITCxJQUdTLEFBSFQsNEJBR29DLEFBSHBDLDZCQUlLLEFBSkwsSUFJUyxBQUpULCtCQUl1QyxBQUp2Qzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2luaXRpc2gvUGljdHVyZXMvVm90aW5nT25FdGhlcmV1bSJ9