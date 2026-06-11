// Hero video upload
document.getElementById('hero-v').addEventListener('change', function () {
  const file = this.files[0];
  if (!file) return;
  const vid = document.getElementById('hero-video');
  const label = document.getElementById('hero-label');
  vid.src = URL.createObjectURL(file);
  vid.style.display = 'block';
  label.style.display = 'none';
});

// Section video uploads
['v1', 'v2'].forEach(id => {
  document.getElementById(id).addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;
    const el = document.getElementById(id + '-el');
    const label = document.getElementById(id + '-label');
    el.src = URL.createObjectURL(file);
    el.style.display = 'block';
    label.style.display = 'none';
  });
});

// Image uploads
['i1', 'i2', 'i3', 'i4', 'i5', 'i6'].forEach(id => {
  document.getElementById(id).addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;
    const preview = document.getElementById(id + '-p');
    const svg = this.nextElementSibling.querySelector('svg');
    preview.src = URL.createObjectURL(file);
    preview.style.display = 'block';
    if (svg) svg.style.display = 'none';
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('open');
  });
});

document.getElementById('lightbox-close').addEventListener('click', () => {
  lightbox.classList.remove('open');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.classList.remove('open');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') lightbox.classList.remove('open');
});

// Nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    nav.style.background = 'rgba(245,244,240,0.95)';
    nav.style.backdropFilter = 'blur(12px)';
  } else {
    nav.style.background = 'rgba(245,244,240,0.92)';
  }
}, { passive: true });
