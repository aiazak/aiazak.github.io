---
title: Galeria
description: Profesjonalna nauka angielskiego w Gdyni. Oferujemy korepetycje z angielskiego, przygotowanie do matury podstawowej, rozszerzonej, dwujęzycznej oraz testów FCE, CAE, CPE.
keywords: angielski w gdyni, korepetycje z angielskiego, przygotowanie do matury, FCE, CAE, CPE
icon: fa-image
order: 2
---

<div class="gallery-grid">
  {% assign filtered_images = site.static_files | where_exp: "image", "image.path contains 'assets/photos'" | limit: 3 %}
  {% for image in filtered_images %}
    <div class="gallery-item">
      <img src="{{ image.path | relative_url }}" alt="Gallery image" class="thumbnail" data-full="{{ image.path | relative_url }}">
    </div>
  {% endfor %}
</div>

<div id="photo-popup" class="popup" style="display: none;">
  <span class="close-btn">&times;</span>
  <button class="nav-btn prev-btn">&#10094;</button>
  <img id="popup-image" src="" alt="Full-size image">
  <button class="nav-btn next-btn">&#10095;</button>
</div>
