# 📦 Guía de Productos - EXO Digital Studio

Esta guía te ayudará a crear y gestionar productos en tu sitio web de manera simple y efectiva.

---

## 🎯 Productos de Ejemplo Sugeridos

Basándonos en tu perfil de EXO Digital Studio, aquí hay 3 productos iniciales sugeridos:

### 1. Diseño Web Premium

**Categoría**: Diseño Web

**Descripción corta**: Sitios web modernos y responsive que convierten visitantes en clientes

**Beneficios clave**:
- Diseño 100% personalizado adaptado a tu marca
- Optimización SEO desde el día uno
- Responsive en todos los dispositivos
- Velocidad de carga ultra rápida

**Características**:
- Hasta 10 páginas personalizadas
- Formulario de contacto integrado
- Integración con redes sociales
- Panel de administración fácil de usar
- 3 meses de soporte técnico incluido
- Hosting y dominio asesorados

**CTA**: "Solicitar Cotización" → WhatsApp

**Precio sugerido**: Desde $800 USD

---

### 2. Identidad de Marca Completa

**Categoría**: Branding

**Descripción corta**: Construye una marca memorable que conecte con tu audiencia

**Beneficios clave**:
- Logo profesional único y registrable
- Identidad visual consistente
- Diferenciación en el mercado
- Guía de marca completa

**Características**:
- Diseño de logo (3 conceptos iniciales)
- Paleta de colores corporativos
- Tipografía de marca
- Aplicaciones del logo (tarjetas, papelería)
- Manual de identidad visual PDF
- Archivos en todos los formatos (AI, PNG, SVG, PDF)

**CTA**: "Crear Mi Marca" → WhatsApp

**Precio sugerido**: Desde $500 USD

---

### 3. Gestión de Redes Sociales

**Categoría**: Marketing Digital

**Descripción corta**: Impulsa tu presencia online con contenido estratégico y atractivo

**Beneficios clave**:
- Aumenta tu visibilidad y alcance
- Contenido profesional y consistente
- Engagement con tu audiencia
- Reportes de rendimiento mensuales

**Características**:
- 12 publicaciones mensuales (Instagram/Facebook)
- 4 stories semanales
- Diseño de contenido visual
- Programación automatizada
- Respuesta a comentarios y mensajes
- Reporte mensual de métricas

**CTA**: "Comenzar Ahora" → WhatsApp

**Precio sugerido**: $300 USD/mes

---

## 📝 Plantilla JSON de Producto

Aquí está la estructura completa que debes usar para cada producto:

