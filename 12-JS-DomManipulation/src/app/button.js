//Guardo en constantes los elementos del DOM que quiero manipular
const buttonHide = document.querySelector("#button--card");
const container = document.querySelector("#card--container");

// Agregar estilos para visibilidad
container.style.visibility = "visible";

//Manejar eventos para ocultar desde el botón
buttonHide.addEventListener("click", () => {
    container.style.visibility = (container.style.visibility === "visible") ? "hidden" : "visible";
});