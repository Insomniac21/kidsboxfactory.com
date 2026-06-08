const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
  });
});

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.textContent = 'Message sent!';
      submitButton.setAttribute('disabled', 'true');
      setTimeout(() => {
        submitButton.textContent = 'Send Request';
        submitButton.removeAttribute('disabled');
        form.reset();
      }, 1800);
    }
  });
}
