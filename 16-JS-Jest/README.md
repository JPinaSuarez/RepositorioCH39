# Pruebas unitarias con Jest

## Inicializar node con la configuración por default
```sh
npm init -y
```
## Crear nuestro enter point
`index.js`

## Instalar jest
```sh
npm install --save-dev jest
```

## Configurar las dependencias de jest
```javascript
{
  "scripts": {
    "test": "jest"
  }
}
```

## Configurando nuestros archivos
1. Crear carpeta `src` y dentro las carpetas `modules` y `tests`.
2. Dentro de `modules`, crear el archivo `calculator.js` con las funciones requeridas.
    NOTA: en este proyecto estamos usando módulos de CommonJS y no de EcmaScript(ES)
3. Dentro de `test` crear el archivo `calculator.test.js`
4. Crear funciones de test para probar el código
5. Ejecutar las pruebas unitarias con el comando
```sh
npm test
```