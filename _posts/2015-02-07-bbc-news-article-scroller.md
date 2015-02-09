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

We will need

- the actual article area, flick/swipe/draggable
- pagination display
 - as a bonus pagination control?

Bootstrap is already loaded on this website so I'll make use of that.

### Markup

{% highlight html %}

<!-- The news-carousel is like the `view frame` -->
<section id="news-carousel">
    <!-- The handle is the `container` for the items and is necessary to hold the width value
    of the articles combined, a value used by Dragdealer -->
    <div class="handle">
        <article id="slide-1" class="slide news">...</article>
        <article id="slide-2" class="slide news">...</article>
        <article id="slide-3" class="slide news">...</article>
        <article id="slide-4" class="slide news">...</article>
    </div>
</section>

{% endhighlight %}

### Script

{% highlight js %}

var dragOptions = {
    steps: 4,
    speed: 0.3
};

// Uses the id of or the actual dom element
new Dragdealer('news-carousel', dragOptions);

{% endhighlight %}

## Todo

- Dynamic page update?
-- Look at the `reflow` method
- Accessibility testing.
-- Do screenreaders need the pagination tool?
- Dynamic loading of the content in each article.
- How can I copy and paste out of an article?
