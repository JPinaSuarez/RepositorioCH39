console.log("===== Loops ======");

//--- Ciclo for. Permite iterar sobre un bloque de código y realiza una indicación específica hasta que se cumpla cierta condición
// for(variable de inicio; condición; iteración){ bloque de código a ejecutar }

//for con una variable global asignada
let cuenta = 1;
for (cuenta; cuenta <= 5; cuenta++) {
    console.log(`${cuenta}`);
}

//for con una variable global inicializada sin valor
let num;
for(num = 1; num <= 5; num++) {
    console.log(num);
}

//for con variable local
for (let numero = 5; numero >= 1; numero--){
    console.log(`${numero}`);
}

//Sumar los números del 1 al 100... Output=5050
let suma = null;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(suma);

//Encontrar los números pares entre 100 y 200
for (let i = 100; i <= 200; i++) {
    if (i % 2 === 0){
        console.log(i);
    }
}

//Tabla de multiplicar
const tabla = 8; //Output: 8 * 1 = 8

for (let contador = 1; contador <= 10; contador++) {
    let multiplicacion = tabla * contador;
    console.log(`${tabla} * ${contador} = ${multiplicacion}`);
}

//Tabla de multiplicar en función
const tablaMultiplicar = (tabla) => {
    let resultado = [];

    for (let contador = 1; contador <= 10; contador++) {
        let multiplicacion = tabla * contador;
        resultado.push(`${tabla} * ${contador} = ${multiplicacion}`);
    }
    return resultado;
}

tablaMultiplicar(3);

//for para recorrer un array
let nombres = ["Daniel", "Andrea", "Sergio", "Fernanda", "Gaby", "Maara"];

for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

//for para arrays, vamos a tener dos variaciones: for in (devuelve índices) y for of (devuelve los elementos del array)
//for of
for (let nombre of nombres) {
    console.log(nombre);
}

//for in
for (let nombre in nombres){
    console.log(nombre);
}

//--- Ciclo while. Recorre un bloque de código mientras una condición específica sea verdadera. while (condition) { bloque de código}
//Cuenta del 1 al 5
let i = 0;

while (i < 5) {
    i++;
    console.log(i);
}

//Imprimir los elementos de un array
const frutas = ["fresa", "sandia", "naranja", "manzana", "zapote", "pera", "mandarina", "toronja", "guayaba"];

let fruta = 0;
while (fruta < frutas.length) {
    console.log(frutas[fruta]);
    fruta++;
}

//Imprimir una secuencia creciente de asteriscos, 1 a 5
let limite = 5;
let iteracion = 0;
let asterisco = "";

while (iteracion < limite) {
    //asterisco = asterisco + "*";
    asterisco += "*"; //refactorizando
    console.log(asterisco);
    iteracion++;
}

//--- Ciclo do-while. Recorre un bloque de código mientras una condición específica sea verdadera, pero se ejecuta una vez sin importar la condición, y después evalúa.
let j = 0;

while (j > 1){ //false
    console.log(j);
    j++;
}

//Contrastando con el ciclo while, en donde si se imprime el 0 porque la sentencia se ejecuta al menos una vez y después pasa a while para evaluar
do {
    console.log(j);
    j++;
} while (j > 1);

//--- Control de ciclos. Podemos recurrir a dos sentencias: break y continue. Break detiene un ciclo, en cambio continue permite que el ciclo continúe y muestra un valor distinto 
j = 0; //Reasigno el valor 0 a la variable

while (j < 100 ){
    j++;
    console.log(j);
    //Sentencia break
    if(j === 22) {
        break;
    }
}

for (let j = 1; j <= 10; j++){
    if(j === 7) {
        console.log("Cliente ganador " + j);
        continue;
    }
    console.log(`Cliente número ${j}`);
}

//break and continue
let k;
cuenta = 0;

for (k = 0; k <= 20; k++) {
    if(k === 13) {
        break;
    }
    if(k % 2 === 0) {
        continue;
    }
    cuenta++;
}
console.log(`Hay ${cuenta} números impares`);