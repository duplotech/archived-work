

$(document).ready(function () {
    var transform = function ($clouds, $headline, $box) {
        $clouds.addClass('darken');
        $headline.fadeOut(500, function () {
            $box.fadeIn({ duration: 1000, easing: 'swing'});
        });
    };
    var dance = function () {
        var $clouds = $('.clouds'),
            $box = $('.box'),
            $headline = $('.headline');

        if (!$box.is(':visible')) {
            setTimeout(function () {
                transform($clouds, $headline, $box);
            }, 1500);
        }
    };

    var $video = $('#v-background'),
        $space = $('#space'),
        $logo = $('#logo');

    var isMobile = navigator.userAgent.match(/Android|iPhone|iPod/i) != null;
    if (isMobile) {
        $video.hide();
    }

    $space.parallaxify({
        responsive: false,
        useMouseMove: true,
        positionProperty: 'transform',
        alphaFilter: 0.8,
        motionType: 'natural'
    });

    var background = $video;
    var logo = $logo;

    var targetHeight = background.height();
    var minTargetHeight = targetHeight * 1.0;
    var standardBackgroundOpacity = 0.6;
    var standardLogoOpacity = 1.0;

    $(document).scroll(function (e) {

        var scrollY = $(window).scrollTop();
        var scrollPercent = scrollY / minTargetHeight;

        if (!isMobile) {

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
        }

        if (scrollPercent >= 0.75) {
            dance();
        }
    });
});
