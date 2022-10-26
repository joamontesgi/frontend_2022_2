var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    id = parseInt(id);
    var nombre = document.getElementById('nombre');
    var descripcion = document.getElementById('descripcion');
    var fecha = document.getElementById('fecha');
    var genero = document.getElementById('genero');
    var plataforma = document.getElementById('plataforma');
    fetch('http://localhost:8000/api/videojuegos/'+id)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        nombre.value = data.nombre;
        descripcion.value = data.descripcion;
        fecha.value = data.fecha_lanzamiento;
        genero.value = data.genero;
        plataforma.value = data.plataforma;
});



function update(){
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var descripcion = document.getElementById('descripcion').value;
    var fecha = document.getElementById('fecha').value;
    var genero = document.getElementById('genero').value;
    var plataforma = document.getElementById('plataforma').value;
    var data = {
        nombre: nombre,
        descripcion: descripcion,
        fecha_lanzamiento: fecha,
        genero: genero,
        plataforma: plataforma
    }
    fetch('http://localhost:8000/api/videojuegos/'+id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        alert('Videojuego actualizado');
        window.location.href = "index.html";
    })
}