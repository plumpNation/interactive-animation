---
layout: post
title: Samsung desktop carousel preparation
date: 2015-02-07 00:02
tags:
  - Greensock
  - Navigation
---

[**Demo**](demos/samsung-android-desktop.html)

## IMPORTANT

This is not anywhere near complete, in fact I am looking to perfect the other various interactive
components involved.

The example at this time merely shows the drag with rotation and bounds. When dropped it will
reset itself to the centre.


## The brief

This example is just to start playing with the Greensock library again and see if I can achieve an interaction identical to the Samsung Android desktop.

It's pretty easy to get started with Greensock. It's available on bower, and comes in a 'lite' or 'max' form. I find it easier to start with 'TweenMax' and then see if I can move it to 'TweenLite' later on.

## The research

There is a Draggable plugin which gives you a lot of functionality out of the box, so in the spirit of not reinventing the wheel especially for the purposes of a spike, I'm just going to use that.

## The solution

### The markup

{% highlight html %}

<section class="container">
  <div id="card">
    <figure class="front">1</figure>
  </div>
</section>

{% endhighlight %}

### The script

{% highlight js %}

// The second parameter is the Draggable options, of which there are many. Google it like a pro.
Draggable.create(card, {type: 'left'});

{% endhighlight %}
