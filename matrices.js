
// matrices ---> estructura de datos

let matriz = [ [1,2,4], [6,5, 2], [1, 7, 3] ]

let arr = [ 1, 6, 5, 6]

// console.log( matriz[2][1] )


let matriz2 = [ 
    [1, 2, 3], // fila 0
    [6, 5, 5], // fila 1
    [1, 7, 2]  // fila 2
]

// console.log( matriz2[0][1] )

// console.table(matriz2)

// recorrer una fila --> un solo for
// le pido la longitud a la fila

const recorrerFila = ( mat, numFila )=>{

    for(let i = 0; i < mat[numFila].length ; i++){
       
       console.log( mat[numFila][i] )

    }

}

recorrerFila(matriz2, 0)




// recorrer una columna --> un solo for
console.log("-------------")
let matrix = [ 

    [1, 2, 3], // fila 0
    [6], // fila 1
    [1, 7, 2]  // fila 2

]

// CALCULAR EL TOTAL DE LA COLUMNA 1 

const recorrerCol = (mat, numCol )=>{


    for(let i = 0 ; i <  mat.length; i++){
     
        if( mat[i][numCol]  !== undefined){
           mat[i][numCol]  = "hola"
        }

    }

}

recorrerCol(matrix,0)
console.table(matrix)

// cuando la matriz es cuadrada mismas filas que columnas y esta completa
// recorrer de la diagonal principal  --> un solo for
let matriz3 = [ 
    [1, 2, 3], // fila 0
    [6, 5, 5], // fila 1
    [1, 7, 2]  // fila 2
]

// recorrer de la diagonal secundaria --> un solo for
let matriz4 = [ 
    [1, 2, 3], // fila 0
    [6, 5, 5], // fila 1
    [1, 7, 2]  // fila 2
]


// recorrer la matriz completa ---> doble for 

