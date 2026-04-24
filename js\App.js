// ===== CARRITO =====
let carrito = [];

// Cargar carrito guardado
document.addEventListener("DOMContentLoaded", () => {
  cargarCarrito();
  eventosBotones();
});

// ===== EVENTOS =====
function eventosBotones() {
  const botones = document.querySelectorAll(".btn-agregar");

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      const nombre = btn.dataset.nombre;
      const precio = parseFloat(btn.dataset.precio);

      agregarAlCarrito(nombre, precio);
    });
  });
}

// ===== FUNCIONES CARRITO =====
function agregarAlCarrito(nombre, precio) {
  const producto = { nombre, precio };
  carrito.push(producto);

  guardarCarrito();
  alert(nombre + " agregado al carrito 🛒");
}

function verCarrito() {
  console.log("🛒 Carrito:", carrito);
}

function totalCarrito() {
  let total = carrito.reduce((acc, p) => acc + p.precio, 0);
  alert("Total a pagar: S/ " + total);
}

// ===== LOCAL STORAGE =====
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
  const data = localStorage.getItem("carrito");
  if (data) {
    carrito = JSON.parse(data);
  }
}
