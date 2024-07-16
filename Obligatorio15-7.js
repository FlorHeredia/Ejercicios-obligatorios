
let btnDer= document.getElementById("btn1");
let btnIzq= document.getElementById("btn2");
let cajaDer= document.getElementById("boton-derecho");
let cajaIzq= document.getElementById("boton-izquierdo");


btnDer.addEventListener("click", function() {
    cajaDer.style.visibility="hidden";
    cajaIzq.style.visibility="visible";

});

btnIzq.addEventListener("click", function() {
    cajaDer.style.visibility="visible";
    cajaIzq.style.visibility="hidden";

});