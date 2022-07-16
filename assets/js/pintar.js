//3. Se tiene como base el siguiente ejercicio que cambia el color de un elemento de
//HTML al hacerle click
//3.1 Modifica la función para que reciba el elemento clickeado de forma de no
//tener que seleccionarlo nuevamente dentro de la función (1 Punto). Para
//obtener el puntaje debes entregar el 3 pintar.html válido funcionando en
//conjunto con el código modificado.

function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar, ele);
    
