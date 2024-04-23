//Aquí vamos a crear las funciones de nuestra calculadora
//Vamos a exportar como módulo de tipo CommonsJS y no de tipo ESModules

const calculator = {
    sum(a, b) {
        return a + b;
    },
    substract(a, b) {
        return a -b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    }
};

//ESModules: export default calculator
//CommonsJS
module.exports = calculator;