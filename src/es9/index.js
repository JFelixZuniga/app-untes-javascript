//ECMAScript 7 (junio de 2018)

const obj = {
  name: 'John',
  age: 31,
  country: 'CL'
};

//Desestructuramos el objeto
let { name, ...allInfo } = obj;
console.log(name, allInfo); //Imprime: John { age: 31, country: 'CL' }


/**
 * Porpagation Properties
 */

const person = {
  name: 'Oscar',
  age: 32
};

const agregarInformacion = {
  ...person, //Agregamos los datos el objeto person
  country: 'MX'
};
console.log(`personInformation: `, agregarInformacion);

/**
 * Promise Finally
 */
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve('Hello World!');
        }, 3000)
      : reject(new Error('Test Error'));
  });
};

helloWorld()
  .then(respuesta => console.log('result -> ', respuesta))
  .catch(error => console.log('err -> ', error))
  .finally(() => console.log('finalizó'));

/**
 * Regex -> útil para trabajar con fechas.
 * Las fechas tienen: año, mes y día.
 * el [0-9] nos indica el rango de números, mientras que el {4} nos indica que se necesita un máximo de 4 dígitos
 * 
 */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);