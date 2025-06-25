// Animación de entrada suave
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

revealElements.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});

// Función para scroll, cambio texto y mostrar contenido extra
function scrollToSection(id) {
  const btn = document.querySelector("header#inicio button");
  const extraContent = document.getElementById("extra-content");

  if (!btn || !extraContent) return;

  btn.textContent = "Cargando...";
  btn.disabled = true;

  extraContent.textContent = "¡Gracias por interesarte en nosotros! 🌿";
  extraContent.style.opacity = "1";

  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });

  setTimeout(() => {
    btn.textContent = "Descúbrenos";
    btn.disabled = false;
    extraContent.style.opacity = "0";
    extraContent.textContent = "";
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formContacto");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío real del formulario

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("email").value.trim();
    const descripcion = document.getElementById("mensaje").value.trim();
    alert("✅ ¡Formulario enviado con éxito!");
    
  });
});