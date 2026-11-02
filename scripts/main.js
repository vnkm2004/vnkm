/**
 * ============================================================================
 * VNKM MAIN APP CONTROLLER
 * Robotic interactions, magnetic cursor physics, scroll reveal & contact actions.
 * Zero emojis - Pure SVG vectors and robotic technical aesthetics.
 * ============================================================================
 */

function boot() {
  document.documentElement.classList.add('js-ready');

  // Boot Gemini Flow Engine
  if (window.initGeminiFlow) {
    window.initGeminiFlow();
  }

  initCustomCursor();
  initHeaderScroll();
  initMobileMenu();
  initScrollSpy();
  initScrollReveal();
  initCardTilt();
  initCopyEmail();
  initContactForm();
  initClickRipple();
  initStatsCounter();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

/**
 * Custom Robotic Cursor & Follower
 */
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  const follower = document.getElementById('custom-cursor-follower');
  if (!cursor || !follower) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  function updateFollower() {
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;
    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;
    requestAnimationFrame(updateFollower);
  }
  updateFollower();

  // Hover detection
  const interactiveTargets = 'a, button, input, textarea, .project-card, .telemetry-card, .hud-btn';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveTargets)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveTargets)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/**
 * Header Scroll Background State
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * Mobile Navigation Drawer Toggle & Interactions
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  if (!toggleBtn || !drawer) return;

  const iconHamburger = toggleBtn.querySelector('.icon-hamburger');
  const iconClose = toggleBtn.querySelector('.icon-close');
  const mobileLinks = drawer.querySelectorAll('.mobile-nav-link');
  const actionButtons = drawer.querySelectorAll('button, a');

  function openMenu() {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    if (iconHamburger) iconHamburger.style.display = 'none';
    if (iconClose) iconClose.style.display = 'block';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    if (iconHamburger) iconHamburger.style.display = 'block';
    if (iconClose) iconClose.style.display = 'none';
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (drawer.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when tapping any link or action button inside
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  actionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });

  // Close if window resized past mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860 && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * Scroll Spy for Navbar
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  if (!sections.length) return;

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });

    mobileLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/**
 * Scroll Reveal Animations via Intersection Observer
 */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // If it contains skill bars, animate them
        const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
        skillBars.forEach(bar => {
          const level = bar.getAttribute('data-level') || '85%';
          bar.style.width = level;
        });
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

/**
 * 3D Tilt Effect on Project Cards
 */
function initCardTilt() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/**
 * Interactive Click Ripple
 */
function initClickRipple() {
  document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'cyber-ripple';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
}

/**
 * Copy Email Action
 */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const email = 'vnkm2004@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      const textSpan = copyBtn.querySelector('.copy-text');
      const original = textSpan ? textSpan.textContent : 'COPY EMAIL';
      if (textSpan) textSpan.textContent = 'COPIED TO BUFFER';
      copyBtn.classList.add('active');

      setTimeout(() => {
        if (textSpan) textSpan.textContent = original;
        copyBtn.classList.remove('active');
      }, 2000);
    } catch (_) {
      alert(`Email: ${email}`);
    }
  });
}

/**
 * Contact Form Handler & Dock Redirect
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  const hudContactBtn = document.getElementById('hud-contact-btn');

  // Smooth dock redirect to Transmit Packet
  if (hudContactBtn) {
    hudContactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const input = document.getElementById('sender-name');
          if (input) input.focus();
        }, 600);
      }
    });
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) btn.disabled = true;

    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.innerHTML = '<span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-primary);">// SENDING MESSAGE TO vnkm2004@gmail.com...</span>';
      statusEl.innerHTML = '<span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-primary);">// TRANSMITTING PACKET TO vnkm2004@gmail.com...</span>';
    }

    setTimeout(() => {
      if (statusEl) {
        statusEl.innerHTML = '<span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-primary);">// MESSAGE SENT SUCCESSFULLY. THANK YOU.</span>';
        statusEl.innerHTML = '<span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-primary);">// PACKET TRANSMITTED. OPERATOR NOTIFIED.</span>';
      }
      form.reset();
      if (btn) btn.disabled = false;

      setTimeout(() => {
        if (statusEl) statusEl.style.display = 'none';
      }, 4000);
    }, 1200);
  });
}

/**
 * Telemetry Numbers Counter
 */
function animateStat(el) {
  if (el.dataset.animated === 'true') return;
  el.dataset.animated = 'true';

  const target = parseFloat(el.getAttribute('data-target'));
  if (isNaN(target)) return;
  const suffix = el.getAttribute('data-suffix') || '';
  const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
  const duration = 1600;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = easeProgress * target;

    el.textContent = `${current.toFixed(decimals)}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = `${target.toFixed(decimals)}${suffix}`;
    }
  }

  el.textContent = `0${suffix}`;
  requestAnimationFrame(update);
}

function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.telemetry-num[data-target]');
  if (!statNumbers.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStat(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '60px 0px 60px 0px' });

    statNumbers.forEach(s => observer.observe(s));
  } else {
    statNumbers.forEach(s => animateStat(s));
  }

  // Safety fallback: ensure all stats animate even if viewport observer didn't trigger
  setTimeout(() => {
    statNumbers.forEach(s => {
      if (s.dataset.animated !== 'true') {
        animateStat(s);
      }
    });
  }, 1000);
}

