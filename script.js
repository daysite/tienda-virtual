// Datos de productos de ejemplo (estilo Delirius)
const productos = [
    {
        id: 1,
        nombre: "Premium API Access",
        precio: 29.99,
        precioOriginal: 49.99,
        imagen: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Full access to all API endpoints with premium support",
        categoria: "api",
        enOferta: true
    },
    {
        id: 2,
        nombre: "CDN Storage Package",
        precio: 89.99,
        precioOriginal: 119.99,
        imagen: "https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "500GB CDN storage with global edge locations",
        categoria: "cdn",
        enOferta: true
    },
    {
        id: 3,
        nombre: "Developer Documentation",
        precio: 19.99,
        imagen: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Comprehensive documentation and code examples",
        categoria: "docs",
        enOferta: false
    },
    {
        id: 4,
        nombre: "Webhook Integration",
        precio: 45.99,
        precioOriginal: 65.99,
        imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Real-time webhook integration services",
        categoria: "api",
        enOferta: true
    },
    {
        id: 5,
        nombre: "SSL Certificate",
        precio: 34.99,
        imagen: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Secure SSL certificates for your domains",
        categoria: "security",
        enOferta: false
    },
    {
        id: 6,
        nombre: "Database Storage",
        precio: 75.99,
        precioOriginal: 95.99,
        imagen: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Secure cloud database storage solutions",
        categoria: "storage",
        enOferta: true
    }
];

// Carrito de compras
let carrito = [];

// Función para mostrar productos en la página
function mostrarProductos() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    
    productos.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // Verificar si el producto está en oferta
        const precioHTML = producto.enOferta 
            ? `<p class="precio"><span class="precio-original">$${producto.precioOriginal.toFixed(2)}</span> $${producto.precio.toFixed(2)}</p>`
            : `<p class="precio">$${producto.precio.toFixed(2)}</p>`;
        
        // Verificar si tiene etiqueta de oferta
        const etiquetaOferta = producto.enOferta 
            ? '<span class="etiqueta-oferta">SAVE 40%</span>' 
            : '';
        
        productCard.innerHTML = `
            ${etiquetaOferta}
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="descripcion">${producto.descripcion}</p>
            ${precioHTML}
            <button onclick="agregarAlCarrito(${producto.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    
    // Mostrar notificación
    mostrarNotificacion(`✅ Added to cart: ${producto.nombre}`);
    
    // Actualizar contador de carrito
    actualizarContadorCarrito();
    
    console.log('Producto agregado al carrito:', producto);
}

// Función para mostrar notificación
function mostrarNotificacion(mensaje) {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.textContent = mensaje;
    notificacion.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #48bb78;
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-weight: 500;
    `;
    
    document.body.appendChild(notificacion);
    
    // Eliminar notificación después de 3 segundos
    setTimeout(() => {
        document.body.removeChild(notificacion);
    }, 3000);
}

// Función para actualizar contador de carrito
function actualizarContadorCarrito() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = carrito.length;
    }
}

// Ejecutar cuando la página cargue
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    actualizarContadorCarrito();
});
