// ======= ACCORDÉON PROJETS =======
function toggleCategorie(header) {
  const contenu = header.nextElementSibling;
  const icone = header.querySelector('.toggle-icon');

  if (contenu.style.display === 'block') {
    contenu.style.display = 'none';
    icone.textContent = '+';
  } else {
    contenu.style.display = 'block';
    icone.textContent = '-';
  }
}

// ======= ANIMATIONS AU SCROLL =======
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section, .carte, .formation-carte').forEach(el => {
  el.classList.add('apparaitre');
  observer.observe(el);
});

// ======= BOUTON RETOUR EN HAUT =======
const btnTop = document.createElement('button');
btnTop.className = 'btn-top';
btnTop.innerHTML = '↑';
btnTop.title = 'Retour en haut';
btnTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
document.body.appendChild(btnTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    btnTop.classList.add('visible');
  } else {
    btnTop.classList.remove('visible');
  }
});

// ======= LIEN ACTIF DANS LA NAV =======
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('actif');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('actif');
    }
  });
});

// ======= NAVIGATION FLUIDE =======
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const cible = document.querySelector(this.getAttribute('href'));
    if (cible) {
      cible.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});