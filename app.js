// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Capturar el valor del campo de entrada:
function agregarAmigo() {
  nuevoRegistro = document.getElementById("amigo").value;
  //Validar la entrada:
  if (document.getElementById("amigo").value != "") {
    //Actualizar el array de amigos:
    amigos.push(nuevoRegistro);
    //Para visualizar que se obtuvo correctamente el dato.
    console.log(amigos);
    limpiarCaja();
    mostrarLista();
  } else {
    alert("¡El campo no puede estar vacio!");
  }
}
// Limpiar el campo de entrada:
function limpiarCaja() {
  document.getElementById("amigo").value = "";
}
