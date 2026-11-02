/**
 * ============================================================================
 * VNKM ROBOTIC CLI TERMINAL
 * Interactive command-line interface for tech inspection and system navigation.
 * Zero emojis - Pure robotic typography and ASCII formatting.
 * ============================================================================
 */

class CyberTerminal {
  constructor() {
    this.modal = document.getElementById('terminal-modal-backdrop');
    this.output = document.getElementById('terminal-output');
    this.input = document.getElementById('terminal-input');
    this.history = [];
    this.historyIndex = -1;

    this.commands = {
      // Help / Emergency dispatch
      help: () => this.showHelp(),
      '911': () => this.showHelp(),
      '0': () => this.showHelp(),
      '?': () => this.showHelp(),
      '112': () => this.showHelp(),

      // Bio / Identity
      bio: () => this.showBio(),
      about: () => this.showBio(),
      whoami: () => this.showBio(),
      '1': () => this.showBio(),
      '01': () => this.showBio(),
      '101': () => this.showBio(),

      // Technical Skills Matrix
      skills: () => this.showSkills(),
      skill: () => this.showSkills(),
      matrix: () => this.showSkills(),
      stack: () => this.showSkills(),
      '2': () => this.showSkills(),
      '02': () => this.showSkills(),
      '202': () => this.showSkills(),

      // Projects & Blueprints
      projects: (args) => this.showProjects(args),
      project: (args) => this.showProjects(args),
      work: (args) => this.showProjects(args),
      built: (args) => this.showProjects(args),
      '3': (args) => this.showProjects(args),
      '03': (args) => this.showProjects(args),
      '303': (args) => this.showProjects(args),
      '31': () => this.showProjectBlueprint('1'),
      '32': () => this.showProjectBlueprint('2'),
      '33': () => this.showProjectBlueprint('3'),
      '34': () => this.showProjectBlueprint('4'),
      '35': () => this.showProjectBlueprint('5'),
      '36': () => this.showProjectBlueprint('6'),

      // Contact / Direct Transmission
      contact: () => this.showContact(),
      email: () => this.showContact(),
      transmit: () => this.showContact(),
      ping: () => this.showContact(),
      '4': () => this.showContact(),
      '04': () => this.showContact(),
      '411': () => this.showContact(),
      '100': () => this.showContact(),

      // Theme toggle (light/dark)
      theme: (args) => this.handleTheme(args),
      '5': (args) => this.handleTheme(args),
      '05': (args) => this.handleTheme(args),

      // Flow mode cycle / select
      flow: (args) => this.handleFlow(args),
      '6': (args) => this.handleFlow(args),
      '06': (args) => this.handleFlow(args),

      // Video Graft
      graft: () => this.handleGraft(),
      '7': () => this.handleGraft(),
      '07': () => this.handleGraft(),

      // Clear Screen
      clear: () => this.clear(),
      cls: () => this.clear(),
      '8': () => this.clear(),
      '00': () => this.clear(),

      // Terminate / Exit
      exit: () => this.close(),
      quit: () => this.close(),
      q: () => this.close(),
      '99': () => this.close()
    };

    this.init();
  }

  init() {
    // Open / Close triggers
    const openBtns = document.querySelectorAll('[data-action="open-terminal"]');
    openBtns.forEach(btn => btn.addEventListener('click', () => this.open()));

    const closeBtn = document.getElementById('terminal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
    }

    if (this.input) {
      this.input.addEventListener('keydown', (e) => this.handleKeyDown(e));
    }

    // Key shortcut: `~` or Ctrl+`
    window.addEventListener('keydown', (e) => {
      if (e.key === '`' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        this.toggle();
      }
    });

    this.printLine('VNKM ROBOTIC OPERATING SYSTEM v2.4.0');
    this.printLine('KERNEL: ONLINE // ARCHITECTURE: MONOCHROME // FLOW ENGINE: CONNECTED');
    this.printLine('TYPE "help" OR DIAL "911" FOR SYSTEM COMMAND MANIFEST.\n', 'system');
  }

  toggle() {
    if (this.modal.classList.contains('open')) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (!this.modal) return;
    this.modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => this.input && this.input.focus(), 100);
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      const raw = this.input.value.trim();
      this.input.value = '';
      if (!raw) return;

      this.history.push(raw);
      this.historyIndex = this.history.length;
      this.printLine(`vnkm@root:~$ ${raw}`, 'cmd');

      const parts = raw.split(' ');
      const cmd = parts[0].toLowerCase();
      const args = parts.slice(1);

