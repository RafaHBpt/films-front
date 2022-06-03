const movies = [
  {
    id: 0,
    titulo: "Joker",
    descripcion:
      "En Ciudad Gótica, Arthur Fleck, un comediante con problemas mentales, marginado y maltratado por la sociedad. Esto lo lleva a descender a un espiral de revolución, sangre y crimen donde conoce a su alter-ego: El Joker.",
    year: "2019",
    generos: "Crimen/Drama/Suspenso",
    reparto: "Joaquín Phoenix, Robert De Niro, Zazie Beetz",
    director: "Todd Phillips",
    poster_url: "/images/joker.jpg",
  },
  {
    id: 1,
    titulo: "La lista de Schindler",
    descripcion:
      "Después de presenciar la persecución judía por parte de los nazis en la Polonia ocupada por los alemanes, el empresario Oskar Schindler se preocupa por su fuerza laboral judía.",
    year: "1993",
    generos: "Bélico/Drama",
    reparto: "Liam Neeson, Ralph Fiennes, Ben Kingsley, Embeth Davidtz",
    director: "Steven Spielberg",
    poster_url:
      "https://es.web.img3.acsta.net/pictures/19/02/12/18/49/4078948.jpg",
  },
  {
    id: 2,
    titulo: "The Shape of Water",
    descripcion:
      "En un centro secreto de investigación un conserje forma una relación única con una criatura anfibia que se encuentra en cautiverio. ",
    year: "2017",
    generos: "Fantasía/Drama/Romántico",
    reparto: "Sally Hawkins, Michael Shannon, Richard Jenkins",
    director: "Guillermo del Toro",
    poster_url: "/images/shapeofwater.jpg",
  },
  {
    id: 3,
    titulo: "Star Wars: Episode III - The Revenge of Sith",
    descripcion:
      "Las Guerras de clones empezaron hace 3 años, en donde los Jedi rescatan a Palpatine del conde Dooku, y Obi-wan le sigue la pista a una nueva amenaza, mientras Anakin actúa como agente doble.",
    year: "2005",
    generos: "Acción/Aventura/Fantasía",
    reparto: "Hayden Christensen, Natalie Portman, Ewan McGregor",
    director: "George Lucas",
    poster_url:
      "https://m.media-amazon.com/images/I/61aowd1AHNL._AC_SY679_.jpg",
  },
  //   "id": 3,
  //   "titulo": "La lista de Schindler",
  //   "descripcion": "Septiembre de 1939. Los nazis invaden Polonia. Los judíos son internados en guetos y enviados a campos de concentración. El empresario alemán Oskar Schindler (Liam Neeson), un dandy oportunista con talento para las relaciones públicas, aprovecha esta situación para prosperar económicamente. Comienza así una interesada relación con los militares nazis más poderosos para poner en marcha una fábrica en Cracovia, cuya mano de obra serán operarios judíos procedentes de los campos de concentración.",
  //   "year": "1993",
  //   "generos": "Bélico/Drama",
  //   "reparto": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Embeth Davidtz",
  //   "director": "Steven Spielberg",
  //   "poster_url": "/images/shapeofwater.jpg"
  // }, {
  //   "id": 3,
  //   "titulo": "La lista de Schindler",
  //   "descripcion": "Septiembre de 1939. Los nazis invaden Polonia. Los judíos son internados en guetos y enviados a campos de concentración. El empresario alemán Oskar Schindler (Liam Neeson), un dandy oportunista con talento para las relaciones públicas, aprovecha esta situación para prosperar económicamente. Comienza así una interesada relación con los militares nazis más poderosos para poner en marcha una fábrica en Cracovia, cuya mano de obra serán operarios judíos procedentes de los campos de concentración.",
  //   "year": "1993",
  //   "generos": "Bélico/Drama",
  //   "reparto": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Embeth Davidtz",
  //   "director": "Steven Spielberg",
  //   "poster_url": "/images/shapeofwater.jpg"
  // }, {
  //   "id": 3,
  //   "titulo": "La lista de Schindler",
  //   "descripcion": "Septiembre de 1939. Los nazis invaden Polonia. Los judíos son internados en guetos y enviados a campos de concentración. El empresario alemán Oskar Schindler (Liam Neeson), un dandy oportunista con talento para las relaciones públicas, aprovecha esta situación para prosperar económicamente. Comienza así una interesada relación con los militares nazis más poderosos para poner en marcha una fábrica en Cracovia, cuya mano de obra serán operarios judíos procedentes de los campos de concentración.",
  //   "year": "1993",
  //   "generos": "Bélico/Drama",
  //   "reparto": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Embeth Davidtz",
  //   "director": "Steven Spielberg",
  //   "poster_url": "/images/shapeofwater.jpg"
  // }, {
  //   "id": 3,
  //   "titulo": "La lista de Schindler",
  //   "descripcion": "Septiembre de 1939. Los nazis invaden Polonia. Los judíos son internados en guetos y enviados a campos de concentración. El empresario alemán Oskar Schindler (Liam Neeson), un dandy oportunista con talento para las relaciones públicas, aprovecha esta situación para prosperar económicamente. Comienza así una interesada relación con los militares nazis más poderosos para poner en marcha una fábrica en Cracovia, cuya mano de obra serán operarios judíos procedentes de los campos de concentración.",
  //   "year": "1993",
  //   "generos": "Bélico/Drama",
  //   "reparto": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Embeth Davidtz",
  //   "director": "Steven Spielberg",
  //   "poster_url": "/images/shapeofwater.jpg"
  // }, {
  //   "id": 3,
  //   "titulo": "La lista de Schindler",
  //   "descripcion": "Septiembre de 1939. Los nazis invaden Polonia. Los judíos son internados en guetos y enviados a campos de concentración. El empresario alemán Oskar Schindler (Liam Neeson), un dandy oportunista con talento para las relaciones públicas, aprovecha esta situación para prosperar económicamente. Comienza así una interesada relación con los militares nazis más poderosos para poner en marcha una fábrica en Cracovia, cuya mano de obra serán operarios judíos procedentes de los campos de concentración.",
  //   "year": "1993",
  //   "generos": "Bélico/Drama",
  //   "reparto": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Embeth Davidtz",
  //   "director": "Steven Spielberg",
  //   "poster_url": "/images/shapeofwater.jpg"
  // }, {
  //   "id": 3,
  //   "titulo": "La lista de Schindler",
  //   "descripcion": "Septiembre de 1939. Los nazis invaden Polonia. Los judíos son internados en guetos y enviados a campos de concentración. El empresario alemán Oskar Schindler (Liam Neeson), un dandy oportunista con talento para las relaciones públicas, aprovecha esta situación para prosperar económicamente. Comienza así una interesada relación con los militares nazis más poderosos para poner en marcha una fábrica en Cracovia, cuya mano de obra serán operarios judíos procedentes de los campos de concentración.",
  //   "year": "1993",
  //   "generos": "Bélico/Drama",
  //   "reparto": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Embeth Davidtz",
  //   "director": "Steven Spielberg",
  //   "poster_url": "/images/shapeofwater.jpg"
  // }, {
  //   "id": 3,
  //   "titulo": "La lista de Schindler",
  //   "descripcion": "Septiembre de 1939. Los nazis invaden Polonia. Los judíos son internados en guetos y enviados a campos de concentración. El empresario alemán Oskar Schindler (Liam Neeson), un dandy oportunista con talento para las relaciones públicas, aprovecha esta situación para prosperar económicamente. Comienza así una interesada relación con los militares nazis más poderosos para poner en marcha una fábrica en Cracovia, cuya mano de obra serán operarios judíos procedentes de los campos de concentración.",
  //   "year": "1993",
  //   "generos": "Bélico/Drama",
  //   "reparto": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Embeth Davidtz",
  //   "director": "Steven Spielberg",
  //   "poster_url": "/images/shapeofwater.jpg"
  // }, {
  //   "id": 3,
  //   "titulo": "La lista de Schindler",
  //   "descripcion": "Septiembre de 1939. Los nazis invaden Polonia. Los judíos son internados en guetos y enviados a campos de concentración. El empresario alemán Oskar Schindler (Liam Neeson), un dandy oportunista con talento para las relaciones públicas, aprovecha esta situación para prosperar económicamente. Comienza así una interesada relación con los militares nazis más poderosos para poner en marcha una fábrica en Cracovia, cuya mano de obra serán operarios judíos procedentes de los campos de concentración.",
  //   "year": "1993",
  //   "generos": "Bélico/Drama",
  //   "reparto": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Embeth Davidtz",
  //   "director": "Steven Spielberg",
  //   "poster_url": "/images/shapeofwater.jpg"
  // }, {
  //   "id": 3,
  //   "titulo": "La lista de Schindler",
  //   "descripcion": "Septiembre de 1939. Los nazis invaden Polonia. Los judíos son internados en guetos y enviados a campos de concentración. El empresario alemán Oskar Schindler (Liam Neeson), un dandy oportunista con talento para las relaciones públicas, aprovecha esta situación para prosperar económicamente. Comienza así una interesada relación con los militares nazis más poderosos para poner en marcha una fábrica en Cracovia, cuya mano de obra serán operarios judíos procedentes de los campos de concentración.",
  //   "year": "1993",
  //   "generos": "Bélico/Drama",
  //   "reparto": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Embeth Davidtz",
  //   "director": "Steven Spielberg",
  //   "poster_url": "/images/shapeofwater.jpg"
  // }, {
  //   "id": 3,
  //   "titulo": "La lista de Schindler",
  //   "descripcion": "Septiembre de 1939. Los nazis invaden Polonia. Los judíos son internados en guetos y enviados a campos de concentración. El empresario alemán Oskar Schindler (Liam Neeson), un dandy oportunista con talento para las relaciones públicas, aprovecha esta situación para prosperar económicamente. Comienza así una interesada relación con los militares nazis más poderosos para poner en marcha una fábrica en Cracovia, cuya mano de obra serán operarios judíos procedentes de los campos de concentración.",
  //   "year": "1993",
  //   "generos": "Bélico/Drama",
  //   "reparto": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Embeth Davidtz",
  //   "director": "Steven Spielberg",
  //   "poster_url": "/images/shapeofwater.jpg"
  // }, {
  //   "id": 3,
  //   "titulo": "La lista de Schindler",
  //   "descripcion": "Septiembre de 1939. Los nazis invaden Polonia. Los judíos son internados en guetos y enviados a campos de concentración. El empresario alemán Oskar Schindler (Liam Neeson), un dandy oportunista con talento para las relaciones públicas, aprovecha esta situación para prosperar económicamente. Comienza así una interesada relación con los militares nazis más poderosos para poner en marcha una fábrica en Cracovia, cuya mano de obra serán operarios judíos procedentes de los campos de concentración.",
  //   "year": "1993",
  //   "generos": "Bélico/Drama",
  //   "reparto": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Embeth Davidtz",
  //   "director": "Steven Spielberg",
  //   "poster_url": "/images/shapeofwater.jpg"
  // }, {
  //   "id": 3,
  //   "titulo": "La lista de Schindler",
  //   "descripcion": "Septiembre de 1939. Los nazis invaden Polonia. Los judíos son internados en guetos y enviados a campos de concentración. El empresario alemán Oskar Schindler (Liam Neeson), un dandy oportunista con talento para las relaciones públicas, aprovecha esta situación para prosperar económicamente. Comienza así una interesada relación con los militares nazis más poderosos para poner en marcha una fábrica en Cracovia, cuya mano de obra serán operarios judíos procedentes de los campos de concentración.",
  //   "year": "1993",
  //   "generos": "Bélico/Drama",
  //   "reparto": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Embeth Davidtz",
  //   "director": "Steven Spielberg",
  //   "poster_url": "/images/shapeofwater.jpg"
  // }, {
  //   "id": 3,
  //   "titulo": "La lista de Schindler",
  //   "descripcion": "Septiembre de 1939. Los nazis invaden Polonia. Los judíos son internados en guetos y enviados a campos de concentración. El empresario alemán Oskar Schindler (Liam Neeson), un dandy oportunista con talento para las relaciones públicas, aprovecha esta situación para prosperar económicamente. Comienza así una interesada relación con los militares nazis más poderosos para poner en marcha una fábrica en Cracovia, cuya mano de obra serán operarios judíos procedentes de los campos de concentración.",
  //   "year": "1993",
  //   "generos": "Bélico/Drama",
  //   "reparto": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Embeth Davidtz",
  //   "director": "Steven Spielberg",
  //   "poster_url": "/images/shapeofwater.jpg"
  // }, {
  //   "id": 3,
  //   "titulo": "La lista de Schindler",
  //   "descripcion": "Septiembre de 1939. Los nazis invaden Polonia. Los judíos son internados en guetos y enviados a campos de concentración. El empresario alemán Oskar Schindler (Liam Neeson), un dandy oportunista con talento para las relaciones públicas, aprovecha esta situación para prosperar económicamente. Comienza así una interesada relación con los militares nazis más poderosos para poner en marcha una fábrica en Cracovia, cuya mano de obra serán operarios judíos procedentes de los campos de concentración.",
  //   "year": "1993",
  //   "generos": "Bélico/Drama",
  //   "reparto": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Embeth Davidtz",
  //   "director": "Steven Spielberg",
  //   "poster_url": "/images/shapeofwater.jpg"
  // },
];

