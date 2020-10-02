// Parámetros por defecto -> podemos establecer ciertos valores que le pasamos a una función por defecto

 //Anterior a ES6
function newFunction(name, age, country){
  var name = name || 'john'
  var age = age || 31
  var country = country || 'CL'
  console.log(name, age, country)
}

//Nueva forma
function newFunction2(name = 'john', age = 31, country = 'CL'){
  console.log(name, age, country)
}

newFunction2() //john 31 CL
newFunction2('Soledad', 33, 'CL') //Soledad 33 CL

//Concatenación

let hello = 'Hello'
let world = 'World'
let unir = hello + ' ' +world
console.log(unir)

//ES6 => Template literals
let unir2 = `${hello} ${world}`
console.log(unir2)

//Multilínea
let lorem = 'Es es una primera frase \n' + 'esta es una segunda frase'

//Multilíea en ES6
let lorem2 = `Primera frase
  segunda frase con salto de línea`

console.log(lorem)
console.log(lorem2)

//Desestructuración -> es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables
let person = {
  name: 'Soledad',
  age: 32,
  country: 'CL'
}

//Al usar la notación persona.name -por ejemplo-, llamaremos al atributo correspondiente a la key name del objeto person
console.log(person.name, person.age, person.country)

//Ac´desestructuramos nuestro objeto, mucho más simple, además de elegir cuales keys necesitamos
let {name} = person
console.log(name)

//Spread Operator -> Operador de propagación

let team1 = ['colo', 'chile', 'cobreloa'];
let team2 = ['Conce', 'cato', 'iquique'];

let soloUnTeam = ['paine', ...team1, ...team2]
console.log(soloUnTeam)

//Var -> funciona sobre el scope global = windows
{
  var globalVar = 'Global var'
}

//Let -> funciona solo sobre este scope
{
  let globalLet = 'Global let'
}

console.log(globalVar)
console.log(globalLet)

/*
 *        keyword     const   let   var
 * global scope       no      no    yes
 * function           yes     yes   yes
 * block scope        yes     yes   no
 * puede ser          no      yes   yes
 *  reasignada
 */

//Arrow Functions

const names = [
  {name: 'John', age: 31},
  {name: 'Felix', age: 32}
]

let listaDeNombres = names.map(function (item) {
  console.log(item.name) //John Felix
})

let listaDeNombres2 = names.map(item => console.log(item.age)) //31 32

//Para manejar el asincronismo, esto es, que 2 eventos no van a suceder al mismo tiempo, es que se incorporaron las PROMESAS, que viene a reparar el problema de los callbacks (callback hell = anidar callbacks infinitamente)
//Promesa -> Una Promise es un objeto que representa la terminación o el fracaso de una operación asíncrona. 

const helloPromise = () => {
  //Retornamos una nueva promesa, con 2 elemenos que normalmente necesita resolve y reject (exitoCallback y falloCallback)
  //Básicamente la promesa es que algo va a pasar, ya sea en caso de ser verdadero o falso
  return new Promise((resolve, reject) => {
    //Validamos la promesa
    if (true) {
      resolve('Fue resuelta positivamente')
    } else {
      reject('algo salió mal')
    }
  })
}

//Ejecutemos la promesa
helloPromise()
  .then(Response => console.log(Response))
  .then(() => console.log('Print de esta línea si es postivo'))
  .catch(error => console.log(error))


//Clases, Módulos y Generadores

class calculator {
  //Método constructor para inicializar nuestra clase
  constructor(){
    //Declaramos las variables que estarán dosponibles en un scope global
    this.valorA = 0;
    this.valorB = 0;
  }
  sumar(valorA, valorB){
    //igualamos los 2 valores que queremos sumar a los valores que recibimos
    this.valorA = valorA;
    this.valorB = valorB;
    return this.valorA + this.valorB
  }
}

//Utilizamos la clase
const calc = new calculator();
console.log(calc.sumar(2,2))

//Módulos
import { hola } from './modelue'

hola()

//Generadores -> función especial que retorna una serie de valores según el algoritmo definido
function* holaMundo(){
  if (true){
    yield 'Hola, ';
  }
  if (true){
    yield 'Mundo';
  }
}

const generatorHola = holaMundo();
console.log(generatorHola.next().value)
console.log(generatorHola.next().value)


