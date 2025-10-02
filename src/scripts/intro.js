/**
 * INTRO ÉPICA - CONTROLADOR DE ANIMACIÓN
 * Sistema de animación tipográfica sin parpadeos
 */

class IntroController {
  constructor() {
    this.overlay = null;
    this.texts = [
      'CREAMOS HISTORIAS',
      'INSPIRAMOS CAMBIOS',
      'ELEVAMOS MARCAS'
    ];
    this.currentTextIndex = 0;
    this.textDuration = 2000; // 2 segundos por texto
    this.logoDuration = 2000; // 2 segundos para el logo
    this.fadeOutDuration = 1000; // 1 segundo para fade out
    this.isReducedMotion = false;
    
    this.init();
  }
  
  /**
   * Inicializar el controlador
   */
  init() {
    // Verificar preferencia de movimiento reducido
    this.checkReducedMotion();
    
    // Crear overlay
    this.createOverlay();
    
    // Prevenir scroll
    document.body.classList.add('intro-active');
    
    // Iniciar animación
    this.start();
  }
  
  /**
   * Verificar preferencia de reduced motion
   */
  checkReducedMotion() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.isReducedMotion = mediaQuery.matches;
    
    // Ajustar duraciones si hay reduced motion
    if (this.isReducedMotion) {
      this.textDuration = 500;
      this.logoDuration = 1000;
      this.fadeOutDuration = 300;
    }
  }
  
  /**
   * Crear estructura HTML del overlay
   */
  createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.id = 'intro-overlay';
    this.overlay.setAttribute('role', 'presentation');
    this.overlay.setAttribute('aria-live', 'polite');
    
    // Agregar loading dots (opcional)
    const loadingDots = document.createElement('div');
    loadingDots.className = 'intro-loading';
    loadingDots.innerHTML = `
      <div class="intro-loading-dot"></div>
      <div class="intro-loading-dot"></div>
      <div class="intro-loading-dot"></div>
    `;
    this.overlay.appendChild(loadingDots);
    
    document.body.insertBefore(this.overlay, document.body.firstChild);
  }
  
  /**
   * Iniciar secuencia de animación
   */
  async start() {
    try {
      if (this.isReducedMotion) {
        await this.runSimpleIntro();
      } else {
        await this.runFullIntro();
      }
    } catch (error) {
      console.error('Error en intro:', error);
      this.cleanup();
    }
  }
  
  /**
   * Animación completa con todos los textos
   */
  async runFullIntro() {
    // Animar cada texto
    for (let i = 0; i < this.texts.length; i++) {
      await this.animateText(this.texts[i]);
    }
    
    // Mostrar logo y tagline
    await this.showLogo();
    
    // Fade out completo
    await this.fadeOut();
    
    // Limpiar
    this.cleanup();
  }
  
  /**
   * Animación simple para reduced motion
   */
  async runSimpleIntro() {
    // Solo mostrar logo brevemente
    await this.showLogo();
    await this.fadeOut();
    this.cleanup();
  }
  
  /**
   * Animar un texto individual
   */
  animateText(text) {
    return new Promise((resolve) => {
      // Crear elemento de texto
      const textElement = document.createElement('div');
      textElement.className = 'intro-text';
      textElement.textContent = text;
      textElement.setAttribute('aria-label', text);
      
      this.overlay.appendChild(textElement);
      
      // Activar animación
      setTimeout(() => {
        textElement.classList.add('active');
      }, 50);
      
      // Remover después de la duración
      setTimeout(() => {
        textElement.classList.remove('active');
        textElement.classList.add('exit');
        
        setTimeout(() => {
          textElement.remove();
          resolve();
        }, 500);
      }, this.textDuration);
    });
  }
  
  /**
   * Mostrar logo y tagline
   */
  showLogo() {
    return new Promise((resolve) => {
      // Crear contenedor de logo
      const logoContainer = document.createElement('div');
      logoContainer.className = 'intro-logo-container';
      
      // Logo
      const logo = document.createElement('img');
      logo.src = './EXOlogo.png';
      logo.alt = 'EXO Digital Studio';
      logo.className = 'intro-logo';
      
      // Tagline
      const tagline = document.createElement('div');
      tagline.className = 'intro-tagline';
      tagline.textContent = 'Innovación que Conecta';
      
      logoContainer.appendChild(logo);
      logoContainer.appendChild(tagline);
      this.overlay.appendChild(logoContainer);
      
      // Activar animación
      setTimeout(() => {
        logoContainer.classList.add('active');
      }, 50);
      
      // Mantener visible por la duración especificada
      setTimeout(() => {
        logoContainer.classList.remove('active');
        logoContainer.classList.add('exit');
        resolve();
      }, this.logoDuration);
    });
  }
  
  /**
   * Fade out del overlay completo
   */
  fadeOut() {
    return new Promise((resolve) => {
      this.overlay.classList.add('fade-out');
      
      setTimeout(() => {
        resolve();
      }, this.fadeOutDuration);
    });
  }
  
  /**
   * Limpiar y remover overlay
   */
  cleanup() {
    // Remover clase que previene scroll
    document.body.classList.remove('intro-active');
    
    // Mostrar contenido principal
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.classList.remove('content-hidden');
      mainContent.classList.add('content-visible');
    }
    
    // Remover overlay después de un pequeño delay
    setTimeout(() => {
      if (this.overlay && this.overlay.parentNode) {
        this.overlay.remove();
      }
    }, 500);
    
    // Disparar evento personalizado para indicar que la intro terminó
    window.dispatchEvent(new CustomEvent('introComplete'));
  }
}

/**
 * Auto-inicializar cuando el DOM esté listo
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new IntroController();
  });
} else {
  new IntroController();
}

/**
 * Exportar para uso en otros scripts si es necesario
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IntroController;
}