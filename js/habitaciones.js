function agregarHabitacion(){

const nombre = document.getElementById("nombreHabitacion").value
const precio = document.getElementById("precioHabitacion").value

let habitaciones = JSON.parse(localStorage.getItem("habitaciones")) || []

habitaciones.push({nombre,precio})

localStorage.setItem("habitaciones", JSON.stringify(habitaciones))

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

localStorage.setItem("habitaciones", JSON.stringify(habitaciones))

mostrarHabitaciones()

}