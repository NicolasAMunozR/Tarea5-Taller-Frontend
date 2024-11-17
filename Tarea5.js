// Función para calcular la suma de las notas
function sumaDeNotas(notas) {
    // Verifica que las notas sean un array de números válidos
    if (!Array.isArray(notas) || notas.some(nota => typeof nota !== 'number')) {
        throw new Error("El parámetro debe ser un array de números.");
    }
    // Verifica que haya al menos una nota
    else if (notas.length === 0) {
        throw new Error("El array de notas no puede estar vacío.");
    }

    // Calcula la suma
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma;
}

// Función para calcular el promedio de las notas
function promedioDeNotas(notas) {
    // Utiliza la función de suma para calcular el promedio
    const suma = sumaDeNotas(notas);
    const promedio = suma / notas.length;

    return promedio;
}

// Notas proporcionadas
const notas = [6, 8, 9, 2, 5, 10];

try {
    // Llamadas a las funciones
    const suma = sumaDeNotas(notas);
    const promedio = promedioDeNotas(notas);

    // Muestra los resultados en la consola
    console.log(`Suma de notas: ${suma}`);
    console.log(`Promedio de notas: ${promedio.toFixed(2)}`);
} catch (error) {
    console.error(error.message);
}
// Ejecutar con: node Tarea5.js