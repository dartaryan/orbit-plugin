/* ============================================
   ORBIT Plugin — Main JavaScript
   Starfield, scroll reveals, language toggle
   ============================================ */

// ---------- Starfield ----------
(function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let stars = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  function draw(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      const twinkle = Math.sin(time * 0.001 * star.speed + star.phase) * 0.3 + 0.7;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(241, 245, 249, ${star.alpha * twinkle})`;
      ctx.fill();
    });

    animationId = requestAnimationFrame(draw);
  }

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  resize();
  createStars(prefersReducedMotion ? 100 : 250);

  if (prefersReducedMotion) {
    // Draw once, no animation
    draw(0);
    cancelAnimationFrame(animationId);
  } else {
    draw(0);
  }

  window.addEventListener('resize', () => {
    resize();
    createStars(prefersReducedMotion ? 100 : 250);
  });
})();


// ---------- Scroll Reveal ----------
(function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
})();


// ---------- Language Toggle ----------
(function initLanguageToggle() {
  const body = document.body;
  const enBtn = document.getElementById('lang-en');
  const heBtn = document.getElementById('lang-he');

  if (!enBtn || !heBtn) return;

  function setLang(lang) {
    body.setAttribute('data-active-lang', lang);

    if (lang === 'he') {
      body.setAttribute('dir', 'rtl');
      enBtn.classList.remove('active');
      heBtn.classList.add('active');
    } else {
      body.setAttribute('dir', 'ltr');
      heBtn.classList.remove('active');
      enBtn.classList.add('active');
    }

    localStorage.setItem('orbit-lang', lang);
  }

  enBtn.addEventListener('click', () => setLang('en'));
  heBtn.addEventListener('click', () => setLang('he'));

  // Load saved preference
  const saved = localStorage.getItem('orbit-lang') || 'en';
  setLang(saved);
})();


// ---------- Mobile Nav ----------
(function initMobileNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const nav = document.querySelector('.nav');

  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close on link click
  nav.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
})();


// ---------- Copy Code Blocks ----------
(function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeBlock = btn.closest('.code-block');
      const code = codeBlock.querySelector('code').textContent;
      navigator.clipboard.writeText(code).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = original; }, 2000);
      });
    });
  });
})();


// ---------- Smooth scroll for nav links ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
