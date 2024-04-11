//Tipos de datos y variables 

/* 
variables
var: Va a tener un alcance global, se pueden declarar, inicialiar y modificar 
let: Va a tener un alcance local es decri solo va a funcionar dentro del bloque de código en el que se encuentre. Es la mas utilizada  
const: Es una constante, esto quiere decir que no se va a poder modificar durante el desarrollo de mi programa
 */

/*
Tipos de datos primitivos 
String:Es una cadena de texto y siempre va en comillas
let nombre = "Fernanda";
Number: Es un numero 
let numero = 15;
Boolean: Es un tipo de dato que representa true o false 
let mayorDeEdad= true;
Undefinied:Es un tipo de dato en el cual la variable se ha declarado pero no inicializado 
let mes=;
Null:Este tipo de dato su valor es nulo, pero si esta declarada e inicializada
let nombre = prompt ("Como te llamas?");
alert (nombre);
let numero = null; 
array: matriz o arreglo. Es un tipo de dato en el cual se almacena una colección de elementos de manera ordenada. cuenta con un indice y una longitud, longitud se refiere a la cantidad de elementos que tenemos dentro de mi array y el indice los contabiliza apartir del 0 
 */

/* Scoope
Es el alcance que puede tener mi variable 
*/ 

/*Multiples variables: Podemos trabajar con multiples variables declarando y luego inicializando o declarando e inicialializando dentro de la misma linea de codigo 

let numero1, numero2, numero3;

numero1 = 12;
numero2 = 23;
numero3 = 52;

let numero1 = 12;
let numero2 = 23;
let numero3 = 52;*/

/*console.log(); es una herramienta que noe permite visualizar en consola la informacion que yo requiero
console.warn(); nos va a mostrar un mensaje de advertencia 
console.error(); nos va a mostrar un mensaje de error 
console.table(); nos muestra el mensaje en una tabla  */

/*Operadores de asignacion 
= asiganción 
+= adición
-= sustracción
*= multiplicación
/= división 
%= resto
**= exponenciacion 
*/


/*operadores aritmeticos 
+ suma
- resta 
* multiplicacion 
/ division
% residuo
++ incremento
-- decremento 
*/

let numero1 = 30;
let numero2 = 50;

let suma =(numero1 % numero2);



console.log(suma);



//let numero = 30;

//numero %= 50;

//console.log(numero);

saludo = "" + numero1 + numero2;

document.write(saludo);

let nombre = ["Lili", "Liz", "Andy", "Vale", "Diana"];
console.log(nombre);


//Encasillamiento es el proceso de convertir un valor de un tipo de dato en tro tipo de dato 
//typeof metodo que nos va a ayudar a saber cual s el tipo de dato con el que estoy trabajando 


//conversion de number a string 
let numero = 30;
/*let cambioString = numero.toString();
console.log(typeof cambio);*/

/*let cambioBoolean = Boolean(numero);
console.log(cambioBoolean);   conversion de number a boolean, siempre que el numero sea distinto a cero el resultado va a ser true*/

let mayorDeEdad = true;
/*let converString = mayorDeEdad.toString();
console.log(typeof converString); conversion de boolean a string*/

let apellido = "Ramos";
let cambioNumero = parseInt(apellido);//Se utiliza la funcion parseInt que se refiere a un numero entero, para hacer el cambio de string a number 
console.log(typeof cambioNumero);// conversion de string a number 

function agregarAlCarrito(producto, cantidad) {
    // Código para agregar el producto al carrito de compras con la cantidad especificada.
    // Retorna un mensaje indicando que el producto fue agregado al carrito.
    return `Se ha agregado ${cantidad} ${producto.nombre} al carrito de compras.`;
  }
  console.log(agregarAlCarrito);