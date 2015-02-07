'use strict';

var card = document.getElementById('card');
var limit = 180;

Draggable.create(card, {
    bounds:{
        maxX: limit,
        minX:-limit
    },
    type: 'left',
    onDrag: onDrag,
    onDragEnd: animateBackToOrigin,
    throwProps: true
});

function onDrag() {
    var angle = getAngle(this.x);
    setOrientation(this.x);

    TweenMax.to(card, 0, {
            opacity: Math.max(1 - Math.abs(this.x) / 200, 0.1),
            rotationY: angle
    });
}

function setOrientation(x) {
    var origin = 'right';

    if (x > 0) {
        origin = 'left';
    }

    card.style.transformOrigin = "top " + origin;
}

function getAngle(x) {
    var angle = -(x / 2),
        num = 90;

    if (angle > num) angle = num;
    if (angle < -num) angle = -num;

    return angle;
}

function animateBackToOrigin() {
    TweenMax.to(card, 0.5, {css: {rotationY: 0, left: 0, opacity: 1}});
}
