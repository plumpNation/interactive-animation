---
layout: post
title: HammerJS - Gesture to go full screen
date: 2015-03-22 16:02
tags:
  - HammerJS
  - Interaction
  - Touch
  - Gestures
---

[**Demo**](demos/gesture-fullscreen.html)

## The brief
Possibly the most difficult thing to manage in a responsive web application is your window real
estate. The gods are against you and at the time of writing this there are many different issues
that can crop up, hurting your release velocity and causing much consternation about how the user
will actually use the view you are creating.

My personal favourite of all the responsive view combinations is the resolution that is created
when the soft keyboard opens. Android Chrome doesn't handle it the same way as the Apple devices do
in Safari. Regardless, the soft keyboard takes ***a lot*** of your window away from you, and the
applications ability to still have a user experience at all is seriously degraded.

Luckily, the user is only trying to do one thing at this time, which is easy to anticipate. Typing.

One of the cool things about scrolling the body on most mobile browsers is that the browser
immediately goes full screen, which can help to remedy this issue by providing a load more window
than you had before. The problem here is that a web application will rarely allow the body to
scroll, it's not a website after all. With navigation menus, detail views, slide out menus etc,
you naturally end up with scrollable **parts** of your page.

So, let's give the user a couple of options they didn't have before. It's easy enough to put a
button in the menu to go full screen, so let's do that first.

## The research
For a few years now my go-to library for gestures in the browser has been HammerJS and I'm not about
to change that now. When I need something else, I'll deal with it then. For now let's just install
Hammer and get this show on the road.

For the full screen solution we need look no further than Mozilla's awesome
[developer pages](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode)
where they inform us not only of web standards and their own solutions but other vendor's too.

So we have found some info on how to go full screen, but how to get out of full screen. Well, all
the browsers I have used provide very simple ways natively, so there is no point in creating another
way for the user to escape it.

## The solution

We will need

- to install HammerJS
- to hook up our events to go full screen
 - button click
 - swipe up on header

I chose to swipe up on the header of the application as a full screen trigger as it is highly
unlikely to need to scroll, meaning that we can safely allow vertical swipe event listening. A
second reason is that I am developing on Android Chrome, and to escape full screen you swipe down
from the top of the screen, so then the swipe up on the header is a sort of mirror for this native
action.

{% highlight bash %}
bower install hammer.js
{% endhighlight %}

### Markup
{% highlight html %}
<!-- index.html -->
<link rel="stylesheet" href="demos/gesture-fullscreen.css" charset="utf-8">

<div id="background">
    <div id="header">Swipe up</div>

    <button id="fs-button">GO FULLSCREEN</button>
</div>

<script src="bower_components/hammer.js/hammer.js"></script>
<script src="demos/gesture-fullscreen.js"></script>
{% endhighlight %}

{% highlight css %}
* {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}

body,
html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

#header {
    height: 10rem;
    position: absolute;
    width: 100%;
    background: yellow;
    z-index: 2;
    top: 0;
}

#background {
    height: 30rem;
    background: red;
    padding-top: 10rem;
    position: relative;
}

#fs-button {
    margin: 3rem;
}

{% endhighlight %}

### Script

{% highlight js %}
// app.js
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
{% endhighlight %}
