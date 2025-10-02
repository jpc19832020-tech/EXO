# 📸 Imágenes Pendientes

Este archivo lista las imágenes que necesitas agregar al proyecto.

## 🎯 Logo Principal

✅ **EXOlogo.png** - Ya está en la raíz del proyecto

## 📦 Imágenes de Productos

Para cada producto necesitas 3 imágenes:

### 1. Diseño Web Premium
**Carpeta**: `src/images/products/diseno-web-premium/`

- `hero.jpg` - 1920x1080px (max 200KB)
  - Imagen de sitio web en laptop/desktop
  - Sugerencia: Mockup de interfaz web moderna
  
- `thumb.jpg` - 600x400px (max 100KB)
  - Miniatura para el grid de productos
  - Puede ser la misma hero pero reducida
  
- `og.jpg` - 1200x630px (max 150KB)
  - Para compartir en redes sociales
  - Debe verse bien en Facebook/LinkedIn

### 2. Identidad de Marca
**Carpeta**: `src/images/products/identidad-marca/`

- `hero.jpg` - 1920x1080px
  - Elementos de branding (logos, tarjetas, papelería)
  
- `thumb.jpg` - 600x400px
  
- `og.jpg` - 1200x630px

### 3. Gestión de Redes Sociales
**Carpeta**: `src/images/products/gestion-redes/`

- `hero.jpg` - 1920x1080px
  - Posts de Instagram/Facebook, métricas, engagement
  
- `thumb.jpg` - 600x400px
  
- `og.jpg` - 1200x630px

## 🔧 Herramientas Recomendadas

### Para crear las carpetas:
```bash
mkdir -p src/images/products/diseno-web-premium
mkdir -p src/images/products/identidad-marca
mkdir -p src/images/products/gestion-redes
```

### Bancos de Imágenes Gratis:
- **Unsplash**: https://unsplash.com
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com

### Para optimizar imágenes:
- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app

## 🚀 Mientras tanto...

El sitio funcionará con las rutas configuradas. Las imágenes que falten simplemente no se mostrarán hasta que las agregues.

**Para agregar las imágenes después:**

1. Agrega las imágenes en sus carpetas correspondientes
2. Commit y push:
```bash
git add src/images/
git commit -m "Add product images"
git push
```

El sitio se actualizará automáticamente con GitHub Actions.