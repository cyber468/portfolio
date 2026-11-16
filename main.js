/* ── DATA ─────────────────────────────────────────────────── */
const RESUME = {
  file: './resume.pdf',
  downloadName: 'Indrajit_Jeeva_V_Resume.pdf',
};
const DATA = {
  experience: [
  {
      role:'Security Engineer',company: 'ZOHO', loc: 'Coimbatore, TN',
    period:'Oct 2026 – Present',
    bullets:[
      'Security operations across Zoho\'s global SaaS infrastructure — 50+ products, 100+ data centers, 20+ markets',
      'Detection engineering using internal SIEM and threat intel feeds',
      'Defending a privately held, bootstrapped company that runs its own data centers instead of public clouds, so security reaches down to the physical layer',
      'Platform operates under ISO 27001, 27017, 27018 and SOC 2 Type II, with a public bug bounty and responsible disclosure program',
      'Privacy-first by policy: no third-party ads and no selling of customer data'],
      tags:['Linux Security','Network security','Java','Application security']
    }
    ,{
      role: 'Security Analyst', company: 'M2P Fintech', loc: 'Chennai, TN',
      period: 'Jan 2025 – Sep 2026',
      bullets: [
        'Security operations across Asia\'s largest API infrastructure — 300+ banks, 100+ NBFCs, 800+ fintechs in 20+ markets',
        'Threat monitoring, detection & triage using Wazuh / Splunk SIEM',
        'Vulnerability assessments and penetration testing on internal and client systems',
        'Incident response: detection, containment, eradication & post-incident reporting',
        'API security hardening and IAM policy review with engineering teams',
        'ISO 27001 compliance activities and security awareness initiatives',
      ],
      tags: ['SIEM','API Security','Incident Response','IAM','ISO 27001','Wazuh','Splunk'],
    },
    {
      role: 'Cyber Security Intern', company: 'NCIIPC', loc: 'Delhi, India',
      period: 'May 2024 – Oct 2024',
      bullets: [
        'Built In-House Advisory Management System for distributing advisories to Critical Information Infrastructures',
        'Developed Ransomware Readiness Assessment Solution (Python/PyQT5)',
        'Built real-time threat intelligence collection system for CII operators',
        'Conducted Grey Box penetration testing on NCIIPC-hosted websites',
      ],
      tags: ['Python','Grey Box Pentest','Threat Intel','Ransomware','PyQT5','SIEM'],
    },
    {
      role: 'Digital Forensics Intern', company: 'ISAC', loc: 'Bangalore, India',
      period: 'Mar 2024 – May 2024',
      bullets: [
        'Memory & disk image analysis — suspicious artefact identification and root cause analysis',
        'Cybersecurity awareness blogs and training material for the NSD community',
        'NSD (National Security Database) empanelment and first-responder training',
      ],
      tags: ['DFIR','Memory Analysis','Autopsy','Volatility','NSD','First Responder'],
    },
    {
      role: 'Security Researcher', company: 'Forefend Labs', loc: 'Bangalore, India',
      period: 'Jan 2024 – Mar 2024',
      bullets: [
        'Penetration tests on client websites with detailed remediation reports',
        'Cybersecurity content creation and research publication across teams',
      ],
      tags: ['Penetration Testing','Web App Security','Burp Suite','Reporting'],
    },
    {
      role: 'First Response Officer', company: 'Cyber Crime Police Station', loc: 'Coimbatore, India',
      period: 'Aug 2023 – Sep 2023',
      bullets: [
        'Handled cyber crime complaints as First Incident Response Officer',
        'Collected digital evidence from petitioners during interrogations',
        'Filed complaints and guided victims through the formal process',
      ],
      tags: ['Incident Response','Digital Evidence','Cyber Law','First Responder'],
    },
  ],
  skills: [
    {name:'Digital Forensics & IR',pct:90},{name:'Penetration Testing',pct:88},
    {name:'Memory / Disk Forensics',pct:87},{name:'Python Development',pct:85},
    {name:'Vulnerability Assessment',pct:86},{name:'Threat Intelligence',pct:83},
    {name:'SIEM (Wazuh / Splunk)',pct:82},{name:'ISO 27001 / ISMS',pct:78},
    {name:'Software Development',pct:80},{name:'API Security',pct:80},
    {name:'IAM & Firewalls',pct:75},{name:'Network Security',pct:78},
  ],
  projects: [
    { name:'Ransomware Readiness Assessment Tool - classified', tag:'NCIIPC · Python',
      desc:'Python GUI on a SIEM architecture to analyse system and employee readiness against ransomware. Built for CIIs at NCIIPC.',
      tech:['Python','PyQT5','Nmap','Qt Designer','SIEM'], link:'' },
    { name:'Real-Time Threat Intelligence Collector - classified', tag:'NCIIPC · Threat Intel',
      desc:'Near-real-time threat intel aggregation for Critical Information Infrastructures — multiple feed sources surfaced to operators.',
      tech:['Python','Threat Intel APIs','SIEM','REST APIs'], link:'' },
    { name:'Post-Incident DFIR — University Server - classified', tag:'DFIR · Investigation',
      desc:'Full investigation of a compromised live university server — DFIR analysis, DR collaboration, documentation, and hardening.',
      tech:['Kali Linux','ZAP','Nmap','SQLmap','Metasploit','Autopsy'], link:'' },
    { name:'Multi-Format Steganography Tool', tag:'Python · Security',
      desc:'Cross-platform Python tool for steganography across Text, Video, Audio and Image formats.',
      tech:['Python','ffmpeg','OpenCV'], link:'https://github.com/cyber468/Polyjuice' },
    { name:'Personality Prediction via ML', tag:'ML · Web App',
      desc:'ML web app enabling recruiters to predict candidate personality for efficient hiring, built with Django.',
      tech:['Python','Django','ML','Jupyter','Figma'], link:'https://github.com/cyber468/Predicto' },
  ],
  certs: [
    {name:'CEH v12',issuer:'EC-Council',link:'https://aspen.eccouncil.org/VerifyBadge?type=certification&a=/hZ8jC3vj7mdpqOeoCcNUK+yBNf7N6n5rDivswbZG/g='},
    {name:'CC — Certified in Cybersecurity',issuer:'ISC²',link:'https://www.credly.com/badges/20855815-8ecc-474c-97be-93a7594bc51a/linked_in_profile'},
    {name:'Google Cybersecurity Professional',issuer:'Google',link:'https://www.coursera.org/account/accomplishments/specialization/NEN5SZKL5PEC'},
    {name:'ISO/IEC 27001 Information Security Associate',issuer:'Skillfront',link:'https://drive.google.com/file/d/1tPevPNZaCG74d_-8kZdLDHEl24IUXFuo/view?usp=sharing'},
    {name:'Certified Investigator',issuer:'CSI Linux',link:'https://api.badgr.io/public/assertions/zqYdIYSjTz21XXvfY8vTVQ?identity__email=jeevaindrajit%40gmail.com'},
    {name:'CCIO — Cybercrime Intervention Officer',issuer:'ISAC',link:'https://drive.google.com/file/d/11jygQBkCSf8frdD3BcnZw7iIr8sR5oJ1/view?usp=sharing'},
    {name:'CPEW',issuer:'Cleanexit',link:'https://drive.google.com/file/d/11q6Oz7SalxSa-3RZw-WMVD3qwkH6woVK/view?usp=sharing'},
  ],
  awards: [
    {icon:'🥇',title:'University Rank Holder',sub:'Bharathiar University — M.Sc. Cybersecurity · 2024'},
    {icon:'🏆',title:'Smart India Hackathon 2023 — Winner',sub:'National Level · Govt. of India'},
    {icon:'🎖️',title:'NSD Cadet Empanelment',sub:'National Security Database — First Responder Training'},
    {icon:'🌟',title:'Best Project of Department',sub:'Sri Krishna Arts & Science College · B.Sc. CS · 2022'},
    {icon:'🔐',title:'NCIIPC Grey Box Pentest',sub:'Authorised pentesting on NCIIPC-hosted websites'},
  ],
};

