let numeroUno = 40
let numeroDos = 20
let numeroTres = 30
 
if (numeroUno > numeroDos){
    console.log(numeroUno  + " es mayor que " + numeroDos);
}

if (numeroUno !== numeroDos){
    console.log("Son distintos");
}else{
    console.log("Son iguales");
}

if (numeroUno > numeroDos){
    console.log(numeroUno + " Es mayor")
}else{
    if  (numeroDos > numeroUno){
        console.log(numeroDos + " Es mayor")
    } else {
        console.log("Son iguales");
    }
}

if (numeroUno < numeroDos && numeroUno < numeroTres){
    console.log(numeroUno + " Es el menor");
}else{
    if (numeroDos < numeroTres && numeroDos < numeroTres){
        console.log(numeroDos + " Es menor");
    } else{
        console.log(numeroTres + " Es menor");
    }
}

let personaUno = {
    nombre: "Claudio",
    edad: 30,
    altura: 150,
};

let personaDos = {
    nombre: "Angel",
    edad: 24,
    altura: 180,
}

if (personaUno.edad > personaDos.edad){
    console.log(personaUno.nombre + " Es mayor de edad");
}else {
    if (personaDos.edad > personaUno){
        console.log(personaDos.nombre + " Es mayor de edad");
    }
}

 if (personaUno.altura > personaDos.altura){
    console.log(personaUno.nombre + " Es mas alto");
}else {
    if (personaDos.edad > personaUno){
        console.log(personaDos.nombre + " Es mas alto");
    }
}
 

let persona = {
    nombre: prompt ("Ingrese su nombre"),
    edad: prompt ("Ingrese su edad"),
    altura: prompt ("Defina su altura"),
    vision: prompt ("Defina su vision del 0-10"),
}

if (persona.edad >= 18 && persona.altura >= 150 && persona.vision >= 8){
    console.log(persona.nombre + " Esta capacitado");
}else{
    console.log("No esta capacitado");
} 
 

/* Punto N°7 */

let cliente ={
    nombre: prompt("Ingrese nombre"),
    pase: prompt("Indique si tiene pase vip o normal"),
    entrada: prompt ("Posee entrada?")
}

let entradaPregunta

let compraEntrada

let montoEntrada

if (cliente.nombre == "rocio" || cliente.pase == "vip") {
    console.log("¡Bienvenido/a!");
}else {
    if (cliente.entrada == "si" || cliente.entrada == "s" || cliente.entrada == "true" ) {
        preguntaEntrada = prompt ("¿Desea utilizarla?")
        if (pregunta.Entrada == "si" || preguntaEntrada == "s" || preguntaEntrada == "true") {
            console.log("¡Bienvenido/a!");
        }
        else{
            console.log("¡Vuelva pronto!");
        }   
    } else {
        compraEntrada = prompt ("¿Desea comprar una entrada?")
        if (compraEntrada == "si" || compraEntrada == "s" || compraEntrada == "true"){
            montoEntrada = prompt ("¿Con cuanto dinero cuenta?")
            if (montoEntrada >= 1000) {
                console.log("Aqui tiene su entrada, bienvenido/a!");
            }
            else{
                console.log("No posee el dinero suficiente");
            }
        }
        else{
            console.log("¡Vuelva pronto!");
        }
    }
}   

/* Punto N° 8 */

let numeroIncognita = "4"

let opcionUno = prompt ("Ingrese un numero")

let opcionDos

let opcionTres

if (numeroIncognita == opcionUno) {
    console.log("Adivinaste el numero.Gracias por participar!");
}else{
    if (numeroIncognita < opcionUno){
        console.log("El numero es mayor, ingrese otro numero");
    }else{
        if (numeroIncognita > opcionUno) {
            console.log("El numero es menor, ingrese otro numero");
        }
    } 
    opcionDos = prompt ("Vuelve a intentarlo");
    if (numeroIncognita == opcionDos) {
        console.log("Adivinaste el numero.Gracias por participar!");
    }else{
        if (numeroIncognita < opcionDos) {
            console.log("El numero es mayor,ingrese otro numero");
        }else{
            if (numeroIncognita > opcionDos) {
                console.log("El numero es menor,ingrese otro numero");
            }
        }
    }
    opcionTres = prompt ("Ultimo intento: Ingrese otro valor");
    if (numeroIncognita == opcionTres) {
        console.log("Adivinaste el numero. Gracias por participar!");    
    }else{
        if (numeroIncognita < opcionTres) {
            console.log("El numero es mayor, te quedaste sin oportunidades.Gracias por participar!");
        }else{
            if (numeroIncognita > opcionTres) {
                console.log("El numero es menor, te quedaste sin oportunidades.Gracias por participar!");
            }
        }
    }
}  

