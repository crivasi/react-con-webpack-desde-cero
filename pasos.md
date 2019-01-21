## Configurar proyecto con react, webpack y babel desde cero

* Este proyecto está terminando, por lo tanto no se detalla en cada paso el código que se deba escribir tanto en los componentes como en los demás archivos

* Este proyecto tiene dos componentes, uno contenedor y otro de presentación

### Paso 1.
Crear la carpeta del proyecto ej: webpack-react-tutorial
`mkdir webpack-react-tutorial && cd $_`
Crear una carpeta src dentro
`mkdir -p src`

#### Paso 2.
inicializar npm con `npm init -y`, el `-y` es para que no pregunte nada.

### Paso 3.
Insatalar webpack `npm i webpack --save-dev` y webpack-cli `npm i webpack-cli --save-dev`

### Paso 4.
Ahora modificamos el package.json para que al correr el comando build de npm `npm run build`, se ejecuten
las tareas de webpack en modo producción:
` "scripts": { "build": "webpack --mode production" } `

### Paso 5.
Como en los componentes de React se usa sintaxis de EcmaScript6, es necesario instalar para transpilar el código a ES5, con el fin de compatibilidad con los navegadores que no interpreten aún ES6, por lo tanto, es necesario instalar babel, pues ayuda con esta tarea,
se instala junto a los presest (los que indica qué convertir):

`npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev`

* babel preset env for compiling Javascript ES6 code down to ES5 (please note that babel-preset-es2015 is now deprecated)
* babel preset react for compiling JSX and other stuff down to Javascript

### Paso 6.
Ahora es necesario crear el archivo .babelrc con lo siguiente, para que babel pueda usar los presets:
`{ "presets": ["@babel/preset-env", "@babel/preset-react"] }`

### Paso 7.
Ahora le definimos parte de la configuración de webpack en un archivo webpack.config.js con lo siguiente:
``` 
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}; 
```
lo que significa que todos los archivos que se encuentren con extensión js o jsx se conviertan de ES6 a ES5

### Paso 8.
Instalar react y react-dom `npm i react react-dom --save-dev`

### Paso 9.
Crear una estructura como la siguiente:
`mkdir -p src/js/components/{container,presentational}`
para crear dos carpetas: 
* **Container**: para los componentes contenedores
* **Presentational**: para los componentes de presentación

### Paso 10.
Crear el componente FormContainer que será el encargado de mostrar componentes hijos:
`src/js/components/container/FormContainer.jsx`

### Paso 11.
Crear un componente de presentación llamado Input
`src/js/components/presentational/Input.jsx` 
e instalar Proptypes, pues al ser un componente controlado y debido a que sus
propiedades llegarán del contenedor container Form, es necesario hacer validaciones cuando se pasen las propiedades de uno al otro, Prop types permiten hacer esas validaciones y mostrar posibles errores al pasar las props
`npm i prop-types --save-dev`

### Paso 12.
se crea un archivo index.js `./src/index.js`, y allí se importa el componente contenedor:
`import FormContainer from "./js/components/container/FormContainer.jsx";`
al hacer npm run build, se genera una capeta dist con un archivo main.js adentro `./dist/main.js`, en el cual está transpilado todo el código jsx y/o js de ES6 a ES5

### Paso 13.
Ahora para poder ver el resultado en el navegador es necesario indicarle a webpack que procese el código HTML, instalando 2 plugins html-webpack-plugin and html-loader:
`npm i html-webpack-plugin html-loader --save-dev`
y modificando el webpack.config.js en la parte de plugins, si no la tiene es necesario agregarla

### Paso 14.
Luego se crea un archivo index.html `./src/index.html` (con cualquier librería o framework CSS), no es necesario incluir el archivo index.js, debido a que cuando se corre npm run build, se crea en dist un archivo main.js y se agrega automáticamente al archivo index.html que también está en dist

### Paso 15. 
Si no se quiere correr npm run build siempre que se modifique un archivo, se puede instalar el servidor de desarrollo de webpack
`npm i webpack-dev-server --save-dev`
y se agrega el comando start o dev, el que se quiera en el package.json
```
"scripts": {
  "start": "webpack-dev-server --open --mode development",
  "build": "webpack --mode production"
}
```
**Nota: si en vez de start se pone dev, se corre así `npm run dev`**







