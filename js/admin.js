document.addEventListener("DOMContentLoaded",()=>{

cargarServicios()
mostrarHabitaciones()
mostrarReservas()
crearGrafica()

})



function mostrarTab(tab, elemento){

document.querySelectorAll(".admin-tab")
.forEach(seccion=>{
seccion.classList.add("hidden")
})

document.getElementById(tab).classList.remove("hidden")

document.querySelectorAll(".tab-btn")
.forEach(btn=>{
btn.classList.remove("active")
})

elemento.classList.add("active")

}







/* SERVICIOS */

function cargarServicios(){

let servicios = JSON.parse(localStorage.getItem("servicios")) || []

const tabla = document.getElementById("tablaServicios")

tabla.innerHTML=""

servicios.forEach((servicio,index)=>{

tabla.innerHTML+=`

<tr>

<td>${servicio}</td>

<td>

<button onclick="eliminarServicio(${index})">
Eliminar
</button>

</td>

</tr>

`

})

}

function agregarServicio(){

const servicio = document.getElementById("servicio").value

let servicios = JSON.parse(localStorage.getItem("servicios")) || []

servicios.push(servicio)

localStorage.setItem("servicios",JSON.stringify(servicios))

document.getElementById("servicio").value=""

cargarServicios()

}

function eliminarServicio(index){

let servicios = JSON.parse(localStorage.getItem("servicios"))

servicios.splice(index,1)

localStorage.setItem("servicios",JSON.stringify(servicios))

cargarServicios()

}







/* HABITACIONES */

function agregarHabitacion(){

const nombre = document.getElementById("nombreHabitacion").value
const precio = document.getElementById("precioHabitacion").value

let habitaciones = JSON.parse(localStorage.getItem("habitaciones")) || []

habitaciones.push({nombre,precio})

localStorage.setItem("habitaciones",JSON.stringify(habitaciones))

document.getElementById("nombreHabitacion").value=""
document.getElementById("precioHabitacion").value=""

mostrarHabitaciones()

}

function mostrarHabitaciones(){

let habitaciones = JSON.parse(localStorage.getItem("habitaciones")) || []

const tabla = document.getElementById("tablaHabitaciones")

tabla.innerHTML=""

habitaciones.forEach((hab,index)=>{

tabla.innerHTML+=`

<tr>

<td>${hab.nombre}</td>

<td>$${hab.precio}</td>

<td>

<button onclick="eliminarHabitacion(${index})">
Eliminar
</button>

</td>

</tr>

`

})

}

function eliminarHabitacion(index){

let habitaciones = JSON.parse(localStorage.getItem("habitaciones"))

habitaciones.splice(index,1)

localStorage.setItem("habitaciones",JSON.stringify(habitaciones))

mostrarHabitaciones()

}







/* RESERVAS */

function mostrarReservas(){

let reservas = JSON.parse(localStorage.getItem("reservas")) || []

const tabla = document.getElementById("tablaReservas")

tabla.innerHTML=""

reservas.forEach((reserva,index)=>{

tabla.innerHTML+=`

<tr>

<td>${reserva.nombre}</td>
<td>${reserva.correo}</td>
<td>${reserva.telefono}</td>
<td>${reserva.habitacion}</td>
<td>${reserva.entrada}</td>
<td>${reserva.salida}</td>

<td>

<button onclick="eliminarReserva(${index})">
Eliminar
</button>

</td>

</tr>

`

})

}

function eliminarReserva(index){

let reservas = JSON.parse(localStorage.getItem("reservas"))

reservas.splice(index,1)

localStorage.setItem("reservas",JSON.stringify(reservas))

mostrarReservas()

}







/* DASHBOARD */

function crearGrafica(){

let reservas = JSON.parse(localStorage.getItem("reservas")) || []

const ctx = document.getElementById("graficaReservas")

new Chart(ctx,{

type:"bar",

data:{
labels:["Reservas"],
datasets:[{
label:"Total reservas",
data:[reservas.length],
backgroundColor:"#C7A88A"
}]
}

})

}