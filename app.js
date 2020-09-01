//CLASE 1 - 3 Tipos de loops o bucles en JS

let colores = ["azul", "verde", "negro", "blanco", "rosado"];
//accedemos a los colores desde su indice
console.log(colores[1]);

//Bucle para mostrar todos los elementos de una array
console.log("---- for ----");
for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

console.log("---- forEach ----");
colores.forEach(function (color) {
  console.log(color);
});

console.log("---- forEach version arrow function ----");
colores.forEach((col) => console.log(col));

console.log("---- for of ----");
for (let color of colores) {
  console.log(color);
}

//CLASE 2 - Operador Ternario

/*
 * condición ? verdadero : falso
 * se parece a un bule if else
 */

var carToyota = 1000;
var carFord = 900;

var masVendido;

if (carToyota < carFord) {
  masVendido = carFord;
} else {
  masVendido = carToyota;
}
console.log(masVendido);

console.log("---- Operador Ternario ----");

const autoMasVendido = carToyota < carFord ? carFord : carToyota;
console.log(`el más vendido es: ${autoMasVendido}`);

var edad = 25;
const comprarCopete = edad >= 18 ? "Puedes comprar" : "No puedes comprar";
console.log(comprarCopete);

//CLASE 3 - Los Arrays

//Métodos POP, PUSH, SHIFT y UNSHIFT

console.log("---- Arrays y sus métodos ----");

let frutas = ["pera", "manzana", "uva"];
console.log(frutas);
//Cambiamos el último elemento de una array
frutas[frutas.length - 1] = "piña";
console.log(frutas);

//PUSH: añade 1 o + elementos al final de un array
frutas.push("sandia");
console.log(frutas);

//POP: elimina el último elemento
frutas.pop();
console.log(frutas);

//SHIFT: elimina el 1er elemento de un array
frutas.shift();
console.log(frutas);

//UNSHIFT: agrega 1 o + elementos al inicio del array
frutas.unshift("uva", "melón");
console.log(frutas);

//CLASE 4 - Copiar o duplicar arrays
console.log("---- Copiar y duplicar arrays ----");

//SLICE: copiamos un array o una parte de él
let masFrutas = frutas.slice();
console.log(masFrutas);
//acepta 2 parámetros opcionales: inicio y fin a copiar
let menosFrutas = frutas.slice(1, 3);
console.log(menosFrutas);

/* Spread Operator: permite descomponer, copiar y concatenar arrays
 * y objetos de forma sencilla.
 */

const numeros = [1, 2, 3];
const masNumeros = [4, 5, 6];

//Copiar array
let copiarNumeros = [...numeros];
copiarNumeros[0] = 4;
console.log(copiarNumeros);

//Otra forma de copiar un array
let otraCopiaNumeros = Array.from(copiarNumeros);
console.log([...otraCopiaNumeros, "aquí", "más", "números"]);

//Concatenar array
console.log(numeros.concat(masNumeros)); //forma clásica
console.log([...masNumeros, ...numeros]); //spread operator

//Lo interesante del spread operator, es que nos permite intercalar
// otros valores, por ejemplo:
let muchosNumeros = [0, ...numeros, "hi", ...masNumeros, 7, 8];
console.log(muchosNumeros);

console.log("---- Spread Operator con Objetos ----");

const usuario = {
  name: "John",
  id: 1233,
};

let copiaUsuario = { ...usuario };

copiaUsuario.web = "hola.com";

console.log({ usuario });
console.log({ copiaUsuario });

const contactoUsuario = {
  twitter: "@john1",
  mail: "john@gmail.com",
};

//forma clásica de fusionar los 2 objetos
const fullUsuario = Object.assign({}, usuario, contactoUsuario);
console.log({ fullUsuario });

const todoUsuario = { ...copiaUsuario, ...contactoUsuario };
console.log({ todoUsuario });

/* Con la última forma podemos sobre escribir un elemento, en caso
 * de colisión de propiedades, la propiedad que prevalece en el objeto
 * final es la que se encuentra más a la derecha.
 */

const usuarioNuevoDato = { ...copiaUsuario, ...contactoUsuario, name: "irma" };
console.log({ usuarioNuevoDato });

//CLASE 5 - Algoritmos en Javascript

console.log("---- Algoritmos en Javascript ----");

//Cómo mostrar un elemento aleatorio de un Array
let frutaAleatoria = frutas[Math.floor(Math.random() * frutas.length)];
console.log(frutaAleatoria);

//Encuentra la palabra más larga

function buscarPalabra(srt) {
  //Con SPLIT separamos cada palabra por un espacio, y nos devuelve
  //lo obtenido mediante una array
  let palabras = srt.split(" ");
  let miPalabraLarga = "";
  for (let palabra of palabras) {
    if (palabra.length > miPalabraLarga.length) {
      miPalabraLarga = palabra;
    }
  }
  return miPalabraLarga;
}

console.log(buscarPalabra("la palabra javascript es más larga"));
console.log(
  `La palabra más larga es: ${buscarPalabra(
    "la palabra javascript es más larga"
  )}`
);

//Encuentra la palabra más larga v.2

function palabraLarga(stringIngresado) {
  let arreglo = stringIngresado.split(" ");
  arreglo.sort(function (a, b) {
    return b.length - a.length;
  });
  console.log("La palabra más larga es: " + arreglo[0]);
}
palabraLarga("la palabra javascript es más estaaaaaaaa");
