---
title: "Total Immersion"
permalink: "swim/total-immersion-swim-lessons/"
hero: "/images/total-immersion.png"
navigation: "Swimming"
tags:
    - total immersion
description: "After every triathlon swim I felt more and more defeated. Despite all my pool and lake practice, each time I headed into a tri swim situation I felt unprepared. One day I was finally  ready to listen to all the people who said, 'You should take lessons from Shane Eversfield.'"
---

After every triathlon swim I felt more and more defeated. Despite all my pool and lake practice, each time I headed into a tri swim situation I felt unprepared. One day I was finally  ready to listen to all the people who said, "You should take lessons from [Shane Eversfield](https://kaizen-durance.com/zenmans-bio/)."

They went on to describe Total Immersion and tell me that there was a weekly class offered at my gym. All I had to do was sign up and show up and I'd be on my way to effortless swimming. Read all about the process of [Total Immersion](http://www.totalimmersion.net/about) before you read my posts below about my experiences. I wrote each post as soon after the class as I was able, so they reflect my in the moment feelings about the struggle with swimming and show my growth over time. Also, read my post about [why I don't LOVE swimming](/swim/why-i-dont-love-swimming/).

I'm happy to report that I now LOVE to swim and consider it to be a good (and relaxing) form of exercise. I never thought I'd say that before taking Total Immersion!

If you are looking to improve your swimming, definitely check out Shane's classes. He works out of [Island Health and Fitness](http://www.islandhealthfitness.com/) in Ithaca and offers individual and group lessons. He also offers refresher classes. Call Island and they can surely tell you what classes he has going on at any given time.

## Level 1

<ul class="post-list">
  {%- for item in collections.swimmingPosts | has_tag("data.tags", "total immersion") -%}
  {% if (item.date | momentUnix) < ('2014-12-31' | momentUnix) %}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>

## Level 2

<ul class="post-list">
  {%- for item in collections.swimmingPosts | has_tag("data.tags", "total immersion") -%}
  {% if (item.date | momentUnix) < ('2015-02-28' | momentUnix) %}
  {% if (item.date | momentUnix) > ('2014-12-31' | momentUnix) %}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {% endif %}
  {% endif %}
  {%- endfor -%}
</ul>

## Level 3

<ul class="post-list">
  {%- for item in collections.swimmingPosts | has_tag("data.tags", "total immersion") -%}
  {% if (item.date | momentUnix) > ('2015-03-14' | momentUnix) %}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>

_* Sadly I had to miss Week 5_