```json
{
  "id": "diseno-web-premium",
  "title": "Diseño Web Premium",
  "slug": "diseno-web-premium",
  "category": "Diseño Web",
  "shortDescription": "Sitios web modernos y responsive que convierten visitantes en clientes",
  "heroImage": "/src/images/products/diseno-web-hero.jpg",
  "thumbnailImage": "/src/images/products/diseno-web-thumb.jpg",
  "description": "<p>En EXO Digital Studio creamos sitios web que no solo se ven increíbles, sino que generan resultados reales para tu negocio.</p><p>Cada proyecto es único y diseñado específicamente para cumplir tus objetivos de negocio, atraer a tu audiencia ideal y convertir visitantes en clientes leales.</p>",
  "benefits": [
    "Diseño 100% personalizado adaptado a tu marca",
    "Optimización SEO desde el día uno",
    "Responsive en todos los dispositivos",
    "Velocidad de carga ultra rápida",
    "Panel de administración intuitivo",
    "Soporte técnico por 3 meses incluido"
  ],
  "features": [
    {
      "icon": "🎨",
      "title": "Diseño Único",
      "description": "Creamos una experiencia visual que refleja la esencia de tu marca"
    },
    {
      "icon": "📱",
      "title": "100% Responsive",
      "description": "Tu sitio se verá perfecto en móviles, tablets y computadoras"
    },
    {
      "icon": "⚡",
      "title": "Ultra Rápido",
      "description": "Optimizado para cargar en menos de 2 segundos"
    },
    {
      "icon": "🔍",
      "title": "SEO Optimizado",
      "description": "Configurado para aparecer en los primeros resultados de Google"
    },
    {
      "icon": "🛠️",
      "title": "Fácil de Actualizar",
      "description": "Panel intuitivo para que gestiones tu contenido sin conocimientos técnicos"
    },
    {
      "icon": "💬",
      "title": "Soporte Técnico",
      "description": "3 meses de asistencia técnica y actualizaciones incluidas"
    }
  ],
  "process": [
    {
      "step": 1,
      "title": "Consulta Inicial",
      "description": "Conversamos sobre tu negocio, objetivos y visión"
    },
    {
      "step": 2,
      "title": "Propuesta y Diseño",
      "description": "Creamos un prototipo visual de tu sitio"
    },
    {
      "step": 3,
      "title": "Desarrollo",
      "description": "Construimos tu sitio con las últimas tecnologías"
    },
    {
      "step": 4,
      "title": "Lanzamiento",
      "description": "Publicamos tu sitio y te capacitamos en su uso"
    }
  ],
  "cta": {
    "text": "Solicitar Cotización",
    "url": "https://wa.me/51925475680?text=Hola, me interesa el Diseño Web Premium",
    "secondary": {
      "text": "Ver Portfolio",
      "url": "https://www.instagram.com/exo_digitalstudio/"
    }
  },
  "pricing": {
    "type": "from",
    "amount": "800",
    "currency": "USD",
    "period": "proyecto"
  },
  "deliveryTime": "2-4 semanas",
  "metadata": {
    "title": "Diseño Web Premium | EXO Digital Studio",
    "description": "Sitios web modernos y responsive que convierten visitantes en clientes. Diseño personalizado, SEO optimizado y soporte incluido.",
    "keywords": "diseño web, desarrollo web, sitio web profesional, página web responsive",
    "ogImage": "/src/images/products/diseno-web-og.jpg"
  }
}
```

---

## 🖼️ Guía de Imágenes

### Dimensiones Recomendadas

| Tipo | Dimensión | Uso | Peso Max |
|------|-----------|-----|----------|
| Hero | 1920x1080px | Imagen principal de producto | 200KB |
| Thumbnail | 600x400px | Grid de productos | 100KB |
| OG Image | 1200x630px | Compartir en redes | 150KB |

### Formato Recomendado

- **WebP** (primera opción): Mejor calidad/peso
- **JPEG** (fallback): Para compatibilidad
- **PNG**: Solo si necesitas transparencias

### Estructura de Carpetas

```
src/images/products/
├── diseno-web-premium/
│   ├── hero.jpg
│   ├── thumb.jpg
│   ├── og.jpg
│   └── gallery/
│       ├── ejemplo-1.jpg
│       └── ejemplo-2.jpg
├── identidad-marca/
│   └── ...
└── gestion-redes/
    └── ...
```

---

## ✍️ Cómo Escribir Descripciones Efectivas

### 1. **Título del Producto** (50-60 caracteres)
- ✅ "Diseño Web Premium"
- ✅ "Identidad de Marca Completa"
- ❌ "Hacemos páginas web" (muy genérico)
- ❌ "El mejor diseño web profesional del Perú con garantía de satisfacción" (muy largo)

### 2. **Descripción Corta** (120-150 caracteres)
Debe responder: ¿Qué problema resuelve?
- ✅ "Sitios web modernos que convierten visitantes en clientes"
- ✅ "Construye una marca memorable que conecte con tu audiencia"
- ❌ "Diseñamos sitios web" (muy simple)

### 3. **Descripción Completa** (200-400 palabras)
Estructura sugerida:
1. Problema que resuelve
2. Cómo tu producto lo soluciona
3. Qué hace único a tu servicio
4. Resultado que obtiene el cliente

