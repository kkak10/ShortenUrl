var express = require('express'),
    resource = require("../resources/common"),
    sUrlService = require("../service/sUrlService"),
    commonUtil = require("../util/common"),
    _ = require("underscore"),
    router = express.Router();

router.get("/:s_url", goToUrl);
router.post('/', getsUrl);

/**
 * lUrl로 Redirection해주는 메서드.
 * @param req
 * @param res
 * @param next
 */
function goToUrl(req, res, next){

  var s_url = req.params.s_url,
      protocol = "http://";

  sUrlService.getlUrl(s_url)
      .then(function(l_url){
        if(l_url.indexOf(protocol) === -1){
          l_url = protocol + l_url;
        }

        res.redirect(301, l_url);
      })
      .catch(function(error){
        console.dir(error);
      });
}

/**
 * sUrl을 리턴해주는 메서드.
 * @param req
 * @param res
 * @param next
 */
function getsUrl(req, res, next){
  var l_url = req.param("l_url"),
      s_url_promise = sUrlService.getsUrl(l_url);

  s_url_promise.then(function(s_url){
    var res_obj = {
          "s_url": s_url
        },
        sUrlData = commonUtil.jsonConcat(resource.ajax_common_response.success, res_obj);

    res.status(200).send(sUrlData);
  }).catch(function(){
    res.status(500).send(resource.ajax_common_response.fail);
  });

}

module.exports = router;
