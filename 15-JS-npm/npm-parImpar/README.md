# Crear un nuevo paquete de npm

## Pasos para crear el package
1. Inicializar npm desde CLI en el directorio del proyecto con el comando
```sh
npm init
```
2. Seleccionar las opciones que nos muestra npm en CLI.
3. Como definimos que el enter point se llama `index.js`, crear el archivo en main.
4. Crear una carpeta llamado `modules`, en donde vivirá nuestro módulo.
5. Crear el script dentro de la carpeta `modules`, con el nombre `parImpar.js`
    Aquí vivirá el código funcional para mi package.
6. Dentro de `parImpar.js` creamos una función para determinar si un número es par o es Impar
7. Exportar la función para que pueda ser utilizada en cualquier parte de mi proyecto
```javascript
export default determinarParidad;
```
8. Importar mi función en `index.js` para que la podemos utilizar (import function from ruta).
9. Modificar el `package.json` para permitir ejecutar desde module, utilizando la configuración `"type": "module"` debajo de `  "main": "index.js"` y agregar la extensión del archivo a la ruta de importación
10. Ejecuto mi aplicación en CLI utilizando el comando
```sh
node index.js
```
También podemos utilizar `node --watch index.js`
---

## Pasos para publicar el package en npm
1. Registrarse en el sitio de npm.
[Npm Website](https://www.npmjs.com/)
2. Modificar el `name` en `package.json` para que sea único
3. En CLI iniciamos sesión con el comando 
```sh
npm login
```
4. Seguimos el proceso de autentificación de 2 pasos en el correo
5. Regresamos a CLI y nos muestra el mensaje `Logged in on https://registry.npmjs.org/`
6. Lo único que queda es publicar el package desde CLI con visibilidad pública usando el comando:
```sh
npm publish --access=public
```
7. Mostrará un mensaje `+ nombrePackage`