async function getAllMovies() {
  try {
    // const info = await fetch('http://localhost:80/read_peliculas.php');
    // const formatted = await movies.json();
    console.log(movies);
    movies.map((element) => {
      // document.write(`ID: [${element.id}] nombre: [${element.titulo}] descripcion:[${element.descripcion}]<br>`);
      // const val = document.getElementById('imagename').value,
      // console.log(element.url);
      const src = element.poster_url,
        img = document.createElement("img");
      img.src = src;
      img.width = 170;
      img.height = 220;
      img.marginBottom = 10;
      img.alt = 'movie-img';
      img.setAttribute("class", "movie-img");
      const divPos = document.getElementById("container");
      divPos.style.display = "grid";
      divPos.style.gap = "2px";
      divPos.appendChild(img);
      const numberOfMovies = document.querySelectorAll(".movie-img").length;
      const movieInfoComponent = document.getElementById("movie");
      const infoMovie = document.getElementById("movieData");
      for (let i = 0; i < numberOfMovies; i++) {
        let currentMovie = document.getElementsByClassName("movie-img")[i];
        document.getElementsByClassName("movie-img")[i].addEventListener("click", function () {
            movieInfoComponent.style.width = "60%";
            movieInfoComponent.style.zIndex = 3;
            document.getElementById("menu").style.opacity = "0.3";
            movieInfoComponent.style.display = "block";
            const srcInfo = element.poster_url,
              imgInfo = document.createElement("img");
            imgInfo.src = src;
            imgInfo.width = 170;
            imgInfo.height = 245;
            imgInfo.marginTop = 20;
            imgInfo.alt = 'movie-img';
            imgInfo.setAttribute("class", "movie-imgInfo");
            if (element.id == movies[i].id) {
              infoMovie.appendChild(imgInfo);
              document.querySelector("#title").innerHTML = element.titulo;
              document.querySelector("#director").innerHTML = element.director;
              document.querySelector("#generes").innerHTML = element.generos;
              document.querySelector("#year").innerHTML = element.year;
              document.querySelector("#cast").innerHTML = element.reparto;
              document.querySelector("#descriptMovie").innerHTML =
                element.descripcion;
              console.log(infoMovie.lastElementChild);
            }
          });
      }
      document.querySelector(".close-icon").addEventListener("click", function () {
          infoMovie.querySelector(".movie-imgInfo").style.display = "none";
          infoMovie.removeChild(infoMovie.lastElementChild);
          document.getElementById("menu").style.opacity = "1";
          movieInfoComponent.style.display = "none";
        });
    });
  } catch (e) {
    console.log(e);
  }
}

getAllMovies();
