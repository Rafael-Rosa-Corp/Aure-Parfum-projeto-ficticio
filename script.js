
// === ÍCONES LUCIDE ===
lucide.createIcons();

// === GSAP ===
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

// ─────────────────────────────────────────────────────
// PARTÍCULAS DOURADAS (canvas hero)
// ─────────────────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H;

  const TOTAL   = 65;
  const COR_RGB = '201, 169, 110';

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function criarParticula() {
    return {
      x:           rand(0, W),
      y:           rand(0, H),
      raio:        rand(0.6, 2.2),
      vx:          rand(-0.2, 0.2),
      vy:          rand(-0.28, -0.08),
      opacidade:   rand(0.06, 0.18),
      periodo:     rand(3000, 7000),
      fase:        rand(0, Math.PI * 2),
    };
  }

  function redimensionar() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  let particulas = [];

  function iniciar() {
    redimensionar();
    particulas = Array.from({ length: TOTAL }, criarParticula);
    setTimeout(() => canvas.classList.add('visible'), 800);
  }

  function desenhar(timestamp) {
    ctx.clearRect(0, 0, W, H);

    particulas.forEach(p => {
      const pulso    = Math.sin((timestamp / p.periodo) * Math.PI * 2 + p.fase);
      const opFinal  = Math.max(0, p.opacidade + pulso * 0.04);

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.raio, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${COR_RGB}, ${opFinal})`;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      if (p.y + p.raio < 0) p.y = H + p.raio;
      if (p.x + p.raio < 0) p.x = W + p.raio;
      if (p.x - p.raio > W) p.x = -p.raio;
    });

    requestAnimationFrame(desenhar);
  }

  window.addEventListener('resize', redimensionar);
  iniciar();
  requestAnimationFrame(desenhar);
})();


// ─────────────────────────────────────────────────────
// MENU MOBILE
// ─────────────────────────────────────────────────────
const mobileMenu = document.getElementById('mobile-menu');

document.getElementById('menu-toggle').addEventListener('click', () => {
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
});

document.getElementById('menu-close').addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});


// ─────────────────────────────────────────────────────
// SMOOTH SCROLL
// ─────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const alvo = document.querySelector(link.getAttribute('href'));
    if (alvo) alvo.scrollIntoView({ behavior: 'smooth' });
  });
});


// ─────────────────────────────────────────────────────
// ANIMAÇÕES — HERO

// === ANIMAÇÃO: hero-title linha 1 (reveal por máscara) ===
function animar(){
  const split = SplitText.create(".hero-line-inner", {
    type: "chars",
    mask: "chars",
  });

  return gsap.from(split.chars, {
    y: "80%",
    opacity: 0,
    duration: 1,
    stagger: 0.07,
  });
}

const tl = gsap.timeline();

tl.add(animar())
  .to('#hero-tag',         { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.2')
  .to('#hero-subtitle',    { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')
  .to('#hero-cta',         { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.4')
  .to('#scroll-indicator', { opacity: 0.4,      duration: 0.8, ease: 'power2.out' }, '-=0.3')
  .to('#whatsapp-float',   { opacity: 1, x: 0,  duration: 0.6, ease: 'power3.out' }, '+=0.3');

// ─────────────────────────────────────────────────────
// ANIMAÇÕES — SOBRE
// ─────────────────────────────────────────────────────

// === ANIMAÇÃO: linha decorativa reveal ===
ScrollTrigger.create({
  trigger: '#about-line',
  start: 'top 80%',
  onEnter: () => document.getElementById('about-line').classList.add('active'),
});

// === ANIMAÇÃO: about-title ===
gsap.to('#about-title', {
  scrollTrigger: { trigger: '#about-title', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.9,
  ease: 'power3.out',
});

// === ANIMAÇÃO: about-desc ===
gsap.to('#about-desc', {
  scrollTrigger: { trigger: '#about-desc', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.9,
  delay: 0.15,
  ease: 'power3.out',
});

// === ANIMAÇÃO: about-image ===
gsap.to('#about-image', {
  scrollTrigger: { trigger: '#about-image', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 1.0,
  ease: 'power3.out',
});


// ─────────────────────────────────────────────────────
// ANIMAÇÕES — SERVIÇOS
// ─────────────────────────────────────────────────────

// === ANIMAÇÃO: services-tag ===
gsap.to('#services-tag', {
  scrollTrigger: { trigger: '#services-tag', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.7,
  ease: 'power3.out',
});

// === ANIMAÇÃO: services-title ===
gsap.to('#services-title', {
  scrollTrigger: { trigger: '#services-title', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power3.out',
});

// === ANIMAÇÃO: card-1 ===
gsap.to('#card-1', {
  scrollTrigger: { trigger: '#card-1', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power3.out',
});

// === ANIMAÇÃO: card-2 ===
gsap.to('#card-2', {
  scrollTrigger: { trigger: '#card-2', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.8,
  delay: 0.1,
  ease: 'power3.out',
});

// === ANIMAÇÃO: card-3 ===
gsap.to('#card-3', {
  scrollTrigger: { trigger: '#card-3', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.8,
  delay: 0.2,
  ease: 'power3.out',
});


// ─────────────────────────────────────────────────────
// ANIMAÇÕES — PROCESSO
// ─────────────────────────────────────────────────────

// === ANIMAÇÃO: process-tag ===
gsap.to('#process-tag', {
  scrollTrigger: { trigger: '#process-tag', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.7,
  ease: 'power3.out',
});

// === ANIMAÇÃO: process-title ===
gsap.to('#process-title', {
  scrollTrigger: { trigger: '#process-title', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power3.out',
});

// === ANIMAÇÃO: step-1 ===
gsap.to('#step-1', {
  scrollTrigger: { trigger: '#step-1', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power3.out',
});

// === ANIMAÇÃO: step-2 ===
gsap.to('#step-2', {
  scrollTrigger: { trigger: '#step-2', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power3.out',
});

// === ANIMAÇÃO: step-3 ===
gsap.to('#step-3', {
  scrollTrigger: { trigger: '#step-3', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power3.out',
});


// ─────────────────────────────────────────────────────
// ANIMAÇÕES — CTA
// ─────────────────────────────────────────────────────

// === ANIMAÇÃO: cta-title ===
gsap.to('#cta-title', {
  scrollTrigger: { trigger: '#cta-title', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.9,
  ease: 'power3.out',
});

// === ANIMAÇÃO: cta-desc ===
gsap.to('#cta-desc', {
  scrollTrigger: { trigger: '#cta-desc', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power3.out',
});

// === ANIMAÇÃO: cta-btn ===
gsap.to('#cta-btn', {
  scrollTrigger: { trigger: '#cta-btn', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power3.out',
});


// ─────────────────────────────────────────────────────
// ANIMAÇÕES — CONTATO
// ─────────────────────────────────────────────────────

// === ANIMAÇÃO: contact-title ===
gsap.to('#contact-title', {
  scrollTrigger: { trigger: '#contact-title', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.9,
  ease: 'power3.out',
});

// === ANIMAÇÃO: contact-desc ===
gsap.to('#contact-desc', {
  scrollTrigger: { trigger: '#contact-desc', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power3.out',
});

// === ANIMAÇÃO: contact-instagram ===
gsap.to('#contact-instagram', {
  scrollTrigger: { trigger: '#contact-instagram', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.7,
  ease: 'power3.out',
});

// === ANIMAÇÃO: contact-email ===
gsap.to('#contact-email', {
  scrollTrigger: { trigger: '#contact-email', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 0.7,
  delay: 0.1,
  ease: 'power3.out',
});

// === ANIMAÇÃO: contact-card ===
gsap.to('#contact-card', {
  scrollTrigger: { trigger: '#contact-card', start: 'top 85%' },
  opacity: 1,
  y: 0,
  duration: 1.0,
  ease: 'power3.out',
});



