var data,newdata,len,lenall;
$(document).ready(function() {
  $.get("php/viewrestaurant.php", function(r) {
    data = $.parseJSON(JSON.stringify(r));
    lenall = data.length;
  });
});
$(window).on('load', function() {
  $('.loading').hide("slow");
  $('#whole').fadeIn("slow");
});
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
    $('#btngen').attr("func", "togen");
}
$('#btngen').click(function() {
    if ($(this).attr("func") == "toform") {
        animateRotate(4*360);
    }
    else if ($(this).attr("func") == "togen") {
        var loc = $("#location").val();
        var type = $("#foodtype").val();
        newdata = [];
        for (i=0;i<lenall;i++) {
          if ((loc == "any") || (loc == data[i]['faculty'])) {
            if ((type == "any") || (type == data[i]['type'])) {
              newdata.push(data[i]);
            }
          }
        }
        len = newdata.length;
        if (len == 0) {
          $('#resname').text("ไม่มีโว้ยยย");
          $('#resinfo').slideUp("fast");
          $('#restaurant').slideDown("fast");
        }
        else {
          rand = Math.floor(Math.random()*len);
          $('#resname').text(newdata[rand]['name']);
          var restype = newdata[rand]['type'];
          var resloctext, restypetext;
          var resimg = newdata[rand]['img_src'];
          var ressug = newdata[rand]['suggestedmenu'];
          switch (newdata[rand]['faculty']) {
            case "eng": resloctext = "คณะวิศวกรรมศาสตร์"; break;
            case "art": resloctext = "คณะอักษรศาสตร์"; break;
          }
          switch (newdata[rand]['type']) {
            case "single": restypetext = "อาหารจานเดียว"; break;
            case "noodle": restypetext = "ก๋วยเตี๋ยว"; break;
            case "stew": restypetext = "ข้าวราดแกง"; break;
            case "steak": restypetext = "สเต็ก"; break;
            case "order": restypetext = "อาหารตามสั่ง"; break;
            case "esan": restypetext = "อาหารอีสาน"; break;
            case "drink": restypetext = "เครื่องดื่ม"; break;
          }
          $('#resimg').attr("src", "img/restaurant/"+resimg);
          $('#resinfo').slideDown("fast");
          $('#resloc').text(resloctext);
          $('#restype').text(restypetext);
          if (ressug != null) {
            $('#ressug_p').show("fast");
            $('#ressug').text(ressug);
          }
          else {
            $('#ressug_p').hide("fast");
          }
          $('#restaurant').slideDown("fast");
        }
    }
});
