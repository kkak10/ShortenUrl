var sUrldb = require("../db/model/s_url");
var sUrlService = {};

/**
 * URL을 조회하고 있으면 가져오고 없으면 만들어주는 메서드.
 * @param l_url - 짧게 만들 URL
 */
sUrlService.getsUrl = function(l_url){
  sUrldb.find({
    "where": {
      "l_url": l_url
    }
  }).success(function(data) {
    console.dir(data);
  });
};

module.exports = sUrlService;