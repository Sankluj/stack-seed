const jedi = require('je-di');

const router = require('./router');

module.exports = jedi
  .module('api', [])

  .factory('router', router)

  .name;
