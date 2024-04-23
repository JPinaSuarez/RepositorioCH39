const calculator = require('./src/modules/calculator') //Importación de tipo CommonJs

console.log(calculator.sum(10, 20)); //Suma
console.log(calculator.substract(1, 55)); //Resta
console.log(calculator.multiply(12, 49)); //Multiplicación
console.log(calculator.divide(55, 7)); //División

//Para ejecutar solamente una vez el archivo usamos `node index.js`
//Para ejecutar y que se recargue automáticamente usamos `node --watch index.js`