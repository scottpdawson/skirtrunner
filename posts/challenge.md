---
title: "FLRC Challenge 2021"
date: "2021-12-31"
permalink: "training/flrc_challenge_2021/"
hero: "/images/2021/challenge/IMG_1271.JPG"
navigation: "Training"
usesCharts: true
tags:
    - training
    - flrc
description: "The FLRC Challenge really inspired me for 2021! In a year of very few races and little intrinsic self-motivation, I relied on the opportunities to log miles that 'counted' for something."
---

The FLRC Challenge really inspired me for 2021! I [wrote about it earlier in the year](/training/flrc_challenge/) as we were getting underway, and this is the end-of-series recap. In a year of very few races and little intrinsic self-motivation, I relied on the opportunities to log miles that "counted" for something. Scott and I started slowly in this, doing only one long course a week in the spring. We picked up with regular running of courses after he recovered from surgery in late July. When we cancelled out trip to Oregon in August we ran a bunch of courses as part of our home staycation. Thanks to the Finger Lakes Runners Club for all the hard work they did to create this opportunity for all of us. And thanks to [Scott](https://scottpdawson.com/) for creating the template for this page. Overall points, 716.45 (13th). {{ challenge.length }} total efforts covering 560 miles (8th place in the mileage race).

## FLRC Challenge, Visualized

These are the pictures I took from my time running the Challenge courses. Most of the pictures are from a group run, the one race, or when I had either Teressa with me or Scott with me. I rarely remember to take pictures on my own!

{% lightbox [
    { caption: "Before the start of the Danby Down and Dirty race", image: "/images/2021/challenge/IMG_1474.JPG" },
    { caption: "", image: "/images/2021/challenge/IMG_0746.JPG" },
    { caption: "", image: "/images/2021/challenge/IMG_0779.JPG" },
    { caption: "Finishing the Black Diamond", image: "/images/2021/challenge/IMG_0782.JPG" },
    { caption: "", image: "/images/2021/challenge/IMG_0789.JPG" },
    { caption: "End of BDT with Teressa", image: "/images/2021/challenge/IMG_0799.JPG" },
    { caption: "South Hill Recway with the boys before heading to Berklee", image: "/images/2021/challenge/IMG_1154.JPG" },
    { caption: "East Hill Recway with Xander", image: "/images/2021/challenge/IMG_1234.JPG" },
    { caption: "South Hill Recway with Teressa and Melissa", image: "/images/2021/challenge/IMG_1244.JPG" },
    { caption: "Forest Frolic", image: "/images/2021/challenge/IMG_1266.JPG" },
    { caption: "Forest Frolic", image: "/images/2021/challenge/IMG_1268.JPG" },
    { caption: "I love the fixed ropes in the Forest Frolic", image: "/images/2021/challenge/IMG_1269.JPG" },
    { caption: "From the Frolic course with Scott", image: "/images/2021/challenge/IMG_1270.JPG" },
    { caption: "Thom B with Scott", image: "/images/2021/challenge/IMG_1271.JPG" },
    { caption: "Another of many BDT runs with Teressa", image: "/images/2021/challenge/IMG_1273.JPG" },
    { caption: "Open meadow at Thom B with Scott", image: "/images/2021/challenge/IMG_1284.JPG" },
    { caption: "More Frolic fun!", image: "/images/2021/challenge/IMG_1308.JPG" },
    { caption: "Snakes at the end of the Danby Down and Dirty", image: "/images/2021/challenge/IMG_1315.JPG" },
    { caption: "Beautiful plants on the trail", image: "/images/2021/challenge/IMG_1325.JPG" },
    { caption: "Botanic Gardens group run", image: "/images/2021/challenge/IMG_1334.JPG" },
    { caption: "Selfie on the Frolic course", image: "/images/2021/challenge/IMG_1368.JPG" },
    { caption: "Botanic Gardens with Scott", image: "/images/2021/challenge/IMG_1425.JPG" },
    { caption: "Forest Frolic with Teressa", image: "/images/2021/challenge/IMG_1428.JPG" },
    { caption: "Cider donuts after our last Frolic run - turned out to be a failed attempt but the donuts were delicious!", image: "/images/2021/challenge/IMG_1569.JPG" },
    { caption: "Thom B rainy group run - my running partners were so much fun to hang with.", image: "/images/2021/challenge/IMG_1583.JPG" },
    { caption: "All of us before the Thom B group run", image: "/images/2021/challenge/IMG_8375.JPG" }
]%}

The chart below shows the frequency of running. You can see that it starts with once a week long running on either the Black Diamond Trail or the Skunk Cabbage and then expands to include other courses in the 2nd half of 2021. I also created some [scatter plot charts](https://docs.google.com/presentation/d/e/2PACX-1vSx3AiQ9Uj2WSe4LI6WD2kHUGmhXbX_veMirw31vjsumOA6-J4J4DLkNzXszA6Gf3AEFTHtZFRCit6C/pub?start=false&loop=false&delayms=3000) of each course.

<div id="container"></div>

{%- for course in courses -%}

<h2>{{ course.name }} ({{course.distance}})</h2>
<p>{{ course.description }}</p>
<ul>
{%- for effort in challenge -%}
{% if effort.course === course.name %}
<li><b>{{effort.date}}</b>: {% if course.fastestStrava and effort.time === course.fastestTime %}<a href="https://www.strava.com/activities/{{course.fastestStrava}}">{{effort.time}}</a>{% else %}{{effort.time}}{% endif %} {% if effort.time === course.fastestTime %}<i class="fas fa-star" style="color: #ff9a00" title="Fastest time for this course"></i> ({{course.fastestPlace}}){% endif %}</li>
{% else %}{% endif %}
{%- endfor -%}
</ul>
{%- endfor -%}



<script>
Highcharts.chart('container', {
    chart: {
        type: 'column',
        height: 150,
        spacing: [0,0,10,0],
    },
    title: {
        text: null
    },
    xAxis: {
        type: 'datetime',
        labels: {
            format: '{value: %b %e}'
        },
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.category: %B %e}: {point.time}'
    },
    credits: {
        enabled: false
    },
    yAxis: {
        visible: false
    },
    legend: {
        enabled: true
    },
    colors: ["#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600", "#000000", "#999"],
    series: [
      {%- for course in courses -%}
      {
        name: '{{ course.name }}',
        data: [
{%- for effort in challenge -%}
{%- if effort.course === course.name -%}
  {
    x : {{ effort.date | momentUnix }},
    y : 1,
    time: "{{ effort.time }}"
  }
{%- if not loop.last %},{%- else -%}{%- endif -%}
{%- else -%}{%- endif -%}
{%- endfor -%}
]
    }
    {% if not loop.last %},{% else %}{% endif %}
    {%- endfor -%}
    ]
});
</script>
