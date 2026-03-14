/* ══════════════════════════════════════════════════════
   AMBIENT BACKGROUND MOTION ENGINE
   Each card gets a unique canvas animation matching its theme
══════════════════════════════════════════════════════ */
(function() {
'use strict';

/* ── Palette ───────────────────────────────────────── */
const P = {
  c0: '#222831', c1: '#393E46', c2: '#948979', c3: '#DFD0B8',
  r0: [34,40,49], r1: [57,62,70], r2: [148,137,121], r3: [223,208,184]
};
const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

/* ── Utility ────────────────────────────────────────── */
function raf(fn) { requestAnimationFrame(fn) }
function resize(canvas) {
  const r = canvas.parentElement.getBoundingClientRect();
  canvas.width  = r.width  || canvas.offsetWidth;
  canvas.height = r.height || canvas.offsetHeight;
}

/* ── Base class ─────────────────────────────────────── */
class AmbScene {
  constructor(id) {
    this.canvas = document.getElementById('amb-' + id);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.t = 0;
    resize(this.canvas);
    window.addEventListener('resize', () => resize(this.canvas));
    this.init();
    this.loop();
  }
  get w() { return this.canvas.width }
  get h() { return this.canvas.height }
  init() {}
  draw() {}
  loop() {
    if (!this.canvas) return;
    this.t += 0.012;
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.draw();
    raf(() => this.loop());
  }
}

/* ══════════════════════════════════════════════════════
   ① HERO — Radar sweep + floating binary text
══════════════════════════════════════════════════════ */
class HeroScene extends AmbScene {
  init() {
    this.chars = '01アイウエオ10セキュリティ'.split('');
    this.drops = Array.from({length: 18}, (_, i) => ({
      x: (i / 18) * 1.1,
      y: Math.random(),
      speed: 0.0008 + Math.random() * 0.0006,
      char: this.chars[Math.floor(Math.random() * this.chars.length)],
      alpha: 0.04 + Math.random() * 0.06,
      size: 8 + Math.floor(Math.random() * 6)
    }));
    this.rings = [
      { r: 0.25, speed: 0.003 },
      { r: 0.45, speed: -0.002 },
    ];
  }
  draw() {
    const { ctx, w, h, t } = this;
    const cx = w * 0.5, cy = h * 0.5;

    // Rotating radar rings
    this.rings.forEach(ring => {
      const r = Math.min(w,h) * ring.r;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = rgba(P.r2, 0.06);
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Radar sweep
    const sweep = t * 0.8;
    const grad = ctx.createConicalGradient
      ? ctx.createConicalGradient(cx, cy, sweep)
      : null;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(sweep % (Math.PI * 2));
    const sweepGrad = ctx.createLinearGradient(0, 0, Math.min(w,h) * 0.5, 0);
    sweepGrad.addColorStop(0, rgba(P.r3, 0.18));
    sweepGrad.addColorStop(1, rgba(P.r3, 0));
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, Math.min(w,h) * 0.5, -0.35, 0);
    ctx.fillStyle = sweepGrad;
    ctx.fill();
    ctx.restore();

    // Floating binary/text drops
    ctx.font = 'bold 10px "DM Mono", monospace';
    this.drops.forEach(d => {
      d.y += d.speed;
      if (d.y > 1.1) {
        d.y = -0.05;
        d.char = this.chars[Math.floor(Math.random() * this.chars.length)];
      }
      ctx.fillStyle = rgba(P.r2, d.alpha);
      ctx.fillText(d.char, d.x * w, d.y * h);
    });
  }
}

/* ══════════════════════════════════════════════════════
   ② STATUS — Pulsing signal circles + "LIVE" blink text
══════════════════════════════════════════════════════ */
class StatusScene extends AmbScene {
  init() {
    this.waves = [0, 0.33, 0.66].map(o => ({ phase: o * Math.PI * 2 }));
    this.textFrames = ['█ LIVE', '█ LIVE', '█ LIVE', '░ LIVE'];
    this.tf = 0; this.tfc = 0;
  }
  draw() {
    const { ctx, w, h, t } = this;
    const cx = w * 0.85, cy = h * 0.18;

    // Ripple waves from top-right
    this.waves.forEach((wave, i) => {
      const phase = t * 1.2 + wave.phase;
      const r = (Math.sin(phase) * 0.5 + 0.5) * Math.min(w, h) * 0.55 + 5;
      const a = (1 - r / (Math.min(w, h) * 0.55)) * 0.08;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = rgba(P.r3, a);
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Floating status text
    this.tfc += 0.02;
    if (this.tfc > 1) { this.tfc = 0; this.tf = (this.tf + 1) % this.textFrames.length; }
    ctx.font = '600 9px "DM Mono", monospace';
    ctx.fillStyle = rgba(P.r3, 0.08);
    ctx.fillText(this.textFrames[this.tf], 10, h - 12);
    ctx.fillText('◉ ONLINE', 10, h - 24);
    ctx.fillText('◌ MONITORING', 10, h - 36);

    // Small floating dots
    for (let i = 0; i < 6; i++) {
      const px = w * (0.1 + i * 0.15);
      const py = h * 0.3 + Math.sin(t * 1.5 + i * 1.1) * h * 0.08;
      ctx.beginPath();
      ctx.arc(px, py, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = rgba(P.r3, 0.07 + Math.sin(t + i) * 0.03);
      ctx.fill();
    }
  }
}

/* ══════════════════════════════════════════════════════
   ③ EDUCATION — Floating degree text + gentle orbs
══════════════════════════════════════════════════════ */
class EduScene extends AmbScene {
  init() {
    this.orbs = Array.from({length: 4}, (_, i) => ({
      x: 0.2 + i * 0.25, y: 0.3 + (i % 2) * 0.3,
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0004,
      r: 0.05 + Math.random() * 0.05
    }));
    this.words = ['M.Sc', 'B.Sc', 'Rank', 'CS', '2024', '2022'];
  }
  draw() {
    const { ctx, w, h, t } = this;

    // Drifting orbs
    this.orbs.forEach((o, i) => {
      o.x += o.vx; o.y += o.vy;
      if (o.x < 0 || o.x > 1) o.vx *= -1;
      if (o.y < 0 || o.y > 1) o.vy *= -1;
      const g = ctx.createRadialGradient(o.x*w, o.y*h, 0, o.x*w, o.y*h, o.r * Math.min(w,h));
      g.addColorStop(0, rgba(P.r2, 0.09));
      g.addColorStop(1, rgba(P.r2, 0));
      ctx.beginPath();
      ctx.arc(o.x*w, o.y*h, o.r * Math.min(w,h), 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    });

    // Floating academic words
    ctx.font = '700 10px "Pangea Afrikan", sans-serif';
    this.words.forEach((word, i) => {
      const x = (0.1 + i * 0.16) * w;
      const y = h * 0.15 + Math.sin(t * 0.6 + i * 1.4) * h * 0.06;
      ctx.fillStyle = rgba(P.r3, 0.05);
      ctx.fillText(word, x, y);
    });

    // Subtle horizontal rule animation
    const lineY = h * (0.5 + Math.sin(t * 0.4) * 0.02);
    ctx.beginPath();
    ctx.moveTo(0, lineY);
    ctx.lineTo(w, lineY);
    ctx.strokeStyle = rgba(P.r2, 0.05);
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

/* ══════════════════════════════════════════════════════
   ④ EXPERIENCE — Vertical timeline pulses + company names
══════════════════════════════════════════════════════ */
class ExpScene extends AmbScene {
  init() {
    this.nodes = [0.15, 0.32, 0.49, 0.66, 0.83].map((y, i) => ({
      y, phase: i * 0.6, label: ['M2P','NCIIPC','ISAC','FOREFEND','POLICE'][i]
    }));
    this.scanY = 0;
  }
  draw() {
    const { ctx, w, h, t } = this;
    const lx = w * 0.12;

    // Vertical spine
    ctx.beginPath();
    ctx.moveTo(lx, 0);
    ctx.lineTo(lx, h);
    ctx.strokeStyle = rgba(P.r1, 0.55);
    ctx.lineWidth = 1;
    ctx.stroke();

    // Timeline nodes
    this.nodes.forEach(n => {
      const py = n.y * h;
      const pulse = Math.abs(Math.sin(t * 1.2 + n.phase));

      // Outer pulse ring
      ctx.beginPath();
      ctx.arc(lx, py, 6 + pulse * 5, 0, Math.PI * 2);
      ctx.strokeStyle = rgba(P.r3, 0.04 + pulse * 0.05);
      ctx.lineWidth = 1;
      ctx.stroke();

      // Node dot
      ctx.beginPath();
      ctx.arc(lx, py, 3, 0, Math.PI * 2);
      ctx.fillStyle = rgba(P.r2, 0.18 + pulse * 0.12);
      ctx.fill();

      // Horizontal connector + label
      ctx.beginPath();
      ctx.moveTo(lx + 4, py);
      ctx.lineTo(lx + 22, py);
      ctx.strokeStyle = rgba(P.r2, 0.1);
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.font = '500 8px "DM Mono", monospace';
      ctx.fillStyle = rgba(P.r3, 0.06 + pulse * 0.04);
      ctx.fillText(n.label, lx + 25, py + 3);
    });

    // Descending scan line
    this.scanY = (this.scanY + 0.003) % 1.1;
    ctx.beginPath();
    ctx.moveTo(0, this.scanY * h);
    ctx.lineTo(w, this.scanY * h);
    const scanGrad = ctx.createLinearGradient(0, 0, w, 0);
    scanGrad.addColorStop(0, rgba(P.r3, 0));
    scanGrad.addColorStop(0.5, rgba(P.r3, 0.06));
    scanGrad.addColorStop(1, rgba(P.r3, 0));
    ctx.strokeStyle = scanGrad;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

/* ══════════════════════════════════════════════════════
   ⑤ AWARDS — Orbiting stars + trophy shimmer
══════════════════════════════════════════════════════ */
class AwardsScene extends AmbScene {
  init() {
    this.stars = Array.from({length: 14}, (_, i) => ({
      angle: (i / 14) * Math.PI * 2,
      orbit: 0.22 + (i % 3) * 0.12,
      speed: 0.004 + (i % 4) * 0.001,
      size:  1 + (i % 3)
    }));
    this.trophy = { scale: 1, phase: 0 };
  }
  draw() {
    const { ctx, w, h, t } = this;
    const cx = w * 0.5, cy = h * 0.42;

    // Trophy glow at centre
    const tg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w,h) * 0.35);
    tg.addColorStop(0, rgba(P.r3, 0.07 + Math.sin(t * 0.8) * 0.03));
    tg.addColorStop(1, rgba(P.r3, 0));
    ctx.fillStyle = tg;
    ctx.fillRect(0, 0, w, h);

    // Orbiting stars
    this.stars.forEach(s => {
      s.angle += s.speed;
      const r = Math.min(w,h) * s.orbit;
      const sx = cx + Math.cos(s.angle) * r;
      const sy = cy + Math.sin(s.angle) * r * 0.55;
      const a = (0.5 + 0.5 * Math.sin(s.angle * 2)) * 0.14;
      ctx.beginPath();
      ctx.arc(sx, sy, s.size, 0, Math.PI * 2);
      ctx.fillStyle = rgba(P.r3, a);
      ctx.fill();
    });

    // Floating award text
    const texts = ['★', '🥇', '1st', 'SIH', 'NSD'];
    ctx.font = '700 9px "DM Mono", monospace';
    texts.forEach((txt, i) => {
      const a = t * 0.3 + i * 1.26;
      const r = Math.min(w,h) * 0.38;
      const tx = cx + Math.cos(a) * r;
      const ty = cy + Math.sin(a) * r * 0.5;
      ctx.fillStyle = rgba(P.r3, 0.05);
      ctx.fillText(txt, tx, ty);
    });
  }
}

/* ══════════════════════════════════════════════════════
   ⑥ SKILLS — Animated progress arcs + skill labels
══════════════════════════════════════════════════════ */
class SkillsScene extends AmbScene {
  init() {
    this.arcs = [
      { pct: 0.90, r: 0.36, label: 'DFIR'  },
      { pct: 0.88, r: 0.28, label: 'Pentest'},
      { pct: 0.85, r: 0.20, label: 'Python' },
    ];
    this.progress = 0;
  }
  draw() {
    const { ctx, w, h, t } = this;
    const cx = w * 0.82, cy = h * 0.38;

    // Concentric arc rings
    this.arcs.forEach((arc, i) => {
      const r = Math.min(w,h) * arc.r;
      const fill = arc.pct * Math.PI * 2 * Math.min(1, t * 0.4);

      // Track
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = rgba(P.r1, 0.5);
      ctx.lineWidth = 2;
      ctx.stroke();

      // Fill
      ctx.beginPath();
      ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + fill);
      ctx.strokeStyle = rgba(P.r3, 0.12 + i * 0.03);
      ctx.lineWidth = 2;
      ctx.stroke();

      // Label
      const labelAngle = -Math.PI / 2 + fill;
      const lx = cx + Math.cos(labelAngle) * (r + 4);
      const ly = cy + Math.sin(labelAngle) * (r + 4);
      ctx.beginPath();
      ctx.arc(lx, ly, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = rgba(P.r3, 0.2);
      ctx.fill();
    });

    // Floating percentage texts
    ctx.font = '600 9px "DM Mono", monospace';
    ['90%','88%','85%','82%','86%'].forEach((pct, i) => {
      const x = (0.05 + i * 0.18) * w;
      const y = h * 0.85 + Math.sin(t * 0.8 + i) * h * 0.03;
      ctx.fillStyle = rgba(P.r2, 0.07);
      ctx.fillText(pct, x, y);
    });
  }
}

/* ══════════════════════════════════════════════════════
   ⑦ TOOLS — Matrix rain of tool names
══════════════════════════════════════════════════════ */
class ToolsScene extends AmbScene {
  init() {
    const words = ['NMAP','BURP','KALI','WAZUH','SPLUNK','ZAP','AUTOPSY','VOLATILITY','METASPLOIT','PYTHON','NESSUS','FTK'];
    this.cols = Array.from({length: 10}, (_, i) => ({
      x: (i + 0.5) / 10,
      y: Math.random(),
      speed: 0.0005 + Math.random() * 0.0008,
      word: words[i % words.length],
      alpha: 0.04 + Math.random() * 0.05
    }));
  }
  draw() {
    const { ctx, w, h, t } = this;

    // Falling tool name columns
    ctx.font = '500 8px "DM Mono", monospace';
    this.cols.forEach(c => {
      c.y += c.speed;
      if (c.y > 1.1) { c.y = -0.1; }
      const a = c.alpha * (0.5 + 0.5 * Math.sin(t * 1.2 + c.x * 10));
      ctx.fillStyle = rgba(P.r2, a);
      ctx.fillText(c.word, c.x * w - ctx.measureText(c.word).width / 2, c.y * h);
      // Faded echo above
      ctx.fillStyle = rgba(P.r3, a * 0.3);
      ctx.fillText(c.word, c.x * w - ctx.measureText(c.word).width / 2, c.y * h - 14);
    });

    // Subtle horizontal grid lines
    for (let i = 1; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * h / 5);
      ctx.lineTo(w, i * h / 5);
      ctx.strokeStyle = rgba(P.r1, 0.3);
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }
  }
}

/* ══════════════════════════════════════════════════════
   ⑧ PROJECTS — Circuit board traces + build progress
══════════════════════════════════════════════════════ */
class ProjScene extends AmbScene {
  init() {
    this.traces = Array.from({length: 6}, (_, i) => ({
      path: this.makePath(i),
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.003
    }));
    this.labels = ['BUILD','COMPILE','RUN','TEST','DEPLOY'];
    this.labelY = 0;
  }
  makePath(i) {
    const pts = [];
    let x = Math.random(), y = i / 6 + 0.05;
    for (let j = 0; j < 5; j++) {
      pts.push({x, y});
      x = Math.min(0.95, Math.max(0.05, x + (Math.random() - 0.5) * 0.3));
      y = Math.min(0.95, y + 0.1 + Math.random() * 0.05);
    }
    return pts;
  }
  draw() {
    const { ctx, w, h, t } = this;

    // Animated circuit traces
    this.traces.forEach(trace => {
      trace.progress += trace.speed;
      if (trace.progress > 1) trace.progress = 0;
      const pts = trace.path;

      // Draw full path dimly
      ctx.beginPath();
      ctx.moveTo(pts[0].x * w, pts[0].y * h);
      pts.forEach(p => ctx.lineTo(p.x * w, p.y * h));
      ctx.strokeStyle = rgba(P.r1, 0.55);
      ctx.lineWidth = 1;
      ctx.stroke();

      // Animated dot travelling the path
      const idx = Math.floor(trace.progress * (pts.length - 1));
      const frac = (trace.progress * (pts.length - 1)) % 1;
      const a = pts[idx], b = pts[Math.min(idx + 1, pts.length - 1)];
      const dx = a.x + (b.x - a.x) * frac;
      const dy = a.y + (b.y - a.y) * frac;
      ctx.beginPath();
      ctx.arc(dx * w, dy * h, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = rgba(P.r3, 0.25);
      ctx.fill();
      // Glow trail
      ctx.beginPath();
      ctx.arc(dx * w, dy * h, 5, 0, Math.PI * 2);
      ctx.fillStyle = rgba(P.r3, 0.06);
      ctx.fill();
    });

    // Scrolling status text bottom
    this.labelY += 0.008;
    ctx.font = '600 8px "DM Mono", monospace';
    this.labels.forEach((lbl, i) => {
      const y = ((this.labelY + i * 0.22) % 1.1) * h;
      ctx.fillStyle = rgba(P.r3, 0.05);
      ctx.fillText('> ' + lbl + '...', 8, y);
    });
  }
}

/* ══════════════════════════════════════════════════════
   ⑨ CERTS — Rotating badge rings + cert name floats
══════════════════════════════════════════════════════ */
class CertScene extends AmbScene {
  init() {
    this.rings = [
      { r: 0.38, speed: 0.004, dash: [4, 8]  },
      { r: 0.28, speed: -0.006, dash: [2, 6]  },
      { r: 0.18, speed: 0.008, dash: [1, 4]  },
    ];
    this.labels = ['CEH','ISC²','ISO','CCIO','CSI'];
  }
  draw() {
    const { ctx, w, h, t } = this;
    const cx = w * 0.5, cy = h * 0.42;

    // Rotating dashed rings
    this.rings.forEach((ring, i) => {
      const angle = t * ring.speed * 80;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.setLineDash(ring.dash);
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(w,h) * ring.r, 0, Math.PI * 2);
      ctx.strokeStyle = rgba(P.r2, 0.1 + i * 0.02);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    });

    // Star at top of outer ring
    const sx = cx + Math.cos(-Math.PI/2 + t * 0.3) * Math.min(w,h) * 0.38;
    const sy = cy + Math.sin(-Math.PI/2 + t * 0.3) * Math.min(w,h) * 0.38;
    ctx.beginPath();
    ctx.arc(sx, sy, 3, 0, Math.PI * 2);
    ctx.fillStyle = rgba(P.r3, 0.22);
    ctx.fill();

    // Centre seal pulse
    const pulse = 0.5 + 0.5 * Math.sin(t * 1.5);
    const sg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w,h) * 0.14);
    sg.addColorStop(0, rgba(P.r3, 0.08 * pulse));
    sg.addColorStop(1, rgba(P.r3, 0));
    ctx.fillStyle = sg;
    ctx.beginPath();
    ctx.arc(cx, cy, Math.min(w,h) * 0.14, 0, Math.PI * 2);
    ctx.fill();

    // Floating cert names
    ctx.font = '600 8px "DM Mono", monospace';
    this.labels.forEach((lbl, i) => {
      const a = t * 0.25 + i * (Math.PI * 2 / this.labels.length);
      const r = Math.min(w,h) * 0.45;
      const lx = cx + Math.cos(a) * r;
      const ly = cy + Math.sin(a) * r * 0.6;
      ctx.fillStyle = rgba(P.r3, 0.06);
      ctx.fillText(lbl, lx - ctx.measureText(lbl).width/2, ly);
    });
  }
}

/* ══════════════════════════════════════════════════════
   ⑩ CONTACT — Signal waves + email/link floats
══════════════════════════════════════════════════════ */
class ContactScene extends AmbScene {
  init() {
    this.waves = Array.from({length: 4}, (_, i) => ({ phase: i * 0.8 }));
    this.texts = ['📧', '📱', '🔗', 'jeevalikestech', 'linkedin'];
    this.particles = Array.from({length: 8}, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random()-.5)*0.001,
      vy: (Math.random()-.5)*0.001
    }));
  }
  draw() {
    const { ctx, w, h, t } = this;
    const cx = w * 0.5, cy = h * 0.5;

    // Signal ripple waves
    this.waves.forEach((wave, i) => {
      const phase = t * 0.9 + wave.phase;
      const r = ((phase % 2) / 2) * Math.min(w,h) * 0.55;
      const a = (1 - r / (Math.min(w,h) * 0.55)) * 0.08;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = rgba(P.r3, a);
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Connection particles with lines
    this.particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > 1) p.vx *= -1;
      if (p.y < 0 || p.y > 1) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x*w, p.y*h, 1.5, 0, Math.PI*2);
      ctx.fillStyle = rgba(P.r2, 0.12);
      ctx.fill();
    });
    // Lines between close particles
    this.particles.forEach((a, i) => {
      this.particles.slice(i+1).forEach(b => {
        const dx = (a.x-b.x)*w, dy = (a.y-b.y)*h;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if (dist < 60) {
          ctx.beginPath();
          ctx.moveTo(a.x*w, a.y*h);
          ctx.lineTo(b.x*w, b.y*h);
          ctx.strokeStyle = rgba(P.r2, 0.06*(1-dist/60));
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });
    });

    // Floating contact labels
    ctx.font = '500 8px "DM Mono", monospace';
    this.texts.forEach((txt, i) => {
      const x = (0.06 + i * 0.2) * w;
      const y = h * 0.88 + Math.sin(t * 0.7 + i * 0.9) * h * 0.04;
      ctx.fillStyle = rgba(P.r3, 0.06);
      ctx.fillText(txt, x, y);
    });
  }
}

/* ══════════════════════════════════════════════════════
   ⑪ SOFT SKILLS (c-edu2) — Flowing soft blobs + words
══════════════════════════════════════════════════════ */
class SoftScene extends AmbScene {
  init() {
    this.blobs = Array.from({length: 3}, (_, i) => ({
      x: 0.2 + i*0.3, y: 0.5,
      phase: i * 2.1, r: 0.28
    }));
    this.words = ['COMM.','TIME','PRESENT.','TENACITY'];
  }
  draw() {
    const { ctx, w, h, t } = this;

    this.blobs.forEach(b => {
      const bx = b.x * w + Math.sin(t*0.5 + b.phase)*w*0.08;
      const by = b.y * h + Math.cos(t*0.4 + b.phase)*h*0.12;
      const r = b.r * Math.min(w,h);
      const g = ctx.createRadialGradient(bx, by, 0, bx, by, r);
      g.addColorStop(0, rgba(P.r2, 0.1));
      g.addColorStop(1, rgba(P.r2, 0));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    });

    // Floating soft skill words
    ctx.font = '600 9px "DM Mono", monospace';
    this.words.forEach((word, i) => {
      const x = (0.05 + i * 0.24) * w;
      const y = h * 0.5 + Math.sin(t*0.5 + i*1.6) * h * 0.2;
      ctx.fillStyle = rgba(P.r3, 0.06);
      ctx.fillText(word, x, y);
    });
  }
}

/* ══════════════════════════════════════════════════════
   ⑫ FOOTER/STATS — Counting number particles
══════════════════════════════════════════════════════ */
class StatsScene extends AmbScene {
  init() {
    this.numbers = Array.from({length: 20}, () => ({
      x: Math.random(), y: Math.random(),
      val: Math.floor(Math.random()*9),
      speed: 0.0004 + Math.random()*0.0003,
      alpha: 0.04 + Math.random()*0.06
    }));
    this.countFrames = [5,5,6,6,7,7,5,7,5,7,5];
    this.cf = 0; this.cft = 0;
  }
  draw() {
    const { ctx, w, h, t } = this;

    // Drifting number particles
    ctx.font = '700 11px "DM Mono", monospace';
    this.numbers.forEach(n => {
      n.y -= n.speed;
      if (n.y < -0.05) { n.y = 1.05; n.val = Math.floor(Math.random()*9); }
      ctx.fillStyle = rgba(P.r3, n.alpha);
      ctx.fillText(n.val, n.x * w, n.y * h);
    });

    // Glowing divider lines
    ctx.beginPath();
    ctx.moveTo(w/3, h*0.15);
    ctx.lineTo(w/3, h*0.85);
    ctx.strokeStyle = rgba(P.r2, 0.08 + Math.sin(t)*0.04);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w*2/3, h*0.15);
    ctx.lineTo(w*2/3, h*0.85);
    ctx.stroke();

    // Top banner text
    ctx.font = '500 8px "DM Mono", monospace';
    ctx.fillStyle = rgba(P.r3, 0.06);
    ctx.fillText('[ SECURITY PORTFOLIO STATS ]', w/2 - 62, h*0.1);
  }
}

/* ── Boot all scenes ─────────────────────────────────── */
function boot() {
  new HeroScene('hero');
  new StatusScene('status');
  new EduScene('edu');
  new ExpScene('exp');
  new AwardsScene('awards');
  new SkillsScene('skills');
  new ToolsScene('tools');
  new ProjScene('proj');
  new CertScene('cert');
  new ContactScene('contact');
  new SoftScene('edu2');
  new StatsScene('footer');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

})();