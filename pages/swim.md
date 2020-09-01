---
title: "Swimming"
permalink: "swim/"
hero: "/images/2014/09/IMG_1341-e1414714522326.jpg"
navigation: ""
description: ""
eleventyNavigation:
  key: Swimming
  order: 4
---

{% pictureRt "/images/2014/09/IMG_1350.jpg", "Swimming in Cayuga Lake" %}

Each year for several years, my [husband](https://scottpdawson.com/ "Scott Dawson") and I had an annual challenge. One year we biked around [Cayuga Lake](http://en.wikipedia.org/wiki/Cayuga_Lake "Cayuga Lake"), another we ran our first half marathon, and the third year we tackled our first sprint triathlon. After the sprint tri we were hooked on exercise! We put countless hours in training over the next many years, and improved as athletes. After doing the Cayuga Lake Tri four times, however, the swim is still the most stressful portion for me. I've tried several things to improve swimming and I'm kind of stalled. 2014-2015 is the year I plan to really work on improved comfort and efficiency.

## Recent Swimming Posts

<ul class="l-grid post-grid">
  {%- for item in collections.swimmingPosts | reverse  -%}
  {% if loop.index <= 3 %}
  {% include '_includes/components/post-teaser.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>

## Total Immersion

{% pictureRt "/images/total-immersion.png", "" %}

Total Immersion took me from being unable to swim more than 50 yards without panic to being able to swim over a mile comfortably. I am still not a fast swimmer, but that is because of my own shoulder mobility struggles and body type, not because of the method. If you are interested in improving your swimming, I highly recommend you check this out. Total Immersion offers a video set and book for you to learn alone, but the best thing to do is look for a local TI coach. [Shane Eversfield](https://kaizen-durance.com/zenmans-bio/) is a fabulous coach here in Ithaca if you are ever in the area. He also teaches workshops around the world.

[Read more about my Total Immersion journey](/swim/total-immersion-swim-lessons)

<h2>Other Swimming Posts</h2>

<ul class="post-list">
  {%- for item in collections.swimmingPosts | lacks_tag("data.tags", "total immersion") | reverse  -%}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {%- endfor -%}
</ul>
