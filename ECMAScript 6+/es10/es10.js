//ECMAScript 7 (junio de 2019)


//Flat -> devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad
let array = [1,2,3, [4,5,6, [7,8,9]]];

console.log(array.flat()) //Imprime: [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ] ]
console.log(array.flat(2)) //Imprime: [1, 2, 3, 4, 5, 6, 7, 8, 9]

let array = [1,2,3,4,5];

//flatMap -> mapea cada elemento, luego pasarle una funcion y aplanar
console.log(array.flatMap(value => [value, value * 2])); //Imprime: [1, 2, 2, 4,  3, 6, 4, 8, 5, 10]

//trim -> permite eliminar los espacios en blanco
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

let hello = 'hello world                  ';
console.log(hello);
console.log(hello.trimEnd()); // final


//optional catch biding
try {
    
} catch/*(error) ya no es necesario colocarlo*/ {
    error
}

//fromEntries -> método que transforma clave-valor en un objeto
// array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries)) //Imprime: { name: 'oscar', age: 32 }

//symbol object
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);