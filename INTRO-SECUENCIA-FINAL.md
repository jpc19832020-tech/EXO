# 🎬 Secuencia Final de Intro - EXO Digital Studio

## 📋 Especificaciones Técnicas Detalladas

Esta es la secuencia completa y definitiva de la intro épica.

---

## ⏱️ Timeline Completo

```
Fase 1: Barra de Carga          → 3.0s
Fase 2: Fade Out Logo/Barra     → 1.0s
Fase 3: Transición a Negro      → 0.8s
Fase 4: Frase 1                 → 3.1s (0.6s in + 2.0s hold + 0.5s out)
Fase 5: Frase 2                 → 3.1s (0.6s in + 2.0s hold + 0.5s out)
Fase 6: Frase 3                 → 3.1s (0.6s in + 2.0s hold + 0.5s out)
Fade Out Final                  → 1.0s
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL                           → ~15.1s
```

---

## 🎨 FASE 1: Pantalla de Carga (3 segundos)

### Estructura Visual
```
┌─────────────────────────────┐
│                             │
│                             │
│         ┌─────────┐         │
│         │  LOGO   │         │
│         │   EXO   │         │
│         └─────────┘         │
│             ↓               │
│      ╔═════════════╗        │
│      ║▓▓▓▓▓░░░░░░░║        │
│      ╚═════════════╝        │
│        [Barra 200px]        │
│                             │
└─────────────────────────────┘
```

### Especificaciones Técnicas

**Logo:**
- Tamaño: 150px de ancho (auto altura)
- Posición: Centrado vertical y horizontal
- Margen inferior: 2rem del borde superior de la barra
- Efecto: `drop-shadow(0 4px 20px rgba(0, 212, 255, 0.3))`

**Barra de Carga:**
- Ancho: 200px
- Alto: 4px
- Border radius: 2px
- Fondo: `rgba(255, 255, 255, 0.1)`
- Progreso: `linear-gradient(90deg, #00d4ff, #ff006e)`
- Animación: 0% → 100% en 3 segundos (ease-out)

**Fondo:**
- Color inicial: Puede ser el degradado original o un color corporativo
- Ejemplo: `linear-gradient(135deg, #1a1a2e, #16213e)`

### Animación CSS
```css
@keyframes loadingProgress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.intro-loading-progress {
  animation: loadingProgress 3s ease-out forwards;
}
```

---

## 🌅 FASE 2: Fade Out Logo y Barra (1 segundo)

### Transición
- Duración: 1 segundo
- Efecto: Opacity de 1 → 0
- Timing: ease-out
- Elementos afectados: Logo y barra simultáneamente

### CSS
```css
.intro-loading-container.exit {
  animation: fadeOut 1s ease-out forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

---

## 🌑 FASE 3: Transición a Negro (0.8 segundos)

### Transición de Fondo
- Duración: 0.8 segundos
- Color inicial: Degradado corporativo
- Color final: Negro puro (#000000)
- Timing: ease-in-out
- Método: Overlay con fade in

### Implementación
```css
.intro-overlay-background {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  transition: background 0.8s ease-in-out;
}

.intro-overlay-background.black {
  background: #000000;
}
```

---

## 💬 FASE 4-6: Frases Animadas

### Secuencia de Cada Frase

**Timeline de una frase:**
```
0.0s → 0.6s: Fade in + Scale (0.8 → 1.0)
0.6s → 2.6s: Hold (visible)
2.6s → 3.1s: Fade out + Move up
```

### Frase 1: "CREAMOS HISTORIAS"
- Entrada: 0.6s (opacity 0→1, scale 0.8→1.0, translateY 30px→0)
- Hold: 2.0s (completamente visible)
- Salida: 0.5s (opacity 1→0, translateY 0→-20px)

### Frase 2: "INSPIRAMOS CAMBIOS"
- Misma animación que Frase 1
- Inicia inmediatamente después de salida de Frase 1

### Frase 3: "ELEVAMOS MARCAS"
- Misma animación que Frase 1 y 2
- Inicia inmediatamente después de salida de Frase 2

### Especificaciones Tipográficas

**Fuente:**
- Font family: `'Space Grotesk', sans-serif`
- Font weight: 700 (Bold)
- Letter spacing: -0.02em

**Tamaño:**
```css
font-size: clamp(2rem, 8vw, 5rem);

/* Responsive */
Mobile (<768px):   clamp(1.5rem, 10vw, 3rem)
Tablet (768-1024): clamp(1.8rem, 6vw, 4rem)
Desktop (>1024):   clamp(2rem, 8vw, 5rem)
```

**Color:**
- Base: Blanco (#ffffff)
- Efecto: Sutil sombra para legibilidad
- Shadow: `0 2px 10px rgba(255, 255, 255, 0.1)`

**Posición:**
- Centrado vertical y horizontal
- Padding lateral: 2rem

### Animación CSS Completa
```css
@keyframes phraseAnimation {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(30px);
  }
  19% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  84% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  100% {
    opacity: 0;
    transform: scale(1) translateY(-20px);
  }
}

.intro-text {
  animation: phraseAnimation 3.1s ease-out forwards;
}
```

### Timing de Secuencia JavaScript
```javascript
// Fase 1: Carga
await this.runLoadingPhase(); // 3000ms

// Fase 2: Fade out logo/barra
await this.fadeOutLoading(); // 1000ms

