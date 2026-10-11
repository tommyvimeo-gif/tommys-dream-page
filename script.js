// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections and cards
document.querySelectorAll('.section, .gallery-item, .video-card, .phil-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Add visible class styles dynamically
const style = document.createElement('style');
style.textContent = `
  .section.visible,
  .gallery-item.visible,
  .video-card.visible,
  .phil-card.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  .gallery-item {
    transition-delay: calc(var(--i, 0) * 0.05s);
  }
`;
document.head.appendChild(style);

// Stagger gallery items
document.querySelectorAll('.gallery').forEach(gallery => {
  gallery.querySelectorAll('.gallery-item').forEach((item, i) => {
    item.style.setProperty('--i', i);
  });
});

// Smooth parallax-ish effect on hero
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const hero = document.querySelector('.hero-content');
  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.25}px)`;
    hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.6;
  }
});

console.log('Tomaž Dolar site loaded · Keep Learning! Keep Designing.');
