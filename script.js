// Datos de productos de ejemplo (simulando una base de datos)
const productos = [
    {
        id: 1,
        nombre: "Producto Ejemplo 1",
        precio: 29.99,
        imagen: "https://via.placeholder.com/250x200/3498db/ffffff?text=Producto+1",
        descripcion: "Descripción breve del producto 1"
    },
    {
        id: 2,
        nombre: "Producto Ejemplo 2",
        precio: 39.99,
        imagen: "https://via.placeholder.com/250x200/e74c3c/ffffff?text=Producto+2",
        descripcion: "Descripción breve del producto 2"
    },
    {
        id: 3,
        nombre: "Producto Ejemplo 3",
        precio: 19.99,
        imagen: "https://via.placeholder.com/250x200/2ecc71/ffffff?text=Producto+3",
        descripcion: "Descripción breve del producto 3"
    }
];

// Función para mostrar productos en la página
function mostrarProductos() {
    const productGrid = document.querySelector('.product-grid');
    
    productos.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p class="precio">$${producto.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Función para agregar productos al carrito (simulado)
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    alert(`Agregaste: ${producto.nombre} - $${producto.precio.toFixed(2)}`);
    console.log('Producto agregado al carrito:', producto);
}

// Ejecutar cuando la página cargue
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});
