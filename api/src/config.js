const jedi = require('je-di');

module.exports = jedi
  .module('config', [])

  .register('CONFIG', {
    dbuser: process.env.DB_USER,
    dbname: process.env.DB_NAME,
    dbpassword: process.env.DB_PASSWORD,
    dbhost: 'db',

    redishost: 'cache'
  })

  .name;
