'use strict'
const mongoose = require('./mongoose')

// start/routes.js




/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
    
Route.on('/').render('welcome')
// Route.get('/users', 'UserController.index')           // GET all users
// Route.post('/users', 'UserController.store')          // POST to create a user
// Route.get('/users/:id', 'UserController.show')        // GET a specific user by ID
// Route.put('/users/:id', 'UserController.update')      // PUT to update a user by ID
// Route.delete('/users/:id', 'UserController.destroy')  // DELETE a user by ID
// Route.post('/authenticate', 'PlayerController.authenticate');
Route.get('/players', 'PlayerController.listAuthenticatedUsers');

Route.post('/your-endpoint', 'RequestController.handleRequest');

Route.get('/users', 'UserController.index')

// Create a new user
Route.post('/users', 'UserController.store')

// Fetch a single user by ID
Route.get('/users/:id', 'UserController.show')

// Update a user by ID
Route.put('/users/:id', 'UserController.update')

// Delete a user by ID
Route.delete('/users/:id', 'UserController.destroy')


Route.post('/authenticate', 'AuthController.authenticate');


// Update the route to use 'UserInfoController'
Route.post('/userinfo', 'UserInfoController.userinfo');

Route.post('/getBalance', 'BalanceController.getBalance');


Route.post('/debitRequest', 'DebitRequestController.debitRequest');

Route.post('/creditRequest', 'CreditRequestController.creditRequest');


Route.post('/cancelRequest', 'CancelRequestController.cancelRequest');
