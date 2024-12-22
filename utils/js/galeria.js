//Esperamos a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
  // Definimos un arreglo que contiene la información de las imágenes
  const images = [
    {
      title: "El Grito",
      src: "utils/img/galeria8.jpg",
      alt: "Imagen 1",
      description:
        "Una obra maestra del expresionismo, creada por Edvard Munch.",
    },
    {
      title: "Personas",
      src: "utils/img/galeria10.jpg",
      alt: "Imagen 2",
      description: "Una representación de la diversidad y la humanidad.",
    },
    {
      title: "Paisaje sur de Chile",
      src: "utils/img/galeria9.jpg",
      alt: "Imagen 3",
      description:
        "Un hermoso paisaje natural del sur de Chile, lleno de vida y color.",
    },
    {
      title: "Abstracto",
      src: "utils/img/galeria11.jpg",
      alt: "Imagen 4",
      description:
        "Una obra de arte abstracta que desafía las convenciones visuales.",
    },
    {
      title: "La Unión",
      src: "utils/img/galeria2.jpg",
      alt: "Imagen 5",
      description:
        "Una representación simbólica de la unidad y la colaboración.",
    },
    {
      title: "Sur de Argentina",
      src: "utils/img/galeria4.jpg",
      alt: "Imagen 6",
      description:
        "Un impresionante paisaje del sur de Argentina, lleno de belleza y serenidad.",
    },
    {
      title: "Colores vivos",
      src: "utils/img/galeria5.jpg",
      alt: "Imagen 7",
      description:
        "Una explosión de colores vibrantes y enérgicos que capturan la vista.",
    },
    {
      title: "Mis pinceles",
      src: "utils/img/galeria6.jpg",
      alt: "Imagen 8",
      description:
        "Un homenaje a las herramientas esenciales del artista: los pinceles.",
    },
    {
      title: "Revolución",
      src: "utils/img/galeria7.png",
      alt: "Imagen 9",
      description:
        "Una obra que simboliza el cambio y la transformación a través del arte.",
    },
  ];

  // Seleccionamos el contenedor donde se mostrarán las imágenes
  const sectionImg = document.getElementById("section-img");

  //Renderiza todas las imágenes en la galería
  function renderImages() {
    sectionImg.innerHTML = "";

    // Recorremos el arreglo de imágenes y generamos dinámicamente las "cards"
    images.forEach((image, index) => {
      // Creamos el contenedor principal para cada imagen
      const div = document.createElement("div");
      div.classList.add("image-card");

      // Creamos el título y lo añadimos
      const title = document.createElement("p");
      title.textContent = image.title;
      title.classList.add("text-center", index);

      // Creamos el elemento de imagen y configuramos sus atributos
      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt;

      // Creamos un botón para mostrar más información
      const buttonMore = document.createElement("button");
      buttonMore.textContent = "Ver más";
      buttonMore.classList.add(
        "btn",
        "btn-dark",
        "d-grip",
        "gap-2",
        "col-6",
        "mx-auto",
        "mt-2"
      );

      // Agregamos un evento al botón para abrir el modal con más información
      buttonMore.addEventListener("click", () => openModal(image, index));

      // Añadimos los elementos al contenedor principal
      div.appendChild(title);
      div.appendChild(img);
      div.appendChild(buttonMore);

      // Insertamos el contenedor en la sección de la galería
      sectionImg.appendChild(div);
    });
  }

  /**
   * Abre un modal con los detalles de la imagen seleccionada.
   * @ param {Object} image - Información de la imagen seleccionada.
   * @ param {number} index - Índice de la imagen en el arreglo.
   */
  function openModal(image, index) {
    // Seleccionamos los elementos del modal
    const modalTitle = document.getElementById("imageModalLabel");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const btnDelete = document.getElementById("btn-delete");

    // Actualizamos el contenido del modal con la información de la imagen
    modalTitle.textContent = image.title;
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalDescription.textContent = image.description;

    // Asignamos el evento de eliminación al botón correspondiente
    btnDelete.onclick = () => deleteImage(index);

    // Mostramos el modal usando Bootstrap
    const modal = new bootstrap.Modal(document.getElementById("imageModal"));
    //Ejecutamos el método show (El cúal retorna la llamda del modal - Visto en clases.)
    modal.show();
  }

  /**
   * Elimina una imagen del arreglo y actualiza la galería.
   * @ param {number} index - Índice de la imagen a eliminar.
   */
  function deleteImage(index) {
    images.splice(index, 1); // Eliminamos la imagen del arreglo

    // Actualizamos la galería
    renderImages();

    // Cerramos el modal actual
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("imageModal")
    );
    //utilizamos el metodo hide, para quitar el modal
    modal.hide();
  }

  // Renderizamos las imágenes iniciales de la galería
  renderImages();
});
