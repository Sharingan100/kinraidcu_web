var data;
function animateRotate(d){
    var elem = $(".foodcenter");

    $({deg: 0}).animate({deg: d}, {
        duration: 1500,
        step: function(now){
            op = 1-now/(d-360)
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
    $('.foodcenter').hide(1500);
    $('#info').slideUp(1500);
    $('#selform').slideDown(1500);
    $('#btngen').text("GENERATE");
    $('#btngen').attr("func", "togen")
}
$('#btngen').click(function() {
    if ($(this).attr("func") == "toform") {
        animateRotate(4*360);
    }
    else if ($(this).attr("func") == "togen") {
        var loc = $("#location").val();
        var type = $("#foodtype").val();
        $('#response').load("php/request.php", {
          "location":loc,
          "foodtype":type
        }, function(r) {
          data = JSON.parse(r);
          var len = data.length;
          if (len == 0) {
            $('#resname').text("ไม่มีโว้ยยย");
            $('#restaurant').slideDown("fast");
          }
          else {
            rand = Math.floor(Math.random()*len);
            $('#resname').text(data[rand]['name']);
            var restype = data[rand]['type'];
            var resloctext, restypetext;
            var resimg = data[rand]['img_src'];
            var ressug = data[rand]['suggested'];
            switch (data[rand]['faculty']) {
              case "eng": resloctext = "คณะวิศวกรรมศาสตร์"; break;
            }
            switch (data[rand]['type']) {
              case "single": restypetext = "อาหารจานเดียว"; break;
              case "noodle": restypetext = "ก๋วยเตี๋ยว"; break;
              case "stew": restypetext = "ข้าวราดแกง"; break;
              case "steak": restypetext = "สเต็ก"; break;
              case "order": restypetext = "อาหารตามสั่ง"; break;
              case "drink": restypetext = "เครื่องดื่ม"; break;
            }
            $('#resimg').attr("src", "img/restaurant/"+resimg);
            $('#resloc').text(resloctext);
            $('#restype').text(restypetext);
            $('#ressug').text(ressug);
            $('#restaurant').slideDown("fast");
          }
        });
    }
});
