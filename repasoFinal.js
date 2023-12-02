// ejercicio 1 --> previo al parcial
// ejercicio 2 --> bubble sort
// ejercicio 3 A --> matrices un solo for
// ejercicio 3 B --> matrices doble for

// TODO FILTRAR LOS PRODUCTOS QUE TENGAN MENOS DE 10 UNIDADES EN STOCK
// Y RETORNARLO

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

const filtrador = (arr) => {
  let nuevoArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].stock < 10) {
      nuevoArr.push(arr[i]);
    }
  }

  return nuevoArr;
};

let res = filtrador(items);
console.log(res);

// TODO ORDENAR EL ARREGLO DE FORMA DESCENDENTE

let edades = [2, 12, 1, 5, 32, 56, 7];

const ordenar = (arr) => {
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

};

ordenar( edades )
console.log( edades )

let palabras = ["casa", "perro", "zoo", "mariposa"]

ordenar(palabras)
console.log(palabras)

// TODO ORDENAR EL ARREGLO DE FORMA ASCENDENTE SEGUN LA CANTIDAD DE STOCK

let productos = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 7,
  },
  {
    nombre: "tablet",
    precio: 350,
    stock: 21,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 12,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 16,
  },
];

const ordenarObj = (arr) => {
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].stock > arr[j + 1].stock ) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

};

ordenarObj(productos)
console.log(productos)

// DADA LA SIGUIENTE MATRIZ

let matriz1 = [
  [2, 4, 3],
  [3, 1, 5], // [9, 3, 15]
  [8, 4, 9],
];

// TODO ---> UN SOLO CICLO
// CREAR UNA FUNCION QUE RETORNE UN NUEVO ARREGLO
// CON TODOS LOS ELEMENTOS DE LA FILA de la posicion 1 (multiplicados x 3)

const fila = (mat)=>{

  let nuevoArr = []

  for(let i = 0; i < mat[1].length; i++ ){
    
    nuevoArr.push( mat[1][i] * 3 )
    
  }

  return nuevoArr

}

let arrFilaUno = fila(matriz1)
console.log(arrFilaUno)
console.table(matriz1)


let matriz2 = [
  [2, 4, 3],
  [3, 1],
  [8, 4, 10],
];

// TODO CREAR UNA FUNCION QUE MODIFIQUE LOS ELEMENTOS IMPARES DE
// LA COLUMNA 2, POR UN numero cero"

const columna = ( mat )=>{

  for(let i = 0; i < mat.length; i++ ){
    
    if( mat[i][2] !== undefined && mat[i][2] % 2 !== 0 ){
     
        mat[i][2] = 0

    }

  }

}

columna(matriz2)
console.table(matriz2)


let matriz5 = [
  [2, 4, 3],
  [3, 1, 5, 8],
  [8, 4, 9, 8, 1],
];

// TODO --> ACA DOBLE FOR
// CAMBIAR TODOS LOS ELEMENTOS DE LA MATRIZ POR SU NEGATIVO

const recorrerMat = mat => {

  for(let i = 0 ; i < mat.length; i++ ){ // maneja las filas 

    for(let j = 0; j < mat[i].length; j++){
      // mat[i][j] =  mat[i][j] * (-1)
        mat[i][j]  *=  (-1)
    }

  }

}

recorrerMat(matriz5)
console.table(matriz5)

