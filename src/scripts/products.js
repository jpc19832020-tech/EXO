/**
 * PRODUCTS LOADER
 * Carga y renderiza productos dinámicamente
 */

class ProductsLoader {
  constructor() {
    this.productsContainer = null;
    this.products = [];
    this.productsPath = './src/products/';
    
    this.init();
  }
  
  /**
   * Inicializar el loader
   */
  init() {
    this.productsContainer = document.getElementById('products-grid');
    
    if (this.productsContainer) {
      this.loadProducts();
    }
  }
  
  /**
   * Cargar productos desde archivos JSON
   */
  async loadProducts() {
    try {
      // Mostrar loading
      this.showLoading();
      
      // Lista de productos (esto se puede hacer dinámico con un índice)
      const productFiles = [
        'diseno-web-premium.json',
        'identidad-marca.json',
        'gestion-redes.json'
      ];
      
      // Cargar todos los productos
      const promises = productFiles.map(file => 
        this.loadProductFile(file)
      );
      
      this.products = await Promise.all(promises);
      
      // Filtrar productos válidos
      this.products = this.products.filter(p => p !== null);
      
      // Renderizar productos
      this.renderProducts();
      
    } catch (error) {
      console.error('Error cargando productos:', error);
      this.showError();
    }
  }
  
  /**
   * Cargar un archivo de producto individual
   */
  async loadProductFile(filename) {
    try {
      const response = await fetch(`${this.productsPath}${filename}`);
      
      if (!response.ok) {
        console.warn(`Producto no encontrado: ${filename}`);
        return null;
      }
      
      const product = await response.json();
      return product;
      
    } catch (error) {
      console.error(`Error cargando ${filename}:`, error);
      return null;
    }
  }
  
  /**
   * Renderizar productos en el grid
   */
  renderProducts() {
    if (this.products.length === 0) {
      this.showEmpty();
      return;
    }
    
    // Limpiar contenedor
    this.productsContainer.innerHTML = '';
    
    // Crear tarjeta para cada producto
    this.products.forEach((product, index) => {
      const card = this.createProductCard(product, index);
      this.productsContainer.appendChild(card);
    });
  }
  
  /**
   * Crear tarjeta de producto
   */
  createProductCard(product, index) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Imagen
    const imageDiv = document.createElement('div');
    imageDiv.className = 'product-image';
    
    const img = document.createElement('img');
    img.src = product.thumbnailImage || product.heroImage || './src/images/placeholder-product.jpg';
    img.alt = product.title;
    img.loading = 'lazy';
    
    imageDiv.appendChild(img);
    
    // Categoría badge
    if (product.category) {
      const category = document.createElement('span');
      category.className = 'product-category';
      category.textContent = product.category;
      imageDiv.appendChild(category);
    }
    
    // Contenido
    const content = document.createElement('div');
    content.className = 'product-content';
    
    const title = document.createElement('h3');
    title.className = 'product-title';
    title.textContent = product.title;
    
    const description = document.createElement('p');
    description.className = 'product-description';
    description.textContent = product.shortDescription;
    
    content.appendChild(title);
    content.appendChild(description);
    
    // Footer con precio y CTA
    const footer = document.createElement('div');
    footer.className = 'product-footer';
    
    // Precio
    if (product.pricing) {
      const priceDiv = document.createElement('div');
      priceDiv.className = 'product-price';
      
      const priceLabel = document.createElement('span');
      priceLabel.className = 'product-price-label';
      priceLabel.textContent = product.pricing.type === 'from' ? 'Desde' : '';
      
      const priceAmount = document.createElement('div');
      priceAmount.textContent = `$${product.pricing.amount} ${product.pricing.currency}`;
      
      if (product.pricing.period && product.pricing.period !== 'proyecto') {
        priceAmount.textContent += `/${product.pricing.period}`;
      }
      
      priceDiv.appendChild(priceLabel);
      priceDiv.appendChild(priceAmount);
      footer.appendChild(priceDiv);
    }
    
    // CTA
    const cta = document.createElement('span');
    cta.className = 'product-cta';
    cta.textContent = 'Ver detalles';
    cta.setAttribute('aria-label', `Ver detalles de ${product.title}`);
    footer.appendChild(cta);
    
    content.appendChild(footer);
    
    // Enlace que cubre toda la tarjeta
    const link = document.createElement('a');
    link.href = `./productos/${product.slug}.html`;
    link.className = 'product-card-link';
    link.textContent = `Ver ${product.title}`;
    link.setAttribute('aria-label', `Ver página completa de ${product.title}`);
    
    // Ensamblar tarjeta
    card.appendChild(link);
    card.appendChild(imageDiv);
    card.appendChild(content);
    
    return card;
  }
  
  /**
   * Mostrar estado de carga
   */
  showLoading() {
    this.productsContainer.innerHTML = `
      <div class="products-loading">
        <div class="loading-spinner"></div>
        <p>Cargando productos...</p>
      </div>
    `;
  }
  
  /**
   * Mostrar estado vacío
   */
  showEmpty() {
    this.productsContainer.innerHTML = `
      <div class="products-empty">
        <div class="products-empty-icon">📦</div>
        <h3 class="products-empty-title">Próximamente</h3>
        <p class="products-empty-description">
          Estamos trabajando en nuestros productos. ¡Vuelve pronto!
        </p>
      </div>
    `;
  }
  
  /**
   * Mostrar error
   */
  showError() {
    this.productsContainer.innerHTML = `
      <div class="products-empty">
        <div class="products-empty-icon">⚠️</div>
        <h3 class="products-empty-title">Error al cargar productos</h3>
        <p class="products-empty-description">
          Por favor, intenta recargar la página.
        </p>
      </div>
    `;
  }
}

/**
 * Auto-inicializar cuando el DOM esté listo
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ProductsLoader();
  });
} else {
  new ProductsLoader();
}

/**
 * Exportar para uso en otros scripts si es necesario
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProductsLoader;
}