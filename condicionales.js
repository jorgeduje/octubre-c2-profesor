// CONDICIONALES ---> IF / TERNARIO / SWITCH CASE

// vendedor -- tiene permisos
// comprador -- no tiene permisos
// admin --- tiene super poderes
// dueño --- tiene super super poder

const determinarPermisos = (rolDelUsuario) => {

  if (rolDelUsuario === "vendedor") {
    // bloque de codigo
    return "tiene permisos";
  } else if (rolDelUsuario === "admin") {
    // bloque de codigo
    return "tiene super poderes";
  } else if (rolDelUsuario === "dueño") {
    // bloque de codigo
    return "tiene super super poderes";
  } else {
    // bloque de codigo
    return "no tiene permisos";
  }
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

