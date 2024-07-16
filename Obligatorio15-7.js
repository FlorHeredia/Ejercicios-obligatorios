let btnDer= document.getElementById("boton-derecho");
let btnIzq= document.getElementById("boton-izquierdo");
let cajaDer= document.getElementsByClassName("btn1");
let cajaIzq= document.getElementsByClassName("btn2");


btnDer.addEventListener("click", function() {
    cajaDer.style.visibility="hidden";
    cajaIzq.style.visibility="visible";

});

btnIzq.addEventListener("click", function() {
    cajaDer.style.visibility="visible";
    cajaIzq.style.visibility="hidden";

});