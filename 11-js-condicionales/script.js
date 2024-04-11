
/*Operadores de comparacion: Son operadores que comparan dos expresiones y devuelven un valor booleano */

//== Operador de igualdad con el podemos verificar si un valor es igual a otro 

// let numero = 715;
// let numero1 = "715";

// alert(numero == numero1);

//Operador de no igual-inequallity se encarga de comparar que los valores sean diferentes o no sean iguales 

// let numero = 715;
// let numero1 = 321;

// alert(numero != numero1);

/*Operador de estricta igualdad-Identidad se encarga de comparar la igualdad del valor de los datos y el tipo de dato que tenemos*/

// let numero = 715;
// let numero1 = 715;

// alert(numero === numero1);

//Operador !== no identico se encarga de verificar que mis datos no sean estrictamente iguales 

// let numero = 715;
// let numero1 = 715;

// alert(numero !== numero1);

//Operador > mayor que se encarga de verificar que un valor sea mayor que otro 


// let numero = 715;
// let numero1 = 321;

// alert(numero > numero1);

//Operador < menor que se encarga de verificar que un valor sea menor que otro 


// let numero = 715;
// let numero1 = 321;

// alert(numero < numero1);

//Operador >= mayor o igual que, se encarga de verificar que un valor sea mayor o igaul que otro 


// let numero = 715;
// let numero1 = 321;

// alert(numero >= numero1);

//Operador <= menor o igual que, se encarga de verificar que un valor sea menor o igual que otro 


// let numero = 715;
// let numero1 = 321;

// alert(numero <= numero1);

/*Operadores lógicos 
AND && se encarga de evaluar y verificar que se cumplan las dos condiciones, es caso de que una no se cumpla nos devuelve un false 
OR || se encarga de evaluar y con que una de las condiciones se cumpla nos devuelve un true 
NOT ! lo que hace es regresarlo contrario de lo que evaluo 
 */

// let numero1 = 25;
// let numero2 = 47;

// let compar = numero1 <= numero2;
// let compar2 = numero1 != numero2;

// alert(compar && compar2);

// let numero1 = 25;
// let numero2 = 47;

// let compar = numero1 <= numero2;
// let compar2 = numero1 == numero2;

// alert(compar || compar2);solo nos da false en caso de que las dos condiciones no se cumplan 

// let numero1 = 25;
// let numero2 = 47;

// let compar = numero1 <= numero2;s
// let compar2 = numero1 == numero2;

// alert(!compar);

// let num1 = 10;
// let num2 = 25;
// let num3 = 39;
// let num4 = 58;
// let num5 = 89;

// let ejemplo = (false) || (true);
// alert(ejemplo);

/*Condicionales son una estructura que nos permite tener control gracias a que se tienen que cumplir siertas condiciones 
if esta declaracion va a evaluar si la condiocion se cumple y en caso de que si, se ejecuta 
else if esta declaracion se utiliza en caso de que el if no se cumpla y necesite una opcion adicionale 
else-si no esta declaracion se utiliza al final en caso de que ninguna de las condiciones anteriores se cumpla 
 */

let cantidadProducts = 5;

if (cantidadProducts >= 3 && cantidadProducts < 6){
    console.log("Obtuviste un descuento del 5% en tu compra total");
} else if (cantidadProducts >= 6 && cantidadProducts < 10) {
    console.log("Super tienes un descuento de 10% en tu compra total");
} else if (cantidadProducts >= 10 && cantidadProducts < 15) {
    console.log("Felicidades tienes un descuento del 15% en tu compra total");
}else {
    console.log("No compraste lo suficiente :(");
}
