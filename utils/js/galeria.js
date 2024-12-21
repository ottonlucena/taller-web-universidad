//Utilizamos el evento DOMContentLoaded para asegurarnos que este recargado
document.addEventListener("DOMContentLoaded", () => {
  //Creamos una constante de array con toda la información
  //Está para luego recorrelas
  const images = [
    { title: "El Grito", src: "utils/img/galeria8.jpg", alt: "Imagen 1" },
    { title: "Personas", src: "utils/img/galeria10.jpg", alt: "Imagen 2" },
    {
      title: "Paisaje sur de Chile",
      src: "utils/img/galeria9.jpg",
      alt: "Imagen 3",
    },
    { title: "Abstracto", src: "utils/img/galeria11.jpg", alt: "Imagen 4" },
    { title: "La Unión", src: "utils/img/galeria2.jpg", alt: "Imagen 5" },
    {
      title: "Sur de Argentina",
      src: "utils/img/galeria4.jpg",
      alt: "Imagen 6",
    },
    { title: "Colores vivos", src: "utils/img/galeria5.jpg", alt: "Imagen 7" },
    { title: "Mis pinceles", src: "utils/img/galeria6.jpg", alt: "Imagen 8" },
    { title: "Revolución", src: "utils/img/galeria7.png", alt: "Imagen 9" },
  ];

  //creamos la una constante seleccionando el contenedor donde insertaremos info
  const sectionImg = document.getElementById("section-img");

  //empezamos a recorrer el array
  images.forEach((image) => {
    //comenzamos a montar nuestra "card" en este caso creamos un div
    const div = document.createElement("div");
    div.classList.add("image-card");

    //creamos el la constante de nuestro titulo y le insertamos el texto
    const title = document.createElement("p");
    title.textContent = image.title;

    //creamos la imagen
    const img = document.createElement("img");

    //insertamos los atributos de la imagen
    img.src = image.src;
    img.alt = image.alt;

    //creamos el boton para nuestras card
    const button = document.createElement("button");
    button.textContent = "Leer más";
    button.classList.add(
      "btn",
      "btn-dark",
      "d-grip",
      "gap-2",
      "col-6",
      "mx-auto",
      "mt-2"
    );

    //asignamos una funcion de click para ver mas
    button.addEventListener("click", () => {
      //Definimos las constantes para cada id del modal
      const modalTitle = document.getElementById("imageModalLabel");
      const modalImage = document.getElementById("modalImage");
      modalImage.classList.add("img-fluid");
      const modalDescription = document.getElementById("modalDescription");

      //Agregamos las descripciones del modal
      modalTitle.textContent = image.title;
      modalImage.src = image.src;
      modalDescription.textContent = "Descripción";

      //Creamos la constante del Modal para luego llamarlo.
      const modal = new bootstrap.Modal(document.getElementById("imageModal"));
      //Ejecutamos el método show (El cúal retorna la llamda del modal - Visto en clases.)
      modal.show();
    });

    //insertamos lo creado al contenedor padre 'div' en este caso
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(button);

    //En este último paso insertamos todos los hijos al contenedor padre 'section'
    sectionImg.appendChild(div);
  });
});
