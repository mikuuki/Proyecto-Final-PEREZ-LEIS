
// Esperar a que la página se cargue completamente antes de ejecutar este script
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el contenido de listaDeGastos almacenado en localStorage
    let detallePagosContenido = localStorage.getItem("detallePagos");

    // Verificar si el elemento con el id detallePagos existe antes de intentar acceder a su propiedad innerHTML
    if (detallePagosContenido && document.getElementById("detallePagos")) {
        // Insertar el contenido en el elemento con el id detallePagos
        document.getElementById("detallePagos").innerHTML = detallePagosContenido;
    }
});