/* Content that used to be hard-coded in the HTML now lives here too. */
DATA.tools = ['Python','Kali Linux','Burp Suite','Metasploit','Nmap','ZAP','SQLmap','Nessus','Wazuh','Splunk','Autopsy','Volatility','FTK','Sleuthkit','Dirbuster','OPNsense','Django','PyQT5','OpenCV','ffmpeg'];
DATA.education = [
  { degree: 'M.Sc. Cybersecurity', detail: 'Rank Holder · Bharathiar University · 2024' },
  { degree: 'B.Sc. Computer Science', detail: 'First Class Distinction · Sri Krishna Arts & Science College · 2022' },
];
DATA.soft = ['Presentation Skills','Communication','Time Management','Tenacity'];
DATA.roles = ['Security Engineer','SOC Analyst','Detection Engineer','AppSec Engineer','DFIR Specialist'];

/* ══════════════════════════════════════════════════════════
   RENDER: every list on the page is built from DATA above
══════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => [].slice.call((r || document).querySelectorAll(s));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const root = document.documentElement;
  const isNda = n => /classified/i.test(n);
  const cleanName = n => n.replace(/\s*[-–—]\s*classified\s*$/i, '');

  /* experience: stacking cards */
  const stackEl = $('#stack');
  stackEl.innerHTML = DATA.experience.map((e, i) => `
    <article class="rc k${(i % 5) + 1}" style="--i:${i}">
      <div class="t"><span>${String(i + 1).padStart(2, '0')} / ${String(DATA.experience.length).padStart(2, '0')}</span><span>${esc(e.period)}</span></div>
      <div><h3>${esc(e.company)}</h3><div class="role">${esc(e.role)} · ${esc(e.loc)}</div></div>
      <div class="m"><ul>${e.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>
      <div class="chips">${e.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div></div>
    </article>`).join('');

  /* projects: horizontal reel */
  const skin = ['', 'dark', '', 'tang', '', 'dark'];
  const track = $('#track');
  track.innerHTML = DATA.projects.map((p, i) => {
    const nda = isNda(p.name);
    return `<article class="pc ${skin[i % skin.length]}">
      <div class="top"><span class="bdg ${nda ? 'n1' : 'n2'}">${nda ? 'Under NDA' : 'Open source'}</span><span class="n" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span></div>
      <div class="tg">${esc(p.tag)}</div>
      <h3>${esc(cleanName(p.name))}</h3>
      <p>${esc(p.desc)}</p>
      <div class="chips">${p.tech.map(t => `<span>${esc(t)}</span>`).join('')}</div>
      ${p.link ? `<a class="go" href="${esc(p.link)}" target="_blank" rel="noopener">View on GitHub ↗<span class="sr"> (opens in a new tab)</span></a>` : ''}
    </article>`;
  }).join('') + `<article class="pc dark"><div class="top"><span class="bdg" style="border-color:var(--bg)">More</span><span class="n" aria-hidden="true">${String(DATA.projects.length + 1).padStart(2, '0')}</span></div>
    <h3>The rest lives on GitHub</h3><p>Small tools, experiments and write-ups.</p>
    <a class="go" href="https://github.com/cyber468" target="_blank" rel="noopener">github.com/cyber468 ↗<span class="sr"> (opens in a new tab)</span></a></article>`;

  /* skills: all 12 with percentages */
  $('#prof').innerHTML = DATA.skills.map(s => `
    <div class="pr"><div class="rw"><span>${esc(s.name)}</span><span>${s.pct}%</span></div>
    <div class="tr" role="img" aria-label="${esc(s.name)} ${s.pct} percent"><i data-w="${s.pct}"></i></div></div>`).join('');
  $('#tools').innerHTML = DATA.tools.map(t => `<span>${esc(t)}</span>`).join('');

  /* education, soft skills */
  $('#edu').innerHTML = DATA.education.map(e => `<div class="ed"><b>${esc(e.degree)}</b><span>${esc(e.detail)}</span></div>`).join('');
  $('#soft').innerHTML = DATA.soft.map(s => `<li>${esc(s)}</li>`).join('');

  /* certifications and awards */
  $('#certs').innerHTML = DATA.certs.map(c => `<a class="tk" href="${esc(c.link)}" target="_blank" rel="noopener"><b>${esc(c.name)}</b><small>${esc(c.issuer)}</small><em>Verify ↗<span class="sr"> (opens in a new tab)</span></em></a>`).join('');
  $('#awl').innerHTML = DATA.awards.map(a => `<li><span class="ic" aria-hidden="true">${a.icon}</span><div><b>${esc(a.title)}</b><small>${esc(a.sub)}</small></div></li>`).join('');

  /* resume file comes from RESUME above */
  const dl = $('#dl'); dl.href = RESUME.file; dl.setAttribute('download', RESUME.downloadName);

  /* email assembled in the browser so it is not sitting in the HTML for scrapers */
  const mail = $('#mail');
  if (mail) { const a = mail.dataset.u + '@' + mail.dataset.d; mail.href = 'mailto:' + a; mail.textContent = a; }

  /* ── theme ───────────────────────────────────────────── */
  const mq = matchMedia('(prefers-color-scheme: dark)');
  $('#theme').onclick = () => {
    const t = root.getAttribute('data-theme');
    const n = (t ? t === 'dark' : mq.matches) ? 'light' : 'dark';
    root.setAttribute('data-theme', n);
    try { localStorage.setItem('theme', n); } catch (e) {}
  };
  try { const s = localStorage.getItem('theme'); if (s) root.setAttribute('data-theme', s); } catch (e) {}

  /* ── mobile menu ─────────────────────────────────────── */
  const sheet = $('#sheet'), menuBtn = $('#menu');
  function setMenu(open) {
    sheet.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) $('#sheetX').focus(); else menuBtn.focus({ preventScroll: true });
  }
  menuBtn.onclick = () => setMenu(true);
  $('#sheetX').onclick = () => setMenu(false);
  $$('#sheet a').forEach(a => a.addEventListener('click', () => { sheet.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false); document.body.style.overflow = ''; }));
  addEventListener('keydown', e => { if (e.key === 'Escape' && sheet.classList.contains('open')) setMenu(false); });

  /* ── hero name: split into letters ───────────────────── */
  let idx = 0;
  $$('#name .ln').forEach(ln => {
    const t = ln.dataset.t, ser = ln.dataset.s;
    const w = ser ? document.createElement('span') : ln;
    if (ser) { w.className = 'ser'; ln.appendChild(w); }
    t.split('').forEach(c => {
      const s = document.createElement('span');
      s.className = 'ch'; s.style.setProperty('--i', idx++); s.setAttribute('aria-hidden', 'true');
      s.textContent = c === ' ' ? ' ' : c; w.appendChild(s);
    });
  });

  /* typewriter role line */
  const typed = $('#typed');
  if (!reduce) {
    let ri = 0, ci = 0, del = false;
    (function tick() {
      const cur = DATA.roles[ri]; let wait = 85;
      if (!del) { ci++; typed.textContent = cur.slice(0, ci); if (ci === cur.length) { del = true; wait = 1500; } }
      else { ci--; typed.textContent = cur.slice(0, ci); wait = 40; if (ci === 0) { del = false; ri = (ri + 1) % DATA.roles.length; wait = 300; } }
      setTimeout(tick, wait);
    })();
  }

  /* statement: word-by-word scrubbed reveal */
  const st = $('#state');
  st.innerHTML = st.textContent.trim().split(/\s+/).map(w => `<span class="w">${esc(w)}</span>`).join(' ');
  const words = $$('.w', st);
  if (reduce) words.forEach(w => w.classList.add('on'));

  /* ── counters, skill bars, skill rows (observer) ─────── */
  function count(el) {
    const to = +el.dataset.n, sfx = el.dataset.s || '';
    if (reduce) { el.textContent = to + sfx; return; }
    const t0 = performance.now();
    (function f(t) { const p = Math.min(1, (t - t0) / 1500), e = 1 - Math.pow(1 - p, 4); el.textContent = Math.round(to * e) + sfx; if (p < 1) requestAnimationFrame(f); })(t0);
  }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    if (el.id === 'stats') $$('[data-n]', el).forEach(count);
    else if (el.id === 'prof') $$('[data-w]', el).forEach(b => { b.style.width = b.dataset.w + '%'; });
    else el.classList.add('in');
    io.unobserve(el);
  }), { threshold: .2 });
  io.observe($('#stats')); io.observe($('#prof'));
  $$('.row').forEach(r => reduce ? r.classList.add('in') : io.observe(r));
  if (reduce) $$('#prof [data-w]').forEach(b => { b.style.width = b.dataset.w + '%'; });

  /* ── pointer: cursor, parallax, magnets ──────────────── */
  let mx = 0, my = 0, cx = 0, cy = 0, tx = 0, ty = 0, pxv = 0, pyv = 0;
  const cur = $('#cur'), hero = $('#hero');
  addEventListener('pointermove', e => { if (e.pointerType !== 'mouse') return; mx = e.clientX; my = e.clientY; tx = e.clientX / innerWidth - .5; ty = e.clientY / innerHeight - .5; }, { passive: true });
  if (fine) document.addEventListener('pointerover', e => cur.classList.toggle('big', !!e.target.closest('a,button,.pc,.row,.tk,.cloud span')));
  const mags = $$('.mag');
  function magnet() {
    if (!fine || reduce) return;
    mags.forEach(el => {
      const r = el.getBoundingClientRect(), dx = mx - (r.left + r.width / 2), dy = my - (r.top + r.height / 2), d = Math.hypot(dx, dy), R = Math.max(r.width, r.height) * .9;
      const k = d < R ? 1 - d / R : 0, c = el._c || (el._c = { x: 0, y: 0 });
      c.x += (dx * k * .4 - c.x) * .18; c.y += (dy * k * .4 - c.y) * .18;
      el.style.transform = `translate(${c.x.toFixed(1)}px,${c.y.toFixed(1)}px)`;
    });
  }

  /* ── marquees: base drift + scroll velocity ──────────── */
  const bands = $$('.band').map(b => ({ tr: $('.tr', b), dir: +b.dataset.dir, x: 0, w: 0 }));
  const measureBands = () => bands.forEach(b => { b.w = b.tr.firstElementChild.getBoundingClientRect().width; });
  let lastY = scrollY, vel = 0;

  /* ── stacking cards (falls back to a plain list when it cannot fit) ── */
  const cards = $$('.rc'), phone = matchMedia('(max-width:820px)');
  function setStackMode() {
    const flat = reduce || phone.matches || cards.some(c => c.offsetHeight > innerHeight - 120);
    stackEl.classList.toggle('flat', flat);
  }
  function stack() {
    if (stackEl.classList.contains('flat')) return;
    const vh = innerHeight;
    cards.forEach((c, i) => {
      const nx = cards[i + 1]; if (!nx) return;
      const top = nx.getBoundingClientRect().top, stuck = 92 + (i + 1) * 18, p = clamp(1 - (top - stuck) / (vh * .65), 0, 1);
      c.style.transform = `scale(${(1 - p * .06).toFixed(4)})`; c.style.setProperty('--dim', (p * .28).toFixed(3));
    });
  }

  /* ── pinned horizontal reel (native swipe row on small screens) ── */
  const hs = $('#projects'), hsp = $('#hsp'), small = matchMedia('(max-width:760px)');
  let dist = 0;
  function setReelMode() {
    const flat = reduce || small.matches || innerHeight < 480;
    hs.classList.toggle('flat', flat);
    if (flat) { hs.style.removeProperty('--hh'); dist = 0; track.style.transform = ''; return; }
    dist = Math.max(0, track.scrollWidth - root.clientWidth);
    hs.style.setProperty('--hh', (dist + innerHeight) + 'px');
  }
  function reel() {
    if (!dist) return;
    const top = hs.getBoundingClientRect().top + scrollY, p = clamp((scrollY - top) / dist, 0, 1);
    track.style.transform = `translate3d(${(-p * dist).toFixed(1)}px,0,0)`; hsp.style.transform = `scaleX(${p.toFixed(4)})`;
  }
  track.addEventListener('focusin', e => {
    if (!dist) return;
    const card = e.target.closest('.pc'); if (!card) return;
    const top = hs.getBoundingClientRect().top + scrollY, pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    scrollTo({ top: top + clamp((card.offsetLeft - pad) / dist, 0, 1) * dist, behavior: 'auto' });
    $('.hs-pin').scrollLeft = 0;
  });

  /* ── chrome: progress bar, nav hide, active link ─────── */
  const nav = $('#nav'), bar = $('#bar'), giant = $('#giant');
  const links = $$('.nav a.l'), secs = links.map(a => $(a.getAttribute('href')));
  let ly = scrollY;
  function chrome() {
    const y = scrollY, h = root.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? clamp(y / h, 0, 1) : 0})`;
    if (Math.abs(y - ly) > 6) { nav.classList.toggle('hide', y > ly && y > 240 && !sheet.classList.contains('open')); ly = y; }
    else if (y <= 240) nav.classList.remove('hide');
    let c = -1; secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * .4) c = i; });
    links.forEach((a, i) => a.classList.toggle('on', i === c));
  }

  /* ── one frame loop for everything continuous ────────── */
  function frame() {
    requestAnimationFrame(frame);
    const y = scrollY; vel += ((y - lastY) - vel) * .12; lastY = y;
    if (fine) { cx += (mx - cx) * .2; cy += (my - cy) * .2; cur.style.transform = `translate(${cx.toFixed(1)}px,${cy.toFixed(1)}px)`; }
    if (Math.abs(tx - pxv) > .0005 || Math.abs(ty - pyv) > .0005) {
      pxv += (tx - pxv) * .07; pyv += (ty - pyv) * .07;
      hero.style.setProperty('--px', (pxv * 2).toFixed(3)); hero.style.setProperty('--py', (pyv * 2).toFixed(3));
    }
    bands.forEach(b => {
      if (!b.w) return;
      b.x += b.dir * (.9 + Math.abs(vel) * .55) * (vel < 0 ? -1 : 1);
      b.x = ((b.x % b.w) + b.w) % b.w;
      b.tr.style.transform = `translate3d(${(-b.x).toFixed(1)}px,0,0)`;
    });
    const r = st.getBoundingClientRect(), p = clamp((innerHeight * .85 - r.top) / (innerHeight * .55 + r.height * .6), 0, 1), n = Math.round(p * words.length);
    words.forEach((w, i) => { const on = i < n; if (w._on !== on) { w._on = on; w.classList.toggle('on', on); } });
    stack(); reel(); magnet();
    const gr = giant.getBoundingClientRect();
    giant.style.transform = `translateX(${(clamp((gr.top - innerHeight) / innerHeight, -1, 0) * 40).toFixed(1)}px)`;
    chrome();
  }

  function layout() { measureBands(); setStackMode(); setReelMode(); }
  layout();
  /* On phones the URL bar showing/hiding fires resize on every scroll; only re-layout when the width changes. */
  let lw = innerWidth, lt = 0;
  addEventListener('resize', () => {
    clearTimeout(lt);
    lt = setTimeout(() => { if (innerWidth === lw && !fine) return; lw = innerWidth; layout(); }, 120);
  });
  addEventListener('load', layout);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
  if (reduce) { chrome(); addEventListener('scroll', chrome, { passive: true }); }
  else requestAnimationFrame(frame);

  /* ── old #hash links (from the previous detail pages) still work ── */
  const LEGACY = { exp: 'work', cert: 'proof', awards: 'awards', projects: 'projects', skills: 'skills', resume: 'resume' };
  function goHash() {
    const h = location.hash.replace('#', ''); if (!h) return;
    const t = document.getElementById(LEGACY[h] || h);
    if (t) setTimeout(() => t.scrollIntoView({ behavior: 'auto' }), 60);
  }
  addEventListener('load', goHash);
})();
