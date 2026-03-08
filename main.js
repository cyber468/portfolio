/* ── DATA ───────────────────────────────────────────────────── */
const DATA = {
  experience: [
    {
      role: 'Security Analyst',
      company: 'M2P Fintech',
      loc: 'Chennai, Tamil Nadu',
      period: 'Oct 2024 – Present',
      color: '#A1C2BD',
      bullets: [
        'Security operations at Asia\'s largest API infrastructure — serving 300+ banks, 100+ NBFCs and 800+ fintechs across 20+ markets',
        'Monitoring and analysing security events across fintech payment and lending infrastructure',
        'Vulnerability assessments and penetration testing on internal and client-facing systems',
        'Incident detection, triage, and response using SIEM tools (Wazuh/Splunk)',
        'Collaborating with engineering teams on API security hardening and IAM policies',
        'Contributing to ISO 27001 compliance activities and security awareness initiatives',
      ],
      tags: ['SIEM','Threat Detection','API Security','Incident Response','Fintech','IAM','ISO 27001'],
    },
    {
      role: 'Cyber Security Intern',
      company: 'NCIIPC — National Critical Information Infrastructure Protection Centre',
      loc: 'Delhi, India',
      period: 'May 2024 – Oct 2024',
      color: '#19183B',
      bullets: [
        'Implemented an In-House Advisory Management System for tracking and distributing security advisories to CIIs',
        'Developed Ransomware Readiness Assessment Solution (Python/PyQT5) for Critical Information Infrastructures',
        'Built a real-time threat intelligence collection system providing near-real-time awareness to CIIs',
        'Conducted Grey Box penetration testing on requested websites hosted by NCIIPC',
        'Produced promotion and advertising resources for the ransomware readiness programme',
      ],
      tags: ['Python','Pentesting','Threat Intel','Ransomware','Grey Box','Advisory Mgmt','SIEM'],
    },
    {
      role: 'Digital Forensics Intern',
      company: 'Information Sharing and Analysis Center (ISAC)',
      loc: 'Bangalore, India',
      period: 'Mar 2024 – May 2024',
      color: '#708993',
      bullets: [
        'Memory analysis of disk and memory images to identify suspicious artefacts and determine root cause',
        'Developed cybersecurity awareness blogs and training material for the NSD community',
        'Received NSD (National Security Database) empanelment and first-responder training',
        'Collaborated with analysts on threat-sharing workflows across member organisations',
      ],
      tags: ['Digital Forensics','Memory Analysis','Disk Imaging','DFIR','Autopsy','Volatility','First Responder'],
    },
    {
      role: 'Security Researcher — Internship',
      company: 'Forefend Labs',
      loc: 'Bangalore, India',
      period: 'Jan 2024 – Mar 2024',
      color: '#A1C2BD',
      bullets: [
        'Conducted penetration tests on client websites and reported findings with remediation guidance',
        'Collaborated across teams for cybersecurity content creation and research publication',
        'Involved in collecting and managing client prospects and sales pipelines for the company',
      ],
      tags: ['Penetration Testing','Web App Security','Burp Suite','Reporting','Content Creation'],
    },
    {
      role: 'First Incident Response Officer — Internship',
      company: 'Cyber Crime Police Station',
      loc: 'Coimbatore, India',
      period: 'Aug 2023 – Sep 2023',
      color: '#c5d8d5',
      bullets: [
        'Worked as a First Incident Response Officer handling cyber crime complaints',
        'Obtained critical information and digital evidence from petitioners during interrogations',
        'Filed complaints on behalf of victims and guided them through the formal complaint process',
        'Gained exposure to legal frameworks surrounding cybercrime in India',
      ],
      tags: ['Incident Response','Digital Evidence','Cyber Law','First Responder'],
    },
  ],

  skills: [
    {name:'Digital Forensics & IR', pct:90},
    {name:'Penetration Testing', pct:88},
    {name:'Python Development', pct:85},
    {name:'Memory / Disk Forensics', pct:87},
    {name:'SIEM (Wazuh / Splunk)', pct:82},
    {name:'Vulnerability Assessment', pct:86},
    {name:'Threat Intelligence', pct:83},
    {name:'ISO 27001 / ISMS', pct:78},
    {name:'Software Development', pct:80},
    {name:'IAM & Firewalls', pct:75},
    {name:'API Security', pct:80},
    {name:'Network Security', pct:78},
  ],

  projects: [
    {
      name:'Ransomware Readiness Assessment Tool',
      tag:'NCIIPC · Python',
      desc:'Python-based GUI tool on a SIEM architecture to efficiently analyse system and employee readiness against ransomware in organisations. Developed during the NCIIPC internship and presented as a CII solution.',
      tech:['Python','PyQT5','Nmap','Qt Designer','SIEM','VSCode'],
    },
    {
      name:'Real-Time Threat Intelligence Collector',
      tag:'NCIIPC · Threat Intel',
      desc:'Solution for near-real-time threat intelligence collection providing situational awareness to Critical Information Infrastructures (CIIs). Aggregates feeds and surfaces actionable insights to operators.',
      tech:['Python','Threat Intel APIs','SIEM','REST APIs'],
    },
    {
      name:'Post-Incident DFIR — Compromised University Server',
      tag:'DFIR · Investigation',
      desc:'Full investigation of a compromised live university server. Conducted DFIR analysis, collaborated with the Disaster Recovery team, documented findings, and implemented server hardening measures.',
      tech:['Kali Linux','ZAP','Nmap','SQLmap','Dirbuster','Metasploit','Autopsy','Excel'],
    },
    {
      name:'Multi-Format Steganography Tool',
      tag:'Python · Security',
      desc:'Cross-platform Python tool (Windows & Linux) for advanced steganography — embedding secret messages within Text, Video, Audio, and Image formats for secure covert communication.',
      tech:['Python','ffmpeg','OpenCV'],
    },
    {
      name:'Personality Prediction using Machine Learning',
      tag:'ML · Web App',
      desc:'ML-based web application enabling recruiters to predict candidate personality traits for more efficient hiring. Built with Django backend and interactive Figma-designed frontend.',
      tech:['Python','Django','Jupyter Notebook','Machine Learning','Figma'],
    },
  ],

  certs: [
    {name:'CEH v12', issuer:'EC-Council'},
    {name:'CC — Certified in Cybersecurity', issuer:'ISC²'},
    {name:'Google Cybersecurity Professional', issuer:'Google'},
    {name:'ISO/IEC 27001 Information Security Associate', issuer:'Skillfront'},
    {name:'Certified Investigator', issuer:'CSI Linux'},
    {name:'CCIO — Cybercrime Intervention Officer', issuer:'ISAC'},
    {name:'CPEW', issuer:'Cleanexit'},
  ],

  awards: [
    {icon:'🥇', title:'University Rank Holder', sub:'Bharathiar University — Masters in Cybersecurity (2024)'},
    {icon:'🏆', title:'Winner — Smart India Hackathon 2023', sub:'National Level · Government of India'},
    {icon:'🎖️', title:'NSD Cadet Empanelment', sub:'National Security Database — First Responder Training'},
    {icon:'🌟', title:'Best Project of Department', sub:'Sri Krishna Arts and Science College · B.Sc. CS'},
    {icon:'🔐', title:'NCIIPC Grey Box Pentest', sub:'Conducted pentest on NCIIPC-hosted websites'},
  ],
};

