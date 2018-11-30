$(document).ready(function() {

    $("nav, .jumbotron h1, .jumbotron p").css("opacity", "1");
    $(".jumbotron h1, .jumbotron p").css("padding-right", "0");

})

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".first .content").css("padding-top", "0%");


        } else {
            $(".first .content").css("padding-top", "20%");
        }
    })
})

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $(".second").css("background-color", "#41e0d8");


        } else {
            $(".second").css("background-color", "#262a34");
        }
    })
})

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1100) {
            $(".third").css("padding-top", "4%");


        } else {
            $(".third").css("padding-top", "15%");
        }
    })
})