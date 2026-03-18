document.addEventListener("DOMContentLoaded", ()=>{

const form=document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

const nombre=document.querySelector("#nombre").value;
const correo=document.querySelector("#correo").value;
const telefono=document.querySelector("#telefono").value;
const habitacion=document.querySelector("#habitacion").value;
const entrada=document.querySelector("#entrada").value;
const salida=document.querySelector("#salida").value;

const reserva={
nombre,
correo,
telefono,
habitacion,
entrada,
salida
};

let reservas=JSON.parse(localStorage.getItem("reservas"))||[];

reservas.push(reserva);

localStorage.setItem("reservas",JSON.stringify(reservas));

Swal.fire({
title:"Reserva enviada",
icon:"success"
});

form.reset();

});

});