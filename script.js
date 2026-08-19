document.getElementById('year').textContent = new Date().getFullYear();

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{ opacity: 0, transform: 'translateY(18px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' }
      );
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .statement, .cta-box').forEach((el) => reveal.observe(el));
