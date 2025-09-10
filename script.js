// Datos de productos de ejemplo (estilo Delirius)
const productos = [
    {
        id: 1,
        nombre: "Hoodie Delirius Exclusive",
        precio: 49.99,
        precioOriginal: 69.99,
        imagen: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Hoodie premium con diseño exclusivo",
        categoria: "ropa",
        enOferta: true
    },
    {
        id: 2,
        nombre: "Gorro Streetwear",
        precio: 24.99,
        precioOriginal: 34.99,
        imagen: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Gorro de alta calidad con logo bordado",
        categoria: "accesorios",
        enOferta: true
    },
    {
        id: 3,
        nombre: "Zapatillas Urbanas",
        precio: 89.99,
        imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Zapatillas cómodas para el día a día",
        categoria: "calzado",
        enOferta: false
    },
    {
        id: 4,
        nombre: "Mochila Delirius",
        precio: 59.99,
        precioOriginal: 79.99,
        imagen: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Mochila resistente con múltiples compartimentos",
        categoria: "accesorios",
        enOferta: true
    },
    {
        id: 5,
        nombre: "Camiseta Premium",
        precio: 34.99,
        imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Camiseta de algodón 100% de alta calidad",
        categoria: "ropa",
        enOferta: false
    },
    {
        id: 6,
        nombre: "Gafas de Sol",
        precio: 45.99,
        precioOriginal: 65.99,
        imagen: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Gafas con protección UV y diseño moderno",
        categoria: "accesorios",
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
            ? '<span class="etiqueta-oferta">OFERTA</span>' 
            : '';
        
        productCard.innerHTML = `
            ${etiquetaOferta}
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="product-card-content">
                <h3>${producto.nombre}</h3>
                <p class="descripcion">${producto.descripcion}</p>
                ${precioHTML}
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    
    // Mostrar notificación
    mostrarNotificacion(`✅ Agregaste: ${producto.nombre}`);
    
    // Actualizar contador de carrito
    actualizarContadorCarrito();
    
    console.log('Producto agregado al carrito:', producto);
    console.log('Carrito actual:', carrito);
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
        background-color: #FF8C00;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
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