### 4. **Beneficios** (4-6 puntos)
- Enfócate en el resultado, no en el proceso
- ✅ "Aumenta tu visibilidad online"
- ❌ "Publicamos en redes sociales"

### 5. **Características** (4-8 puntos)
- Aquí sí incluyes lo técnico
- ✅ "Panel de administración intuitivo"
- ✅ "Optimización SEO incluida"

---

## 🎨 Sistema de Categorías Sugerido

Organiza tus productos en categorías claras:

1. **Diseño Web**
   - Diseño Web Premium
   - Landing Pages
   - E-commerce

2. **Branding**
   - Identidad de Marca
   - Rebranding
   - Logo Design

3. **Marketing Digital**
   - Gestión de Redes Sociales
   - Publicidad Digital
   - Email Marketing

4. **Desarrollo**
   - Aplicaciones Web
   - Sistemas a Medida
   - Integraciones

---

## 💡 Tips de Redacción

### Lenguaje

- **Usa tú/te**: "Tu sitio web se verá increíble"
- **Sé específico**: "En 2-4 semanas" vs "Pronto"
- **Incluye números**: "12 publicaciones mensuales"
- **Usa verbos activos**: "Aumenta", "Genera", "Transforma"

### CTAs Efectivos

- ✅ "Solicitar Cotización"
- ✅ "Comenzar Ahora"
- ✅ "Crear Mi Marca"
- ✅ "Ver Portfolio"
- ❌ "Click aquí"
- ❌ "Más información"

### Precio

Puedes elegir entre:
- **Desde $XXX**: Para servicios personalizables
- **$XXX/mes**: Para servicios recurrentes
- **A cotizar**: Para proyectos muy personalizados

---

## 📱 Información de Contacto en CTAs

Todos tus CTAs deben incluir mensajes pre-escritos en WhatsApp:

```
https://wa.me/51925475680?text=Hola, me interesa el [NOMBRE DEL PRODUCTO]
```

### Ejemplos:

**Diseño Web**:
```
https://wa.me/51925475680?text=Hola, me interesa el Diseño Web Premium. ¿Podrían enviarme más información?
```

**Branding**:
```
https://wa.me/51925475680?text=Hola, necesito crear la identidad de marca para mi negocio. ¿Cuál es el proceso?
```

**Redes Sociales**:
```
https://wa.me/51925475680?text=Hola, me gustaría contratar la gestión de redes sociales. ¿Tienen disponibilidad?
```

---

## 🚀 Checklist Antes de Publicar un Producto

- [ ] Archivo JSON creado en `/src/products/`
- [ ] Todas las imágenes subidas y optimizadas
- [ ] Título claro y descriptivo (50-60 caracteres)
- [ ] Descripción corta impactante (120-150 caracteres)
- [ ] Descripción completa detallada (200-400 palabras)
- [ ] 4-6 beneficios listados
- [ ] 4-8 características con íconos
- [ ] CTA con WhatsApp configurado
- [ ] Metadata SEO completa
- [ ] Precio o rango de precio definido
- [ ] Tiempo de entrega especificado
- [ ] Revisión ortográfica completa

---

## 📊 Ejemplos de Productos JSON Completos

### Ejemplo 1: Servicio de Diseño

