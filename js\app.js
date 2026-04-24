// ===== CARRITO =====
let carrito = [];

// ===== INICIO =====
document.addEventListener("DOMContentLoaded", () => {
  cargarCarrito();
  activarBotones();
});

// ===== BOTONES =====
function activarBotones() {
  const botones = document.querySelectorAll(".btn-agregar");

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      const nombre = btn.dataset.nombre;
      const precio = parseFloat(btn.dataset.precio);

      agregarProducto(nombre, precio);
    });
  });
}

// ===== AGREGAR =====
function agregarProducto(nombre, precio) {
  carrito.push({ nombre, precio });

  guardarCarrito();
  animacionBoton();
  mensajeBonito(nombre);
}

// ===== MENSAJE BONITO =====
function mensajeBonito(nombre) {
  console.log(`✨ ${nombre} agregado al carrito 🛒`);
}

// ===== ANIMACIÓN SIMPLE =====
function animacionBoton() {
  document.body.style.transition = "0.2s";
  document.body.style.transform = "scale(0.99)";

  setTimeout(() => {
    document.body.style.transform = "scale(1)";
  }, 150);
}

// ===== VER CARRITO =====
function verCarrito() {
  console.table(carrito);
}

// ===== TOTAL =====
function totalCarrito() {
  const total = carrito.reduce((acc, p) => acc + p.precio, 0);
  console.log("💰 Total: S/ " + total);
}

// ===== ELIMINAR =====
function eliminarProducto(nombre) {
  carrito = carrito.filter(p => p.nombre !== nombre);
  guardarCarrito();
}

// ===== STORAGE =====
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
  const data = localStorage.getItem("carrito");
  if (data) carrito = JSON.parse(data);
}
