document.addEventListener('DOMContentLoaded', function () {
  var splash = document.getElementById('splashScreen');
  if (splash) {
    setTimeout(function () {
      splash.classList.add('hidden');
    }, 1500);
  }

  var revealItems = document.querySelectorAll('.hero-copy, .hero-image-wrap, .feature-card, .spotlight-copy, .spotlight-image, .page-hero, .content-card, .info-card, .contact-card, .gallery-card');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(function (item) {
      item.classList.add('reveal');
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add('visible');
    });
  }
});
