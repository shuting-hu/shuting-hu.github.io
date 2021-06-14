$(document).ready(function () {

    $(window).scroll(function () {
        var currScroll = $(window).scrollTop()

        if (currScroll > 50) {
            $('.nav').addClass('scrolled');
        } else {
            $('.nav').removeClass('scrolled');
        };
    });
});