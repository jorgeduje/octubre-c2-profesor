// ciclos -- loop -- bucle

// for - while - do while

// inicializacion -- condicion - modificador

const probandoFor = () => {
  for (let i = 1; i <= 5; i++) {
    // bloque
    console.log("hola");
    console.log(i);
  }

  console.log("termine");
};

// probandoFor()

// obtener la sumatoria de los numeros desde el 1 hasta el 10
//2 + 4 + 6 +8+ 10= ?

const sumatoria = () => {
  let acumulador = 0;

  for (let i = 1; i <= 10; i++) {
    //  acumulador += i
    // acumulador  = acumulador + i

    if (i % 2 === 0) {
      acumulador += i;
    }
  }

  return acumulador;
};

let x = sumatoria();
console.log(x);

const probandoWhile = () => {
  let i = 1;

  // while(i <= 10){
  //   // bloque de codigo
  //   console.log(i)

  //   i++
  // }

  do{
    // bloque de codigo
    console.log(i);

    i++;
  }while (i <= 10)

  

};
console.log("------");
probandoWhile();
