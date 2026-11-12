document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los enlaces del footer
    const footerLinks = document.querySelectorAll(".footer-links a");
    const socialIcons = document.querySelectorAll(".social-icon");

    // Agrega efecto de resaltado al pasar el mouse sobre los enlaces
    footerLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "var(--Color-gris-claro)"; // Cambia el color al pasar el ratón
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "var(--Color-blanco-neutro)"; // Restaura el color original
        });
    });

    // Agrega efecto de escala al pasar el mouse sobre los iconos sociales
    socialIcons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.transform = "scale(1.2)"; // Agranda el icono
        });

        icon.addEventListener("mouseout", () => {
            icon.style.transform = "scale(1)"; // Restaura el tamaño original
        });
    });

    // Mostrar el año actual en el footer automáticamente
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
