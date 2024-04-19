/**
 * Evaluar expresiones regulares. Patrones de caracteres que se deben cumplir para realizar una acción.
 * Regex para validar un email con arroba (@) y dominio gmail.com
 * Si se cumple el patrón se habilita el botón
 */

const emailInput = document.getElementById("email");
const buttonLogin = document.getElementById("button--login");

buttonLogin.disabled = true;

//Crear regex para que se cumpla el patrón
const emailRegex = /^[\w.+\-]+@gmail\.com$/;

//Crear evento para input, el cual va a evaluar el patrón regex y en caso de cumplir con él, habilita el botón y podemos movernos a App.html
// 1. Obtenemos el valor del input utilizando event.target.value y lo almacenamos en una variable 
// 2. Se evalúa mediante una condicional

emailInput.addEventListener("input", (event) => {
    const email = event.target.value;

    if(emailRegex.test(email) === true) {
        buttonLogin.disabled = false;
    } else {
        buttonLogin.disabled = true;
    }
});