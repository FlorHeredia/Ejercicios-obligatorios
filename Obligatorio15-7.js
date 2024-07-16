let btnDer= document.getElementById(".boton-derecho");
let btnIzq= document.getElementById(".boton-izquierdo");
let cajaDer= document.getElementsByClassName("caja-derecha");
let cajaIzq= document.getElementsByClassName("caja-izquierda");


btnDer.addEventListener("click", function() {
    cajaDer.style.visibility="hidden";
    cajaIzq.style.visibility="visible";

});

btnIzq.addEventListener("click", function() {
    cajaDer.style.visibility="visible";
    cajaIzq.style.visibility="hidden";

});