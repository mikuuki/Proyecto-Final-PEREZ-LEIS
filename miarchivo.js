let boton = document.getElementById("ingresar").addEventListener("click", function respuestaClick() {
  usuario.innerText = prompt("Ingresa Nombre y Apellido")
  total.innerText = Number(prompt("Ingresa el monto a abonar"))

  console.log(usuario.innerText)
  console.log(total.innerText)
});






let formfecha = document.getElementById("fecha");
const fecha = [];
for (const fechaAgregada of fecha) {
  let li = document.createElement("li");
  li.innerHTML = fechaAgregada
  formfecha.appendChild(li);
  console.log(fechaAgregada)
}
let formdescripcion = document.getElementById("descripcion");
const descripcion = [];
for (const descripcionAgregada of descripcion) {
  let li = document.createElement("li");
  li.innerHTML = descripcionAgregada
  formdescripcion.appendChild(li);
  console.log(descripcionAgregada)
}
let formmonto = document.getElementById("monto");
const monto = [];
for (const montoAgregado of monto) {
  let li = document.createElement("li");
  li.innerHTML = montoAgregado
  formmonto.appendChild(li);
  console.log(montoAgregado)
}





let boton2 = document.getElementById("btn1").addEventListener("click", function respuestaClick2(event) {
  let nuevaFecha = document.getElementById("fecha");
  let li = document.createElement("li");
  li.innerHTML = nuevaFecha;
  formfecha.appendChild(li);


  let nuevaDescrip = document.getElementById("descripcion");
  let li2 = document.createElement("li");
  li2.innerHTML = nuevaDescrip;
  formdescripcion.appendChild(li2);


  let nuevoMonto = document.getElementById("monto");
  let li3 = document.createElement("li");
  li3.innerHTML = nuevoMonto;
  formmonto.appendChild(li3);

  Toastify({
    text: "Gastos agregados",
    duration: 5000,
    style: { background: 'linear-gradient(to right, #000000, #97989a)' }
  }).showToast();
  console.log(event.value())

  formfecha.push(li);
  formdescripcion.push(li); 
  formmonto.push(li);
})
console.log(fecha.length)
console.log(descripcion.length)
console.log(monto.length)


let boton3 = document.getElementById("btn2").addEventListener("click", respuestaClick3)
function respuestaClick3() {
  Swal.fire({
    title: "¿Abonás total registrado?",
    text: "No podrás revertirlo!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, pagar!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Ya abonaste!",
        text: "Tus gastos fueron abonados",
        icon: "success"
      });
    }
  });
  localStorage.clear()
}
const detalle = [{ fecha }, { descripcion }, { monto }];
function guardarLocal() {
  localStorage.setItem("gastos", detalle)
};
guardarLocal("listaGastos", JSON.stringify(detalle));


