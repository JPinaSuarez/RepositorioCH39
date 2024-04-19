//Función que me permite determinar si un número es par o es impar

const determinarParidad = (numero) => {
    /*Opción 1
    if (numero % 2 === 0){
        console.log(`El número ${numero} es par`)
    }
    else{
        console.log(`El número ${numero} es impar`)
    }*/

    /*Opción 2
        (numero % 2 === 0) ? console.log(`El número ${numero} es par`) : console.log(`El número ${numero} es impar`);
    */

    /*Opción 3
    const determinarParidad = (numero) => {
        return numero % 2 === 0 ? "par" : "impar";
    }
    */

    //Opción 4
    console.log(numero % 2 === 0 ? `El número ${numero} es par` : `El número ${numero} es impar`);
};

//Exportar mi función para que pueda ser utilizada en cualquier parte de mi proyecto
export default determinarParidad;