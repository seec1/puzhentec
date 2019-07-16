$(function() {

    setNavOffsetWidth()
    $(window).resize(function() {
        setNavOffsetWidth()
    })
})

function setNavOffsetWidth() {
    var wW = $(document).width()
    $("#header .item1 .dropdown-menu").css("width", wW - $("#header nav .item1").offset().left)
    $("#header nav .item2 .dropdown-menu").css("width", wW - $("#header nav .item2").offset().left)
    $("#header nav .item3 .dropdown-menu").css("width", wW - $("#header nav .item3").offset().left)
    if ($(document).width() < 768) {
        $("#header .nav-item .dropdown-menu").css("width", "100%")
    }
}