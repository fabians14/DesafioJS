var precio = 400000;

// Input
var cantidadInput = document.querySelector("input[type='number']");
var colorInput = document.querySelector("input[type='text']");

//Totales
var precioFinal = document.querySelector(".valor-total");
var cantidadFinal = document.querySelector(".cantidad-total");
var colorFinal = document.querySelector(".color div");

function calcularTotal() {
    var cantidad = cantidadInput.value;
    var color = colorInput.value;


precioFinal.innerHTML = precio * cantidad;
cantidadFinal.innerHTML = cantidad;
colorFinal.style.backgroundColor = color; 
}