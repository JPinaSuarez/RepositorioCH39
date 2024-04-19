/**
 * Utilizando la manipulación del DOM podemos acceder a los elementos mediante su id, class, tag.
 *      document.getElementById("id");
 *      document.getElementsByClassName("class");
 *      document.getElementsByTagName("tag");
 */

//getElementById("id");
const tituloH1 = document.getElementById("title1");
const tituloH2 = document.getElementById("title2");

console.log(tituloH1); //Trae el elemento completo
console.log(tituloH1.innerText); //Muestra el texto que vive en mi elemento en formato string
console.log(tituloH2.innerText); //Output: JavaScript 10

//getElementsByClassName("className");
const titulos = document.getElementsByClassName("title");
console.log(titulos); //Devuelve la colección de elementos
console.log(titulos.length); //Output: 4
console.log(typeof titulos); //Colección de arrays: object

//getElementsByTagName("tagName");
const titulosH3 = document.getElementsByTagName("h3");
console.log(titulosH3);

/** Método para llamar elementos mediante selectores CSS (. #)
 * Se usa para procesos específicos y sintaxis querySelector.
 * Podemos traer la primer coincidencia o todos los elementos de consulta
 *      document.querySelector("selector");
 *      document.querySelectorAll();
 */

//querySelector();
const titulo4 = document.querySelector("#title4");
console.log(titulo4);

const primerTitulo = document.querySelector(".title");
console.log(primerTitulo);

//querySelectorAll();
const titulosQuery = document.querySelectorAll(".title");
console.log(titulosQuery);

//--- Manipular el DOM desde JS, en este caso los estilos del elemento
tituloH1.style.textAlign = "center";
tituloH1.style.color = "#E1523D";

//Modificar el texto existente de un elemento, innerText me permite acceder y modificar el texto de un elemento
tituloH2.innerText = "Sesión de Manipulación del DOM - CH39"
tituloH2.style.color = "#C2BB00";

/** Crear y agregar elementos en el DOM. Este proceso se divide en dos: crear el nodo y agregar el nodo.
 *  - Crear nodos:
 *      document.createElement("tipoElemento"); ---> Crea elementos a partir de etiquetas
 *      document.createTextNode("string") ---> Crea texto dentro de las etiquetas
 *  - Agregar nodos:
 *      parentNode.appendChild(node);
 *      parentNode.append(node);
 *      parentNode.insertBefore(node);
 *      parentNode.insertAdjacentElemento(node);
 */

const tituloH4 = document.createElement("h4"); //Creando elemento h4
const imgNode = document.createElement("img"); //Creando elemento img

//--- Ya creé mis dos nodos (h4, img), ¿dónde y cómo los agrego?
// 1. Obtengo el nodo padre (parentNode) mediante su id
const imgParent = document.getElementById("img--container");
// 2. Crear el texto que vivirá en el nodo1 (titulo4)
const textoTitulo4 = document.createTextNode("Imagen agregada desde DOM");
// 3. Insertar el texto en el nodo1
tituloH4.appendChild(textoTitulo4);
// 4. Mando a llamar el ParentNode y agrego el ChildNode 
imgParent.appendChild(tituloH4);
imgParent.style.color = "#A1C7E0"
// 5. Configurando imagen. Establecer atributos de tipo img (src, alt, width, etc.)
imgNode.src = "../../public/bob_ross_lego.png";
imgNode.width = "300";
imgNode.alt = "imagen de Bob Ross";
// 6. Agregando imagen al ParentNode
imgParent.appendChild(imgNode);

/*
<div id="img--container">
    <h4>Imagen agregada desde DOM</h4>
    <img src="../../public/bob_ross_lego.png" alt="bob ross" width="300"> 
</div>
*/

/**
 * Otra forma de leer y modificar nodos
 *      document.outerHTML ---> leer
 *      node.innerHTML

const elementOuter = tituloH2.outerHTML;
console.log(elementOuter); //Output: todo el elemento
 */
console.log(tituloH2.outerHTML);//Output: todo el elemento
tituloH2.innerHTML = "Manipulación del DOM en CH39";
