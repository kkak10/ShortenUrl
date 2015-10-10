var sUrlModel = require("../db/model/s_url"),
    commonUtil = require("../util/common"),
    Promise = require("promise"),
    sUrlService = {};

/**
 * URL을 조회하고 있으면 가져오고 없으면 만들어주는 메서드.
 * @param l_url - 짧게 만들 URL
 */
sUrlService.getsUrl = function(l_url){
  var self = this;
  //First, Check URL in DB.
  var promise = new Promise(function(resolve, reject){
    var check_url_promise = self.checkUrl(l_url);

    check_url_promise.then(function(data){
      if (data) {
        resolve(data.s_url);
      } else {
        var top_ids_promise = self.topUrlId();

        top_ids_promise.then(function(increate_id){
          var base64_id = self.insertSurl(l_url, increate_id);
          resolve(base64_id);
        })
      }
    }, function(error){
      reject(error);
    });
  });

  return promise;
};

/**
 * l_url이 DB에 있는지 확인하는 메서드.
 * @param l_url - DB에 있는지 체크할 URL.
 * @return {Promise} - 성공시 : s_url 데이터를 넘겨줌.
 */
sUrlService.checkUrl = function(l_url){
  var promise = new Promise(function(resolve, reject){
    sUrlModel.findOne({
      "attributes": "s_url",
      "where": {
        "l_url": l_url
      }
    }).then(function(urlData){
      if (urlData) {
        resolve(urlData.s_url)
      } else {
        reject()
      }
    }).catch(function(error){
      reject(error);
    });
  });

  return promise;
};

/**
 * 현재 Table에서 가장 높은 id값을 가져온 후
 * 1을 더해주는 메서드.
 * @return {promise} - 가장 높은 값에 1을 더한 값을 인자로 가지고 있는 Promise
 */
sUrlService.topUrlId = function(){
  var promise = new Promise(function(resolve, reject){
    sUrlModel.findOne({
      "attributes": ["id"],
      "order": "id desc",
      "limit": 1
    }).then(function(maxIdData){
      var increseId;

      if (maxIdData.id) {
        increseId = maxIdData.id + 1;
      } else {
        increseId = 1;
      }

      resolve(increseId)
    }).catch(function(error){
      reject(error);
    })
  });

  return promise;
};

/**
 * l_url과 increase_id를 받아서 base64인코딩후 Table에 넣어주는 메서드.
 * @param l_url - 원본 URL
 * @param increate_id - 현재 DB의 최대id 값 + 1
 * @return {string} - base64 인코딩한 값.
 */
sUrlService.insertSurl = function(l_url, increate_id){
  var base64_id = commonUtil.base64_encode(increate_id);

  sUrlModel.create({"l_url": l_url, "s_url": base64_id});

  return base64_id;
};

module.exports = sUrlService;