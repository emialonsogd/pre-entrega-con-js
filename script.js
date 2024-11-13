// Constante, lista de saludos
const saludos = ["¡Hola!", "¡Qué tal!", "¡Saludos!", "¡Bienvenido!", "¡Buen día!"];
// Variables globales
let nombreUsuario = "";
let edades = [];  // Array para almacenar las edades
// Función para inicializar el programa
function iniciarPrograma() {
    entradaDatos();
    let promedio = procesarDatos();
    mostrarResultado(promedio);
}
// Función para obtener datos desde los inputs del DOM
function entradaDatos() {
    // Obtener el nombre del input y guardarlo en nombreUsuario
    nombreUsuario = document.getElementById("nombre").value;
    // Obtener las edades desde los inputs y almacenarlas en el array
    edades = [
        parseInt(document.getElementById("edad1").value),
        parseInt(document.getElementById("edad2").value),
        parseInt(document.getElementById("edad3").value)
    ];
    // Guardar en localStorage
    localStorage.setItem("nombreUsuario", nombreUsuario);
    localStorage.setItem("edades", JSON.stringify(edades));
    console.log("Datos guardados en localStorage");
}
// Función para el procesamiento de datos
function procesarDatos() {
    let confirmar = confirm(`¿Es correcto tu nombre: ${nombreUsuario}?`);
    if (!confirmar) {
        alert("Volvamos a intentarlo.");
        nombreUsuario = prompt("Por favor, ingresa nuevamente tu nombre:");
    }
    // Calculamos la edad promedio
    let promedioEdad = calcularPromedio(edades);
    return promedioEdad;
}
// Función auxiliar para calcular el promedio de un array
function calcularPromedio(array) {
    let suma = array.reduce((acc, curr) => acc + curr, 0);
    return suma / array.length;
}
// Función para mostrar los resultados en el DOM
function mostrarResultado(promedioEdad) {
    // Seleccionamos un saludo al azar
    let saludoAleatorio = saludos[Math.floor(Math.random() * saludos.length)]; 
    // Mostramos el saludo y el resultado en el DOM
    document.getElementById("resultado").innerText = `${saludoAleatorio} ${nombreUsuario}, el promedio de las edades es: ${promedioEdad}`;
    console.log(`Resultado mostrado: ${saludoAleatorio} ${nombreUsuario}, promedio de edades: ${promedioEdad}`);
}
// Evento para iniciar el programa al hacer clic en el botón
document.getElementById("btnIniciar").addEventListener("click", iniciarPrograma);
// Cargar datos desde localStorage al recargar la página
window.addEventListener("load", () => {
    // Cargar nombre y edades si existen en localStorage
    if (localStorage.getItem("nombreUsuario")) {
        nombreUsuario = localStorage.getItem("nombreUsuario");
        document.getElementById("nombre").value = nombreUsuario;
    }
    if (localStorage.getItem("edades")) {
        edades = JSON.parse(localStorage.getItem("edades"));
        document.getElementById("edad1").value = edades[0] || '';
        document.getElementById("edad2").value = edades[1] || '';
        document.getElementById("edad3").value = edades[2] || '';
    }
});