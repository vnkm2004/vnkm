/**
 * ============================================================================
 * GEMINI FLOW ENGINE (CLEAN & PURE MONOCHROME)
 * Pure harmonic wave lines, zero dark fills, zero black holes.
 * Adapts to Light (Pure White: #FFFFFF) & Dark (Pure Black: #000000).
 * Continuous quadratic midpoint splines with smooth Gaussian hover.
 * Strictly zero emojis.
 * ============================================================================
 */

class GeminiFlowEngine {
  constructor() {
    this.canvas = document.getElementById('gemini-flow-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d', { alpha: true });
    this.wrapper = document.getElementById('gemini-flow-wrapper');

    // Performance & State
    this.mode = 'aurora'; // 'aurora' | 'particles' | 'ribbons' | 'quantum'
    this.speed = 1.0;
    this.time = 0;
    this.lastFrameTime = performance.now();

    // Theme Awareness
    this.isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    // Smooth Cursor Inertia
    this.mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      smoothX: window.innerWidth / 2,
      smoothY: window.innerHeight / 2,
      active: false
    };

    // Particles System for STREAM mode
    this.particles = [];
    this.particleCount = 200;

    this.init();
  }

  init() {
    this.resize();
    this.initParticles();
    this.bindEvents();
    this.listenThemeChanges();
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(this.dpr, this.dpr);
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: 0,
        vy: 0,
        size: Math.random() * 1.8 + 0.8,
        baseAlpha: Math.random() * 0.4 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speedFactor: Math.random() * 0.5 + 0.75
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.initParticles();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = e.clientX;
      this.mouse.targetY = e.clientY;
      this.mouse.active = true;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.active = false;
    });

    window.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        this.mouse.targetX = e.touches[0].clientX;
        this.mouse.targetY = e.touches[0].clientY;
        this.mouse.active = true;
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        this.mouse.targetX = e.touches[0].clientX;
        this.mouse.targetY = e.touches[0].clientY;
        this.mouse.active = true;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      this.mouse.active = false;
    }, { passive: true });

    // Flow Mode Selector Buttons in Dock
    const modeBtns = document.querySelectorAll('[data-flow-mode]');
    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.setMode(btn.getAttribute('data-flow-mode'));
      });
    });
  }

  listenThemeChanges() {
    const observer = new MutationObserver(() => {
      this.isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }

  setMode(mode) {
    this.mode = mode;
  }

  // =========================================================================
  // RENDERING PIPELINES (PURE STROKES ONLY - ZERO FILLS - ZERO BLACK HOLES)
  // =========================================================================

  /**
   * Mode 1: AURORA (Harmonic Wave Ribbons)
   * Pure, clean, elegant stroke lines. Zero dark fills. Zero black hole vignette.
   * Continuous quadratic midpoint splines for silky curves.
   */
  drawAuroraWaves() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const t = this.time * 0.45;

    // Strict Monochrome: Pure White in Dark Mode, Pure Dark Charcoal in Light Mode
    const strokeBase = this.isDark ? 255 : 15;
    const numBands = 6;
    const step = 10;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const sigma = 150;
    const sigmaSq2 = 2 * sigma * sigma;

    for (let band = 0; band < numBands; band++) {
      const bandProgress = band / (numBands - 1);
      const points = [];
      const baseY = h * 0.46 + (band - (numBands - 1) / 2) * 52;

      for (let x = -20; x <= w + 30; x += step) {
        // Multi-frequency harmonic wave formulation
        const f1 = Math.sin(x * 0.0014 + t * 0.8 + band * 0.46) * 58;
        const f2 = Math.cos(x * 0.0028 - t * 0.5 + band * 0.3) * 32;
        const f3 = Math.sin(x * 0.0007 + t * 0.25) * 44;

        let y = baseY + f1 + f2 + f3;

        // Smooth Gaussian fluid dip on cursor hover (ZERO sawteeth, ZERO kinks)
        if (this.mouse.active) {
          const dx = x - this.mouse.smoothX;
          const dy = y - this.mouse.smoothY;
          const distSq = dx * dx + dy * dy;

          if (distSq < 300 * 300) {
            const gaussian = Math.exp(-distSq / sigmaSq2);
            y -= gaussian * 42; // Smooth liquid dip
          }
        }

        points.push({ x, y });
      }

      if (points.length < 3) continue;

      // PURE STROKE LINE - NO FILL UNDERNEATH
      const strokeAlpha = this.isDark
        ? (0.32 + Math.sin(t * 0.5 + band) * 0.08 + bandProgress * 0.22)
        : (0.24 + Math.sin(t * 0.5 + band) * 0.06 + bandProgress * 0.18);

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      // Continuous Quadratic Midpoint Spline
      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) * 0.5;
        const yc = (points[i].y + points[i + 1].y) * 0.5;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      ctx.quadraticCurveTo(
        points[points.length - 1].x, points[points.length - 1].y,
        points[points.length - 1].x, points[points.length - 1].y
      );

      ctx.strokeStyle = `rgba(${strokeBase}, ${strokeBase}, ${strokeBase}, ${strokeAlpha})`;
      ctx.lineWidth = 1.3 + bandProgress * 1.2;
      ctx.stroke();
    }

    ctx.restore();
  }

  /**
   * Mode 2: STREAM (Fluid Silk Particles with Flow Field)
   */
  drawParticleStream() {
    const ctx = this.ctx;
    const t = this.time * 0.35;
    const colorVal = this.isDark ? 255 : 20;

    ctx.save();

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      const angle = (Math.sin(p.x * 0.0016 + t * 0.4) + Math.cos(p.y * 0.0016 + t * 0.3)) * Math.PI;
      p.vx += (Math.cos(angle) * 1.2 - p.vx) * 0.05;
      p.vy += (Math.sin(angle) * 1.2 - p.vy) * 0.05;

      if (this.mouse.active) {
        const dx = p.x - this.mouse.smoothX;
        const dy = p.y - this.mouse.smoothY;
        const distSq = dx * dx + dy * dy;
        const radius = 200;
        if (distSq < radius * radius && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const push = (1 - dist / radius) * 1.4;
          p.vx += (dx / dist) * push;
          p.vy += (dy / dist) * push;
        }
      }

      p.x += p.vx * this.speed * p.speedFactor;
      p.y += p.vy * this.speed * p.speedFactor;

      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;
      if (p.y < -10) p.y = this.height + 10;
      if (p.y > this.height + 10) p.y = -10;

      const dynamicAlpha = p.baseAlpha * (0.6 + Math.sin(t * 1.1 + p.phase) * 0.4);
      ctx.fillStyle = `rgba(${colorVal}, ${colorVal}, ${colorVal}, ${dynamicAlpha * (this.isDark ? 0.75 : 0.45)})`;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      // Connecting filaments
      if (i % 3 === 0) {
        for (let j = i + 1; j < Math.min(i + 4, this.particles.length); j++) {
          const p2 = this.particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 65) {
            const threadAlpha = (1 - dist / 65) * 0.12 * (this.isDark ? 1 : 0.7);
            ctx.strokeStyle = `rgba(${colorVal}, ${colorVal}, ${colorVal}, ${threadAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    }

    ctx.restore();
  }

  /**
   * Mode 3: RIBBONS (Twisted Harmonic Bands)
   */
  drawRibbons() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const t = this.time * 0.4;
    const colorVal = this.isDark ? 255 : 20;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const layers = 22;
    const step = 14;

    for (let i = 0; i < layers; i++) {
      const alpha = (1 - i / layers) * (this.isDark ? 0.16 : 0.1);
      ctx.strokeStyle = `rgba(${colorVal}, ${colorVal}, ${colorVal}, ${alpha})`;
      ctx.lineWidth = 1.2;

      const points = [];
      const offset = (i - layers / 2) * 8;

      for (let x = -20; x <= w + 25; x += step) {
        let y = h * 0.5 +
          Math.sin(x * 0.0022 + t * 0.65 + i * 0.05) * 85 +
          Math.cos(x * 0.0009 - t * 0.3) * 50 +
          offset;

        if (this.mouse.active) {
          const dx = x - this.mouse.smoothX;
          const dy = y - this.mouse.smoothY;
          const distSq = dx * dx + dy * dy;
          if (distSq < 200 * 200) {
            const gaussian = Math.exp(-distSq / (2 * 100 * 100));
            y -= gaussian * 35;
          }
        }

        points.push({ x, y });
      }

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let j = 1; j < points.length - 1; j++) {
        const xc = (points[j].x + points[j + 1].x) * 0.5;
        const yc = (points[j].y + points[j + 1].y) * 0.5;
        ctx.quadraticCurveTo(points[j].x, points[j].y, xc, yc);
      }
      ctx.stroke();
    }

    ctx.restore();
  }

  /**
   * Mode 4: QUANTUM (Clean Minimal Coordinate Lattice)
   */
  drawQuantumField() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const t = this.time * 0.55;
    const colorVal = this.isDark ? 255 : 20;
    const gridSize = 48;

    ctx.save();
    for (let x = 24; x < w; x += gridSize) {
      for (let y = 24; y < h; y += gridSize) {
        const distToCenter = Math.hypot(x - w / 2, y - h / 2);
        const wave = Math.sin(distToCenter * 0.012 - t * 1.4);

        let pointX = x;
        let pointY = y;

        if (this.mouse.active) {
          const dMouse = Math.hypot(x - this.mouse.smoothX, y - this.mouse.smoothY);
          if (dMouse < 180) {
            const pull = (1 - dMouse / 180) * 12;
            pointX += ((x - this.mouse.smoothX) / dMouse) * pull;
            pointY += ((y - this.mouse.smoothY) / dMouse) * pull;
          }
        }

        const size = Math.max(0.7, (wave + 1) * 1.3);
        const alpha = Math.max(0.04, (wave + 1) * (this.isDark ? 0.22 : 0.12));

        ctx.fillStyle = `rgba(${colorVal}, ${colorVal}, ${colorVal}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(pointX, pointY, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const now = performance.now();
    const dt = Math.min((now - this.lastFrameTime) / 1000, 0.05);
    this.lastFrameTime = now;

    this.time += dt * this.speed;

    // Fluid Smooth Cursor Interpolation
    this.mouse.smoothX += (this.mouse.targetX - this.mouse.smoothX) * 0.08;
    this.mouse.smoothY += (this.mouse.targetY - this.mouse.smoothY) * 0.08;

    // Clear canvas completely each frame
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Render active mode (Pure clean strokes only)
    if (this.mode === 'aurora') {
      this.drawAuroraWaves();
    } else if (this.mode === 'particles') {
      this.drawParticleStream();
    } else if (this.mode === 'ribbons') {
      this.drawRibbons();
    } else if (this.mode === 'quantum') {
      this.drawQuantumField();
    }
  }
}

// Auto-boot or export initialization hook
function bootGeminiFlow() {
  if (!window.geminiFlowInstance && document.getElementById('gemini-flow-canvas')) {
    window.geminiFlowInstance = new GeminiFlowEngine();
  }
}

window.initGeminiFlow = bootGeminiFlow;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootGeminiFlow);
} else {
  bootGeminiFlow();
}
