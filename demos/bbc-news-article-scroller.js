'use strict';

// Keeping it all global like a bad boy, so you can see what you want in the console.

var newsElement = document.getElementById('news-carousel');

var dDealer = new Dragdealer(newsElement, {
    steps: 4,
    speed: 0.3,
    callback: function (x, y) {
        var page = dDealer.getStep()[0] - 1;
        $('.page-btn.active').removeClass('active');
        $($('.page-btn').get(page)).addClass('active');
    }
});

$('.page-btn').on('click', function (e) {
    var page,
        self;

    e.preventDefault();
    e.stopPropogation();

    self = $(this);

    // jQuery index() returns a zero based index.
    // Drag dealer actually needs the human friendly index.
    page = self.index() + 1;

    dDealer.setStep(page);
});
