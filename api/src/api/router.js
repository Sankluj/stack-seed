const express = require('express');

module.exports = function routerFactory() {
  const router = express.Router();

  router.get('/', (req, res) => {
    return res.send({
      message: 'Hello world!'
    });
  });

  return router;
}
