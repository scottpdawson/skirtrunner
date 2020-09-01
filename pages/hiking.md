---
title: "Hiking"
permalink: "hiking/"
hero: "/images/2018/08/IMG_1590.jpg"
description: "Long before I was a runner, I was an avid hiker. I spent several formative years living in Germany, and had the opportunity to climb many mountains with my parents and sister."
eleventyNavigation:
  key: Hiking
  order: 5
---

<b>I love to hike!</b> Long before I was a runner, I was an avid hiker. I spent several formative years living in Germany, and had the opportunity to climb many mountains with my parents and sister. Later, we moved to New York State and my Dad continued to expand our hiking opportunities with great Adirondack hikes.

When my sister moved to Oregon, I discovered the most amazing landscape in the central Oregon Cascades. Over the years, we've enjoyed many family adventures on our visits to see her.

We have a wonderful photographic record of our trips, and in this section, I'll add narrative to preserve our stories.

<ul class="l-grid post-grid">
  {%- for item in collections.hikingPosts | reverse  -%}
  {% if loop.index <= 3 %}
  {% include '_includes/components/post-teaser.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>

<h2>More Posts</h2>

<ul class="post-list">
  {%- for item in collections.hikingPosts | reverse  -%}
  {% if loop.index > 3 %}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>