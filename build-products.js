#!/usr/bin/env node

/**
 * BUILD PRODUCTS
 * Generador automático de páginas HTML desde archivos JSON
 */

const fs = require('fs');
const path = require('path');

class ProductBuilder {
  constructor() {
    this.productsDir = './src/products';
    this.outputDir = './productos';
    this.templatePath = './templates/product-template.html';
    this.template = '';
    this.products = [];
  }
  
  /**
   * Ejecutar el build
   */
  async build() {
    console.log('🚀 Iniciando generación de páginas de productos...\n');
    
    try {
      // Cargar template
      this.loadTemplate();
      
      // Cargar productos
      this.loadProducts();
      
      // Crear directorio de salida
      this.ensureOutputDir();
      
      // Generar páginas
      this.generatePages();
      
      // Generar índice de productos
      this.generateProductsIndex();
      
      console.log('\n✅ ¡Build completado exitosamente!');
      console.log(`📄 ${this.products.length} páginas generadas en ${this.outputDir}/`);
      
    } catch (error) {
      console.error('❌ Error durante el build:', error);
      process.exit(1);
    }
  }
  
  /**
   * Cargar plantilla HTML
   */
  loadTemplate() {
    console.log('📖 Cargando plantilla...');
    
    if (!fs.existsSync(this.templatePath)) {
      throw new Error(`Plantilla no encontrada: ${this.templatePath}`);
    }
    
    this.template = fs.readFileSync(this.templatePath, 'utf8');
    console.log('✓ Plantilla cargada');
  }
  
  /**
   * Cargar productos desde archivos JSON
   */
  loadProducts() {
    console.log('📦 Cargando productos...');
    
    if (!fs.existsSync(this.productsDir)) {
      throw new Error(`Directorio de productos no encontrado: ${this.productsDir}`);
    }
    
    const files = fs.readdirSync(this.productsDir)
      .filter(file => file.endsWith('.json'));
    
    if (files.length === 0) {
      console.warn('⚠️  No se encontraron productos');
      return;
    }
    
    files.forEach(file => {
      const filePath = path.join(this.productsDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      try {
        const product = JSON.parse(content);
        this.products.push(product);
        console.log(`  ✓ ${product.title}`);
      } catch (error) {
        console.error(`  ✗ Error en ${file}:`, error.message);
      }
    });
    
    console.log(`✓ ${this.products.length} productos cargados`);
  }
  
  /**
   * Asegurar que existe el directorio de salida
   */
  ensureOutputDir() {
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
      console.log(`✓ Directorio creado: ${this.outputDir}/`);
    }
  }
  
  /**
   * Generar páginas HTML para todos los productos
   */
  generatePages() {
    console.log('\n🔨 Generando páginas...');
    
    this.products.forEach(product => {
      const html = this.renderProduct(product);
      const filename = `${product.slug}.html`;
      const filepath = path.join(this.outputDir, filename);
      
      fs.writeFileSync(filepath, html, 'utf8');
      console.log(`  ✓ ${filename}`);
    });
  }
  
  /**
   * Renderizar HTML de un producto
   */
  renderProduct(product) {
    let html = this.template;
    
    // Reemplazos básicos
    html = html.replace(/\{\{title\}\}/g, product.title);
    html = html.replace(/\{\{category\}\}/g, product.category || '');
    html = html.replace(/\{\{shortDescription\}\}/g, product.shortDescription || '');
    html = html.replace(/\{\{description\}\}/g, product.description || '');
    html = html.replace(/\{\{heroImage\}\}/g, product.heroImage || '');
    html = html.replace(/\{\{deliveryTime\}\}/g, product.deliveryTime || '');
    
    // CTA
    html = html.replace(/\{\{ctaText\}\}/g, product.cta?.text || 'Contactar');
    html = html.replace(/\{\{ctaUrl\}\}/g, product.cta?.url || '#');
    html = html.replace(/\{\{ctaSecondaryText\}\}/g, product.cta?.secondary?.text || '');
    html = html.replace(/\{\{ctaSecondaryUrl\}\}/g, product.cta?.secondary?.url || '#');
    
    // Precio
    if (product.pricing) {
      const priceLabel = product.pricing.type === 'from' ? 'Desde' : '';
      html = html.replace(/\{\{priceLabel\}\}/g, priceLabel);
      html = html.replace(/\{\{priceAmount\}\}/g, product.pricing.amount);
      html = html.replace(/\{\{priceCurrency\}\}/g, product.pricing.currency);
      html = html.replace(/\{\{pricePeriod\}\}/g, 
        product.pricing.period !== 'proyecto' ? `/${product.pricing.period}` : ''
      );
    }
    
    // Metadata
    html = html.replace(/\{\{metaTitle\}\}/g, product.metadata?.title || product.title);
    html = html.replace(/\{\{metaDescription\}\}/g, product.metadata?.description || product.shortDescription);
    html = html.replace(/\{\{metaKeywords\}\}/g, product.metadata?.keywords || '');
    html = html.replace(/\{\{metaOgImage\}\}/g, product.metadata?.ogImage || product.heroImage || '');
    
    // Beneficios
    const benefitsHtml = (product.benefits || [])
      .map(benefit => `
        <div class="benefit-item">
          <div class="benefit-icon">✓</div>
          <div class="benefit-text">${benefit}</div>
        </div>
      `).join('');
    html = html.replace(/\{\{benefits\}\}/g, benefitsHtml);
    
    // Características
    const featuresHtml = (product.features || [])
      .map(feature => `
        <div class="feature-card">
          <span class="feature-icon">${feature.icon}</span>
          <h3 class="feature-title">${feature.title}</h3>
          <p class="feature-description">${feature.description}</p>
        </div>
      `).join('');
    html = html.replace(/\{\{features\}\}/g, featuresHtml);
    
    // Proceso
    const processHtml = (product.process || [])
      .map(step => `
        <div class="process-step">
          <div class="process-number">${step.step}</div>
          <div class="process-content">
            <h4 class="process-title">${step.title}</h4>
            <p class="process-description">${step.description}</p>
          </div>
        </div>
      `).join('');
    html = html.replace(/\{\{process\}\}/g, processHtml);
    
    return html;
  }
  
  /**
   * Generar índice de productos (para futura referencia)
   */
  generateProductsIndex() {
    const index = {
      generatedAt: new Date().toISOString(),
      totalProducts: this.products.length,
      products: this.products.map(p => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        category: p.category,
        url: `./productos/${p.slug}.html`
      }))
    };
    
    const indexPath = path.join(this.outputDir, 'index.json');
    fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), 'utf8');
    console.log(`\n✓ Índice generado: ${indexPath}`);
  }
}

/**
 * Ejecutar si se llama directamente
 */
if (require.main === module) {
  const builder = new ProductBuilder();
  builder.build();
}

module.exports = ProductBuilder;