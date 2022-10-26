function eliminarJuego(id) {
    id=parseInt(id);
    let endPoint = 'http://127.0.0.1:8000/api/videojuegos/' + id;
    fetch(endPoint, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
    alert("Juego eliminado");
    location.reload();
}

function actualizarJuego(id){
    window.open("actualizar.html?id="+id);
}

function mostrarJuegos(){
    let videojuegos = document.getElementById("videojuegos");
    let endPoint = 'http://127.0.0.1:8000/api/videojuegos';
    videojuegos.innerHTML = '';
    fetch(endPoint)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            videojuegos.innerHTML += `
            <div class="col s12 m6">
                <div class="card blue lighten-5">
                    <div class="card-content white-text">
                        <span class="card-title center teal">Juego</span>
                    </div>
                <div class="card-action">
                    <div class="row center">
                    <tr>
                        <br>
                        <td><b>Identificador: </b> ${element.id}</td>
                        <br>
                        <td><b>Nombre: </b> ${element.nombre}</td>
                        <br>
                        <td><b>Descripción: </b> ${element.descripcion}</td>
                        <br>
                        <td><b>Fecha de lanzamiento: </b> ${element.fecha_lanzamiento}</td>
                        <br>
                        <td><b>Plataforma: </b> ${element.plataforma}</td>
                        <br>
                        <td><b>Genero: </b> ${element.genero}</td>
                        <br>
                        <td><button class="btn deep-orange darken-2" type="submit"  onclick="eliminarJuego(${element.id})">Eliminar
                        </button></td>
                        <br>
                        <td><button class="btn waves-effect waves-light" type="submit"  onclick="actualizarJuego(${element.id})">Actualizar
                        </button></td>
                    </tr>
                    <br>
                </div>
            </div>
        </div>
            `;
        });
        
    });
}