/* ── THEME ──────────────────────────────────────────────────── */
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const tIcon = document.getElementById('tIcon');
const tLabel = document.getElementById('tLabel');

function applyTheme(t) {
  root.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  tIcon.textContent  = t === 'night' ? '☀️' : '🌙';
  tLabel.textContent = t === 'night' ? 'Day'  : 'Night';
}
const saved = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'night' : 'day');
applyTheme(saved);
themeBtn.addEventListener('click', () =>
  applyTheme(root.getAttribute('data-theme') === 'night' ? 'day' : 'night')
);

/* ── SPA ROUTER ─────────────────────────────────────────────── */
function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) { el.classList.add('active'); window.scrollTo({top:0,behavior:'smooth'}); }
}

function navigate(page) {
  if (page === 'home') {
    showView('view-home');
    return;
  }
  // Build and inject detail page
  buildDetail(page);
  showView('view-detail');
}

/* ── DETAIL BUILDER ─────────────────────────────────────────── */
function buildDetail(page) {
  const wrap = document.getElementById('detail-wrap');
  wrap.innerHTML = `
    <button class="back-btn" onclick="navigate('home')">← Back</button>
    ${pageContent(page)}
  `;
  // Animate skill fills in detail pages
  requestAnimationFrame(() => {
    wrap.querySelectorAll('.sf-fill').forEach(f => {
      setTimeout(() => { f.style.width = f.dataset.width + '%'; }, 100);
    });
  });
}

function pageContent(page) {
  switch(page) {
    case 'exp':     return expDetail();
    case 'skills':  return skillsDetail();
    case 'projects':return projectsDetail();
    case 'cert':    return certDetail();
    case 'awards':  return awardsDetail();
    default: return '<p>Page not found.</p>';
  }
}