/* PUNTO N°9 */

let edadUsuario = prompt ("Ingrese su edad")

let edadAnciano 

if (edadUsuario <= 12) {
    console.log("Eres un infante");
}else{
    if (edadUsuario >= 13 && edadUsuario <= 18) {
        console.log("Eres un adolescente");
    }else{
        if (edadUsuario >= 19 && edadUsuario <= 45 ) {
            console.log("Eres un mayor joven");
        } else{
            if (edadUsuario > 45 && edadUsuario <= 100) {
                console.log("Eres un anciano");
            } else{
                if (edadUsuario > 100) {
                    console.log("¿Realmente tienes esa edad?");
                }   
            }
        }

    }
}   

/* Punto N° 10  */

let usuarioUno = prompt ("Ingrese una opcion: piedra,papel,tijera")
let usuarioDos = prompt ("Ingrese una opcion: piedra,papel,tijera")


if (usuarioUno === "piedra" && usuarioDos === "piedra" || usuarioUno === "papel" && usuarioDos === "papel" || usuarioUno  === "tijeras" && usuarioDos === "tijeras") {
    console.log("Empate!");
}else{
    if (usuarioUno == "piedra" && usuarioDos == "tijera" || usuarioUno == "tijera" && usuarioDos == "papel" || usuarioUno == "papel" && usuarioDos == "piedra" ){
        console.log("Gano el uno");
    }else{
        if (usuarioUno == "piedra" && usuarioDos == "papel" || usuarioUno == "tijera" && usuarioDos == "piedra" || usuarioUno == "papel" && usuarioDos == "tijera" ) {
            console.log("Gana el dos");
        }else{
            if (usuarioUno != "piedra" || usuarioUno != "papel" || usuarioUno != "tijera ") {
                console.log("Usuario uno hizo trampa");
            }
        }
    } 
}  

/* Punto N°11 */

let color = prompt ("Ingrese un color")

switch (color) {
    case "blanco":
        console.log("Falta color");
        break;
    case "negro":
        console.log("Falta color");
        break;
    case "verde":
        console.log("El color de la naturaleza");
        break;
    case "azul":
        console.log("El color del agua");
        break;
    case "amarillo":
        console.log("El color del sol");
        break;
    case "rojo":
        console.log("El color del fuego");
        break;
    case "marron":
        console.log("El color de la tierra");
        break;
    default:
        console.log("Exccelente eleccion, no lo teniamos pensado");
        break;
}

/* PUNTO N° 12 */

let valor1 = Number(prompt("Ingrese el primer valor"));
let valor2 = parseInt(prompt("Ingrese el segundo valor"));
let operador = prompt(
  "Que operacion desea realizar (suma/resta/multiplicacion/division)");
let resultad;
switch (operador) {
  case "suma":
    resultado = valor1 + valor2;
    console.log("Resultado: " + resultado);
    break;
  case "resta":
    resultado = valor1 - valor2;
    console.log("Resultado: " + resultado);
    break;
  case "multiplicacion":
    resultado = valor1 * valor2;
    console.log("Resultado: " + resultado);
    break;
  case "division":
    resultado = valor1 / valor2;
    if (valor2 !== 0) {
      console.log("Resultado: " + resultado);
    } else {
      console.log("ERROR. No se puede dividir por 0");
    }
    break;
  default:
    console.log("undefined");
    break;
}

/* Punto N° 13 */

let nomb = prompt("Indique su nombre");
let ape = prompt("Indique su apellido");
let dni = prompt("Indique su edad");

console.log("Nombre: " + nomb + "\nApellido: " + ape + "\nDNI:" + dni);
if (prompt("¿Son correcto los datos?") === "si") {
  let DNI = {
    nombre: nomb,
    apellido: ape,
    Dni: dni,
  };
  console.log("Registro existoso.");
} else {
  console.log("Datos incorrectos vuelva a intentarlo en 1 mes.");
}