      if (this.commands[cmd]) {
        this.commands[cmd](args);
      } else {
        this.printLine(`COMMAND NOT RECOGNIZED: "${cmd}". TYPE "help" OR DIAL "911" FOR MANIFEST.`, 'system');
      }

      this.scrollToBottom();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.input.value = this.history[this.historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (this.historyIndex < this.history.length - 1) {
        this.historyIndex++;
        this.input.value = this.history[this.historyIndex];
      } else {
        this.historyIndex = this.history.length;
        this.input.value = '';
      }
    } else if (e.key === 'Escape') {
      this.close();
    }
  }

  printLine(text, type = '') {
    const div = document.createElement('div');
    div.className = `terminal-line ${type}`;
    div.textContent = text;
    this.output.appendChild(div);
  }

  clear() {
    this.output.innerHTML = '';
  }

  scrollToBottom() {
    const body = document.querySelector('.terminal-body');
    if (body) body.scrollTop = body.scrollHeight;
  }

  showHelp() {
    this.printLine('[ EMERGENCY DISPATCH // SYSTEM COMMAND MANIFEST ACTIVATED ]', 'success');
    this.printLine('AVAILABLE SYSTEM COMMANDS & NUMERIC SPEED-DIALS:');
    this.printLine('  help     // 911          Display command manifest [Emergency Assistance]');
    this.printLine('  bio      // 1 (or 101)   Inspect Vishwanath Naik K M operator profile');
    this.printLine('  skills   // 2 (or 202)   Display technical matrix & engineering stack');
    this.printLine('  projects // 3 (or 303)   List deployed architectures (servcate, mrbiller, AI)');
    this.printLine('  contact  // 4 (or 411)   Output direct transmission channels & email');
    this.printLine('  theme    // 5            Toggle or set White/Black theme (or type "5")');
    this.printLine('  flow     // 6 [mode]     Cycle or set flow: aurora, particles, ribbons, quantum');
    this.printLine('  graft    // 7            Execute 5s video graft from live Gemini Flow');
    this.printLine('  clear    // 00 (or 8)    Clear terminal buffer');
    this.printLine('  exit     // 99           Close cyber terminal drawer');
  }

  showBio() {
    this.printLine('OPERATOR: Vishwanath Naik K M (VNKM)');
    this.printLine('ROLE: Full-Stack Software Engineer & AI Systems Architect');
    this.printLine('LOCATION: Bangalore, India');
    this.printLine('COMMERCIAL PLATFORMS: servcate.com, mrbiller.online');
    this.printLine('AI & DEEP LEARNING: Brain Tumor MRI Detection, Digital Image Processing, Smart Agriculture AI');
    this.printLine('PHILOSOPHY: Sub-second execution, scalable architecture, and mathematical precision.');
  }

  showSkills() {
    this.printLine('// TECHNICAL MATRIX & CAPABILITIES //');
    this.printLine('[LANGUAGES]      Python, Java, JavaScript, TypeScript (ESNext), SQL, C++');
    this.printLine('[PYTHON DATA/ML] Pandas, NumPy, Scikit-learn, OpenCV, Matplotlib, SciPy');
    this.printLine('[DEEP LEARNING]  PyTorch, TensorFlow, CNNs, YOLO, Medical Disease AI, Agritech AI');
    this.printLine('[WEB & MOBILE]   React 18/19, Next.js, React Native (Expo), Vite, Tailwind CSS');
    this.printLine('[BACKEND/CLOUD]  Node.js, Express, Supabase, PostgreSQL RLS, Redis, WebSockets');
    this.printLine('[LLMS & APPLIED] Transformers, Embeddings, RAG Architectures, Real-Life Problem Solving');
  }

  showProjects(args = []) {
    if (args.length > 0) {
      this.showProjectBlueprint(args[0]);
      return;
    }
    this.printLine('// FEATURED PRODUCTION ARCHITECTURES //');
    this.printLine('1 // SYS-01: ServCate Catering Platform (servcate.com - Web & Expo Mobile App)');
    this.printLine('2 // SYS-02: MrBiller Billing & Inventory Suite (mrbiller.online - Commercial SaaS)');
    this.printLine('3 // SYS-03: Medical Diagnostic AI & Disease Detection (CNNs, YOLO, MRI/CT/X-Ray)');
    this.printLine('4 // SYS-04: Digital Image Processing & Enhancement Engine (OpenCV & Frequency Filters)');
    this.printLine('5 // SYS-05: Smart Agriculture AI & Vision (Crop Disease ID & Yield Predictors)');
    this.printLine('6 // SYS-06: Enterprise LLM & Autonomous RAG Copilot (Applied Generative AI)');
    this.printLine('DIAL "3 <1-6>" (e.g. "3 1") OR "31"-"36" TO VIEW SPECIFIC BLUEPRINT.', 'system');
  }

  showProjectBlueprint(target) {
    const projects = (window.projectManager && window.projectManager.projects) ? window.projectManager.projects : (window.VNKM_PROJECTS || []);
    let p = null;
    const num = parseInt(target, 10);
    if (!isNaN(num) && num >= 1 && num <= projects.length) {
      p = projects[num - 1];
    } else {
      p = projects.find(item => item.id.toLowerCase() === target.toLowerCase() || item.index.toLowerCase() === target.toLowerCase());
    }

    if (!p) {
      this.printLine(`PROJECT "${target}" NOT FOUND. ENTER "3" TO LIST ALL AVAILABLE ARCHITECTURES.`, 'system');
      return;
    }

    this.printLine(`// SYSTEM BLUEPRINT: ${p.index} // ${p.title} //`, 'cmd');
    this.printLine(`BADGE:        ${p.badge}`);
    this.printLine(`SUMMARY:      ${p.summary}`);
    this.printLine(`TECH STACK:   ${p.tech.join(', ')}`);
    this.printLine(`ARCHITECTURE: ${p.blueprint.architecture}`);
    this.printLine(`LATENCY:      ${p.blueprint.latency}`);
    this.printLine(`THROUGHPUT:   ${p.blueprint.throughput}`);
    this.printLine(`AVAILABILITY: ${p.blueprint.availability}`);
    this.printLine(`SCALE:        ${p.blueprint.scale}`);
    this.printLine('KEY ARCHITECTURAL HIGHLIGHTS:');
    p.blueprint.highlights.forEach(h => {
      this.printLine(`  [+] ${h}`);
    });
    if (p.links.live && p.links.live !== '#') {
      this.printLine(`LIVE LINK:    ${p.links.live}`);
    }
  }

  showContact() {
    this.printLine('// DIRECT TRANSMISSION CHANNELS (DIAL 4 OR 411) //');
    this.printLine('PRIMARY EMAIL:       vnkm2004@gmail.com');
    this.printLine('GITHUB PROFILE:      https://github.com/vnkm2004');
    this.printLine('LOCATION:            Bangalore, India [IST // UTC+5:30]');
    this.printLine('AVAILABILITY:        AVAILABLE FOR FULL-STACK & AI ARCHITECTURE ROLES');
  }

  handleTheme(args = []) {
    let target = args[0] ? args[0].toLowerCase() : '';
    if (!target) {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      target = current === 'dark' ? 'light' : 'dark';
    }
    if (target === 'light' || target === 'dark') {
      if (window.themeManager) {
        window.themeManager.setTheme(target);
      } else {
        document.documentElement.setAttribute('data-theme', target);
      }
      this.printLine(`THEME SWITCHED TO: ${target.toUpperCase()} [${target === 'light' ? 'PURE WHITE' : 'PURE BLACK'}]`, 'success');
    } else {
      this.printLine('USAGE: theme <light|dark> (or dial "5" to toggle)');
    }
  }

  handleFlow(args = []) {
    let mode = args[0] ? args[0].toLowerCase() : '';
    const valid = ['aurora', 'particles', 'ribbons', 'quantum'];
    if (!mode && window.geminiFlowInstance) {
      const idx = valid.indexOf(window.geminiFlowInstance.mode);
      mode = valid[(idx + 1) % valid.length];
    }
    if (valid.includes(mode)) {
      if (window.geminiFlowInstance) {
        window.geminiFlowInstance.setMode(mode);
        document.querySelectorAll('[data-flow-mode]').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-flow-mode') === mode);
        });
        this.printLine(`GEMINI FLOW ENGINE SET TO: ${mode.toUpperCase()}`, 'success');
      }
    } else {
      this.printLine(`USAGE: flow <${valid.join('|')}> (or dial "6" to cycle modes)`);
    }
  }

  handleGraft() {
    if (window.geminiFlowInstance) {
      this.printLine('INITIATING GEMINI FLOW VIDEO GRAFT (5s LOOP)...', 'cmd');
      window.geminiFlowInstance.startVideoGrafting();
      this.printLine('RECORDING IN PROGRESS. STREAM WILL BE HOOKED TO BACKGROUND VIDEO.', 'system');
    }
  }
}

window.cyberTerminal = new CyberTerminal();

