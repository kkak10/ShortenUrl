var sUrlModel = require("./model/s_url");

var sUrl = sUrlModel.findAll({
  "where": {
    "l_url": "http://naverㄹㄹ.com"
  }
}).then(function (data) {
  console.dir(data)
});
