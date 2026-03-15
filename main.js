/* ── DATA ─────────────────────────────────────────────────── */
const DATA = {
  experience: [
    {
      role: 'Security Analyst', company: 'M2P Fintech', loc: 'Chennai, TN',
      period: 'Oct 2024 – Present',
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
    { name:'Ransomware Readiness Assessment Tool', tag:'NCIIPC · Python',
      desc:'Python GUI on a SIEM architecture to analyse system and employee readiness against ransomware. Built for CIIs at NCIIPC.',
      tech:['Python','PyQT5','Nmap','Qt Designer','SIEM'], link:'' },
    { name:'Real-Time Threat Intelligence Collector', tag:'NCIIPC · Threat Intel',
      desc:'Near-real-time threat intel aggregation for Critical Information Infrastructures — multiple feed sources surfaced to operators.',
      tech:['Python','Threat Intel APIs','SIEM','REST APIs'], link:'' },
    { name:'Post-Incident DFIR — University Server', tag:'DFIR · Investigation',
      desc:'Full investigation of a compromised live university server — DFIR analysis, DR collaboration, documentation, and hardening.',
      tech:['Kali Linux','ZAP','Nmap','SQLmap','Metasploit','Autopsy'], link:'' },
    { name:'Multi-Format Steganography Tool', tag:'Python · Security',
      desc:'Cross-platform Python tool for steganography across Text, Video, Audio and Image formats.',
      tech:['Python','ffmpeg','OpenCV'], link:'' },
    { name:'Personality Prediction via ML', tag:'ML · Web App',
      desc:'ML web app enabling recruiters to predict candidate personality for efficient hiring, built with Django.',
      tech:['Python','Django','ML','Jupyter','Figma'], link:'' },
  ],
  certs: [
    {name:'CEH v12',issuer:'EC-Council',link:''},
    {name:'CC — Certified in Cybersecurity',issuer:'ISC²',link:''},
    {name:'Google Cybersecurity Professional',issuer:'Google',link:''},
    {name:'ISO/IEC 27001 Information Security Associate',issuer:'Skillfront',link:''},
    {name:'Certified Investigator',issuer:'CSI Linux',link:''},
    {name:'CCIO — Cybercrime Intervention Officer',issuer:'ISAC',link:''},
    {name:'CPEW',issuer:'Cleanexit',link:''},
  ],
  awards: [
    {icon:'🥇',title:'University Rank Holder',sub:'Bharathiar University — M.Sc. Cybersecurity · 2024'},
    {icon:'🏆',title:'Smart India Hackathon 2023 — Winner',sub:'National Level · Govt. of India'},
    {icon:'🎖️',title:'NSD Cadet Empanelment',sub:'National Security Database — First Responder Training'},
    {icon:'🌟',title:'Best Project of Department',sub:'Sri Krishna Arts & Science College · B.Sc. CS · 2022'},
    {icon:'🔐',title:'NCIIPC Grey Box Pentest',sub:'Authorised pentesting on NCIIPC-hosted websites'},
  ],
};

/* ── POINTER GLOW ─────────────────────────────────────────── */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
  });
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '50%');
  });
});

/* ── CARD FADE IN ─────────────────────────────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.04 });
document.querySelectorAll('.card').forEach(c => io.observe(c));

/* ── SKILL BARS ───────────────────────────────────────────── */
const sc = document.querySelector('.c-skills');
if (sc) {
  const sio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('#bento .sk-fill').forEach(f =>
          setTimeout(() => { f.style.width = f.dataset.w + '%'; }, 200)
        );
        sio.disconnect();
      }
    });
  }, { threshold: 0.1 });
  sio.observe(sc);
}

/* ── TYPEWRITER ───────────────────────────────────────────── */
const roles = ['Security Analyst','DFIR Specialist','Pentest Engineer','Threat Hunter','SOC Analyst'];
let ri = 0, ci = 0, del = false;
const ey = document.querySelector('.hero-ey');
if (ey) {
  setInterval(() => {
    const cur = roles[ri];
    if (!del && ci <= cur.length)     { ey.textContent = '// ' + cur.slice(0, ci++); }
    else if (!del)                    { del = true; }
    else if (del && ci > 0)           { ey.textContent = '// ' + cur.slice(0, --ci); }
    else                              { del = false; ri = (ri + 1) % roles.length; }
  }, 85);
}

