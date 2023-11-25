
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

const recorrerPrincipal = mat => {
    
    for(let i = 0; i < mat.length; i++){
        console.log( mat[i][i] )
    }

}



// recorrer de la diagonal secundaria --> un solo for
let matriz4 = [ 
    [1, 2, 3], // fila 0
    [6, 5, 5], // fila 1
    [1, 7, 2]  // fila 2
]

const recorrerSec = mat => {
   for(let i = 0 ; i < mat.length; i++){
        mat[i][mat.length - 1 - i] 
   }
}


// recorrer la matriz completa ---> doble for
let matriz5 = [ 
    [1, 2, 3, 1], // fila 0
    [6, 5], // fila 1
    [1, 7, 2]  // fila 2
]

const recorrerCompleta  = mat =>{

    for(let i = 0; i < mat.length; i++){ // i maneja las filas 

        for( let j = 0 ; j < mat[i].length; j++ ){ // j maneja las columnas
            
            console.log( mat[i][j] )

        }

    }

    

}
console.log("----------------")
recorrerCompleta(matriz5)




let febrero = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];
  
//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// CALCULAR GASTO TOTAL DE LA TERCER SEMANA

const totalSemanal = ( gastosMes, numSemana )=>{

    let posicion = numSemana - 1

    let acc = 0

    for(let i = 0 ; i < gastosMes[posicion].length; i++ ){
       acc += gastosMes[posicion][i]
    }

    return acc

}

let semanaTres = totalSemanal( febrero, 3)
console.log(semanaTres)

//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TOD´OS LOS DIAS SABADOS
// ¿COMO LO HARIAS?

let febrero2 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

const totalDiarioX  = ( gastosMes, numDia )=>{

    let posicion = numDia - 1
    let acc = 0
    for( let i = 0; i < gastosMes.length; i++ ){
        acc += gastosMes[i][posicion]
    }
    return acc

}

let totalSabados = totalDiarioX(febrero2, 6)
console.log(totalSabados)

//TODO
// CALCULAR EL TOTAL GASTADO DEL MES

// TODO
// EN EL DIA QUE MAS SE GASTO, CUANTO FUE ?
// EN QUE DIA Y SEMANA , SE PRODUJO ESE GASTO?
