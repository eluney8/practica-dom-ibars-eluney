const personajes = [
  {
    id: 1,
    nombre: "A-Bomb",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg",
  },

  {
    id: 2,
    nombre: "Abe Sapien",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg",
  },

  {
    id: 3,
    nombre: "Abin Sur",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg",
  },

  {
    id: 4,
    nombre: "Abomination",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg",
  },

  {
    id: 5,
    nombre: "Abraxas",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg",
  },
];

let listaPersonajes = [...personajes];

const cardContainer = document.querySelector("#cardContainer");
const mostrarPersonajes = (Personajes) => {
  cardContainer.innerHTML = "";
  Personajes.forEach((personaje) => {
    const { id, nombre, imagen } = personaje;

    cardContainer.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-2" data-id="${id}">
                <div class="card" style="width: 14rem">
                    <img
                        src="${imagen}"
                        class="card-img-top"
                        alt="${nombre}"
                        style="object-fit: contain"
                    />
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <a href="#" class="btn btn-outline-danger btn-eliminar">Eliminar</a>
                    </div>
                </div>
            </div>
        `;
  });
};

mostrarPersonajes(listaPersonajes);

cardContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-eliminar")) {
    const buscarID = e.target.closest(".col-12");
    const idPersonaje = Number(buscarID.dataset.id);
    listaPersonajes = listaPersonajes.filter((personaje) => {
      return personaje.id !== idPersonaje;
    });
    mostrarPersonajes(listaPersonajes);
  }
});

const formBuscar = document.querySelector("#formBuscar");
const inputBuscar = document.querySelector("#inputBuscar");

formBuscar.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombreBuscar = inputBuscar.value.toLowerCase();
  const personajesFiltrados = listaPersonajes.filter((p) =>
    p.nombre.toLowerCase().includes(nombreBuscar)
  ); 
  mostrarPersonajes(personajesFiltrados);
});
