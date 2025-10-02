# 🚀 Guía de Configuración - EXO Digital Studio

Esta guía te ayudará a configurar y desplegar tu sitio web en GitHub Pages.

---

## 📋 Requisitos Previos

- Git instalado
- Node.js 18+ instalado
- Cuenta de GitHub
- Tu logo (EXOlogo.png) ya está en el proyecto ✓

---

## 🔧 Configuración Inicial

### 1. Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Click en "New repository"
3. Nombre sugerido: `EXO` o `exo-digital-studio`
4. Marca como **Public**
5. NO inicialices con README (ya lo tienes)
6. Click en "Create repository"

### 2. Conectar Proyecto Local con GitHub

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: EXO Digital Studio website"

# Agregar el repositorio remoto (reemplaza TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/EXO.git

# Renombrar la rama principal a 'main' (si es necesario)
git branch -M main

# Subir al repositorio
git push -u origin main
```

### 3. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (⚙️)
3. En el menú lateral, click en **Pages**
4. En "Build and deployment":
   - Source: **GitHub Actions**
5. GitHub detectará automáticamente el workflow y lo ejecutará

---

## 🖼️ Agregar Imágenes de Productos

Por defecto, el proyecto usa rutas para imágenes que debes agregar. Aquí está la estructura recomendada:

### Estructura de Carpetas de Imágenes

```
src/images/products/
├── diseno-web-premium/
│   ├── hero.jpg      (1920x1080px, <200KB)
│   ├── thumb.jpg     (600x400px, <100KB)
│   └── og.jpg        (1200x630px, <150KB)
├── identidad-marca/
│   ├── hero.jpg
│   ├── thumb.jpg
│   └── og.jpg
└── gestion-redes/
    ├── hero.jpg
    ├── thumb.jpg
    └── og.jpg
```

### Opción 1: Usar Imágenes Propias

1. Crea las carpetas necesarias:
```bash
mkdir -p src/images/products/diseno-web-premium
mkdir -p src/images/products/identidad-marca
mkdir -p src/images/products/gestion-redes
```

2. Agrega tus imágenes en cada carpeta

3. Commit y push:
```bash
git add src/images/
git commit -m "Add product images"
git push
```

### Opción 2: Usar Placeholders Temporales

Mientras consigues las imágenes finales, puedes usar servicios de placeholder:

**Unsplash (Gratis, Alta Calidad)**
- Hero: `https://source.unsplash.com/1920x1080/?web-design`
- Thumb: `https://source.unsplash.com/600x400/?branding`

**Placeholder.com**
- `https://via.placeholder.com/1920x1080/0a0a0a/00d4ff?text=Hero+Image`

Edita los archivos JSON en `src/products/` y actualiza las rutas de imágenes temporalmente.

---

## 🧪 Probar Localmente

### Instalar Dependencias

```bash
npm install
```

### Generar Páginas de Productos

```bash
npm run build
```

Esto ejecutará [`build-products.js`](build-products.js) y generará las páginas HTML en `productos/`.

### Ver el Sitio Localmente

**Opción 1: Python Simple Server (recomendado)**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego abre: http://localhost:8000

**Opción 2: Live Server (VS Code)**
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en [`index.html`](index.html)
3. Selecciona "Open with Live Server"

**Opción 3: Node.js http-server**
```bash
npx http-server -p 8000
```

---

## 🌐 Verificar Deployment

Una vez que hagas push a GitHub:

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Espera a que termine (ícono ✓ verde)
4. Tu sitio estará disponible en:
   ```
   https://TU-USUARIO.github.io/EXO/
   ```

---

## 📝 Agregar Nuevos Productos

### Paso a Paso

1. **Crear archivo JSON** en `src/products/`:
```bash
src/products/mi-nuevo-producto.json
```

2. **Copiar estructura** de un producto existente:
```json
{
  "id": "mi-nuevo-producto",
  "title": "Mi Nuevo Producto",
  "slug": "mi-nuevo-producto",
  "category": "Categoría",
  "shortDescription": "Descripción breve...",
  ...
}
```

3. **Agregar imágenes**:
```bash
mkdir src/images/products/mi-nuevo-producto
# Agregar hero.jpg, thumb.jpg, og.jpg
```

