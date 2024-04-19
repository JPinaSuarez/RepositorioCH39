//Importar el archivo .js en donde vive mi módulo
const calculator = require('../modules/calculator');

//Estructura de test: test("string", callback => {expect(function).toBe(result)})
test("Suma de dos números", () => {
    expect(calculator.sum(10, 20)).toBe(30);
});

//Test para resta de dos números
test("Resta de dos números", () => {
    expect(calculator.substract(1, 55)).toBe(-54);
});

//Test para multiplicar dos números
test("Multiplicación de dos números", () => {
    expect(calculator.multiply(12, 49)).toBe(588);
});

//Test para dividir dos números
test("División de dos números", () => {
    expect(calculator.divide(55, 7)).toBe(7.857142857142857);
});

//Test para dividir entre 0
test("División entre 0", () => {
    expect(calculator.divide(55, 0)).not.toBeNull();
});

//Test para obtener un valor cercano al esperado
test("División de dos números para obtener el valor cercano", () => {
    expect(calculator.divide(55, 7)).toBeCloseTo(7.857);
});