// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxDescription = document.getElementById('lightbox-description');
const galleryItems = document.querySelectorAll('.gallery-item');
const closeBtn = document.querySelector('.close');

galleryItems.forEach(item => {
    const img = item.querySelector('img');
    const caption = item.querySelector('.caption');
    const description = item.getAttribute('data-description');

    item.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption.textContent;
        lightboxDescription.textContent = description;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == lightbox) {
        lightbox.style.display = 'none';
    }
});
