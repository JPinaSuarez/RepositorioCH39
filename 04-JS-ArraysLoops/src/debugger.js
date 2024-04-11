//break and continue
let k = 0;
let cuenta = 0;

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

/*Utilizando las herramientas de desarrollador del navegador (Inspeccionar), en la pestaña de Source, podemos acceder al debugger de nuestro código. Para ello debemos realizar lo siguiente:
    1. Marca breakpoints (código a depurar)
    2. Recargar el navegador
    3. Presionar el botón con la flecha circular para recorrer paso por paso
    4. En la lista de Scope aparece el paso a paso y cómo se ejecutan o modifica el código
    5. Para terminar, quitar todos los breakpoints, detener el navegador y recargar el navegador.
*/