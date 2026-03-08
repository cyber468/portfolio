/* ── Theme Toggle ───────────────────────────────────────────── */
const root      = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const toggleIcon  = document.getElementById('toggleIcon');
const toggleLabel = document.getElementById('toggleLabel');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (theme === 'night') {
    toggleIcon.textContent  = '☀️';
    toggleLabel.textContent = 'Day';
  } else {
    toggleIcon.textContent  = '🌙';
    toggleLabel.textContent = 'Night';
  }
}

// Load saved preference or auto-detect system
const saved = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day');
applyTheme(saved);

toggleBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'night' ? 'day' : 'night';
  applyTheme(next);
});

/* ── Intersection Observer: fade-in cards ───────────────────── */
const cards = document.querySelectorAll('.card');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.06 });
cards.forEach(c => io.observe(c));

/* ── Skill bar animation ────────────────────────────────────── */
const fills    = document.querySelectorAll('.skill-fill');
const skillsCard = document.querySelector('.c-skills');
const skillsIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      fills.forEach(f =>
        setTimeout(() => { f.style.width = f.dataset.width + '%'; }, 200)
      );
      skillsIO.disconnect();
    }
  });
}, { threshold: 0.2 });
if (skillsCard) skillsIO.observe(skillsCard);

/* ── Typewriter hero eyebrow ────────────────────────────────── */
const roles    = ['Security Analyst', 'Threat Hunter', 'Fintech Defender', 'SOC Engineer', 'Cyber Specialist'];
let ri = 0, ci = 0, deleting = false;
const lbl = document.querySelector('.hero-eyebrow');

if (lbl) {
  // Remove the CSS ::after cursor since JS manages content
  lbl.style.setProperty('--no-cursor', '1');
  setInterval(() => {
    const cur = roles[ri];
    if (!deleting && ci <= cur.length) {
      lbl.textContent = '// ' + cur.slice(0, ci++);
    } else if (!deleting && ci > cur.length) {
      deleting = true;
    } else if (deleting && ci > 0) {
      lbl.textContent = '// ' + cur.slice(0, --ci);
    } else {
      deleting = false;
      ri = (ri + 1) % roles.length;
    }
  }, 85);
}

/* ── Contact form ───────────────────────────────────────────── */
function sendMsg(btn) {
  const form    = btn.closest('.contact-form');
  const name    = form.querySelector('input[type="text"]').value.trim();
  const email   = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    btn.textContent = 'Fill all fields ↩';
    btn.style.background = '#708993';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = '';
      btn.style.color = '';
    }, 2000);
    return;
  }

  btn.textContent = 'Sending…';
  btn.style.opacity = '0.7';

  setTimeout(() => {
    btn.textContent = '✓ Message Sent!';
    btn.style.opacity = '1';
    btn.style.background = '#A1C2BD';
    btn.style.color = '#19183B';
  }, 1400);
}