document.addEventListener("DOMContentLoaded", ()=>{

mostrarReservas()
crearGrafica()
actualizarStats()

})

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
actualizarStats()

}

function crearGrafica(){

let reservas = JSON.parse(localStorage.getItem("reservas")) || []

const ctx = document.getElementById("graficaReservas")

new Chart(ctx,{

type:"bar",

data:{

labels:["Reservas"],

datasets:[{

label:"Total de Reservas",

data:[reservas.length],

backgroundColor:"#C7A88A"

}]
}
})
}

function actualizarStats(){

let reservas = JSON.parse(localStorage.getItem("reservas")) || []
let habitaciones = JSON.parse(localStorage.getItem("habitaciones")) || []
let servicios = JSON.parse(localStorage.getItem("servicios")) || []

document.getElementById("statReservas").innerText = reservas.length
document.getElementById("statHabitaciones").innerText = habitaciones.length
document.getElementById("statServicios").innerText = servicios.length

}