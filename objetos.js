// objetos literales ---> entidad represanta en codigo

// let nombreUsuario = "pepe"
// let edadUsuario = 22
// let direccion = "itala 192"
// let saludar = ()=>{
//     return "hola soy pepe"
// }

// pares CLAVE : VALOR

const saludarFn = function () {
  return "hola soy " + this.nombre;
};

// PROPIEDADES Y METODOS
let usuario = {
  nombre: "pepe",
  edad: 22,
  direccion: "italia 192",
  saludar: saludarFn,
};
let usuario2 = {
  nombre: "juan",
  edad: 22,
  direccion: "italia 192",
  saludar: saludarFn,
};
let usuario3 = {
  nombre: "carmen",
  edad: 22,
  direccion: "italia 192",
  saludar: saludarFn,
};

// // BRACKET NOTATION
// console.log( usuario["nombre"])

// DOT NOTATION
// console.log( usuario.nombre )
// console.log( usuario.direccion )

console.log(usuario.saludar());
console.log(usuario2.saludar());
console.log(usuario3.saludar());

// colecciones y documentos --> No - SQL
// TABLAS y REGISTROS --> SQL

const persona = {
  nombre: "pepe",
  edad: 22,
  direccion: "italia 192",
  saludar: saludarFn,
};

// MODIFICAR

persona.nombre = "juan";
persona.edad += 1;

// AGREGAR

persona.apellido = "perez";

console.log(persona);

// persona = "hola" // esto nooo

// ELIMINAR

const arr = [123, 123, 11, 565];
arr.push(1);
arr.pop();

// arr = "dasd" // esto nooo

const calcularPromedioFn = function () {
  let acc = 0;

  for (let i = 0; i < this.notas.length; i++) {
    acc += this.notas[i];
  }

  return acc / this.notas.length;
};

let estudiantesJavascript = [
  {
    nombre: "pepe",
    notas: [10, 9, 8, 10, 10],
    calcularPromedio: calcularPromedioFn,
  },
  {
    nombre: "carmen",
    notas: [8, 9, 8],
    calcularPromedio: calcularPromedioFn,
  },
  {
    nombre: "juancito",
    notas: [7, 7, 10],
    calcularPromedio: calcularPromedioFn,
  },
];

const funcionParaLaProfesora = (arreglo) => {
  for (let i = 0; i < arreglo.length; i++) {
    console.log(
      `El promedio de ${arreglo[i].nombre} es de ${arreglo[
        i
      ].calcularPromedio()} `
    );
  }
};

// <button>Mostrar promedio de todos los alumnos</button>

funcionParaLaProfesora(estudiantesJavascript)