4. **Actualizar** [`src/scripts/products.js`](src/scripts/products.js):
Agrega el nombre del archivo a la lista `productFiles` (línea ~27):
```javascript
const productFiles = [
  'diseno-web-premium.json',
  'identidad-marca.json',
  'gestion-redes.json',
  'mi-nuevo-producto.json'  // ← Agregar aquí
];
```

5. **Commit y Push**:
```bash
git add .
git commit -m "Add new product: Mi Nuevo Producto"
git push
```

GitHub Actions generará automáticamente la página en:
```
https://TU-USUARIO.github.io/EXO/productos/mi-nuevo-producto.html
```

---

## 🔍 Verificar SEO

Usa estas herramientas para verificar tu SEO:

- **Google Search Console**: https://search.google.com/search-console
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Meta Tags Checker**: https://metatags.io/

---

## 🐛 Solución de Problemas

### El sitio no carga después de hacer push

1. Verifica que el workflow se haya ejecutado sin errores
2. Ve a Settings → Pages y confirma que la source sea "GitHub Actions"
3. Espera 1-2 minutos para que se propaguen los cambios

### Las imágenes no se muestran

1. Verifica que las rutas en los JSON sean correctas
2. Asegúrate de que las imágenes estén commiteadas:
```bash
git add src/images/
git commit -m "Add missing images"
git push
```

### La intro no funciona

1. Abre la consola del navegador (F12)
2. Verifica que no haya errores de JavaScript
3. Asegúrate de que [`src/scripts/intro.js`](src/scripts/intro.js) esté cargando correctamente

### Las páginas de productos no se generan

1. Ejecuta manualmente:
```bash
node build-products.js
```
2. Verifica que no haya errores en los JSON
3. Asegúrate de que la plantilla existe en `templates/product-template.html`

---

## 📞 Información de Contacto en el Sitio

Todo el contacto ya está configurado con tu información:

- **WhatsApp**: +51 925 475 680
- **Email**: exo.digitalstudio@gmail.com
- **Instagram**: @exo_digitalstudio
- **Facebook**: 61581476738289
- **TikTok**: @exodigitalstudio

Si necesitas cambiar algo, busca y reemplaza en:
- [`index.html`](index.html)
- `templates/product-template.html`
- `README.md`

---

## 🎨 Personalización

### Cambiar Colores

Edita [`src/styles/main.css`](src/styles/main.css) y modifica las variables CSS:

```css
:root {
  --color-accent-1: #00d4ff;  /* Cambiar color principal */
  --color-accent-2: #ff006e;  /* Cambiar color secundario */
}
```

### Cambiar Textos de la Intro

Edita [`src/scripts/intro.js`](src/scripts/intro.js), línea ~9:

```javascript
this.texts = [
  'CREAMOS HISTORIAS',
  'INSPIRAMOS CAMBIOS',
  'ELEVAMOS MARCAS'
];
```

### Cambiar Duración de la Intro

En [`src/scripts/intro.js`](src/scripts/intro.js), línea ~14:

```javascript
this.textDuration = 2000; // milisegundos por texto
this.logoDuration = 2000; // milisegundos para logo
```

---

## 📚 Recursos Adicionales

- [Arquitectura Técnica](ARCHITECTURE.md)
- [Guía de Productos](GUIA-PRODUCTOS.md)
- [Documentación de GitHub Pages](https://docs.github.com/pages)
- [Documentación de GitHub Actions](https://docs.github.com/actions)

---

## ✅ Checklist de Lanzamiento

- [ ] Repositorio creado en GitHub
- [ ] Código subido con `git push`
- [ ] GitHub Pages configurado
- [ ] Workflow ejecutándose sin errores
- [ ] Imágenes de productos agregadas
- [ ] Sitio accesible en GitHub Pages
- [ ] SEO verificado con herramientas
- [ ] Probado en móvil, tablet y desktop
- [ ] Enlaces de redes sociales funcionando
- [ ] WhatsApp y email funcionando
- [ ] Intro épica funcionando correctamente

---

**¡Listo! Tu sitio está en vivo** 🚀

Cualquier cambio que hagas y subas con `git push` se actualizará automáticamente en tu sitio.