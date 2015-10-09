var commonUtil = {};

/**
 * JSON 객체를 합쳐주는 메서드.
 * @param o1 - 합칠 대상이 될 객체 리터럴
 * @param o2 - 합칠 대상이 될 객체 리터럴
 * @returns {object} - 합쳐진 JSON 객체
 */
commonUtil.jsonConcat = function(o1, o2) {
  var o3 = {};

  for (var attrname in o1) {
    o3[attrname] = o1[attrname];
  }

  for (var attrname in o2) {
    o3[attrname] = o2[attrname];
  }

  return o3;
};


module.exports = commonUtil;