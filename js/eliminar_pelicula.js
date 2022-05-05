async function getAllMovies() {
  try {
    const info = await fetch('http://localhost:80/read_peliculas.php');
    const formatted = await info.json();
    // console.log(formatted.body);
    const values = formatted.body.map((element) => {
      return element;
      // document.write(`ID: [${element.id}] nombre: [${element.titulo}] descripcion:[${element.descripcion}]<br>`);
      // // const val = document.getElementById('imagename').value,
      // // console.log(element.url);
      // const src = element.poster_url,
      //   img = document.createElement('img');

      // img.src = src;
      // img.width = 100;
      // img.height = 100;
      // document.body.appendChild(img);
      // document.write('<br>');
    });

    return values;
  } catch (e) {
    console.log(e);
  }
};

async function eliminarMovie(movieBody) {
  // const form = new FormData(document.getElementById('create-movie'));
  // const form = {
  //   titulo: "Título",
  //   descripcion: "Descripción",
  //   year: "0000",
  //   generos: "Género1 / Genero2",
  //   reparto: "Reparto",
  //   director: "Director",
  //   poster_url: "Url"
  // };
  // console.log(JSON.stringify(form) + "YES");
  const value = JSON.stringify(movieBody);
  const result = await fetch('http://localhost:80/delete_pelicula.php', {
    method: "POST",
    body: value
  });
  const object = await result.json();
  return object;
  // document.write(`nombre: [${object.titulo}] descripcion:[${object.descripcion}]<br>`);
  // const src = object.poster_url, img = document.createElement('img');
  // img.src = src;
  // img.width = 100;
  // img.height = 100;
  // document.body.appendChild(img);
  // document.write('<br>');


  // formatted.map((element) => {
  // document.write(`ID: [${element.id}] nombre: [${element.titulo}] descripcion:[${element.descripcion}]<br>`);
  // const src = element.poster_url,
  //   img = document.createElement('img');

  // img.src = src;
  // img.width = 100;
  // img.height = 100;
  // document.body.appendChild(img);
  // document.write('<br>');

}

async function generarTabla() {
  const deleted = [];
  const movies = await getAllMovies();
  console.log(movies);
  // Obtener la referencia del elemento body
  const div = document.getElementById("div_tabla");

  // Crea un elemento <table> y un elemento <tbody>
  const tabla   = document.createElement("table");
  tabla.classList.add('tabla');
  const tblBody = document.createElement("tbody");

  const celdaId = document.createElement("th");
  const textoId = document.createTextNode("ID");

  const celdaTitulo = document.createElement("th");
  const textoTitulo = document.createTextNode("TÍTULO");

  const celdaYear = document.createElement("th");
  const textoYear = document.createTextNode("AÑO");

  const celdaEliminar = document.createElement("th");
  const textoEliminar = document.createTextNode("ACCIÓN");

  celdaId.appendChild(textoId);
  celdaTitulo.appendChild(textoTitulo);
  celdaYear.appendChild(textoYear);
  celdaEliminar.appendChild(textoEliminar);

  const hileraCabecera = document.createElement("tr");

  hileraCabecera.appendChild(celdaId);
  hileraCabecera.appendChild(celdaTitulo);
  hileraCabecera.appendChild(celdaYear);
  hileraCabecera.appendChild(celdaEliminar);

  tblBody.appendChild(hileraCabecera);

  // Crea las celdas
  for (let i = 0; i < movies.length; i++) {
    // Crea las hileras de la tabla
    const hilera = document.createElement("tr");

    for (let j = 0; j < 4; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      const celda = document.createElement("td");
      let textoCelda = document.createTextNode('texto');
      const button = document.createElement("button");
      button.innerHTML = 'ELIMINAR';
      button.classList.add('btn');
      button.addEventListener("click", async function () {
        const movieId = {
          id: movies[i].id,
        };
        if (deleted.includes(movies[i].id)) {
          console.log(`Película con título: ${movies[i].titulo} ya ha sido eliminada`);
          return;
        }
        await eliminarMovie(movieId);
        deleted.push(movies[i].id);
        console.log(deleted);
        console.log(movieId.id);
      });
      // button.onclick = logCelda();
      if (j === 0) textoCelda = document.createTextNode(movies[i].id);
      if (j === 1) textoCelda = document.createTextNode(movies[i].titulo);
      if (j === 2) textoCelda = document.createTextNode(movies[i].year);
      if (j === 3) textoCelda = button; 
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }

  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  div.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  // tabla.setAttribute("border", "2");
}

generarTabla();