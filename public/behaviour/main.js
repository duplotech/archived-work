$(document).ready(function () {
    var isMobile = navigator.userAgent.match(/Android|iPhone|iPod/i) != null;
    if (isMobile) {
        $('#v-background').hide();
    }

    $('#space').parallaxify({
        responsive: true,
        useMouseMove: false
    });

    if (!isMobile) {
        var background = $('#v-background');
        var logo = $('#logo');
        var targetHeight = background.height();
        var minTargetHeight = targetHeight * 0.7;
        var standardBackgroundOpacity = 0.6;
        var standardLogoOpacity = 1.0;

        $(document).scroll(function (e) {
            var scrollY = $(window).scrollTop();
            var scrollPercent = scrollY / minTargetHeight;
            var backgroundOpacity = standardBackgroundOpacity - scrollPercent;
            var logoOpacity = standardLogoOpacity - scrollPercent;
            if (backgroundOpacity < 0) {
                backgroundOpacity = 0;
            }
            if (logoOpacity < 0) {
                logoOpacity = 0;
            }

            background.css('opacity', backgroundOpacity);
            logo.css('opacity', logoOpacity);
        });
    }
});
