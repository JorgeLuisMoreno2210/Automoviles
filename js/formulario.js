document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("luxuryCarForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío automático

        // Obtener valores de los campos
        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const city = document.getElementById("city").value.trim();
        const budget = document.getElementById("budget").value.trim();
        const contactMethod = document.querySelector('input[name="contactMethod"]:checked');
        
        // Expresiones regulares para validación
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{10}$/; // Solo números de 10 dígitos

        // Validaciones
        if (!fullName || !email || !phone || !city || !budget || !contactMethod) {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("El número de teléfono debe contener 10 dígitos.");
            return;
        }

        // Mostrar mensaje de éxito
        const successMessage = document.createElement("div");
        successMessage.className = "success-message";
        successMessage.innerHTML = "✅ Solicitud enviada con éxito. Nos pondremos en contacto pronto.";
        form.appendChild(successMessage);

        // Limpiar formulario después de 3 segundos
        setTimeout(() => {
            form.reset();
            successMessage.remove();
        }, 3000);
    });
});
