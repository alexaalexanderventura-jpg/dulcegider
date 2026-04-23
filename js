// ===== MENSAJE DE BIENVENIDA =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("Bienvenido a la pastelería 🍰");

  const titulo = document.querySelector("header h1");
  if (titulo) {
    titulo.addEventListener("click", () => {
      alert("Bienvenido a nuestra pastelería 🎂");
    });
  }
});
document.querySelectorAll(".btn-agregar").forEach(btn => {
  btn.addEventListener("click", () => {
    const nombre = btn.dataset.nombre;
    const precio = parseFloat(btn.dataset.precio);
    agregarAlCarrito(nombre, precio);
  });
});
