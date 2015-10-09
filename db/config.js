var config = require("./config/info");
var Sequelize = require('sequelize');

var sequelize = new Sequelize(config.db, config.id, config.password, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;

