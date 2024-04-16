//Voy a crear información de un usuario que va a vivir en un objeto (clave-valor... key-value) para agregarlo mediante manipulación del DOM

const user = {
    username: "danieldlcm86",
    age: 37,
    email: "daniel@gmail.com",
    films: ["Se7en", "Interstellar", "Back to the future", "End game", "Terminator", "Lalaland", "Rambo"]
};

//Crear función que me permita ingresar el objeto user en el nodo padre
const crearUsuario = (user) => {
    document.getElementById("name").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("e-mail").textContent = user.email;
    //Agregar el array de films
    //document.getElementById("films").textContent = user.films; Esto me trae todo el array pero no está definido como lista desordenada
    //Entonces, vamos a utilizar un forEach() para recorrer el Array y mostrar los elementos en forma de lista
    const listaDesordenada = document.getElementById("films");
    user.films.forEach(film => {
        const itemLista = document.createElement("li");
        itemLista.textContent = film;
        listaDesordenada.appendChild(itemLista);
    });
    listaDesordenada.style.listStyleType = "none";
    listaDesordenada.style.padding = "0";
    listaDesordenada.style.color = "coral";
}
crearUsuario(user);

/**
 * Crear función para que, mediante eventos, se modifique la información tomando el valor de los inputs
 */

// 1. Guardar en variables (const) los elementos que quiero manipular
const inputUsername = document.getElementById("username"); //input de username
const inputEmail = document.getElementById("email"); //input de email
const botonActualizar = document.getElementById("button--main"); //botón de Actualizar perfil
const nuevoUsername = document.getElementById("name"); //h3 de Profile
const newEmail = document.getElementById("e-mail"); //e-mail de Profile

// 2. Crear la función con evento para hacer el cambio
botonActualizar.addEventListener("click", () => {
    nuevoUsername.textContent = inputUsername.value;
    newEmail.textContent = inputEmail.value;
});