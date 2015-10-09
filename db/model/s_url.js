var Sequelize = require('sequelize'),
    db = require('../config');

//s_url Table
var Surl = db.define("s_url", {
  "l_url": Sequelize.STRING,
  "s_url": Sequelize.STRING,
  "user_idx": Sequelize.INTEGER
});

module.exports = Surl;