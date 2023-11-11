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

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function( titular ){
        
        for( let i = 0; i < this.clientes.length; i++ ){
            if( this.clientes[i].titularCuenta === titular ){
                return this.clientes[i]
            }
        }

        return "Lo siento, cliente no encontrado!"
    },
    deposito: function(titular, cantidad){

        let cliente = this.consultarCliente(titular) // {} - ""

        if( typeof cliente === "object" ){
            cliente.saldoEnPesos += cantidad
            return `Deposito realizado, su nuevo saldo es ${ cliente.saldoEnPesos }`
        }else{
            return "Lo siento, no se encontro esa cuenta"
        }
    },
    extraccion: function(titular, cantidad){
        let cliente = this.consultarCliente(titular) // {} - ""
        if( typeof cliente === "object"){

            if( cliente.saldoEnPesos >= cantidad ){
                cliente.saldoEnPesos -= cantidad
                return "Extaccion realizada con exito"
            }else{
                return "Lo siento , saldo insuficiente"
            }

        }else{
            return "Lo siento cliente no encontrado"
        }
    }
}


// LO SIENTO CLIENTE NO ENCONTRADO
// let clienteEncontrado = banco.consultarCliente("luis") // {}
// console.log(clienteEncontrado)


// let ticket = banco.deposito("juancito", 10000)
// console.log( ticket )

// let clienteJuancito = banco.consultarCliente("juancito")
// console.log(clienteJuancito)

// let x = {}

// console.log( typeof x ) // string -->  "number" - "string" - "object"

let ticket2 = banco.extraccion("juancito", 50000)
console.log(ticket2)

let clienteJuancito = banco.consultarCliente("juancito")
console.log(clienteJuancito)