// Fase 3: Transición a negro
await this.transitionToBlack(); // 800ms

// Fase 4-6: Frases
await this.showPhrase(0); // 3100ms - "CREAMOS HISTORIAS"
await this.showPhrase(1); // 3100ms - "INSPIRAMOS CAMBIOS"
await this.showPhrase(2); // 3100ms - "ELEVAMOS MARCAS"

// Fade out final
await this.fadeOutOverlay(); // 1000ms
```

---

## 🎨 Colores y Efectos

### Fondo Inicial
```css
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
```

### Fondo Negro Final
```css
background: #000000;
```

### Gradiente de Barra
```css
background: linear-gradient(90deg, #00d4ff 0%, #ff006e 100%);
```

### Texto de Frases
```css
color: #ffffff;
text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
```

---

## 📐 Medidas y Espaciado

### Logo
- Width: 150px (Desktop)
- Width: 100px (Mobile)
- Gap inferior: 2rem

### Barra de Carga
- Width: 200px (Desktop)
- Width: 150px (Mobile)
- Height: 4px
- Border radius: 2px

### Frases
- Max-width: 90vw
- Padding: 0 2rem

---

## ♿ Accesibilidad - Reduced Motion

### Versión Simplificada
Para usuarios con `prefers-reduced-motion: reduce`:

**Secuencia reducida:**
```
Fase 1: Logo + Barra (1s)      → Versión rápida
Fade Out (0.3s)               → Sin animaciones complejas
Mostrar primera frase (0.5s)  → Solo una frase
Fade Out Final (0.3s)         → Directo al contenido
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL: ~2.1s
```

**Cambios:**
- Sin scale animations
- Sin movimientos complejos
- Duraciones reducidas
- Solo fades simples

---

## 🔧 Implementación Técnica

### Estructura HTML
```html
<div id="intro-overlay" role="presentation" aria-live="polite">
  <!-- Fase 1-3: Loading -->
  <div class="intro-loading-container">
    <img src="./EXOlogo.png" alt="EXO Digital Studio" class="intro-loading-logo">
    <div class="intro-loading-bar">
      <div class="intro-loading-progress"></div>
    </div>
  </div>
  
  <!-- Fase 4-6: Textos -->
  <div class="intro-texts-container">
    <div class="intro-text" data-text="1">CREAMOS HISTORIAS</div>
    <div class="intro-text" data-text="2">INSPIRAMOS CAMBIOS</div>
    <div class="intro-text" data-text="3">ELEVAMOS MARCAS</div>
  </div>
</div>
```

### Estados del Overlay
```css
/* Estado inicial */
#intro-overlay {
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
}

/* Estado después de fase 3 */
#intro-overlay.black-background {
  background: #000000;
  transition: background 0.8s ease-in-out;
}

/* Estado final */
#intro-overlay.fade-out {
  opacity: 0;
  transition: opacity 1s ease-out;
}
```

---

## 📊 Flujo de Ejecución JavaScript

```javascript
class IntroController {
  async runFullIntro() {
    // FASE 1: Mostrar barra de carga (3s)
    this.showLoadingContainer();
    await this.wait(3000);
    
    // FASE 2: Fade out logo y barra (1s)
    this.fadeOutLoadingContainer();
    await this.wait(1000);
    
    // FASE 3: Transición a fondo negro (0.8s)
    this.transitionToBlack();
    await this.wait(800);
    
    // FASE 4-6: Mostrar frases (3.1s cada una)
    this.showTextsContainer();
    for (let i = 0; i < 3; i++) {
      this.activateText(i);
      await this.wait(3100);
    }
    
    // FADE OUT FINAL: (1s)
    this.fadeOutOverlay();
    await this.wait(1000);
    
    // CLEANUP
    this.cleanup();
  }
}
```

---

## 🎯 Checklist de Implementación

### CSS (src/styles/intro.css)
- [ ] Actualizar estructura de fases
- [ ] Implementar animación de barra (3s)
- [ ] Implementar fade out logo/barra (1s)
- [ ] Implementar transición de fondo (0.8s)
- [ ] Implementar animación de frases (scale + fade)
- [ ] Configurar duraciones exactas
- [ ] Agregar versión reduced motion

### JavaScript (src/scripts/intro.js)
- [ ] Implementar control de fases secuenciales
- [ ] Agregar timing preciso (3s, 1s, 0.8s, 3.1s)
- [ ] Controlar transiciones de fondo
- [ ] Activar frases una por una
- [ ] Implementar cleanup al final

### Testing
- [ ] Verificar duración total (~15s)
- [ ] Comprobar transiciones suaves
- [ ] Validar en mobile/tablet/desktop
- [ ] Probar reduced motion
- [ ] Confirmar sin parpadeos

---

## 💡 Consideraciones Importantes

### Fluidez Visual
- Todas las transiciones deben ser suaves (ease-out/ease-in-out)
- No debe haber cortes abruptos entre fases
- El timing debe ser preciso para mantener ritmo

### Profesionalismo
- Animaciones elegantes y sutiles
- Colores de marca coherentes
- Tipografía clara y legible
- Ritmo visual moderno

### Performance
- Usar CSS animations (GPU-accelerated)
- Minimizar JavaScript para control de flujo
- Preload del logo
- Optimizar para 60fps

---

*Especificaciones finales para implementación en modo Code*  
*Fecha: Octubre 2025*