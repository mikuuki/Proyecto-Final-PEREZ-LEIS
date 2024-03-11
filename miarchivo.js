function ingresar() {
    let usuarioNew = document.getElementById("usuarioNew").value;
    let dniNew = document.getElementById("dniNew").value;
    localStorage.setItem("nombreIngresado", usuarioNew);
    localStorage.setItem("dniIngresado", dniNew);
    return false;
}
let usuario = document.getElementById("usuarioIngresado");
usuario.innerHTML = localStorage.getItem("nombreIngresado");
let dni = document.getElementById("dniIngresado")
dni.innerHTML = localStorage.getItem("dniIngresado");


//--------------------------------------------------------------------


let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", cargar);
//Agregar Gastos
let gastos = [];

function cargar() {
    let nombre = document.getElementById("nombreGastos").value;
    let importe = document.getElementById("importeGastos").value;
    let fecha = document.getElementById("fechaGastos").value;

    if (nombre && importe && fecha) {
        let nuevoGasto = {
            nombre: nombre,
            importe: importe,
            fecha: fecha
        };
        gastos.push(nuevoGasto);
        limpiarCampos();
        actualizarLista();

        localStorage.setItem("gastos", JSON.stringify(gastos));

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Agregado",
            showConfirmButton: false,
            width: 220,
            timer: 900
        });
    } else {
        return;
    }
}




function limpiarCampos() {
    document.getElementById("nombreGastos").value = "";
    document.getElementById("importeGastos").value = "";
    document.getElementById("fechaGastos").value = "";
}


function actualizarLista() {
    let listaDeGastos = document.getElementById("listaDeGastos");

    let total = 0;
    listaDeGastos.innerHTML = "";
    gastos.forEach(gasto => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = `${gasto.nombre.toUpperCase()} __ $${gasto.importe} __ ${gasto.fecha}`;
        listaDeGastos.appendChild(nuevoElemento);
        total += parseFloat(gasto.importe);
    });
    let totalElement = document.getElementById("total");
    totalElement.textContent = `Total $${total.toFixed(2)}`;
}


let fechaHoraElemento = document.getElementById("fecha-hora");

function obtenerFechaHora() {
    // Hace una solicitud a la API de WorldTimeAPI para obtener la fecha y hora actual
    fetch('https://worldtimeapi.org/api/ip')
        .then(response => response.json())
        .then(data => {
            let fechaHora = new Date(data.datetime);
            let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
            let formatoFechaHora = fechaHora.toLocaleDateString('es-ES', opciones);
            fechaHoraElemento.textContent = formatoFechaHora;
        })
        .catch(error => {
            console.error('Error al obtener la fecha y hora:', error);
        });
}
obtenerFechaHora();
setInterval(obtenerFechaHora, 1000);







// ... (tu código existente)

// Nueva función para almacenar el contenido de listaDeGastos en localStorage
function almacenarDetallePagos() {
    let listaDeGastos = document.getElementById("listaDeGastos");
    let detallePagosContenido = listaDeGastos.innerHTML;
    localStorage.setItem("detallePagos", detallePagosContenido);
}

// Asignar esta función al evento click del botón btnDetallePagos
let btnDetallePagos = document.getElementById("btnDetallePagos");
btnDetallePagos.addEventListener("click", function () {
    almacenarDetallePagos();
    location.href = 'pagos.html';
});

// ... (resto de tu código)

// Obtener el contenido de listaDeGastos almacenado en localStorage
let detallePagosContenido = localStorage.getItem("detallePagos");

// Insertar el contenido en el elemento con el id detallePagos
document.getElementById("detallePagos").innerHTML = detallePagosContenido;



