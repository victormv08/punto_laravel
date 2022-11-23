let videojuegos = document.getElementById("asignatura");
let endpoint = "http://127.0.0.1:8000/api/asignatura";
videojuegos.innerHTML = '';
fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            videojuegos.innerHTML += `
            <div class="col s12 m6">
                <div class="card blue lighten-5">
                    <div class="card-content white-text">
                        <span class="card-title center teal">Estudiante</span>
                    </div>
                <div class="card-action">
                    <div class="row center">
                    <tr>
                        <br>
                        <td><b>Identificador: </b>${element.id}</td>
                        <br>
                        <td><b>Nombre: </b>${element.nombre}</td>
                        <br>
                        <td><b>cantidad creditos: </b>${element.cantidad_creditos}</td>
                        <br>
                        <td><b>Intensidad horaria: </b>${element.intensidad_horaria}</td>
                        <br>
                        <td><b>Carrera: </b>${element.carrera}</td>
                    </tr>
                    <br>
                    </div>
                </div>
            </div>
            </div>
            `;
        });
    });
