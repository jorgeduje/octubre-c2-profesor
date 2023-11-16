// TODO ---> 1
// Realizar una función que reciba por parámetro dos valores,
// el primero será numérico y el segundo booleano.
// Si el número es par y el booleano es true entonces retornar “Ha pasado la condición”.
// En cambio, si el número es impar y el booleano es false retornar “No ha pasado
// la condición”.
// Para cualquier otro caso, retornar -1

const verificador = (num, bool) => {
  if (num % 2 === 0 && bool) {
    return "Ha pasado la condición";
  } else if (num % 2 !== 0 && !bool) {
    return "No ha pasado la condición";
  } else {
    return -1;
  }
};

let res = verificador(13, false);
console.log(res);

let productos = [
  {
    nombre: "motorola",
    precio: 40,
    cantidad: 5,
    categoria: "telefonia",
  },
  {
    nombre: "notebook",
    precio: 80,
    cantidad: 10,
    categoria: "computacion",
  },
  {
    nombre: "zapatilla",
    precio: 20,
    cantidad: 2,
    categoria: "indumentaria",
  },
  {
    nombre: "Macbook",
    precio: 100,
    cantidad: 7,
    categoria: "computacion",
  },
  {
    nombre: "samsung",
    precio: 60,
    cantidad: 15,
    categoria: "telefonia",
  },
  {
    nombre: "monitor",
    precio: 30,
    cantidad: 5,
    categoria: "computacion",
  },
];

// TODO ---> Simulacion frontend E-commerce

/* 
  1)Las personas encargadas del backend nos enviaron una lista de productos pero 
      se olvidaron de asignarles un ID unico para cada producto,
      nuestra tarea es agregarles ese ID unico a cada uno
      Requisito: debe empezar en 1 y ser secuencial 
  2) Nos solicitan crear un algoritmo que pueda determinar el dinero total que ingresaria
      si se venden todos los productos que tenemos en stock
  3) Debemos crear una funcion que al ejecutarse filtre los productos que sean
      X categoria y retornar dichos productos en un nuevo arreglo(debe ser dinamica)
 
    4) Por ultimo debemos crear una funcion para poder aumentar el precio de una categoria
   especifica que recibiremos por parametros y tambien recibiremos por cuanto queremos
 multiplicar dicho precio
*/
// 1)


const generadorDeIDs = ( arreglo )=>{

    for(let i = 0; i < arreglo.length; i++){
        arreglo[i].id = i + 1
    }

}

generadorDeIDs(productos)
console.log( productos )

const calcularTotal = ( array ) => {
   
    let suma = 0

    for (let i = 0; i < array.length; i++) {
       suma += array[i].precio * array[i].cantidad
    }

    return suma

}

let total = calcularTotal( productos )
console.log(total)

const filtrador = (array, nombreCate )=>{

    let arrayFiltrado = []

    for (let i = 0; i < array.length; i++) {
         if( array[i].categoria  === nombreCate ){
            arrayFiltrado.push( array[i] )
         }
    }

    return arrayFiltrado

}

let productosCompu = filtrador(productos, "computacion")
console.log(productosCompu)

let numeros = [ 15, 12, 14, 3, 7, 1, 9 ]

// console.log( Math.min(...numeros) )
// console.log( Math.max(...numeros) )

const determinarMenor = (array)=>{

    let menor = array[0] // 1

    for (let i = 1; i < array.length; i++) {
        if( menor > array[i] ){ // {}.precio > {}.precio - {} < {}
            menor =  array[i]
        }
    }

    return menor 

}
let menorNumero = determinarMenor(numeros)
console.log(menorNumero)

let numeros2 = [ 13, 12, 14, 3, 7, 1, 9 ]

const determinarMayor = (array)=>{

    let mayor = array[0] //14

    for (let i = 1; i < array.length; i++) {
        if( mayor < array[i] ){
            mayor =  array[i]
        }
    }

    return mayor 

}
let mayorNumero = determinarMayor(numeros2)
console.log(mayorNumero)