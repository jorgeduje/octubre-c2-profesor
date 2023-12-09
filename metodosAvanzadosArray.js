let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 5,
    titularCuenta: "pepito",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 3,
    titularCuenta: "maria",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 2,
    titularCuenta: "juancito",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 1,
    titularCuenta: "carmen",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 12,
    titularCuenta: "Jack",
  },
];

// CALLBACK ---> Es una funcion que se pasa como argumento a otra funcion

const sumar = (a, b) => {};

sumar(() => {}, 15);

let numeros = [5, 2, 6, 3];

numeros.includes(5);
numeros.push("hola");

// const encontrar = (array)=>{
//     for (let i = 0; i < array.length; i++) {
//         if( array[i].titularCuenta === "juancito"){
//             return array[i]
//         }

//     }
// }
// let cliente = encontrar(arrayCuentas)
// console.log( cliente )

// FIND --> encontrar un elemento
// SIEMPRE DEVUELVE EL ELEMENTO ENCONTRADO O UNDEFINED
// LO QUE ME PIDE ES UNA CONDICION

let cliente = arrayCuentas.find(
  (cuenta, indice) => cuenta.titularCuenta === "juancito"
);
console.log(cliente);

// FILTER ---> filtrar
// lo que me pide es una condicion para cada callback
// SIEMPRE me devuelve un nuevo arreglo con todos los elementos que cumplan la condicion

let arrayFiltrado = arrayCuentas.filter((cuenta) => cuenta.saldoEnPesos < 5);
console.log(arrayFiltrado);

// MAP ---> sirve para devolver un nuevo arreglo de la misma longitud que el original pero
// con cosas nuevas

let numeritos = [5, 2, 6, 3]; // [0, 3, 6, 9 ]

let arregloNuevo = numeritos.map((numerito) => numerito * 3); // []
console.log(arregloNuevo);

let cuentasSimples = arrayCuentas.map((cuenta) => {
  return {
    saldoEnPesos: cuenta.saldoEnPesos,
    titularCuenta: cuenta.titularCuenta,
  };
}); //[ {} {} {} {}]

console.log(cuentasSimples);

let items = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 7,
  },
  {
    nombre: "tablet",
    precio: 350,
    stock: 12,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 21,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 5,
  },
];

// items.map( (item)=> { 
//     return <div>
//     <h3>{item.nombre}</h3>
//     <h3>{item.precio}</h3>
//     <h3>descripcion</h3>
//     <h3>{item.stock}</h3>
//   </div>;
// })



// FOREACH ---> NO DEVUELVE NADA, NI TAMPOCO ME PIDE QUE RETORNE NADA
// LO UNICO QUE HACE ES RECORRER EL ARRAY Y EJECUTAR UNA INSTRUCCION PARA CADA VUELVA

items.forEach( (item, indice)=> item.id = indice + 1 )
console.log(items)

// SORT

let numeritos2 = [5, 2, 6, 3]
numeritos2.sort( (a, b)=> b - a  )

console.log( numeritos2 )

items.sort( (a, b)=>  b.precio - a.precio )
console.log( items )