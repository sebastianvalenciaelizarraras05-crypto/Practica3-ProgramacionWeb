const textos = {

es: {
menuInicio: "Inicio",
menuHabitaciones: "Habitaciones",
menuReservaciones: "Reservaciones",
menuContacto: "Contacto",
menuMision: "Misión & Visión",

tituloHotel: "Hotel Quinta Dalam",
subtitulo: "Elegancia, confort y serenidad en cada estancia.",

btnReservar: "Reservar Ahora",
btnHabitaciones: "Descubrir Habitaciones",

tituloServicios: "Servicios",
tituloGaleria: "Galería",

footerTexto: "© 2026 Hotel Quinta Dalam - Todos los derechos reservados"
},

en: {
menuInicio: "Home",
menuHabitaciones: "Rooms",
menuReservaciones: "Reservations",
menuContacto: "Contact",
menuMision: "Mission & Vision",

tituloHotel: "Hotel Quinta Dalam",
subtitulo: "Elegance, comfort and serenity in every stay",

btnReservar: "Book Now",
btnHabitaciones: "Explore Rooms",

tituloServicios: "Services",
tituloGaleria: "Gallery",

footerTexto: "© 2026 Hotel Quinta Dalam - All rights reserved"
}

};

/* CAMBIAR IDIOMA */

function cambiarIdioma(idioma){

localStorage.setItem("idioma", idioma);
aplicarIdioma(idioma);

}

/* APLICAR IDIOMA */

function aplicarIdioma(idioma){

const traduccion = textos[idioma];

for (let key in traduccion){

let elemento = document.getElementById(key);

if(elemento){
elemento.innerHTML = traduccion[key];
}

}

}

/* CARGAR AL ENTRAR */

document.addEventListener("DOMContentLoaded", function(){

const idiomaGuardado = localStorage.getItem("idioma") || "es";
aplicarIdioma(idiomaGuardado);

});