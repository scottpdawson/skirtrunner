---
title: "Musing"
permalink: "musing/"
hero: "/images/2017/07/IMG_8536.jpg"
description: "New beginnings, bittersweet endings, and everything in between. Here's a collection of posts that got me thinking ... "
eleventyNavigation:
  key: Musing
  order: 6
---

New beginnings, bittersweet endings, and everything in between. Here's a collection of posts that got me thinking ... 

<ul class="l-grid post-grid">
  {%- for item in collections.musingPosts | reverse  -%}
  {% if loop.index <= 3 %}
  {% include '_includes/components/post-teaser.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>

<h2>More Posts</h2>

<ul class="post-list">
  {%- for item in collections.musingPosts | reverse  -%}
  {% if loop.index > 3 %}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>