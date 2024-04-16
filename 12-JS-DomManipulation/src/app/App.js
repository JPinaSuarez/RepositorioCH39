//Asignar en variables el elemento
const botonRandom = document.getElementById("btn--random");
const botonReset = document.getElementById("btn--reset");
const background = document.body.style.backgroundColor;

//Vamos a crear una función que genera un número al azar (random) para hacer que number varíe
const random = (number) => {
    return Math.floor(Math.random() * (number + 1));
}

//Creamos eventos de tipo click para que suceda algo en mi DOM al presionar el click
botonRandom.addEventListener("click", () => {
    const newBackground = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor = newBackground;
});

//Botón para resetear
botonReset.addEventListener("click", () => {
    document.body.style.backgroundColor = background;
});