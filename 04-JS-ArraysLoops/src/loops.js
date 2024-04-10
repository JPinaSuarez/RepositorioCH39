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