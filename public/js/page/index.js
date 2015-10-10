// Index Page JS
(function(){
  var constObj = {
        "enter_keycode": 13,
        "getsUrl_call": "/s",
        "host_name": window.location.host + "/s/"
      },
      domCache = {},
      pageFunctions = {};

  pageFunctions.getsUrl = function(l_url){
    $.ajax({
      "url": constObj.getsUrl_call,
      "type": "post",
      "data": {
        "l_url": l_url
      }
    }).then(function(data){
      domCache.$s_url_area.html(constObj.host_name + data.s_url);
    });
  };

  $(document).ready(function(){
    domCache.$main_shroten_input = $(".main_shroten_input");
    domCache.$s_url_area = $(".s_url_area");

    domCache.$main_shroten_input.on("keyup", function(event){
      var keycode = event.keyCode;

      if(constObj.enter_keycode === keycode){
        var l_url = $(this).val();

        pageFunctions.getsUrl(l_url);
      }

    })
  });
})();