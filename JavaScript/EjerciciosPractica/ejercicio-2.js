/*

  Ejercicios:

  Ejercicio 1:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la cadena de texto en mayusculas.
  Ejemplo: "Bienvenido" -> "BIENVENIDO".
  
  Ejercicio 2:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la cadena de texto en minusculas.
  Ejemplo: "BienVenIdO" -> "bienvenido".

  Ejercicio 3:
  Crear una funcion que reciba un texto e imprima la longitud de la cadena de texto.
  Si la longitud es mayor que 5, que se imprima la cadena recortada.
  Ejemplo: "Angel Arevalo" -> "Angel"
  Crear una funcion que reciba un texto e imprima la primera letra y la ultima.
  Ejemplo: "Cadena de texto" -> "C <-> o"
  Ejercicio 4:


  Ejercicio 5:
  Crear una funcion que reciba un texto e imprima la palabra "durazno" si se incluye en el texto
  Ejemplo: "Quiero comer durazno" -> "durazno" ó "no hay durazno" (si no esta la palabra durazno)

  Nota: Debes crear un boton en HTML para ejecutar cada ejercicio
  (5 botones), cada boton debe permitirle al usuario ingresar un texto y mostrarle al usuario
  el resultado del ejercicio correspondiente.

*/

function mayuscula(){
    let texto = prompt("Introduzca un texto");
    alert (texto.toUpperCase());
}

function minuscula(){
    let texto = prompt("Introduzca un texto");
    alert (texto.toLowerCase());
}

function longitud(){
    let texto = prompt("Introduzca un texto")

    if (texto.length >= 5){
        alert(("Longitud: " + (texto.length) + " caracteres") +
        (" Cadena recortada: " + (texto.substring(0, 5))));
    }else{
        alert(texto);
    }
}

function primeraUltima(){
    let texto = prompt("Introduzca un texto");
    alert("Primera letra: " +(texto.charAt(0)) + " Ultima Letra: "+ (texto.charAt(texto.length -1)));
}


function buscar(){
    var keywords = ["durazno"];
    let texto = prompt("Introduzca un texto");
     texto = texto.toLowerCase();
   
    let posicion = texto.indexOf(keywords);
    if (posicion !== -1)
        alert("La palabra DURAZNO está en la posición " + posicion);
    else
        alert("No encontré la palabra durazno");
    

}