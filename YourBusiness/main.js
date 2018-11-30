$(document).ready(function() {
    $("#jumbotron h1").css("padding-top", "14%");

})

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            $("nav").css("background-color", "#201a80");


        } else {
            $("nav").css("background-color", "transparent");
        }
    })
})


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $("#about").css("opacity", "1");


        } else {
            $("#about").css("opacity", "0");
        }
    })
})


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $("#secondcontent").css("opacity", "1");
            $("#secondcontent").css("margin-left", "0");


        } else {
            $("#secondcontent").css("opacity", "0");
            $("#secondcontent").css("margin-left", "50%");
        }
    })
})


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 900) {
            $("#advantage").css("padding-top", "0%");


        } else {
            $("#advantage").css("padding-top", "10%");
        }
    })
})


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1400) {
            $(".projects").css("padding", "0 11%");


        } else {
            $(".projects").css("padding", "0 30%");
        }
    })
})


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 2200) {
            $("#contact").css("opacity", "1");


        } else {
            $("#contact").css("opacity", "0");
        }
    })
})