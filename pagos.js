
document.addEventListener("DOMContentLoaded", function() {
    let detallePagosContenido = localStorage.getItem("detallePagos");

    if (detallePagosContenido && document.getElementById("detallePagos")) {
        document.getElementById("detallePagos").innerHTML = detallePagosContenido;
    }
});
