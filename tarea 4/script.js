const productos = [
    {
        id: 1,
        nombre: "AK-47",
        precio: 670000,
        stock: 5
    },
    {
        id: 2,
        nombre: "Berettas Dobles",
        precio: 367000,
        stock: 10
    },
    {
        id: 3,
        nombre: "AWP",
        precio: 800000,
        stock: 8
    }
];

const carrito = [];

const productosElemento =
    document.querySelector("#productos");

const carritoElemento =
    document.querySelector("#carrito");

const totalElemento =
    document.querySelector("#total");

const cantidadElemento =
    document.querySelector("#cantidad");

const vaciarBoton =
    document.querySelector("#vaciar");


function mostrarProductos() {

    productosElemento.innerHTML = "";

    productos.forEach(producto => {

        const elemento =
            document.createElement("div");

        elemento.classList.add("producto");

        elemento.innerHTML = `
            <h3>${producto.nombre}</h3>

            <p>
                Precio: $${producto.precio}
            </p>

            <p>
                Stock: ${producto.stock}
            </p>

            <button
                onclick="agregarAlCarrito(${producto.id})">
                Agregar
            </button>
        `;

        productosElemento.appendChild(elemento);
    });
}


function agregarAlCarrito(id) {

  

    mostrarCarrito();

    mostrarProductos();
}


function calcularTotal() {

    
}


function mostrarCarrito() {

    carritoElemento.innerHTML = "";

    if (carrito.length === 0) {

        carritoElemento.innerHTML =
            "<p>El carrito estÃ¡ vacÃ­o</p>";

        totalElemento.textContent = "$0";

        cantidadElemento.textContent = "0";

        return;
    }

    carrito.forEach(producto => {

        const elemento =
            document.createElement("div");

        elemento.classList.add("item-carrito");

        elemento.innerHTML = `
            <span>
                ${producto.nombre}
            </span>

            <strong>
                $${producto.precio}
            </strong>
        `;

        carritoElemento.appendChild(elemento);
    });

    const total = calcularTotal();

    totalElemento.textContent =
        `$${total}`;

    cantidadElemento.textContent =
        carrito.length;
}


vaciarBoton.addEventListener("click", () => {

    carrito.length = 0;

    mostrarCarrito();

    mostrarProductos();

});


mostrarProductos();

mostrarCarrito();
