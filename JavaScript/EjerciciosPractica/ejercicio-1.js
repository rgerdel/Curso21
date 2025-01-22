// Ejecicio para practicar 
/*
  1. Calculadora V0
  Crea tres variables, A, B y un "operacion". 
  Asignarles un valor a cada uno

  Crea una condicion que verifique si el operador es +, -, *, /, %, **.
  Dependiendo del operador, realiza la operacion correspondiente con los dos numeros.
  Debes imprimir por consola el resultado.

  Opcional: hacer este ejercicio en DOM 
  (A, B y "operacion" deben ser ingresadas por el usuario y mostrar el resultado con alert)

  2. Meses del año
  Crea una variable llamada mes (numero) que imprima en consola el mes (letras).
  
  Opcional: hacer este ejercicio en DOM.

  Fecha de entrega: 16/01/2025
*/




function calculadoraDOM(){
  let a = Number(prompt("Escribe un numero: "));
  let b = Number(prompt("Escribe otro numero: "));
  let c = (prompt("Escribe el operador (+, -, *, /, %, **"))
  let result;

  if (c == "+"){
    console.log("La operacion es una SUMA")
    result = a+b;
  }else if (c == "-"){
    console.log("La operacion es una RESTA")
    result = a-b;
  }else if (c == "*"){
    console.log("La operacion es una MULTIPLICACION")
    result = a*b;
  }else if (c == "/"){
    console.log("La operacion es una DIVISION")
    result = a/b;
  }else if (c == "%"){
    console.log("La operacion es un MODULO")
    result = a%b;
  }else if (c == "**"){
    console.log("La operacion es una POTENCIA")
    result = a^b;
  }


  alert(result);
  console.log("La operacion de ", a, c, b," = ", result);
  }

function mesLetras(){
  let dia = prompt("Ingresa el Mes del 1 al 12");
  switch (Number(dia)) {
    case 1:
      alert("Enero");
      console.log("Enero")
      break;
    case 2:
      alert("Febrero");
      console.log("Febrero")
      break;
    case 3:
      alert("Marzo");
      console.log("Marzo")
      break;
    case 4:
      alert("Abril");
      console.log("Abril")
      break;
    case 5:
      alert("Mayo");
      console.log("Mayo")
      break;
    case 6:
      alert("Junio");
      console.log("Junio")
      break;
    case 7:
      alert("Julio");
      console.log("Julio")
      break;
    case 8:
      alert("Agosto");
      console.log("Agosto")
      break;
    case 9:
      alert("Septiembre");
      console.log("Septiembre")
      break;
    case 10:
      alert("Octubre");
      console.log("Octubre")
      break;
    case 11:
      alert("Noviembre");
      console.log("Noviembre")
      break;
    case 12:
      alert("Diciembre");
      console.log("Diciembre")
      break;
    default:
      alert("Mes NO EXISTE");
      break;
  }
}