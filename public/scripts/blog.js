$(document).ready(function() {
    $(".navbar-nav>li>a").hover(function() {
        $(this).css({"color":"#CC2900", "border-bottom":"1px solid #CC2900"});
        }, function() {
        $(this).css({"color":"#777", "border-bottom":"0"});
    });
});