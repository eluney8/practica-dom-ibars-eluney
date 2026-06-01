
    const personajes = [
{ 
    id: 1,
    nombre: "A-Bomb",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg"
    
},

{ 
    id: 2,
    nombre: "Abe Sapien",
    imagen:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg" 
},

{ 
    id: 3,
    nombre: "Abin Sur", 
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg" 
},

{ 
    id: 4,
    nombre: "Abomination", 
    imagen:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg"
},

{ 
    id: 5,
    nombre: "Abraxas",
    imagen:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg" 
},
];

const cardContainer = document.querySelector("#cardContainer");
const mostrarPersonajes = (Personajes) => {

    cardContainer.innerHTML = ""

    Personajes.forEach(personaje => {

       cardContainer.innerHTML += `
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 my-2" data-id="${personaje.id}">
                <div class="card" style="width: 9rem">
                    <img
                        src="${personaje.imagen}"
                        class="card-img-top"
                        alt="${personaje.nombre}"
                        style="height: 150px; object-fit: contain"
                    />
                    <div class="card-body">
                        <h5 class="card-title">${personaje.nombre}</h5>
                        <a href="#" class="btn btn-outline-danger btn-eliminar">Eliminar</a>
                    </div>
                </div>
            </div>
        `
    });
}

mostrarPersonajes(personajes)