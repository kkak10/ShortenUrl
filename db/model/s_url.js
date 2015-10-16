var Sequelize = require('sequelize'),
    db = require('../config');

//s_url Table
var Surl = db.define("s_url",
    {
      "l_url": Sequelize.STRING,
      "s_url": Sequelize.STRING,
      "user_idx": Sequelize.INTEGER
    },

    {
      "scopes": {
        "getlUrl": function(s_url){
          return {
            "attributes": [
              "l_url"
            ],

            "where": {
              "s_url": s_url
            }
          }
        },

        "getTopId": function(){
          return {
            "attributes": ["id"],
            "order": "id desc",
            "limit": 1
          }
        },

        "checkUrl": function(l_url){
          return {
            "attributes": "s_url",
            "where": {
              "l_url": l_url
            }
          }
        }
      }
    }
);

module.exports = Surl;