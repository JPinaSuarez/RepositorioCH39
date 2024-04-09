console.log("======= Control de flujo ========");

//Declaración if-else
let edad  = null;

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

edad = 19;

if (edad != null) {
    console.log("El usuario ingresó su edad");
} else {
    console.log("Solicita la edad del usuario");
}

//Ejemplo con modificación de una variable
let saldoInicial = 500;
let saldoFinal = 900;
let balance;

if (saldoInicial <= saldoFinal){
    balance = "Estamos en ganancias";
} else {
    balance = "Estamos en pérdidas";
}

console.log(`En estos momentos ${balance}`); //Interpolación de cadenas

// Determinar si un número es par o impar
const num1 = 577;

if (num1 % 2 == 0) {
    console.log(`El número ${num1} es par`);
} else {
    console.log(`El número ${num1} es impar`);
}

// Operador ternario. Es una forma concisa de escribir una sentencia condicional (if-else). Se utilizan los caracteres de ? : para evaluar una condición como true o false.
// (condicion) ? true : false;

// Determinar si un número es par o impar, utilizando operador ternario
let parImpar = (num1 % 2 == 0) ? `El número ${num1} es par` : `El número ${num1} es impar`;
console.log(parImpar);

// Else if.
/**
 * if (condition 1){statement 1} else if (condition 2){statement 2} else if (condition 3) {statement 3} else {statement 4}; 
 */

//Determinar si una persona es un bebé, un niño, un adolescente o un adulto con base en su edad. Si la persona es un adulto, determinar si es un adulto (18 a 59 años) o un adulto mayor (mayor a 60 años) 
let edadPersona = 7;

if (edadPersona >= 18) {
    //console.log("Es un adulto");
    //Anidando sentencias condicionales
    if (edadPersona < 60) {
        console.log("Es un adulto");
    } else {
        console.log("Adulto mayor");
    }
} else if (edadPersona >= 12) {
    console.log("Es un adolescente");
} else if (edadPersona >= 3) {
    console.log("Es un niño");
} else {
    console.log("Es un bebé");
}

//Determinar fase del día (mañana, tarde, noche). Mañana 6am y 12pm, tarde 12pm y 19pm, noche 19pm y 24pm
let hora = 18;

if (hora >= 6 && hora < 12){
    console.log("Es de mañana");
} else if (hora >= 12 && hora < 19 ) {
    console.log("Es de tarde");
} else {
    console.log("Es de noche");
}

//Crear una función que determine si un día de la semana corresponde a día laboral o fin de semana (Sábado y Domingo)
const diaSemana = (finSemana) => {
    let diasLibres = finSemana === "Sábado" || finSemana === "Domingo";

    if (diasLibres) {
        return "Es fin de semana";
    } else {
        return "Es día laborable :c"
    }
};

let dia = "Sábado";
//console.log(diaSemana("Sábado"));
console.log(diaSemana(dia));

dia = "Martes";
console.log(diaSemana(dia));

// Switch
//Permite evaluar una expresión y hacer coincidir el valor de la expresión con diferentes casos (case). Se apoya de declaraciones como break para "frenar" entre los diferentes casos. Podemos determinar un caso final, si ninguno de los anteriores se cumple (default)
//switch (expresion) { case 1: bloque1; case 2: bloque2; case 3: bloque3; default}
let diaDeSemana = "Sábado";

switch (diaDeSemana) {
    case "Lunes": 
        console.log(`El ${diaDeSemana} es día de trabajo`);
        break;
    case "Martes": 
        console.log(`El ${diaDeSemana} es día de trabajo`);
        break;
    case "Miércoles": 
        console.log(`El ${diaDeSemana} es día de trabajo`);
        break;
    case "Jueves": 
        console.log(`El ${diaDeSemana} es día de trabajo`);
        break;
    case "Viernes": 
        console.log(`El ${diaDeSemana} es día de trabajo`);
        break;
    case "Sábado": 
        console.log(`El ${diaDeSemana} es fin de semana`);
        break;
    case "Domingo": 
        console.log(`El ${diaDeSemana} es fin de semana`);
        default: 
            console.log("No es un día válido");
            break;
}
