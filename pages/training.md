---
title: "Training"
permalink: "training/"
navigation: "Training"
description: "Training plans and race-specific training"
eleventyNavigation:
  key: Training
  order: 2
---

<p class="page-hed"><em>Training.</em> Here's a list of training resources, along with some fantastic training cycles for some of my bigger races.

<h2>Recent Training Reports</h2>

<ul class="l-grid post-grid">
  {%- for item in collections.trainingPosts | reverse  -%}
  {% if loop.index <= 3 %}
  {% include '_includes/components/post-teaser.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>

## Training Resources

These are training resources that I've amassed over the years, and I hope you find them useful, too.

- [Heart Rate Training](/training/heart-rate-training/)
- [Speed Paces](/training/speed-paces/)
- [Training Runs Explained](/training/training-runs-explained/)

## Family Marathon Training (or, Mountains 2 Beach)

{% pictureRt "/images/mountains-2-beach.png", "" %}

Memorial Day weekend was supposed to be a destination marathon for us in Ventura, CA. Thanks to coronavirus, the race was canceled. So, we changed our plans and ran a marathon where we live instead! 

<ul class="post-list">
  {%- for item in collections.trainingPosts | has_tag("data.tags", "mountains2beach") | reverse  -%}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {%- endfor -%}
</ul>

## MITHACAL Milers (Indoor Winter Training)

{% pictureRt "/images/mithacal-milers.png", "" %}

This is a training group sponsored by the Finger Lakes Runners Club that is specifically focused on improving the mile pace. It meets on Tuesday evenings at Barton Hall at Cornell. We go through a series of stretches followed by a warm-up run, followed by a tough interval workout and finish with a cool down run and core work.

- [MITHACAL Milers](/training/mithacal-milers/)

## Winter 2018 Training

{% pictureRt "/images/winter-training.png", "" %}

As we enter 2018, I've written up a [winter training plan](/training/winter-training-plan/) to be ready for a variety of things. This winter portion is mostly just to stay in shape (and get into better shape for an April half marathon).

<ul class="post-list">
  {%- for item in collections.trainingPosts | has_tag("data.tags", "winter training") | reverse  -%}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {%- endfor -%}
</ul>

## Mazamas Mountain Running Camp

My sister [Sarah](http://runningforpancakes.blogspot.com/) is in charge of the [Mazama Mountain Running Camp](https://mazamas.org/education-classes/mountain-running/) near Mt. Hood, Oregon. We have talked about going before, but each year there was something that prevented the trip from working out. This year, as soon as she announced that it was time for Mazama Mountain Running Camp we looked at our calendar and saw that the dates were FREE!

<ul class="post-list">
  {%- for item in collections.trainingPosts | has_tag("data.tags", "mmrc") | reverse  -%}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {%- endfor -%}
</ul>

## Green Lakes 50K (2014)

This was my [Training Plan](/static/pdf/Green-Lakes.pages.pdf). Here are weekly training updates for the race. Read my [race report](/race-report/green-lakes-50k/).

<ul class="post-list">
  {%- for item in collections.trainingPosts | has_tag("data.tags", "green lakes") | reverse  -%}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {%- endfor -%}
</ul>

## Flower City Half

My goal was to PR. My prior PR was 1:53:42 in the Red Baron Half. When training for the Red Baron it was my 2nd half marathon and first time doing one alone. My plan only focused on getting the miles in. After having completed a couple of marathons, I felt ready to mix things up. I selected this [plan](http://cdn.running.competitor.com/files/2013/03/30_nat.pdf "Competitor Magazine Half Marathon Plan") from Competitor Magazine and settled on a goal of 1:50. Here is my [customized plan](/static/pdf/Half-Marathon-Training.pdf "Flower City Half Plan")  to include all the other activities I find necessary to keep a strong core and keep my body less prone to injury.

## Other Training Posts

<ul class="post-list">
  {%- for item in collections.trainingPosts | lacks_tag("data.tags", "green lakes") | lacks_tag("data.tags", "mithacal milers")| lacks_tag("data.tags", "mountains2beach") | lacks_tag("data.tags", "winter training") | lacks_tag("data.tags", "mmrc") | reverse  -%}
  {% include '_includes/components/post-teaser-condensed.njk' %}
  {%- endfor -%}
</ul>
