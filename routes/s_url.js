var express = require('express'),
    resource = require("../resources/common"),
    sUrlService = require("../service/sUrlService"),
    commonUtil = require("../util/common"),
    router = express.Router();

router.get("/", goToUrl);
router.post('/', getsUrl);

function goToUrl(req, res, next){

}

function getsUrl(req, res, next) {
  var l_url = req.param("l_url"),
      s_url_promise = sUrlService.getsUrl(l_url);

  s_url_promise.then(function(s_url){
    var res_obj = {
      "s_url": s_url
    };

    res.status(200).send(commonUtil.jsonConcat(resource.ajax_common_response.success, res_obj));
  }).catch(function(){
    res.status(500).send(resource.ajax_common_response.fail);
  });

}

module.exports = router;
