
//ANCHOR --> array - arreglo - coleccion - lista 

// 6 numeros de la suerte 51 54 22 12 43 11

// let n1 = 51
// let n2 = 54
// let n3 = 22
// let n4 = 22
// let n5 = 22
// let n6 = 22

// POSICIONES ---> desdee cero

// ELEMENTOS 
let numerosDeLaSuerte = [ 51, 54, 22, 12, 43, 11] // 6

console.log( numerosDeLaSuerte[1] )

// let prod1 = "tele"
// let prod2 = "celular"
// let prod3 = "tele"
// let prod4 = "tele"
let prod5 = "tele"

let productos = ["tele", "celular", "zapatilla"]

productos[2] = "nuevas zapatillas"

console.log( productos )

let palabra = "hola"

console.log(palabra[0])


palabra = palabra.toUpperCase()

console.log(palabra)


 console.log( productos.length )
 let frase = "hola como estas?"

 console.log(frase.length)

let emailValido =  frase.includes("@")

 let nums = [ 12, 41, 55 ]

    // let cortado = nums.pop()

    // console.log(nums)
    // console.log(cortado)

    let x = nums.push(43)
    console.log(x)

// CICLOS
// ITERAR O RECORRER UN ARRAY 
let ventasNoviembre = [15, 2, 41, 54, 13, 11, 212, 111, 11, 5132, 123]

let ventasOctubre = [14, 2, 41, 54, 13, 11, 212, 111]

const calcularTotal = ( array )=>{

    let acc = 0

    for( let i = 0; i < array.length ; i++ ){

     acc += array[i]
        
    }

    
    return acc


}

let totalOctubre = calcularTotal( ventasOctubre )
console.log(totalOctubre)

let totalNoviembre = calcularTotal(ventasNoviembre)
console.log(totalNoviembre)