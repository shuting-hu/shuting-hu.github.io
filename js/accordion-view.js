$(document).ready(function () {

    $('.accordion li').click(function () {

        var text = $(this).children('.hidden');

        if (text.is(':hidden')) {
            text.slideDown('200');
            $(this).children('span').html('-');
        } else {
            text.slideUp('200');
            $(this).children('span').html('+');
        }

    });

});
