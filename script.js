// Datos de productos de ejemplo
const productos = [
    {
        id: 1,
        nombre: "Auriculares Bluetooth",
        precio: 59.99,
        precioOriginal: 79.99,
        imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Auriculares inalámbricos con cancelación de ruido",
        categoria: "audio",
        enOferta: true
    },
    {
        id: 2,
        nombre: "Smartwatch Deportivo",
        precio: 89.99,
        precioOriginal: 119.99,
        imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Reloj inteligente con monitor de actividad y sueño",
        categoria: "wearables",
        enOferta: true
    },
    {
        id: 3,
        nombre: "Cámara DSLR Profesional",
        precio: 699.99,
        imagen: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Cámara réflex digital con lente 18-55mm",
        categoria: "fotografia",
        enOferta: false
    },
    {
        id: 4,
        nombre: "Altavoz Inteligente",
        precio: 49.99,
        precioOriginal: 69.99,
        imagen: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Altavoz con asistente virtual integrado",
        categoria: "audio",
        enOferta: true
    },
    {
        id: 5,
        nombre: "Teclado Mecánico Gaming",
        precio: 79.99,
        imagen: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Teclado mecánico RGB para gamers",
        categoria: "computacion",
        enOferta: false
    },
    {
        id: 6,
        nombre: "Monitor 4K Ultra HD",
        precio: 299.99,
        precioOriginal: 399.99,
        imagen: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        descripcion: "Monitor de 27 pulgadas con resolución 4K",
        categoria: "computacion",
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
    mostrarNotificacion(`Agregaste: ${producto.nombre}`);
    
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
        background-color: #2ecc71;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(notificacion);
    
    // Eliminar notificación después de 3 segundos
    setTimeout(() => {
        document.body.removeChild(notificacion);
    }, 3000);
}

// Función para actualizar contador de carrito
function actualizarContadorCarrito() {
    const contadorCarrito = document.querySelector('.header-icons a[href="#carrito"]');
    if (contadorCarrito) {
        // Crear o actualizar el contador
        let contador = contadorCarrito.querySelector('.contador');
        if (!contador) {
            contador = document.createElement('span');
            contador.classList.add('contador');
            contadorCarrito.appendChild(contador);
        }
        contador.textContent = carrito.length;
        
        // Estilos del contador
        contador.style.cssText = `
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: #e74c3c;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: bold;
        `;
    }
}

// Ejecutar cuando la página cargue
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    actualizarContadorCarrito();
});
