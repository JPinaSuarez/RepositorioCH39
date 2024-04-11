console.log("==== Arrays ====");

//----- Opción 1 para inicializar un Array, agregando elementos de manera directa
const shopping = ["pan", "leche", "queso", "jamon", "tortillinas", "huevos", "galletas"];
console.log(shopping);

//----- Opción 2 para inicializar un Array, a partir de un Array vacío iremos agregando elementos por cada index
let cars = [];
//Agrego elementos llamando al Array y el index de cada elemento
cars[0] = "Volkswagen";
cars[1] = "Audi";
cars[3] = "BMW";
cars[2] = "Volvo";

console.log(cars);

//----- Opción 3 para inicializar un Array, como los Arrays son objetos, poseen su propia clase (Array)
const flores = new Array("rosa", "bugambilia", "cempasuchil");
console.log(flores);

//Longitud de un array (length)
console.log(`El array shopping posee ${shopping.length} elementos`); //Output: El array shopping posee 7 elementos

//Accediendo a un elemento mediante su índice
console.log(`Te ganaste un ${cars[3]} y un ramo de ${flores[2]}`); //Output: Te ganaste un BMW y un ramo de cempasuchil

//Accediendo al último elemento del Array
console.log(`El último elemento del Array shopping es ${shopping[shopping.length-1]}`);

//Modificar elementos mediante su índice
flores[0] = "girasol";
flores[1] = "margarita";
flores[2] = "amapola";
console.log(flores);

// ===== Arrays multidimensionales (Arrays de Arrays)
console.log("===== Arrays multidimensionales (Arrays de Arrays) =====");

let comidas = ["tamal de caminito", "corunda", "memela", "torta ahogada", "salbut", "chileatole"];
let estados = ["Yucatán", "Guadalajara", "Oaxaca", "Michoacán", "Puebla", "Tabasco"];

let menu = [comidas, estados]; //multidimensional
console.log(menu);

//Mandando a llamar al salbut, que se encuentra en el Array comida con indice 0 y el elemento salbut con indice 4
console.log(menu[0][4]);

console.log(`La ${menu[0][3]} es tradición en ${menu[1][1]}`);//Output: La torta ahogada es tradición en Guadalajara

/*
let menu2 = [
    ["tamal de caminito", "corunda", "memela", "torta ahogada", "salbut", "chileatole"], ["Yucatán", "Guadalajara", "Oaxaca", "Michoacán", "Puebla", "Tabasco"]
];

console.log(menu2);
*/

//Array inicial para probar métodos
const ch39 = ["Sergio", "Lizeth", "Valeria", "Brandon", "Benji", "Javier", "Erick", "Asbel", "Andrea", "Montse", "David", "Diana"];

console.log(ch39);

//Métodos de cola (queue): push, shift, unshift... método de pila (stack): pop, slice... map(function), indexOf, filter, reverse,etc.

//--- indexOf(); me devuelve el index del primer valor (elemento) encontrado en un array
console.log(ch39.indexOf("Benji")); //Output: 4
console.log(ch39.indexOf("Diana")); //Output: 11
console.log(ch39.indexOf("benji")); //Output: -1, no existe dentro del Array (case sensitive)

//--- pop(); elimina el último elemento del array
ch39.pop(); //Con console.log el Output: Diana
console.log(ch39);

//--- push(); agregamos un nuevo elemento al final del Array
ch39.push("Diana");
console.log(ch39);

//--- unshift(); agrega un nuevo elemento al inicio del Array
ch39.unshift("Liliana");
console.log(ch39);

//--- shift(); elimina el primer elemento del array
ch39.shift();
console.log(ch39);

//--- slice(); recupera todos los elementos a partir de un índice dado
let arraySlice = ch39.slice(10);
console.log(arraySlice);

//console.log(ch39.slice(10));

//--- at(); recupera el elemento con el índice dado
console.log(ch39.at(2)); //Output: Valeria

//--- sort(); ordena un Array de manera ascendente según el código ASCII
ch39.sort();
console.log(ch39);

//--- reverse(); invierte el orden del Array
ch39.reverse();
console.log(ch39);

//--- forEach(); ejecuta la función indicada una vez por cada elemento del array, es decir, recorre todos los elementos del array
ch39.forEach((developer) => console.log(developer));

//--- filter(); crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
//Quiero filtrar nombres con una longitud mayor a 6 caracteres
let nombresLargos = ch39.filter((nombre) => nombre.length > 6 );
console.log(nombresLargos);

//--- map(); crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
const developers = ch39.map((developer) => `Hola ${developer}`);
console.log(developers);

//Ejemplo 2 de map()
const numeros = [1, 2, 3, 4, 5];
const cuadrado = numeros.map(numero => numero * numero);

console.log(numeros);
console.log(cuadrado);