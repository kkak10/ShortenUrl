var sUrlModel = require("./model/s_url");

sUrlModel.findAll({
  "attributes": ["id"],
  "order": "id desc",
  "limit": 1
}).then(function(maxId){
  console.dir(maxId[0].id);
});
