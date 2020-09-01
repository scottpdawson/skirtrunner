---
title: Welcome
permalink: /
hero: "/images/amy-in-oregon.jpg"
eleventyNavigation:
  key: Welcome
  order: 1
---

## Hi. I'm Amy Dawson!

- I teach 8th grade math at Trumansburg Middle School, and blog about math at [mathista.org](https://mathista.org/)
- I am the proprietor of [Emoticakes](https://emoticakes.com/), a commercial bakery in Trumansburg. 
- I love to write about my running, hiking, and swimming. Find out [why I consider myself an accidental runner](/about-me/)!

## What's New?

<ul class="l-grid post-grid">
  {%- for item in collections.allPosts | reverse  -%}
  {% if loop.index <= 3 %}
  {% include '_includes/components/post-teaser.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>

Want to know more? How about a coffee, virtual or IRL? <a href="/contact/">Contact me</a>.