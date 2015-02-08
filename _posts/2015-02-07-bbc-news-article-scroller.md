---
layout: post
title: BBC News Android - Article scroller
date: 2015-02-07 16:30
tags:
  - Dragdealer
  - Navigation
---

[**Demo**](demos/bbc-news-article-scroller.html)

## The brief
We've seen them 1000 times before. It's the bread and butter of touch animation, from image
slide shows to page navigation, the carousel gives the touch user the 'swipe through content'
capability.

The first example should be as simple as being able to scroll from one side to the other. I want
the demo to be AA accessible, so I want semantic markup that the library doesn't alter.

Something like this for the actual articles make sense I think.

{% highlight html %}

<section class="container">
    <article class="page">...</article>
    <article class="page">...</article>
    <article class="page">...</article>
    <article class="page">...</article>
    <article class="page">...</article>
</section>

{% endhighlight %}

## The research

I found an example that's pretty much dead on called [Extraslider](http://slider.extralagence.com). This example is really nice but it uses the excellent [Greensock](http://greensock.com/) library.
Greensock doesn't ship with an open source license, although the code is openly available on Github.
It is an exceptional library, but I want to find completely open source solutions to these problems.

I then came across [Dragdealer](http://skidding.github.io/dragdealer/) and it looked like it
had exactly what I needed out of the box. Moreover, it was released with MIT license, which is,
let's face it, the absolute best license there is, in the world, ever.

## The solution

### Markup

{% highlight html %}

<!-- the news-carousel is like the `view frame` -->
<section id="news-carousel">
    <!-- the handle is the `container` for the items -->
    <div class="handle">
        <div class="slide img1">
            <article class="news"></article>
        </div>
    </div>
</section>

{% endhighlight %}

### Script

{% highlight js %}

// use the id of the dom element
new Dragdealer('news-carousel', {
    steps: 4,
    speed: 0.3,
    loose: true,
    requestAnimationFrame: true
});

{% endhighlight %}

## Todo

- Page position indicator
 - Look at the `getStep` method.
- Make the page position indicator interactive and navigate on click.
 - Look at `setStep` method.
- Dynamic page update?
 - Look at the `reflow` method
