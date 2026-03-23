// ANIMAÇÃO DE ENTRADA DOS CARDS (SCROLL)
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
});


// EFEITO SUAVE NOS BOTÕES (CLICK FEEDBACK)
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.transform = 'scale(0.97)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
    }, 150);
  });
});


// SCROLL SUAVE (caso você adicione âncoras depois)
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// LOG SIMPLES
console.log('Site carregado com animações 🚀');
