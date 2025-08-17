---
title: Recent Posts
order: 3
auto-header: none
---
<header>
  <h2>Recent Posts</h2>
</header>
<ul>
  {% for post in site.posts limit:3 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small>{{ post.date | date: "%B %d, %Y" }}</small>
      <p>{{ post.excerpt | strip_html | truncate: 100 }}</p>
    </li>
  {% endfor %}
</ul>
