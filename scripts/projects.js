/**
 * ============================================================================
 * VNKM PROJECTS & ARCHITECTURAL BLUEPRINTS
 * Detailed engineering specifications, metrics, and interactive modal renderer.
 * Written from my perspective ("What I have built").
 * Strictly zero emojis - SVG icons and robotic technical formatting.
 * ============================================================================
 */

const VNKM_PROJECTS = [
  {
    id: 'servcate',
    index: 'SYS-01',
    title: 'SERVCATE CATERING ECOSYSTEM',
    badge: 'COMMERCIAL PRODUCTION // SERVCATE.COM',
    summary: 'A full-scale commercial catering platform comprising an end-user ordering web portal, real-time merchant operations command center, and cross-platform mobile application.',
    tech: ['React 18', 'Vite', 'React Native (Expo)', 'Supabase', 'PostgreSQL RLS', 'Leaflet GIS', 'WebSockets'],
    links: {
      github: '#private-repo',
      live: 'https://servcate.com'
    },
    blueprint: {
      architecture: 'Distributed Client-Edge-Database Architecture with Real-Time WebSockets',
      latency: '< 85ms DB Query',
      throughput: '1.2k req/sec',
      availability: '99.95%',
      scale: 'Web & Native iOS/Android (servcate.com)',
      highlights: [
        'Architected the multi-tenant database schema with strict PostgreSQL Row-Level Security (RLS).',
        'Developed a unified state machine synchronizing live orders across the web portal and native Expo mobile app.',
        'Integrated a custom spatial GIS routing engine for caterer catchment verification and delivery dispatch.',
        'Engineered high-contrast, responsive UI systems with complete theme customization.'
      ]
    }
  },
  {
    id: 'mrbiller',
    index: 'SYS-02',
    title: 'MRBILLER BILLING & INVENTORY SUITE',
    badge: 'COMMERCIAL SAAS // MRBILLER.ONLINE',
    summary: 'A comprehensive commercial SaaS billing, point-of-sale, and inventory management platform for retail and enterprise merchants, enabling instant tax-compliant invoicing and stock tracking.',
    tech: ['JavaScript / TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Redis Caching', 'REST APIs'],
    links: {
      github: '#private-repo',
      live: 'https://mrbiller.online'
    },
    blueprint: {
      architecture: 'High-Concurrency Invoicing Microservices with In-Memory Stock Auditing',
      latency: '< 35ms Invoice Generation',
      throughput: '3.5k req/sec',
      availability: '99.98%',
      scale: 'Multi-Branch Inventory (mrbiller.online)',
      highlights: [
        'Architected the real-time stock reconciliation pipeline preventing negative inventory oversells during peak volume.',
        'Engineered automated PDF invoice generation, multi-currency ledger calculations, and GST/VAT tax compliance.',
        'Constructed role-based administrative dashboards with daily profit/loss telemetry and low-stock alerts.',
        'Hardened session management with JWT cryptographic signatures and rate-limiting.'
      ]
    }
  },
  {
    id: 'medical-ai-disease-detection',
    index: 'SYS-03',
    title: 'MEDICAL DIAGNOSTIC AI & MULTI-DISEASE DETECTION SYSTEM',
    badge: 'DEEP LEARNING // CNN, YOLO & MEDICAL AI',
    summary: 'An automated medical diagnostic and disease detection suite developed using deep Convolutional Neural Networks (CNNs) and YOLO models to detect, segment, and localize brain tumors, chest pathologies, and radiographic anomalies from MRI, CT, and X-Ray scans.',
    tech: ['Python', 'PyTorch', 'YOLO (Ultralytics)', 'TensorFlow', 'CNNs (ResNet, U-Net)', 'OpenCV', 'NumPy', 'Scikit-learn', 'CUDA'],
    links: {
      github: '#private-repo',
      live: '#'
    },
    blueprint: {
      architecture: 'Multi-Stage Deep CNN & YOLO Real-Time Anomaly Localization Pipeline',
      latency: '< 45ms YOLO Real-Time Detection / 1.1s 3D MRI Volume',
      throughput: '98.2% Diagnostic Sensitivity (mAP 0.94)',
      availability: 'CUDA GPU Accelerated',
      scale: 'Brain Tumors, Pulmonary Lesions & Nodules',
      highlights: [
        'Implemented YOLO real-time object detection models to pinpoint and bound pathological lesions, lung nodules, and tissue anomalies with millisecond latency.',
        'Trained deep CNN architectures (ResNet, EfficientNet, U-Net) for multi-sequence brain tumor segmentation and DICOM MRI density classification.',
        'Engineered custom DICOM imaging pipelines using OpenCV and CLAHE adaptive contrast preprocessing to reveal micro-calcifications.',
        'Conducted rigorous statistical validation using Scikit-learn ROC-AUC curves, confusion matrices, and IoU (Intersection over Union) benchmarking.'
      ]
    }
  },
  {
    id: 'image-processing',
    index: 'SYS-04',
    title: 'DIGITAL IMAGE PROCESSING & ENHANCEMENT',
    badge: 'COMPUTER VISION & ALGORITHMS',
    summary: 'An advanced digital image processing and restoration system implementing spatial filtering, frequency domain Fourier transforms, edge-preserving denoising, and super-resolution reconstruction.',
    tech: ['Python', 'OpenCV', 'NumPy', 'SciPy', 'Scikit-image', 'Java (ImageJ Plugins)', 'C++ Vision'],
    links: {
      github: '#private-repo',
      live: '#'
    },
    blueprint: {
      architecture: 'Multi-Stage Spatial & Frequency Domain Image Transformation Pipeline',
      latency: '24ms per Full-HD Frame',
      throughput: '40+ FPS Real-Time Stream',
      availability: 'Native C++/Python Bindings',
      scale: 'Sub-Pixel Super-Resolution',
      highlights: [
        'Developed multi-scale Retinex and bilateral filtering algorithms for low-light enhancement and haze removal.',
        'Engineered 2D Fast Fourier Transform (FFT) high-pass and band-reject filters for periodic noise removal.',
        'Created Java ImageJ custom plugins and Python OpenCV modules for automated morphology analysis.',
        'Benchmarked PSNR (Peak Signal-to-Noise Ratio) and SSIM metrics yielding significant visual fidelity gains.'
      ]
    }
  },
  {
    id: 'smart-agri-ai',
    index: 'SYS-05',
    title: 'SMART AGRICULTURE AI & PRECISION VISION',
    badge: 'AGRITECH ML & SENSORS',
    summary: 'An applied machine learning system designed to solve agricultural problems, featuring computer vision leaf disease diagnosis, soil moisture forecasting, and harvest yield prediction.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'TensorFlow Lite', 'XGBoost', 'IoT Telemetry'],
    links: {
      github: '#private-repo',
      live: '#'
    },
    blueprint: {
      architecture: 'Edge Vision Inference Pipeline with Ensemble Regressors for Agronomic Metrics',
      latency: '< 180ms Inference on Edge',
      throughput: '94.8% Disease ID Accuracy',
      availability: 'Offline Field Capable',
      scale: '14+ Crop Species Validated',
      highlights: [
        'Trained convolutional vision models to identify and classify 28 distinct foliar diseases with 94.8% accuracy.',
        'Built ensemble regression models using Pandas and Scikit-learn (RandomForest, XGBoost) for crop yield estimation.',
        'Quantized neural network weights to TensorFlow Lite for real-time mobile deployment in remote field locations.',
        'Integrated environmental sensor telemetry (humidity, soil NPK, ambient temperature) for precision irrigation advice.'
      ]
    }
  },
  {
    id: 'enterprise-llm-rag',
    index: 'SYS-06',
    title: 'ENTERPRISE LLM & AUTONOMOUS RAG COPILOT',
    badge: 'APPLIED LLMS & GENERATIVE AI',
    summary: 'A production-grade Retrieval-Augmented Generation (RAG) agent system utilizing large language models, semantic vector embeddings, and autonomous tool calling to resolve enterprise workflows and complex data inquiries.',
    tech: ['Python', 'LLMs / Transformers', 'LangChain', 'FastAPI', 'Vector Databases', 'Scikit-learn', 'Docker'],
    links: {
      github: '#private-repo',
      live: '#'
    },
    blueprint: {
      architecture: 'Hybrid Dense-Sparse Vector Retrieval Pipeline with Dynamic Reranking & Guardrails',
      latency: '< 380ms Time-to-First-Token',
      throughput: '98.6% Retrieval Relevance',
      availability: 'Production Scaled Container',
      scale: '500k+ Document Chunks',
      highlights: [
        'Constructed a custom hybrid retrieval pipeline combining BM25 keyword matching with dense sentence transformer embeddings.',
        'Engineered cross-encoder rerankers and contextual compression to eliminate hallucinations and pinpoint source citations.',
        'Integrated multi-turn conversational memory buffers and dynamic prompt templates for task execution.',
        'Implemented strict PII data masking, rate-limiting, and defensive error boundaries for enterprise compliance.'
      ]
    }
  }
];

