const pg = require('pg');

module.exports = function dbService(CONFIG) {
  const conString = `postgres://${CONFIG.dbuser}:${CONFIG.dbpassword}@$db/${CONFIG.dbname}`;

  this.connect = pg.connect.bind(pg, conString);

  this.query = (query, params = []) => {
    const promise = new Promise((resolve, reject) => {
      this.connect((err, client, done) => {
        if (err) {
          done();
          return reject(err);
        }
        client.query(query, params, function (err, data) {
          done();
          if (err) {
            return reject(err);
          }
          resolve(data.rows);
        });
      });
    });
    return promise;
  };
}
