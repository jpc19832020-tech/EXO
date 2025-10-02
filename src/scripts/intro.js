/**
 * INTRO ÉPICA - CONTROLADOR DE ANIMACIÓN
 * Sistema de animación con barra de carga y frases tipográficas
 */

class IntroController {
  constructor() {
    this.overlay = null;
    this.loadingContainer = null;
    this.textsContainer = null;
    this.texts = [
      'CREAMOS HISTORIAS',
      'INSPIRAMOS CAMBIOS',
      'ELEVAMOS MARCAS'
    ];
    this.currentTextIndex = 0;
    this.loadingDuration = 2000; // 2 segundos para la barra de carga
    this.textDuration = 2000; // 2 segundos por texto
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
      this.loadingDuration = 500;
      this.textDuration = 500;
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
    
    // Crear contenedor de carga
    this.loadingContainer = document.createElement('div');
    this.loadingContainer.className = 'intro-loading-container';
    
    const logo = document.createElement('img');
    logo.src = './EXOlogo.png';
    logo.alt = 'EXO Digital Studio';
    logo.className = 'intro-loading-logo';
    
    const loadingBar = document.createElement('div');
    loadingBar.className = 'intro-loading-bar';
    
    const loadingProgress = document.createElement('div');
    loadingProgress.className = 'intro-loading-progress';
    
    loadingBar.appendChild(loadingProgress);
    this.loadingContainer.appendChild(logo);
    this.loadingContainer.appendChild(loadingBar);
    
    // Crear contenedor de textos
    this.textsContainer = document.createElement('div');
    this.textsContainer.className = 'intro-texts-container';
    
    this.texts.forEach(text => {
      const textElement = document.createElement('div');
      textElement.className = 'intro-text';
      textElement.textContent = text;
      textElement.setAttribute('aria-label', text);
      this.textsContainer.appendChild(textElement);
    });
    
    this.overlay.appendChild(this.loadingContainer);
    this.overlay.appendChild(this.textsContainer);
    
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
   * Animación completa
   */
  async runFullIntro() {
    // Fase 1: Barra de carga
    await this.runLoadingPhase();
    
    // Fase 2: Frases animadas
    await this.runTextsPhase();
    
    // Fade out completo
    await this.fadeOut();
    
    // Limpiar
    this.cleanup();
  }
  
  /**
   * Animación simple para reduced motion
   */
  async runSimpleIntro() {
    // Mostrar logo brevemente
    await this.runLoadingPhase();
    
    // Mostrar una frase
    await this.showText(0);
    
    // Fade out
    await this.fadeOut();
    this.cleanup();
  }
  
  /**
   * Ejecutar fase de carga
   */
  runLoadingPhase() {
    return new Promise((resolve) => {
      // Mostrar contenedor de carga
      this.loadingContainer.classList.add('active');
      
      // Esperar a que termine la animación de la barra
      setTimeout(() => {
        this.loadingContainer.classList.remove('active');
        this.loadingContainer.classList.add('exit');
        
        // Esperar fade out
        setTimeout(() => {
          this.loadingContainer.style.display = 'none';
          resolve();
        }, 500);
      }, this.loadingDuration);
    });
  }
  
  /**
   * Ejecutar fase de textos
   */
  async runTextsPhase() {
    // Mostrar contenedor de textos
    this.textsContainer.classList.add('active');
    
    // Animar cada texto secuencialmente
    for (let i = 0; i < this.texts.length; i++) {
      await this.showText(i);
    }
  }
  
  /**
   * Mostrar un texto individual
   */
  showText(index) {
    return new Promise((resolve) => {
      const textElements = this.textsContainer.querySelectorAll('.intro-text');
      const textElement = textElements[index];
      
      if (!textElement) {
        resolve();
        return;
      }
      
      // Activar animación
      textElement.classList.add('active');
      
      // Remover después de la duración
      setTimeout(() => {
        textElement.classList.remove('active');
        resolve();
      }, this.textDuration);
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