class ProjectManager {
  constructor() {
    this.projects = VNKM_PROJECTS;
    this.modal = document.getElementById('blueprint-modal-backdrop');
    this.init();
  }

  init() {
    this.renderProjectsGrid();
    this.bindModalEvents();
    this.bindPrivateRepoAlert();
  }

  renderProjectsGrid() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    if (grid.children.length > 0) return; // Keep pre-rendered HTML cards

    grid.innerHTML = this.projects.map(p => `
      <article class="project-card" data-project-id="${p.id}">
        <div>
          <div class="project-card-header">
            <span class="project-index">// ${p.index}</span>
            <span class="project-badge">${p.badge}</span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-summary">${p.summary}</p>
          <div class="project-tech-stack">
            ${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
          </div>
        </div>

        <div class="project-card-footer">
          <button class="blueprint-btn" data-action="view-blueprint" data-id="${p.id}">
            <span>VIEW BLUEPRINT</span>
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          
          <div class="project-ext-links">
            ${p.links.live && p.links.live !== '#' ? `
              <a href="${p.links.live}" target="_blank" rel="noopener noreferrer" class="project-icon-link" aria-label="Live Production Platform" title="Visit Live Platform">
                <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            ` : ''}
            <button class="project-icon-link private-repo-btn" data-action="private-repo" aria-label="Source Repository" title="GitHub Source Code">
              <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  bindModalEvents() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action="view-blueprint"]');
      if (btn) {
        const id = btn.getAttribute('data-id');
        this.openBlueprint(id);
      }

      if (e.target.closest('#blueprint-modal-close') || e.target === this.modal) {
        this.closeBlueprint();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && this.modal.classList.contains('open')) {
        this.closeBlueprint();
      }
    });
  }

  openBlueprint(projectId) {
    const project = this.projects.find(p => p.id === projectId);
    if (!project || !this.modal) return;

    const modalTitle = document.getElementById('blueprint-modal-title');
    const modalBody = document.getElementById('blueprint-modal-content');

    if (modalTitle) modalTitle.textContent = `${project.index} // ${project.title}`;

    if (modalBody) {
      modalBody.innerHTML = `
        <div class="blueprint-specs-grid">
          <div class="blueprint-spec-item">
            <span class="blueprint-spec-label">ARCHITECTURE</span>
            <span class="blueprint-spec-val">${project.blueprint.architecture}</span>
          </div>
          <div class="blueprint-spec-item">
            <span class="blueprint-spec-label">LATENCY / INFERENCE</span>
            <span class="blueprint-spec-val">${project.blueprint.latency}</span>
          </div>
          <div class="blueprint-spec-item">
            <span class="blueprint-spec-label">THROUGHPUT / ACCURACY</span>
            <span class="blueprint-spec-val">${project.blueprint.throughput}</span>
          </div>
          <div class="blueprint-spec-item">
            <span class="blueprint-spec-label">SCALE & REACH</span>
            <span class="blueprint-spec-val">${project.blueprint.scale}</span>
          </div>
        </div>

        <div>
          <h4 style="font-family: var(--font-display); font-size: 1rem; margin-bottom: 12px;">SYSTEM ARCHITECTURE SPECIFICATIONS & HIGHLIGHTS</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-family: var(--font-tech);">
            ${project.blueprint.highlights.map(h => `
              <li style="display: flex; align-items: flex-start; gap: 10px;">
                <span style="font-family: var(--font-mono); color: var(--text-primary); font-weight: 700;">[+]</span>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div style="border-top: 1px solid var(--border-subtle); padding-top: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          ${project.links.live && project.links.live !== '#' ? `
            <a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 10px 22px; font-size: 0.8rem;">
              <span>VISIT LIVE PLATFORM</span>
              <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          ` : '<div></div>'}

          <button class="btn-secondary private-repo-btn" data-action="private-repo" style="padding: 10px 22px; font-size: 0.8rem;">
            <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span>INSPECT CODE (PRIVATE)</span>
          </button>
        </div>
      `;
    }

    this.modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeBlueprint() {
    if (!this.modal) return;
    this.modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  /**
   * Private Repo Alert Toast
   * When any GitHub link or inspect button is tapped, displays the custom private repository notification.
   */
  bindPrivateRepoAlert() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action="private-repo"], a[href*="github.com"]');
      if (btn) {
        e.preventDefault();
        this.showPrivateRepoToast();
      }

      if (e.target.closest('#repo-toast-close')) {
        this.hidePrivateRepoToast();
      }
    });
  }

  showPrivateRepoToast() {
    let toast = document.getElementById('repo-alert-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'repo-alert-toast';
      toast.className = 'repo-alert-toast';
      toast.innerHTML = `
        <div class="repo-alert-inner">
          <div class="repo-alert-icon">
            <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <div class="repo-alert-content">
            <div class="repo-alert-title">// ACCESS RESTRICTED: REPOSITORY IS PRIVATE</div>
            <div class="repo-alert-desc">Sorry, this repository is currently private under commercial license. For code review or an architectural walkthrough, please contact me directly.</div>
          </div>
          <button class="repo-alert-close" id="repo-toast-close" aria-label="Dismiss Alert">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      `;
      document.body.appendChild(toast);
    }

    toast.classList.add('visible');

    // Auto dismiss after 4.5 seconds
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.hidePrivateRepoToast();
    }, 4500);
  }

  hidePrivateRepoToast() {
    const toast = document.getElementById('repo-alert-toast');
    if (toast) toast.classList.remove('visible');
  }
}

window.VNKM_PROJECTS = VNKM_PROJECTS;
window.projectManager = new ProjectManager();
