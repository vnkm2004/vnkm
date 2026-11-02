/**
 * ============================================================================
 * THEME CONTROLLER - STRICT 2 THEMES ONLY
 * Theme 1: Light (Pure White Background: #ffffff)
 * Theme 2: Dark (Pure Black Background: #000000)
 * Minimalist monochrome styling, no secondary colors.
 * ============================================================================
 */

class ThemeController {
  constructor() {
    this.storageKey = 'vnkm_theme_preference';
    this.currentTheme = 'dark'; // Default to Cyber Dark
    this.toggleBtns = [];
    this.init();
  }

  init() {
    // Check saved preference or system preference
    const saved = localStorage.getItem(this.storageKey);
    if (saved === 'light' || saved === 'dark') {
      this.currentTheme = saved;
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = prefersDark ? 'dark' : 'light';
    }

    this.applyTheme(this.currentTheme);
    this.bindButtons();

    // Listen to system changes if not locked
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(this.storageKey)) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  bindButtons() {
    this.toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    this.toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(nextTheme);
      });
    });
  }

  setTheme(theme) {
    if (theme !== 'light' && theme !== 'dark') return;
    this.currentTheme = theme;
    localStorage.setItem(this.storageKey, theme);
    this.applyTheme(theme);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    // Update toggle icons & labels
    this.toggleBtns.forEach(btn => {
      const label = btn.querySelector('.theme-label');
      if (label) {
        label.textContent = theme === 'dark' ? 'LIGHT [WHT]' : 'DARK [BLK]';
      }

      // Update sun / moon icons
      const sunIcon = btn.querySelector('.icon-sun');
      const moonIcon = btn.querySelector('.icon-moon');
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.style.display = 'block';
          moonIcon.style.display = 'none';
        } else {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'block';
        }
      }
    });

    // Dispatch custom event for canvas and audio
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }
}

window.themeManager = new ThemeController();

