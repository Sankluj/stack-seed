const jedi = require('je-di');
const express = require('express');

const configModule = require('./config');

const dataModule = require('./data');
const businessModule = require('./business');
const apiModule = require('./api');

module.exports = jedi
  .module('hackDays', [
    apiModule,
    dataModule,
    businessModule
  ])

  .run((router) => {
    const app = express();

    app.use(router);

    app.listen(80, () => {
      console.log('Api listening on port 80');
    });
  })

  .name;
