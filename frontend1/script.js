// Declaración de variable
let miVariable;

// Asignación de valor
miVariable = 10;

// También puedes hacer ambas cosas en una línea
let otraVariable = "Hola, mundo!";



let numero = 42;
let texto = "Hola, soy un texto";
let esVerdadero = true;
let sinValor = undefined;
let nulo = null;
let persona = { nombre: "Juan", edad: 25 };
let listaNumeros = [1, 2, 3];

let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

let calificacion = 75;

if (calificacion >= 90) {
  console.log("A");
} else if (calificacion >= 80) {
  console.log("B");
} else if (calificacion >= 70) {
  console.log("C");
} else {
  console.log("Reprobado");
}

for (let i = 0; i < 5; i++) {
    console.log("Iteración número " + i);
  }

  let contador = 0;

while (contador < 3) {
  console.log("Contador: " + contador);
  contador++;
}

function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
  }
  
  // Llamada a la función
  saludar("Juan");

  function sumar(a, b) {
    return a + b;
  }
  
  let resultado = sumar(5, 3);
  console.log("La suma es: " + resultado);



module.export = {
    sumar:sumar
}