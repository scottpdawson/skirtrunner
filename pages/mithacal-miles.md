---
title: "MITHACAL Milers"
permalink: "training/mithacal-milers/"
hero: "/images/mithacal-milers.png"
navigation: "Training"
eleventyExcludeFromCollections: true
description: "This is a training group sponsored by the Finger Lakes Runners Club that is specifically focused on improving the mile pace. It meets on Tuesday evenings at Barton Hall at Cornell."
---

## 2019 - 2020

After a year off from this due to my broken foot, I was a lot apprehensive about starting again! Scott was super excited though and I know it is really good for my training so I obliged. I'll post weekly updates here to share. We missed week 5 (skipped due to snow storm) and 8 (missed to to vacation).

<ul class="post-list">
  {%- for item in collections.all | has_tag("data.tags", "mithacal milers") | reverse  -%}
  {% if item.date | momentUnix > ('2019-12-01' | momentUnix) %}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>

## 2018 - 2019

I didn't participate in this for this season due to a broken foot. While cleared for running, when I mentioned to my doctor that I was looking forward to starting this in the winter her face clouded over. She strongly suggested I not re-introduce speed so quickly after injury so I obliged.

## 2017 - 2018

This is a training group sponsored by the [Finger Lakes Runners Club](http://fingerlakesrunners.org/) that is specifically focused on improving the mile pace. It meets on Tuesday evenings at Barton Hall at Cornell. We go through a series of stretches followed by a warm-up run, followed by a tough interval workout and finish with a cool down run and core work. Read my weekly updates below.

<ul class="post-list">
  {%- for item in collections.all | has_tag("data.tags", "mithacal milers") | reverse  -%}
  {% if item.date | momentUnix < ('2018-06-01' | momentUnix) %}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>