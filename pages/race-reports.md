---
title: "Race Reports"
permalink: "race-reports/"
description: ""
eleventyNavigation:
  key: Racing
  order: 3
---

<p class="page-hed"><em>Ah, racing.</em> Check out my recent race reports, or the full listing below.

<h2>Recent Race Reports</h2>

<ul class="l-grid post-grid">
  {%- for item in collections.racingPosts | reverse  -%}
  {% if loop.index <= 3 %}
  {% include '_includes/components/post-teaser.njk' %}
  {% endif %}
  {%- endfor -%}
</ul>

{% set yearArray = collections.racingPosts | getYearArray %}

{%- for year in yearArray | reverse -%}
<h3>{{year}} Races & Reports</h3>
<table>
    <thead>
        <tr>
            <th>Date</th>
            <th>Race</th>
            <th>Distance</th>
            <th>Time</th>
            <th>Overall</th>
            <th>Age Group</th>
        </tr>
    </thead>
    <tbody>
        {%- for post in collections.racingPosts -%}
            {%- if post.date | momentYear == year -%}
                <tr>
                    <td>{{ post.date | momentDate }}</td>
                    <td><a href="{{ post.url }}">{{ post.data.title }}</a></td>
                    <td>{{ post.data.distance }}</td>
                    <td>{{ post.data.time }}</td>
                    <td>{{ post.data.overall }}</td>
                    <td>{{ post.data.agegroup }}</td>
                </tr>
            {%- endif -%}
        {%- endfor -%}
    </thead>
</table> 
{%- endfor -%}