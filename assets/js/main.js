//banner

$('.banner').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
})



// menu

$('.menubar').click(function () {
    $('.header-nav-area ul').toggleClass('nva-open');
    $('.nav-bg').toggleClass('nav-back');
    $('body').toggleClass('scrolling-off');

    if ($('.menubar img').attr("src") == 'assets/img/menu.svg') {
        $('.menubar img').attr("src", "assets/img/crose-menu.svg")
    } else {
        $('.menubar img').attr("src", "assets/img/menu.svg")
    }
})

$('.header-nav-area ul li a').click(function () {
    $('body').removeClass('scrolling-off');
    $('.header-nav-area ul').removeClass('nva-open');
    $('.nav-bg').removeClass('nav-back');

    if ($('.menubar img').attr("src") == 'assets/img/crose-menu.svg') {
        $('.menubar img').attr("src", "assets/img/menu.svg")
    } else {
        $('.menubar img').attr("src", "assets/img/crose-menu.svg")
    }
})



//video

$('.video-play-btn').click(function () {
    $(this).parent().find('.video-poster').hide();
    $(this).hide();
    $(this).parent().find('.the-review').trigger('play');
})

//faq

$('.question').click(function (e) {
    $(this).next().slideToggle(300);
    $(this).children().toggleClass('rotating');
})



$('#our-achievement').waypoint(function () {
    function count($this) {
        var current = parseInt($this.html(), 10);
        $this.html(++current);
        if (current !== $this.data('count')) {
            setTimeout(function () {
                count($this)
            }, 10);
        }
    }
    $(".counting h2").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

    this.destroy()
}, {
    offset: '80%'
})




// how to use slider

function next_useIt() {
    $("#useIt-slider .useIt_item:first-child").hide().appendTo("#useIt-slider").fadeIn();
    $.each($('.useIt_item'), function (index, useIt_item) {
        $(useIt_item).attr('data-position', index + 1);
    });
}

function prev_useIt() {
    $("#useIt-slider .useIt_item:last-child").hide().prependTo("#useIt-slider").fadeIn();
    $.each($('.useIt_item'), function (index, useIt_item) {
        $(useIt_item).attr('data-position', index + 1);
    });
}

$("#next-btn").click(function () {
    prev_useIt()
});


$("#prev-btn").click(function () {
    next_useIt()
});


$("body").on("click", "#useIt-slider .useIt_item:not(:first-child)", function () {
    var get_slide = $(this).attr('data-position');

    console.log(get_slide)
    if (get_slide == 2) {
        next_useIt()
    } else if (get_slide == 3) {
        $("#useIt-slider .useIt_item:first-child").hide().appendTo("#useIt-slider").fadeIn();
        $("#useIt-slider .useIt_item[data-position= " + 2 + "]").hide().appendTo("#useIt-slider").fadeIn();
        $.each($('.useIt_item'), function (index, useIt_item) {
            $(useIt_item).attr('data-position', index + 1);
        });
    }
});



var isDown = false
var moveX;

$("#useIt-slider .useIt_item .how-to-use-img").mousedown(function (e) {
    var offLeft = $(this).offset()
    isDown = true;
    moveX = e.pageX - offLeft.left;
})


$("#useIt-slider .useIt_item .how-to-use-img").mouseleave(function () {
    isDown = false
    $(this).css({
        position: "relative",
        left: '0px'
    })
})


$("#useIt-slider .useIt_item .how-to-use-img").mousemove(function (el) {
    var offLeft = $(this).offset()
    if (!isDown) return
    el.preventDefault()
    var mX = el.pageX - offLeft.left

    var walk = mX - moveX


    if (walk > 0) {
        $(this).css({
            position: "relative",
            left: walk * .5 + 'px'
        })
        if (walk > 100) {
            next_useIt()
        }
    } else if (walk < 0) {
        $(this).css({
            position: "relative",
            left: walk * .5 + 'px'
        })
        if (walk < -100) {
            prev_useIt()
        }
    } else {
        $(this).css({
            position: "relative",
            left: '0px'
        })
    }

})

$("#useIt-slider .useIt_item .how-to-use-img").mouseup(function () {
    isDown = false
    $(this).css({
        position: "relative",
        left: '0px'
    })

})



//back to top

$(window).scroll(function () {
    if ($(this).scrollTop() > 2500) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});

$('.back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
    return false;
});




//animations

$('.feature-list-body').waypoint(function () {
    $(this.element).find('.number .bg-green').addClass('height-increasing');
    $(this.element).find('.second-number .the-number .green-lins .bg-green:first-of-type').addClass('min-height-increasing')
}, {
    offset: '50%'
})

$('.feature-list-body').waypoint(function () {
    $(this.element).find('.number .bg-green').removeClass('height-increasing');
    $(this.element).find('.second-number .the-number .green-lins .bg-green:first-of-type').removeClass('min-height-increasing')
}, {
    offset: '-150%'
})

$('.feature-list-body').waypoint(function () {
    $(this.element).find('.number .bg-green').removeClass('height-increasing');
    $(this.element).find('.second-number .the-number .green-lins .bg-green:first-of-type').removeClass('min-height-increasing')
}, {
    offset: '150%'
})

$('.feature-list-body').waypoint(function () {
    $(this.element).find('.number .bg-green').addClass('height-increasing');
    $(this.element).find('.second-number .the-number .green-lins .bg-green:first-of-type').addClass('min-height-increasing')
}, {
    offset: '0%'
})