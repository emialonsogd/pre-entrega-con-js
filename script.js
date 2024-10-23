// Constante, lista de saludos
const saludos = ["¡Hola!", "¡Qué tal!", "¡Saludos!", "¡Bienvenido!", "¡Buen día!"];
// Variables globales
let nombreUsuario = "";
let edades = [];  // Array para almacenar las edades
// Función para la entrada de datos usando un prompt
function entradaDatos() {
    nombreUsuario = prompt("Por favor, ingresa tu nombre:");
    console.log("Nombre ingresado:", nombreUsuario);  
    // Pedimos 3 edades y las guardamos en un array
    for (let i = 1; i <= 3; i++) {
        let edad = parseInt(prompt(`Ingresa la edad de la persona ${i}:`));
        edades.push(edad);  // Añadimos la edad al array
        console.log(`Edad ingresada (${i}):`, edad);
    }
}
// Función para el procesamiento de los datos (confirmación del nombre y cálculo de edad promedio)
function procesarDatos() {
    let confirmar = confirm(`¿Es correcto tu nombre: ${nombreUsuario}?`);
    if (!confirmar) {
        alert("Volvamos a intentarlo.");
        nombreUsuario = prompt("Por favor, ingresa nuevamente tu nombre:");
    }
    // Calculamos la edad promedio
    let promedioEdad = calcularPromedio(edades);
    console.log("Edades almacenadas:", edades);
    console.log("Promedio de edades:", promedioEdad);
    return promedioEdad;
}
// Función auxiliar para calcular el promedio de un array
function calcularPromedio(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length;
}
// Función para mostrar los resultados con un alert
function mostrarResultado(promedioEdad) {
    // Seleccionamos un saludo al azar
    let saludoAleatorio = saludos[Math.floor(Math.random() * saludos.length)];
    
    alert(`${saludoAleatorio} ${nombreUsuario}, el promedio de las edades es: ${promedioEdad}`);
    console.log(`Resultado mostrado: ${saludoAleatorio} ${nombreUsuario}, promedio de edades: ${promedioEdad}`);
}
// Función que inicia el programa
function iniciarPrograma() {
    entradaDatos();               // Entrada de datos
    let promedio = procesarDatos(); // Procesamiento de datos
    mostrarResultado(promedio);    // Mostrar resultado
}    