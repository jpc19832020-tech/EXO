/**
 * INTRO ÉPICA - CONTROLADOR DE ANIMACIÓN
 * Secuencia completa: Carga → Transición → Frases
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
    
    // Duraciones en milisegundos (según especificaciones)
    this.durations = {
      loading: 3000,           // Fase 1: Barra de carga
      fadeOutLoading: 1000,    // Fase 2: Fade out logo/barra
      transitionToBlack: 800,  // Fase 3: Transición a negro
      phraseAnimation: 3100,   // Fase 4-6: Cada frase (0.6s in + 2s hold + 0.5s out)
      finalFadeOut: 1000       // Fade out final
    };
    
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
    
    // Ajustar duraciones para reduced motion
    if (this.isReducedMotion) {
      this.durations = {
        loading: 1000,
        fadeOutLoading: 300,
        transitionToBlack: 300,
        phraseAnimation: 500,
        finalFadeOut: 300
      };
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
    
    // Contenedor de carga (Fase 1-2)
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
    
    // Contenedor de textos (Fase 4-6)
    this.textsContainer = document.createElement('div');
    this.textsContainer.className = 'intro-texts-container';
    
    this.texts.forEach((text, index) => {
      const textElement = document.createElement('div');
      textElement.className = 'intro-text';
      textElement.setAttribute('data-text', index + 1);
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
   * Animación completa según especificaciones
   */
  async runFullIntro() {
    // FASE 1: Mostrar barra de carga (3s)
    await this.wait(this.durations.loading);
    
    // FASE 2: Fade out logo y barra simultáneamente (1s)
    this.loadingContainer.classList.add('fade-out');
    await this.wait(this.durations.fadeOutLoading);
    
    // Ocultar contenedor de carga
    this.loadingContainer.style.display = 'none';
    
    // FASE 3: Transición a fondo negro (0.8s)
    this.overlay.classList.add('black-background');
    await this.wait(this.durations.transitionToBlack);
    
    // Mostrar contenedor de textos
    this.textsContainer.classList.add('active');
    
    // FASE 4-6: Animar cada frase (3.1s cada una)
    for (let i = 0; i < this.texts.length; i++) {
      await this.showPhrase(i);
    }
    
    // FADE OUT FINAL: (1s)
    this.overlay.classList.add('fade-out');
    await this.wait(this.durations.finalFadeOut);
    
    // CLEANUP
    this.cleanup();
  }
  
  /**
   * Animación simple para reduced motion
   */
  async runSimpleIntro() {
    // Versión simplificada
    await this.wait(this.durations.loading);
    this.loadingContainer.classList.add('fade-out');
    await this.wait(this.durations.fadeOutLoading);
    
    this.loadingContainer.style.display = 'none';
    this.overlay.classList.add('black-background');
    await this.wait(this.durations.transitionToBlack);
    
    // Mostrar solo primera frase
    this.textsContainer.classList.add('active');
    await this.showPhrase(0);
    
    this.overlay.classList.add('fade-out');
    await this.wait(this.durations.finalFadeOut);
    
    this.cleanup();
  }
  
  /**
   * Mostrar una frase individual
   */
  showPhrase(index) {
    return new Promise((resolve) => {
      const textElements = this.textsContainer.querySelectorAll('.intro-text');
      const textElement = textElements[index];
      
      if (!textElement) {
        resolve();
        return;
      }
      
      // Activar animación
      textElement.classList.add('active');
      
      // Esperar a que termine la animación completa (3.1s)
      setTimeout(() => {
        textElement.classList.remove('active');
        resolve();
      }, this.durations.phraseAnimation);
    });
  }
  
  /**
   * Utilidad para esperar
   */
  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
    
    // Disparar evento personalizado
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