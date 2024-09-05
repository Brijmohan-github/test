// start/kernel.js
const Server = use('Server')

const globalMiddleware = [
  'Adonis/Middleware/BodyParser',
  'Adonis/Middleware/Session',
  'Adonis/Middleware/Shield',  // This handles CSRF protection and may cause 403 errors
  'Adonis/Middleware/AuthInit',
];

const namedMiddleware = {
  auth: 'Adonis/Middleware/Auth',
};

Server
  .registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware);
