//Construye una página web con las siguientes características (Total: 5 puntos)
//● Crea 4 divs que tengan alto y ancho de 200px y de distintos colores de fondo
//usando el atributo style. Cada uno de los divs debe tener un identificador
//único.
//● Crea un script que guarde dentro de una variable global un color
//dependiendo de la letra del teclado presionada. (2 Puntos).
//○ Al presionar la letra a un color a tu elección.
//○ Al presionar la letra s un segundo color a tu elección.
//○ Al presionar la letra d un tercer color al presionar la letra d.
//○ Para guardar el color revisa el tip al final del enunciado.
//● Dentro del script agrega el evento que al hacerle click a uno de los divs, este
//cambie de color al color seleccionado. Utiliza addEventListener para agregar
//el evento. (3 Puntos)

let box1 = document.querySelector("#box1");
box1.style.backgroundColor = "red";
let box2 = document.querySelector("#box2");
box2.style.backgroundColor = "yellow";
let box3 = document.querySelector("#box3");
box3.style.backgroundColor = "green";
let box4 = document.querySelector("#box4");
box4.style.backgroundColor = "blue";
let colorGlobal = "";

let square = document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "a") {
    colorGlobal = "yellow";
  } else if (event.key === "s") {
    colorGlobal = "red";
  } else if (event.key === "d") {
    colorGlobal = "blue";
  } else if (event.key === "w") {
    colorGlobal = "green";
  }
  changeColor(box1, colorGlobal);
  changeColor(box2, colorGlobal);
  changeColor(box3, colorGlobal);
  changeColor(box4, colorGlobal);
});

let changeColor = (element, color) => {
  element.addEventListener("click", (e) => {
    element.style.backgroundColor = color;
    console.log("click");
    console.log(color);
  });
};
