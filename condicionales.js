// CONDICIONALES ---> IF / TERNARIO / SWITCH CASE

// vendedor -- tiene permisos
// comprador -- no tiene permisos
// admin --- tiene super poderes
// dueño --- tiene super super poder

const determinarPermisos = (rolDelUsuario) => {

  let frase = ""

  if (rolDelUsuario === "vendedor") {
    // bloque de codigo
   frase = "tiene permisos";
  } else if (rolDelUsuario === "admin") {
    // bloque de codigo
    frase = "tiene super poderes";
  } else if (rolDelUsuario === "dueño") {
    // bloque de codigo
    frase = "tiene super super poderes";
  } else {
    // bloque de codigo
    frase = "no tiene permisos";
  }

  return frase
  

};

let tienePermiso = determinarPermisos("admin");

console.log(tienePermiso);

// ternario 

// clima ---> lluvioso --> si, llevalo
// clima ---> no es lluvioso --> no, no hace falta
// condicion ? aca hago lo que quiero cuando se cumpla :  aca hago lo que quiero cuando no  se cumpla

let salgoConParaguas  = clima => clima === "lluvioso" ? "si, llevalo" : "no, no hace falta"



let loLlevo = salgoConParaguas("lluvioso")
console.log(loLlevo)

// placa 
// un usuario diga la marca del auto 
// el sistema le devuelva el total a pagar

// base del impuesto ---> 100

// audi 100
// bmw 150
// vw 50
// fiat 75
// reanault 80

const determinarImpuesto = ( marcaDelAuto ) => {

  let impuestoInicial = 100

  switch(marcaDelAuto){
    case "audi":
      impuestoInicial += 80
      break
    case "vw":
      impuestoInicial += 100
      break
    case "fiat": 
      impuestoInicial+= 50
      break
    default:
      return "Su auto esta excento de pago"
    
  }

  return impuestoInicial

}

let res = determinarImpuesto("audi")
console.log( res )

// let num = 5 

// num = num + 10
// num += 10

