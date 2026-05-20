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