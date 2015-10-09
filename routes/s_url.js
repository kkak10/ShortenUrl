var express = require('express'),
    resource = require("../resources/common"),
    sUrlService = require("../service/sUrlService"),
    commonUtil = require("../util/common"),
    router = express.Router();

router.post('/', getsUrl);
router.get("/", getsUrl);

function getsUrl(req, res, next) {
  var l_url = req.params.l_url,
      s_url = sUrlService.getsUrl(l_url);

  var res_obj = {
    "s_url": s_url
  };

  res.send(commonUtil.jsonConcat(resource.ajax_common_response.success, res_obj));
}

module.exports = router;