```json
{
  "id": "diseno-web-premium",
  "title": "Diseño Web Premium",
  "slug": "diseno-web-premium",
  "category": "Diseño Web",
  "shortDescription": "Sitios web modernos y responsive que convierten visitantes en clientes",
  "heroImage": "/src/images/products/diseno-web-premium/hero.jpg",
  "thumbnailImage": "/src/images/products/diseno-web-premium/thumb.jpg",
  "description": "<p>En EXO Digital Studio creamos sitios web que no solo se ven increíbles, sino que generan resultados reales para tu negocio.</p><p>Cada proyecto es único y diseñado específicamente para cumplir tus objetivos de negocio, atraer a tu audiencia ideal y convertir visitantes en clientes leales.</p>",
  "benefits": [
    "Diseño 100% personalizado adaptado a tu marca",
    "Optimización SEO desde el día uno",
    "Responsive en todos los dispositivos",
    "Velocidad de carga ultra rápida",
    "Panel de administración intuitivo",
    "Soporte técnico por 3 meses incluido"
  ],
  "features": [
    {
      "icon": "🎨",
      "title": "Diseño Único",
      "description": "Creamos una experiencia visual que refleja la esencia de tu marca"
    },
    {
      "icon": "📱",
      "title": "100% Responsive",
      "description": "Tu sitio se verá perfecto en móviles, tablets y computadoras"
    },
    {
      "icon": "⚡",
      "title": "Ultra Rápido",
      "description": "Optimizado para cargar en menos de 2 segundos"
    }
  ],
  "cta": {
    "text": "Solicitar Cotización",
    "url": "https://wa.me/51925475680?text=Hola, me interesa el Diseño Web Premium"
  },
  "pricing": {
    "type": "from",
    "amount": "800",
    "currency": "USD",
    "period": "proyecto"
  },
  "deliveryTime": "2-4 semanas",
  "metadata": {
    "title": "Diseño Web Premium | EXO Digital Studio",
    "description": "Sitios web modernos y responsive que convierten visitantes en clientes",
    "ogImage": "/src/images/products/diseno-web-premium/og.jpg"
  }
}
```

### Ejemplo 2: Servicio Recurrente

```json
{
  "id": "gestion-redes-sociales",
  "title": "Gestión de Redes Sociales",
  "slug": "gestion-redes-sociales",
  "category": "Marketing Digital",
  "shortDescription": "Impulsa tu presencia online con contenido estratégico y atractivo",
  "heroImage": "/src/images/products/gestion-redes/hero.jpg",
  "thumbnailImage": "/src/images/products/gestion-redes/thumb.jpg",
  "description": "<p>¿No tienes tiempo para gestionar tus redes sociales? Nosotros lo hacemos por ti.</p><p>Creamos contenido atractivo, publicamos consistentemente y respondemos a tu audiencia para que puedas enfocarte en hacer crecer tu negocio.</p>",
  "benefits": [
    "Aumenta tu visibilidad y alcance",
    "Contenido profesional y consistente",
    "Engagement con tu audiencia",
    "Reportes de rendimiento mensuales"
  ],
  "features": [
    {
      "icon": "📅",
      "title": "Calendario de Contenido",
      "description": "12 publicaciones mensuales estratégicamente planificadas"
    },
    {
      "icon": "✨",
      "title": "Diseño Profesional",
      "description": "Cada post diseñado acorde a tu identidad de marca"
    },
    {
      "icon": "📊",
      "title": "Reportes Mensuales",
      "description": "Métricas y análisis de rendimiento de tus redes"
    }
  ],
  "cta": {
    "text": "Comenzar Ahora",
    "url": "https://wa.me/51925475680?text=Hola, me gustaría contratar la gestión de redes sociales"
  },
  "pricing": {
    "type": "fixed",
    "amount": "300",
    "currency": "USD",
    "period": "mes"
  },
  "deliveryTime": "Inicio inmediato",
  "metadata": {
    "title": "Gestión de Redes Sociales | EXO Digital Studio",
    "description": "Impulsa tu presencia online con contenido estratégico y profesional",
    "ogImage": "/src/images/products/gestion-redes/og.jpg"
  }
}
```

---

## 🎓 Recursos Adicionales

### Herramientas para Crear Contenido

- **Imágenes**: Unsplash, Pexels (fotos gratuitas)
- **Diseño**: Canva, Figma
- **Compresión**: TinyPNG, Squoosh
- **Íconos**: Iconify, FontAwesome

### Inspiración

- Behance (diseño web)
- Dribbble (UI/UX)
- Awwwards (sitios premiados)

---

*Esta guía es un documento vivo. Actualízala según tus necesidades.*

**EXO Digital Studio** - Innovación que Conecta