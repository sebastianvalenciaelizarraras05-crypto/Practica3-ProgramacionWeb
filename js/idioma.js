const textos = {

es: {
tituloHotel: "Hotel Quinta Dalam",
subtitulo: "Elegancia, confort y serenidad en cada estancia",
tituloServicios: "Servicios"
},

en: {
tituloHotel: "Hotel Quinta Dalam",
subtitulo: "Elegance, comfort and serenity in every stay",
tituloServicios: "Services"
}

};

/* Cambiar idioma */

function cambiarIdioma(idioma){

localStorage.setItem("idioma", idioma);
aplicarIdioma(idioma);

}

/* Aplicar idioma */

function aplicarIdioma(idioma){

const traduccion = textos[idioma];

for(const id in traduccion){

if(document.getElementById(id)){
document.getElementById(id).textContent = traduccion[id];
}

}

}

/* Cargar idioma al entrar */

document.addEventListener("DOMContentLoaded", function(){

const idiomaGuardado = localStorage.getItem("idioma") || "es";
aplicarIdioma(idiomaGuardado);

});