document.addEventListener('DOMContentLoaded', () => {
  // Select all galleries
  const galleries = document.querySelectorAll('.gallery-grid');
  
  galleries.forEach(gallery => {
    const thumbnails = gallery.querySelectorAll('.thumbnail');
    const popup = gallery.parentElement.querySelector('.popup');
    const popupImage = popup.querySelector('#popup-image');
    const closeBtn = popup.querySelector('.close-btn');
    const prevBtn = popup.querySelector('.prev-btn');
    const nextBtn = popup.querySelector('.next-btn');
    let currentIndex = 0;

    // Store image URLs for navigation
    const imageUrls = Array.from(thumbnails).map(thumbnail => thumbnail.dataset.full);

    // Open popup
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        currentIndex = index;
        popupImage.src = imageUrls[currentIndex];
        popup.style.display = 'flex';
      });
    });

    // Close popup
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    // Close on outside click
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });

    // Previous button
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
      popupImage.src = imageUrls[currentIndex];
    });

    // Next button
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % imageUrls.length;
      popupImage.src = imageUrls[currentIndex];
    });
  });
});
