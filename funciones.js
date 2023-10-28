// ANCHOR ---> FUNCIONES

let nombre = "pepito";

console.log(nombre);

// DECLARADAS --> tienen nombre
function f1() {
  // BLOQUE
  let edad = 30;
  console.log(edad);
}

f1(); //---> undefined

// <h3>{resultado}</h3>

function saludar(nombreUsuario) {
  return `hola ${nombreUsuario} como estas?`;
}

let saludo = saludar("maria");
console.log(saludo);

let saludo2 = saludar("pepito");
console.log(saludo2);

let saludo3 = saludar("juancito");
console.log(saludo3);


function sumar(a, b) {
  return a + b;
}

let resultado = sumar(10, 15); //---> 25
console.log(resultado);

let res2 = sumar(50, 45)
console.log(res2)


function mostrarNumero (num1 = 0 , num2 = 0){
  return num1 + num2
}
let res = mostrarNumero(5, 9)
console.log( res )


// EXPRESADA COMUN -- EXPRESADA ARROW FUNCTION --> ANONIMAS

// COMUN 

let restar = function (n1, n2) {
  return n1 - n2
}

let resultadoResta = restar(10, 5)
console.log(resultadoResta)

// arrow function 

let multiplicar =  numero => numero * 10

let resMulti = multiplicar(4)
console.log(resMulti)

// HOISTING


// SCOPE ---> alcance que tienen las variables 
// let y const ---> scope local



let sonido = "guauuu"


let decirSonido = ()=>{

  let sonido = "miauuu"
  console.log(sonido)
}

decirSonido()