/* ── DETAIL PAGE ──────────────────────────────────────────── */
const detailEl = document.getElementById('view-detail');
const wrapEl   = document.getElementById('detail-wrap');

function _openPage(p) {
  wrapEl.innerHTML = buildPage(p);
  detailEl.classList.add('active');
  detailEl.scrollTop = 0;
  // Animate skill bars in detail
  setTimeout(() => {
    detailEl.querySelectorAll('.sf-fill').forEach(f => { f.style.width = f.dataset.w + '%'; });
  }, 180);
  // GSAP entrance if loaded
  if (window.gsap) {
    gsap.from('#detail-wrap > .detail > *', { y: 18, opacity: 0, duration: .45, stagger: .07, ease: 'power2.out' });
  }
}

function _closePage() {
  detailEl.classList.remove('active');
}

/* ── PAGE CONTENT BUILDERS ────────────────────────────────── */
function buildPage(p) {
  const map = { exp: expPage, skills: skillsPage, projects: projPage, cert: certPage, awards: awardsPage };
  return `<div class="detail">${(map[p] || (() => ''))()}</div>`;
}

function expPage() {
  return `<h1 class="detail-title">Experience</h1>
  <p class="detail-sub">Full work history — roles, responsibilities & tools used</p>
  ${DATA.experience.map(e => `
    <div class="d-card">
      <div class="d-top">
        <div><div class="d-role">${e.role}</div><div class="d-co">${e.company} · ${e.loc}</div></div>
        <span class="d-period">${e.period}</span>
      </div>
      <ul class="d-ul">${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      <div class="d-tags">${e.tags.map(t => `<span class="d-tag">${t}</span>`).join('')}</div>
    </div>`).join('')}`;
}

function skillsPage() {
  return `<h1 class="detail-title">Skills</h1>
  <p class="detail-sub">Technical expertise & proficiency levels</p>
  <div class="d-grid2">
    ${DATA.skills.map(s => `
      <div class="sf">
        <div class="sf-row"><span class="sf-name">${s.name}</span><span class="sf-pct">${s.pct}%</span></div>
        <div class="sf-track"><div class="sf-fill" data-w="${s.pct}"></div></div>
      </div>`).join('')}
  </div>`;
}

function projPage() {
  return `<h1 class="detail-title">Projects</h1>
  <p class="detail-sub">Research, tools & applications — paste GitHub links in main.js DATA.projects[n].link</p>
  ${DATA.projects.map(p => `
    <div class="pfi">
      <div class="pfi-top">
        <div class="pfi-name">${p.name}</div>
        <div style="display:flex;gap:6px;align-items:center;flex-shrink:0">
          <span class="pill">${p.tag}</span>
          ${p.link ? `<a href="${p.link}" target="_blank" class="pfi-link">View ↗</a>` : ''}
        </div>
      </div>
      <div class="pfi-desc">${p.desc}</div>
      <div class="pfi-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
    </div>`).join('')}`;
}

function certPage() {
  return `<h1 class="detail-title">Certifications</h1>
  <p class="detail-sub">Professional credentials — paste verify URLs in main.js DATA.certs[n].link</p>
  <div class="d-grid3">
    ${DATA.certs.map(c => `
      <div class="cfd">
        <span class="cfd-badge">Certified</span>
        <div class="cfd-name">${c.name}</div>
        <div class="cfd-issuer">${c.issuer}</div>
        ${c.link ? `<a href="${c.link}" target="_blank" class="cfd-btn">Verify ↗</a>` : ''}
      </div>`).join('')}
  </div>`;
}

function awardsPage() {
  return `<h1 class="detail-title">Awards & Recognition</h1>
  <p class="detail-sub">Achievements and notable honours</p>
  ${DATA.awards.map(a => `
    <div class="d-card" style="display:flex;align-items:flex-start;gap:14px">
      <span style="font-size:1.6rem;flex-shrink:0">${a.icon}</span>
      <div><div class="d-role">${a.title}</div><div style="font-size:.7rem;color:var(--c2);margin-top:3px">${a.sub}</div></div>
    </div>`).join('')}`;
}