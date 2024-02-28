let boton = document.getElementById("ingresar").addEventListener("click", respuestaClick)
function respuestaClick() {
  usuario.innerText = prompt("Ingresa Nombre y Apellido")
  console.log(usuario.innerText)
  total.innerText = Number(prompt("Ingresa el monto a abonar"))
  console.log(total.innerText)
  localStorage.setItem("usuario", respuestaClick)
};



let formfecha = document.getElementById("fecha");
const fecha = [];
for (const fechaAgregada of fecha) {
  let li = document.createElement("li");
  li.innerHTML = fechaAgregada
  formfecha.appendChild(li).length;

}
let formdescripcion = document.getElementById("descripcion");
const descripcion = [];
for (const descripcionAgregada of descripcion) {
  let li = document.createElement("li");
  li.innerHTML = descripcionAgregada
  formdescripcion.appendChild(li).length;

}
let formmonto = document.getElementById("monto");
const monto = [];
for (const montoAgregado of monto) {
  let li = document.createElement("li");
  li.innerHTML = montoAgregado
  formmonto.appendChild(li).length;

}




let boton2 = document.getElementById("btn1").addEventListener("click", respuestaClick2)
function respuestaClick2() {
  let nuevaFecha = formfecha;
  let li = document.createElement("li");
  li.innerHTML = nuevaFecha;
  formfecha.appendChild(li);


  let nuevaDescrip = formdescripcion;
  let li2 = document.createElement("li");
  li2.innerHTML = nuevaDescrip;
  formdescripcion.appendChild(li2);


  let nuevoMonto = formmonto;
  let li3 = document.createElement("li");
  li3.innerHTML = nuevoMonto;
  formmonto.appendChild(li3);

  Toastify({
    text: "Gastos agregados",
    duration: 5000,
    style: {background: 'linear-gradient(to right, #000000, #97989a)'}}).showToast();



  formfecha.push(li);
  formdescripcion.push(li);
  formmonto.push(li);
}

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


