//ANCHOR ALGORITMO DE ORDENAMIENTO ---> BUBBLE SORT

// ASCENDENTE 

let numeros = [5, 2, 6, 1, 3] // [2, 5, 1, 3, 6] // [2, 1, 3, 5, 6 ] // [1, 2, 3, 5, 6]

const bubbleSort = (arr)=>{

    let temporal = undefined

    // cuantas veces 
    for(let i = 0; i < arr.length; i++){

        // hace la magia
        for(let j = 0; j < arr.length - 1; j++){
            
            if( arr[j] > arr[j + 1] ){ // {} < {} ---> false
                temporal = arr[j] 
                arr[j] = arr[j + 1] 
                arr[j + 1] = temporal 
            }

        }


    }

}

bubbleSort(numeros)

console.log( numeros )

let palabras = [ "casa", "avion", "Zoo", "mariposa", "Abeja", "2pepe", "!gmail" ] 

bubbleSort(palabras)
console.log(palabras)



let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "pepito",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "maria",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "juancito",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "carmen",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jack",
    },
  ];



  const bubbleSortObjetos = (arr,  prop)=>{

    let temporal = undefined

    // cuantas veces 
    for(let i = 0; i < arr.length; i++){

        // hace la magia
        for(let j = 0; j < arr.length - 1; j++){
            
            if( arr[j][prop].toLowerCase() > arr[j + 1][prop].toLowerCase() ){ 
                temporal = arr[j] 
                arr[j] = arr[j + 1] 
                arr[j + 1] = temporal 
            }

        }


    }

}

bubbleSortObjetos(arrayCuentas, "titularCuenta")
console.log(arrayCuentas)



// let x =  {
//     nroCuenta: 7401971607,
//     tipoDeCuenta: "Cuenta Unica",
//     saldoEnPesos: 18789,
//     titularCuenta: "Jack",
//   }

//   x.titularCuenta
//   x["titularCuenta"]
 