@echo off
echo 🚀 Subiendo EXO Digital Studio a GitHub...
echo ==================================

REM Inicializar git si no está inicializado
if not exist ".git" (
    echo 📁 Inicializando repositorio Git...
    git init
) else (
    echo ✅ Git ya está inicializado
)

REM Agregar todos los archivos
echo 📦 Agregando archivos...
git add .

REM Hacer commit
echo 💾 Creando commit...
git commit -m "Initial commit: EXO Digital Studio website

✨ Features:
- Intro épica animada sin parpadeos
- Sistema modular de productos
- GitHub Actions CI/CD
- Diseño oscuro minimalista responsive
- SEO optimizado y accesible
- 3 productos de ejemplo completos

📧 Contacto: +51 925 475 680 | exo.digitalstudio@gmail.com
🌐 Sitio: https://jpc19832020-tech.github.io/EXO/"

REM Agregar remote
echo 🔗 Conectando con GitHub...
git remote add origin https://github.com/jpc19832020-tech/EXO.git

REM Renombrar rama a main
git branch -M main

REM Hacer push
echo 📤 Subiendo a GitHub...
git push -u origin main

echo.
echo ✅ ¡Proyecto subido exitosamente!
echo.
echo 🌐 Siguientes pasos:
echo 1. Ve a https://github.com/jpc19832020-tech/EXO
echo 2. Click en Settings -^> Pages
echo 3. En 'Source' selecciona: GitHub Actions
echo 4. Espera a que se complete el workflow
echo 5. Tu sitio estará en: https://jpc19832020-tech.github.io/EXO/
echo.
echo 🎯 ¡Listo para el mundo!
pause