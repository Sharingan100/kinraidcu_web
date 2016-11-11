function animateRotate(d){
    var elem = $(".foodcenter");

    $({deg: 0}).animate({deg: d}, {
        duration: 2000,
        step: function(now){
            op = 1-now/(d-360)
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
    $('.foodcenter').hide(2000);
    $('#info').slideUp(2000);
    $('#form').slideDown(2000);
    $('#btngen').text("GENERATE");
}
$('#btngen').click(function() {
    animateRotate(4*360);
});
