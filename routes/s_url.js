var express = require('express'),
    resource = require("../resources/common"),
    sUrlService = require("../service/sUrlService"),
    commonUtil = require("../util/common"),
    router = express.Router();

router.get("/:s_url", goToUrl);
router.post('/', getsUrl);

function goToUrl(req, res, next){
  var s_url = req.params.s_url,
      protocolArr = ["http://", "https://"];

  if(protocolArr.indexOf(s_url) === -1){
    s_url = "http://" + s_url;
  }

  res.redirect(301, s_url);
  //
  //sUrlService.getlUrl(s_url).then(function(l_url){
  //})
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
