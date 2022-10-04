let miNombre= "Rocio Macarena";
let miApellido= "Duarte Bazan";
let miEdad= 25;
let miMascota= "Nacho";
let edadMascota= 6;

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

let nombreCompleto = miNombre + " " + miApellido

console.log(nombreCompleto)

let textoPresentacion = "Hola mi nombre es:" + nombreCompleto + " " + "y tengo" + " "+ miEdad + " " + "años" + " " + "mi mascota se llama:" + " " + miMascota + " " + "y su edad es de" + " " + edadMascota + " " + "años."

console.log(textoPresentacion)

let sumarEdades = miEdad + edadMascota
let restarEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let dividirEdades = miEdad / edadMascota

console.log(sumarEdades);
console.log(restarEdades);
console.log(productoEdades);
console.log(dividirEdades);

//miNombre = prompt ("Ingrese su nombre");
//miApellido = prompt ("Ingrese su apellido");
//miEdad = prompt ("Ingrese su edad");
//miMascota = prompt ("Ingrese nombre de su mascota");
//edadMascota = prompt ("Ingrese edad mascota");

/* console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);  */

let alumno = {
    nombre : "Rocio",
    apellido : "Duarte Bazan",
    edad : 25,
    sexo : "Femenino",
    carrera : "Contador Publico",
}

console.table(alumno)
console.table(alumno.nombre)
console.table(alumno.apellido)
console.table(alumno.edad)
console.table(alumno.sexo)
console.table(alumno.carrera)

let mascota = {
    nombre : "Nacho",
    raza: "Cruza",
    edad : 6,
    sexo : "Macho",
    color : "Blanco y negro",
}

console.table(mascota)
console.table(mascota.nombre)
console.table(mascota.raza)
console.table(mascota.edad)
console.table(mascota.sexo)
console.table(mascota.color)

let frutas = ["manzana","pera","banana", "frutilla", "naranja" ]

console.log(frutas)
console.log(frutas [0])
console.log(frutas [1])
console.log(frutas [2])
console.log(frutas [3])
console.log(frutas [4])

let numeros = [1, 2, 3, 4, 5]

console.log(numeros)
console.log(numeros [0])
console.log(numeros [1])
console.log(numeros [2])
console.log(numeros [3])
console.log(numeros [4])

let familia = ["mirta", "venancio", "rodrigo", "sebastian", "rocio", "nacho", "sheila"]

console.log(familia)
console.log(familia [0])
console.log(familia [1])
console.log(familia [2])
console.log(familia [3])
console.log(familia [4])
console.log(familia [5])
console.log(familia [6])

let textoAleatorio = "La fruta favorita de Enzo es la" + " " + frutas[1] + " " + "y come" + " " + numeros [3] + " " + "por semana." + " " + "A" + " " + familia[4] + " " + "en cambio, no le gusta la fruta."

console.log(textoAleatorio)
