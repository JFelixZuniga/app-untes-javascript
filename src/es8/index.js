//ECMAScript 7 (junio de 2017)

//Object entries devuele los valores de una matriz
//MDN Object.entries() devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado

const data = {
  frontend: "Oscar",
  backend: "Soledad",
  design: "Felix",
};

//Tranformar el objeto DATA en una matriz.
const entries = Object.entries(data);
console.log(entries);

/* Imprime lo siguiente:
[
  [ 'frontend', 'Oscar' ],
  [ 'backend', 'Soledad' ],
  [ 'design', 'Felix' ]
]
*/

//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length); //3

//Objetc Values: Me devuelve los valores de un objeto a un arreglo.

const data = {
  frontend: "Oscar",
  backend: "Soledad",
  design: "Felix",
};

const valores = Object.values(data);
console.log(valores); //Imprime: [ 'Oscar', 'Soledad', 'Felix' ]

// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal
//Podría servir del lado del front , para mostrar una estructura de elementos

const string = "hello";
console.log(string.padStart(7, "hi")); // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12, "hi")); // Se añade al final la palabra 'hi'

//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const data = {
  frontend: "Oscar",
  backend: "Soledad",
};

//Async Await
//Las promesas y async await resuelven la asincronía de distinta forma. Con las promesas no sabemos cuándo se va a resolver y con async await forzamos una espera en la función. No siempre se va a usar uno, el otro o ambos, por ello lo primero es entender el caso de uso y después empezamos a implementar todo lo que hemos aprendido aquí.

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hola Mundo"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
