const registroFormulario = document.getElementById("registerForm");
const inicioFormulario = document.getElementById("loginForm");

//Manipulando el formulario de Registro
registroFormulario.addEventListener("submit", (event) => {
    event.preventDefault(); //evita enviar el formulario
    //Guardando los valores de los inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //Guardar los valores de los inputs en el almacenamiento local 
    // Sintaxis para guardar: localStorage.setItem("nombreItem", variable)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registro exitoso!!!");
    registroFormulario.reset(); //Permite limpiar el formulario después de enviar la información
});

//Manipulando el formulario de Iniciar Sesión
inicioFormulario.addEventListener("submit", (event) => {
    event.preventDefault();

    //Guardando los valores de los inputs
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    //Obtener los valores de los inputs del almacenamiento local 
    // Sintaxis para obtener: localStorage.getItem("nombreItem");
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    //Validar si el username y password coinciden con el local storage
    if (loginUsername === savedUsername && loginPassword === savedPassword ) {
        alert(`Bienvenido ${savedUsername}, inicio de sesión exitoso`);
        inicioFormulario.reset();
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});