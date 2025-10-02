/**
 * UTILIDADES GENERALES
 * Funciones auxiliares reutilizables
 */

const Utils = {
  /**
   * Formatear precio
   */
  formatPrice(amount, currency = 'USD', period = null) {
    const formatted = `$${amount} ${currency}`;
    return period ? `${formatted}/${period}` : formatted;
  },
  
  /**
   * Truncar texto
   */
  truncateText(text, maxLength = 100) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  },
  
  /**
   * Generar slug desde texto
   */
  slugify(text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  },
  
  /**
   * Detectar si el usuario prefiere movimiento reducido
   */
  prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },
  
  /**
   * Lazy load de imágenes
   */
  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });
      
      const lazyImages = document.querySelectorAll('img.lazy');
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  },
  
  /**
   * Smooth scroll a un elemento
   */
  smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  },
  
  /**
   * Copiar texto al clipboard
   */
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.error('Error copiando al clipboard:', error);
      return false;
    }
  },
  
  /**
   * Debounce function
   */
  debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  /**
   * Throttle function
   */
  throttle(func, limit = 300) {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },
  
  /**
   * Validar email
   */
  isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },
  
  /**
   * Formatear fecha
   */
  formatDate(date, locale = 'es-ES') {
    return new Date(date).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  },
  
  /**
   * Generar mensaje de WhatsApp
   */
  generateWhatsAppLink(phone, message = '') {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  },
  
  /**
   * Abrir enlace en nueva pestaña
   */
  openInNewTab(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  },
  
  /**
   * Detectar dispositivo móvil
   */
  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },
  
  /**
   * Obtener parámetros de URL
   */
  getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const obj = {};
    for (const [key, value] of params) {
      obj[key] = value;
    }
    return obj;
  },
  
  /**
   * Almacenar en localStorage de forma segura
   */
  storage: {
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error) {
        console.error('Error guardando en localStorage:', error);
        return false;
      }
    },
    
    get(key, defaultValue = null) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (error) {
        console.error('Error leyendo de localStorage:', error);
        return defaultValue;
      }
    },
    
    remove(key) {
      try {
        localStorage.removeItem(key);
        return true;
      } catch (error) {
        console.error('Error eliminando de localStorage:', error);
        return false;
      }
    },
    
    clear() {
      try {
        localStorage.clear();
        return true;
      } catch (error) {
        console.error('Error limpiando localStorage:', error);
        return false;
      }
    }
  },
  
  /**
   * Animar número contador
   */
  animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const current = Math.floor(progress * target);
      element.textContent = current;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = target;
      }
    };
    
    requestAnimationFrame(animate);
  },
  
  /**
   * Shake elemento (para errores)
   */
  shakeElement(element) {
    element.classList.add('shake');
    setTimeout(() => {
      element.classList.remove('shake');
    }, 500);
  }
};

/**
 * Exportar utilidades
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Utils;
}

/**
 * Hacer disponible globalmente
 */
if (typeof window !== 'undefined') {
  window.Utils = Utils;
}