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
}
$('#btngen').click(function() {
    animateRotate(4*360);
});
