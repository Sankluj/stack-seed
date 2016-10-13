const redis = require('redis');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

module.exports = function cacheService(CONFIG) {
  this.redis = {};
  this.init = function () {
    this.redis = redis.createClient({
      host: CONFIG.redishost
    });
  };

  this.set = (...args) =>  this.redis.setAsync(...args);
  this.hset = (...args) =>  this.redis.hsetAsync(...args);
  this.get = (...args) =>  this.redis.getAsync(...args);
  this.hget = (...args) =>  this.redis.hgetAsync(...args);
  this.hdel = (...args) =>  this.redis.hdelAsync(...args);
  this.del = (...args) =>  this.redis.delAsync(...args);
  this.expire = (...args) =>  this.redis.expireAsync(...args);
  this.sadd = (...args) =>  this.redis.saddAsync(...args);
  this.srem = (...args) =>  this.redis.sremAsync(...args);
  this.smembers = (...args) =>  this.redis.smembersAsync(...args);
  this.incr = (...args) =>  this.redis.incrAsync(...args);
  this.setnx = (...args) =>  this.redis.setnxAsync(...args);
}
