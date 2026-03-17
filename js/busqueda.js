document.getElementById("buscarHabitacion")
.addEventListener("keyup", function(){

let filtro = this.value.toLowerCase()

let habitaciones = document.querySelectorAll(".habitacion-card")

habitaciones.forEach(h=>{

let texto = h.innerText.toLowerCase()

h.style.display = texto.includes(filtro) ? "block" : "none"

})
})