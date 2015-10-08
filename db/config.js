var config = require("config/info");

var sequelize = new Sequelize(config.url, config.id, config.password, {
  // host 지정
  host: "my.server.tld",
  // port 지정
  port: 12345
});