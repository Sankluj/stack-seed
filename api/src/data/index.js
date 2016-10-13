const jedi = require('je-di');

const cacheService = require('./cache-service');
const dbService = require('./db-service');

module.exports = jedi
  .module('data', [
    'config'
  ])

  .service('cacheService', cacheService)
  .service('dbService', dbService)

  .name;
