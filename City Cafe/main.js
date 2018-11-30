$(document).ready(function () {
	{
		$(".jumbotron").css("opacity", "1");
	}
})


$(window).scroll(function () {
	if ($(window).scrollTop() >= 150) {
		$('.navbar').addClass('fixed-header');


	} else {
		$('.navbar').removeClass('fixed-header');

	}

});


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
    
            $(".icon-right").css("opacity", "1");

        } else {
    
            $(".icon-right").css("opacity", "0");
        }
    })
})

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {

			$("#first-fadein").css("padding-top", "5%");


		} else {

			$("#first-fadein").css("padding-top", "20%");

		}
	})
})


$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 800) {
			$("#second-fadein").css("padding-top", "5%");


		} else {
			$("#second-fadein").css("padding-top", "20%");;
		}
	})
})


$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1000) {
			$("#large-fadein").css("padding-right", "10%");
			$("#large-fadein").css("padding-left", "10%");
			$("#large-fadein").css("opacity", "1");


		} else {
			$("#large-fadein").css("padding-right", "30%");
			$("#large-fadein").css("padding-left", "30%");
			$("#large-fadein").css("opacity", "0");;
		}
	})
})


$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1900) {
			$("#second-fadeup").css("padding-top", "5%");


		} else {
			$("#second-fadeup").css("padding-top", "20%");;
		}
	})
})


$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 3000) {
			$("#third-fadeup").css("padding-top", "7%");


		} else {
			$("#third-fadeup").css("padding-top", "20%");;
		}
	})
})


$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 3900) {
			$("#fourth-fadeup").css("padding-top", "7%");


		} else {
			$("#fourth-fadeup").css("padding-top", "20%");;
		}
	})
})


$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 4300) {
			$("#fifth-fadeup").css("padding-top", "7%");


		} else {
			$("#fifth-fadeup").css("padding-top", "20%");;
		}
	})
})
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 5100) {
			$("#sixth-fadeup").css("padding-top", "7%");


		} else {
			$("#sixth-fadeup").css("padding-top", "20%");;
		}
	})
})


$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 4400) {
			$("#fade-padding").css("padding-right", "10%");
			$("#fade-padding").css("padding-left", "10%");


		} else {
			$("#fade-padding").css("padding-right", "23%");
			$("#fade-padding").css("padding-left", "23%");

		}
	})
})


$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 5600) {
			$(".contact, #contact1").css("opacity", "1");


		} else {
			$(".contact, #contact1").css("opacity", "0");

		}
	})
})


$(window).scroll(function () {
	if ($(window).scrollTop() >= 0) {
		$('#home').addClass('active');

	} else {
		$('#home').removeClass('active');

	}

});


$(window).scroll(function () {
	if ($(window).scrollTop() >= 500) {
		$('#about').addClass('active');
		$('#home').removeClass('active');

	} else {
		$('#about').removeClass('active');

	}

});


$(window).scroll(function () {
	if ($(window).scrollTop() >= 1200) {
		$('#service').addClass('active');
		$('#about').removeClass('active');

	} else {
		$('#service').removeClass('active');

	}

});

$(window).scroll(function () {
	if ($(window).scrollTop() >= 2200) {
		$('#menu').addClass('active');
		$('#service').removeClass('active');

	} else {
		$('#menu').removeClass('active');

	}

});

$(window).scroll(function () {
	if ($(window).scrollTop() >= 3300) {
		$('#gal').addClass('active');
		$('#menu').removeClass('active');

	} else {
		$('#gal').removeClass('active');

	}

});

$(window).scroll(function () {
	if ($(window).scrollTop() >= 4700) {
		$('#chefs').addClass('active');
		$('#gal').removeClass('active');

	} else {
		$('#chefs').removeClass('active');

	}

});


$(window).scroll(function () {
	if ($(window).scrollTop() >= 5450) {
		$('#feed').addClass('active');
		$('#chefs').removeClass('active');

	} else {
		$('#feed').removeClass('active');

	}

});
$(window).scroll(function () {
	if ($(window).scrollTop() >= 6000) {
		$('#contact').addClass('active');
		$('#feed').removeClass('active');

	} else {
		$('#contact').removeClass('active');

	}

});