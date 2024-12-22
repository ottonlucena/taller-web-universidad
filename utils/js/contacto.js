// Esperamos a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos los elementos necesarios del formulario
  const inputs = document.querySelectorAll("form [required]");
  const select = document.getElementById("request");
  const selectError = document.getElementById("solicitud-error");
  const form = document.getElementById("form");
  const messageField = document.getElementById("message");

  // Agregamos mensajes de error dinámicos a los inputs con atributo "required"
  inputs.forEach((input) => {
    const span = document.createElement("span");
    span.id = input.name; // Usamos el nombre del input como ID del mensaje de error
    span.textContent = input.title; // Mostramos el mensaje de validación definido en el atributo "title"
    span.classList.add("contact-error", "none"); // Agregamos las clases necesarias para ocultar inicialmente el mensaje
    input.insertAdjacentElement("afterend", span); // Insertamos el mensaje después del input correspondiente
  });

  // Validamos los inputs requeridos en tiempo real (evento keyup)
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      const input = e.target;
      const pattern = input.pattern || input.dataset.pattern; // Obtenemos el patrón de validación

      if (pattern) {
        const regex = new RegExp(pattern); // Creamos una expresión regular con el patrón
        document
          .getElementById(input.name)
          .classList.toggle("is-active", !regex.test(input.value)); // Mostramos/ocultamos el mensaje según corresponda
      } else {
        // Validación para inputs sin patrón (solo verificamos que no estén vacíos)
        document
          .getElementById(input.name)
          .classList.toggle("is-active", input.value.trim() === "");
      }
    }
  });

  // Validamos cambios en el campo "Tipo de solicitud"
  select.addEventListener("change", () => {
    const isValid = select.value !== ""; // Verificamos que el campo tenga un valor seleccionado
    selectError.classList.toggle("is-active", !isValid); // Mostramos/ocultamos el mensaje según sea necesario
  });

  // Validamos palabras clave en el campo "Mensaje" y actualizamos el select
  messageField.addEventListener("keyup", () => {
    const value = messageField.value.toLowerCase();
    if (value.includes("compra")) {
      select.value = "compra";
      selectError.classList.remove("is-active"); // Ocultamos el mensaje de error si la validación es correcta
    } else if (value.includes("venta")) {
      select.value = "venta";
      selectError.classList.remove("is-active");
    }
  });

  // Manejamos el envío del formulario
  document.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitamos que el formulario se envíe de forma predeterminada

    // Mostramos el loader mientras simulamos el envío de los datos
    const loader = document.querySelector(".contact-form-loader"),
      response = document.querySelector(".contact-form-response");

    loader.classList.remove("none");

    // Simulamos un envío exitoso tras 3 segundos
    setTimeout(() => {
      loader.classList.add("none"); // Ocultamos el loader
      response.classList.remove("none"); // Mostramos el mensaje de éxito
      form.reset(); // Limpiamos el formulario
    }, 3000);
  });
});
