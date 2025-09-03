---
layout: page
title: Galeria
permalink: /gallery/
icon: fa-images
order: 3
---

<div class="gallery-grid">
  {% for image in site.static_files %}
    {% if image.path contains 'assets/photos' %}
      <div class="gallery-item">
        <img src="{{ image.path | relative_url }}" alt="Gallery image" class="thumbnail" data-full="{{ image.path | relative_url }}">
      </div>
    {% endif %}
  {% endfor %}
</div>

<div id="photo-popup" class="popup" style="display: none;">
  <span class="close-btn">&times;</span>
  <button class="nav-btn prev-btn">&#10094;</button>
  <img id="popup-image" src="" alt="Full-size image">
  <button class="nav-btn next-btn">&#10095;</button>
</div>
