const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const langLinks = document.querySelectorAll('.language-switch .lang');
const i18nElements = document.querySelectorAll('[data-i18n]');
const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.features': 'Why It Works',
    'nav.about': 'About',
    'nav.process': 'How It Works',
    'nav.contact': 'Contact',
    'hero.subtitle': 'Fun Delivered Monthly',
    'hero.title': 'Creative Subscription Boxes for Ages 6 to 12',
    'hero.description': 'Designed to spark imagination, learning, and play with themed boxes full of crafts, toys, and activities in English and French.',
    'hero.cta1': 'Get Started',
    'hero.cta2': 'Explore Boxes',
    'hero.cardText': 'Perfect for birthdays, learning at home, and screen-free fun.',
    'features.subtitle': 'Why It Works',
    'features.title': 'Built for kids, loved by parents',
    'features.description': 'Each box delivers a complete experience with simple instructions, engaging activities, and items that encourage curiosity.',
    'features.card1.title': 'Age-appropriate themes',
    'features.card1.text': 'Choose boxes designed especially for children aged 6 to 12, with bilingual English/French activities and creative adventures.',
    'features.card2.title': 'Quality surprises',
    'features.card2.text': 'Every box includes premium materials, playful toys, and educational content designed to delight.',
    'features.card3.title': 'Easy setup',
    'features.card3.text': 'Everything arrives ready to use, with clear guides that make craft time fast, fun, and stress-free.',
    'about.subtitle': 'About',
    'about.title': 'Created for bright young minds',
    'about.description': 'Kids Box Factory combines joy and learning in every package. Our boxes are curated to inspire discovery, build confidence, and keep children curious.',
    'about.item1': 'Safe, kid-friendly products',
    'about.item2': 'Flexible plans for every family',
    'about.item3': 'Designed to support creative play',
    'about.image': 'Image placeholder',
    'process.subtitle': 'How It Works',
    'process.title': 'Simple steps to multiply the fun',
    'process.step1.title': 'Pick a box',
    'process.step1.text': 'Select the theme and age range that fits your child best.',
    'process.step2.title': 'Receive it monthly',
    'process.step2.text': 'Boxes arrive ready to open with all supplies included.',
    'process.step3.title': 'Play and learn',
    'process.step3.text': 'Enjoy hands-on activities that spark imagination and inspire growth.',
    'testimonial.subtitle': 'Testimonials',
    'testimonial.title': 'Parents love the easy inspiration',
    'testimonial.text': '“The Kids Box Factory box was a hit with my daughter—she loved the activities and the whole family joined in the fun.”',
    'testimonial.author': '— Julia, Seattle',
    'contact.subtitle': 'Ready to begin?',
    'contact.title': 'Let’s create your first box today.',
    'contact.description': 'Contact us to reserve a themed box or ask about custom subscriptions for your child.',
    'contact.cardTitle': 'Contact',
    'contact.cardText': "If you have questions, send us a message and we'll reply.",
    'contact.labelName': 'Name',
    'contact.labelEmail': 'Email',
    'contact.labelMessage': 'Message',
    'contact.placeholderName': 'Your name',
    'contact.placeholderEmail': 'you@example.com',
    'contact.placeholderMessage': 'Tell us what you need',
    'contact.button': 'Send Request',
    'form.sent': 'Message sent!',
    'footer.copyright': 'Kids Box Factory © 2026 • Built for GitHub Pages',
    'footer.description': 'Simple, responsive single-page website.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.features': 'Pourquoi ça marche',
    'nav.about': 'À propos',
    'nav.process': 'Comment ça marche',
    'nav.contact': 'Contact',
    'hero.subtitle': 'Du plaisir livré chaque mois',
    'hero.title': 'Boîtes créatives pour enfants de 6 à 12 ans',
    'hero.description': 'Conçues pour stimuler l’imagination, l’apprentissage et le jeu avec des boîtes thématiques en anglais et en français.',
    'hero.cta1': 'Commencer',
    'hero.cta2': 'Découvrir les boîtes',
    'hero.cardText': 'Parfait pour les anniversaires, l’apprentissage à la maison et le plaisir sans écran.',
    'features.subtitle': 'Pourquoi ça marche',
    'features.title': 'Pensé pour les enfants, adoré des parents',
    'features.description': 'Chaque boîte offre une expérience complète avec des instructions simples, des activités engageantes et des éléments qui éveillent la curiosité.',
    'features.card1.title': 'Thèmes adaptés à l’âge',
    'features.card1.text': 'Choisissez des boîtes conçues spécialement pour les 6 à 12 ans, avec des activités bilingues anglais/français et des aventures créatives.',
    'features.card2.title': 'Surprises de qualité',
    'features.card2.text': 'Chaque boîte contient des matériaux de qualité, des jouets ludiques et un contenu éducatif conçu pour émerveiller.',
    'features.card3.title': 'Installation facile',
    'features.card3.text': 'Tout arrive prêt à l’emploi, avec des guides clairs pour rendre le moment de création rapide, amusant et sans stress.',
    'about.subtitle': 'À propos',
    'about.title': 'Créé pour les esprits vifs',
    'about.description': 'Kids Box Factory allie joie et apprentissage dans chaque colis. Nos boîtes sont sélectionnées pour inspirer la découverte, renforcer la confiance et garder les enfants curieux.',
    'about.item1': 'Produits sûrs et adaptés aux enfants',
    'about.item2': 'Formules flexibles pour chaque famille',
    'about.item3': 'Conçu pour soutenir le jeu créatif',
    'about.image': 'Espace image',
    'process.subtitle': 'Comment ça marche',
    'process.title': 'Des étapes simples pour multiplier le plaisir',
    'process.step1.title': 'Choisir une boîte',
    'process.step1.text': 'Sélectionnez le thème et la tranche d’âge qui conviennent le mieux à votre enfant.',
    'process.step2.title': 'Recevoir chaque mois',
    'process.step2.text': 'Les boîtes arrivent prêtes à ouvrir avec tous les fournitures incluses.',
    'process.step3.title': 'Jouer et apprendre',
    'process.step3.text': 'Profitez d’activités pratiques qui stimulent l’imagination et inspirent la croissance.',
    'testimonial.subtitle': 'Témoignages',
    'testimonial.title': 'Les parents adorent cette source d’inspiration facile',
    'testimonial.text': '« La boîte Kids Box Factory a fait un carton chez ma fille — elle a adoré les activités et toute la famille a participé au plaisir. »',
    'testimonial.author': '— Julia, Seattle',
    'contact.subtitle': 'Prêt à commencer ?',
    'contact.title': 'Créons votre première boîte aujourd’hui.',
    'contact.description': 'Contactez-nous pour réserver une boîte thématique ou demander des abonnements personnalisés pour votre enfant.',
    'contact.cardTitle': 'Contact',
    'contact.cardText': 'Si vous avez des questions, envoyez-nous un message et nous vous répondrons.',
    'contact.labelName': 'Nom',
    'contact.labelEmail': 'Email',
    'contact.labelMessage': 'Message',
    'contact.placeholderName': 'Votre nom',
    'contact.placeholderEmail': 'vous@exemple.com',
    'contact.placeholderMessage': 'Dites-nous ce dont vous avez besoin',
    'contact.button': 'Envoyer',
    'form.sent': 'Message envoyé !',
    'footer.copyright': 'Kids Box Factory © 2026 • Construit pour GitHub Pages',
    'footer.description': 'Site monopage simple et réactif.',
  },
};

function setLanguage(lang) {
  if (!translations[lang]) {
    return;
  }

  i18nElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  placeholderElements.forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  langLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.lang === lang);
  });

  localStorage.setItem('siteLanguage', lang);
}

langLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const lang = link.dataset.lang;
    setLanguage(lang);
  });
});

const savedLanguage = localStorage.getItem('siteLanguage') || 'en';
setLanguage(savedLanguage);

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
    const currentLanguage = localStorage.getItem('siteLanguage') || 'en';
    if (submitButton) {
      submitButton.textContent = translations[currentLanguage]['form.sent'] || 'Message sent!';
      submitButton.setAttribute('disabled', 'true');
      setTimeout(() => {
        submitButton.textContent = translations[currentLanguage]['contact.button'] || 'Send Request';
        submitButton.removeAttribute('disabled');
        form.reset();
      }, 1800);
    }
  });
}
