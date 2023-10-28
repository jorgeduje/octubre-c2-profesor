// VARIABLES --> cajas que guardan algo

// let - const - var

// console.log( edad )

let edad = 30;

let nombre = "Pepito";

console.log(nombre);

console.log(edad);

const apellido = "Perez";

console.log(apellido);

console.log(edad);

edad = 31;

console.log(edad);

nombre = "juan";

// apellido = "lopez"

let nombredeusuario = "juan carlos";
let nombreDeUsuario = "juan carlos";
let nombre_de_usuario = "juan carlos";

// TIPOS DE DATOS

// strings ---> cadenas de texto

let frase = "Hoy es un lindo dia!";
let frase2 = "Hoy es un lindo dia!";

let frase3 = 'hola "pepe" como estas?';

// numbers ---> numeros

let precio = 500; //--> float o integer

let telefono = "41231124";

console.log(typeof precio);
console.log(typeof telefono);

// booleans --> booleanos --> true y false

let elUsuarioEstaLogueado = true; // false

console.log(typeof elUsuarioEstaLogueado);

// undefined --> indefinido
// null --> nulo
// NaN  --> not a number

let nombreUsuario = null;

let edad2 = undefined;

let a = 15;
let b = "hola pepito como estas?";
let x = a * b;
console.log(x);

let y;

let r = "hola";

console.log(y);

a = "pepe";

console.log(a);

// OPERADORES

let n1 = 11;
let n2 = 2;

// matematicos

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2); // 5
console.log(n1 % n2); // --> 1

let nombree = "pepe";
let apellidoo = "perez";

console.log("hola " + nombree + " " + apellidoo + " como estas?");

// TEMPLATE LITERALS ---> BACKTICKS

console.log(`hola ${nombree} ${apellidoo} como estas?`);

// COMPARACION ---> booleano  TRUE o FALSE

let num1 = 15;
let num2 = "15";

// console.log( num1 > num2 )
// console.log( num1 < num2 )
// console.log( num1 >= num2 )
// console.log( num1 <= num2 )
// console.log( num1 != num2 )

console.log(num1 != num2); // ---> simple
// console.log( num1 == num2 ) // ---> simple

// console.log( num1 === num2) // ---> estricta
console.log(num1 !== num2); // ---> estricta

let estaLogueado = false;

let usuarioTieneAcceso = estaLogueado === true;
console.log(usuarioTieneAcceso);

// truthy - falsy

// LOGICOS