function expDetail() {
  return `
    <div class="detail">
      <h1 class="detail-title">Experience</h1>
      <p class="detail-sub">Full work history — roles, responsibilities & skills used</p>
      ${DATA.experience.map(e => `
        <div class="exp-full-item">
          <div class="efi-top">
            <div>
              <div class="efi-role" style="color:${e.color === '#19183B' && root.getAttribute('data-theme')==='day' ? e.color : (e.color === '#19183B' ? '#A1C2BD' : e.color)}">${e.role}</div>
              <div class="efi-co">${e.company} · ${e.loc}</div>
            </div>
            <span class="efi-period">${e.period}</span>
          </div>
          <ul class="efi-bullets">${e.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
          <div class="efi-tags">${e.tags.map(t=>`<span class="efi-tag">${t}</span>`).join('')}</div>
        </div>
      `).join('')}
    </div>`;
}

function skillsDetail() {
  return `
    <div class="detail">
      <h1 class="detail-title">Skills</h1>
      <p class="detail-sub">Technical expertise & proficiency levels</p>
      <div class="skills-full">
        ${DATA.skills.map(s => `
          <div class="sf-item">
            <div class="sf-row">
              <span class="sf-name">${s.name}</span>
              <span class="sf-pct">${s.pct}%</span>
            </div>
            <div class="sf-track"><div class="sf-fill" data-width="${s.pct}"></div></div>
          </div>
        `).join('')}
      </div>
    </div>`;
}

function projectsDetail() {
  return `
    <div class="detail">
      <h1 class="detail-title">Projects</h1>
      <p class="detail-sub">Research, tools and applications built across internships and personal work</p>
      ${DATA.projects.map(p => `
        <div class="proj-full-item">
          <div class="pfi-head">
            <div class="pfi-name">${p.name}</div>
            <span class="pfi-tag">${p.tag}</span>
          </div>
          <div class="pfi-desc">${p.desc}</div>
          <div class="pfi-tech">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
        </div>
      `).join('')}
    </div>`;
}

function certDetail() {
  return `
    <div class="detail">
      <h1 class="detail-title">Certifications</h1>
      <p class="detail-sub">Professional credentials and completed programmes</p>
      <div class="cert-full-grid">
        ${DATA.certs.map(c => `
          <div class="cfi">
            <span class="cfi-badge">Certified</span>
            <div class="cfi-name">${c.name}</div>
            <div class="cfi-issuer">${c.issuer}</div>
          </div>
        `).join('')}
      </div>
    </div>`;
}

function awardsDetail() {
  return `
    <div class="detail">
      <h1 class="detail-title">Awards & Recognition</h1>
      <p class="detail-sub">Achievements and notable recognitions</p>
      ${DATA.awards.map(a => `
        <div class="award-full-item">
          <div class="afi-icon">${a.icon}</div>
          <div>
            <div class="afi-title">${a.title}</div>
            <div class="afi-sub">${a.sub}</div>
          </div>
        </div>
      `).join('')}
    </div>`;
}

/* ── BENTO FADE-IN ──────────────────────────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.06 });
document.querySelectorAll('.card').forEach(c => observer.observe(c));

/* ── SKILL BAR (home bento) ─────────────────────────────────── */
const skillsCard = document.querySelector('.c-skills');
const skillsObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.sk-fill').forEach(f =>
        setTimeout(() => { f.style.width = f.dataset.width + '%'; }, 200)
      );
      skillsObs.disconnect();
    }
  });
}, { threshold: 0.2 });
if (skillsCard) skillsObs.observe(skillsCard);

/* ── TYPEWRITER ─────────────────────────────────────────────── */
const roles = ['Security Analyst','Threat Hunter','DFIR Specialist','Pentest Engineer','SOC Analyst'];
let ri = 0, ci = 0, del = false;
const lbl = document.querySelector('.hero-eyebrow');
if (lbl) {
  setInterval(() => {
    const cur = roles[ri];
    if (!del && ci <= cur.length) { lbl.textContent = '// ' + cur.slice(0, ci++); }
    else if (!del) { del = true; }
    else if (del && ci > 0) { lbl.textContent = '// ' + cur.slice(0, --ci); }
    else { del = false; ri = (ri + 1) % roles.length; }
  }, 85);
}

/* ── CONTACT FORM ───────────────────────────────────────────── */
function sendMsg(btn) {
  const form = btn.closest('.cf');
  const vals = [...form.querySelectorAll('input,textarea')].map(i => i.value.trim());
  if (vals.some(v => !v)) {
    btn.textContent = 'Fill all fields ↩'; btn.style.background = '#708993'; btn.style.color = '#fff';
    setTimeout(() => { btn.textContent = 'Send Message →'; btn.style.background = ''; btn.style.color = ''; }, 2000);
    return;
  }
  btn.textContent = 'Sending…'; btn.style.opacity = '.7';
  setTimeout(() => {
    btn.textContent = '✓ Sent!'; btn.style.opacity = '1';
    btn.style.background = '#A1C2BD'; btn.style.color = '#19183B';
  }, 1400);
}