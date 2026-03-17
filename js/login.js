document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

const usuario = document.getElementById("usuario").value;
const password = document.getElementById("password").value;

/* credenciales del administrador */

if(usuario === "admin" && password === "1234"){

window.location.href = "administrador.html";

}else{

alert("Usuario o contraseña incorrectos");

}

});

function loginAdmin(){

const usuario = document.getElementById("usuario").value;
const password = document.getElementById("password").value;

if(usuario === "admin" && password === "1234"){

Swal.fire({
icon: "success",
title: "Bienvenido administrador",
text: "Accediendo al panel...",
timer: 1500,
showConfirmButton: false
});

setTimeout(function(){
window.location.href = "administrador.html";
},1500);

}else{

Swal.fire({
icon: "error",
title: "Error",
text: "Usuario o contraseña incorrectos"
});

}

}