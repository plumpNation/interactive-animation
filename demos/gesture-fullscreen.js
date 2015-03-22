(function () {
    'use strict';

    var fsButton = document.getElementById('fs-button'),
        header = document.getElementById('header'),

        hammertimeButton = new Hammer(fsButton),
        hammertimeHeader = new Hammer(header),

        goFullScreen = function () {
            var fsElement = document.body;

            if (fsElement.requestFullscreen) {
                fsElement.requestFullscreen();

            } else if (fsElement.msRequestFullscreen) {
                fsElement.msRequestFullscreen();

            } else if (fsElement.mozRequestFullScreen) {
                fsElement.mozRequestFullScreen();

            } else if (fsElement.webkitRequestFullscreen) {
                fsElement.webkitRequestFullscreen();
            }
        };

    hammertimeButton.on('tap', goFullScreen);

    // We need to allow the vertical swipe as explained here
    // http://hammerjs.github.io/getting-started/#usage
    hammertimeHeader.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    hammertimeHeader.on('swipeup', goFullScreen);
}());
