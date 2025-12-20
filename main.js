// Formulario de contacto que envía los datos a WhatsApp

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const numeroWhatsApp = "5219611389301"; // CAMBIA ESTE NÚMERO

    let texto =
`Nuevo registro de información

Nombre: ${nombre}
Correo: ${email}
Teléfono: ${telefono}`;

    if (mensaje) {
      texto += `\nMensaje: ${mensaje}`;
    }

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");

    form.reset();
  });
});