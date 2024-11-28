function calcularPromedios() {
    let totalEstudiantes = 20;
    let sumaPromedios = 0;


    for (let i = 1; i <= totalEstudiantes; i++) {
        let examen1 = parseFloat(prompt(`Ingrese la nota del Examen 1 del Estudiante ${i}:`));
        let examen2 = parseFloat(prompt(`Ingrese la nota del Examen 2 del Estudiante ${i}:`));
        let promedio = (examen1 + examen2) / 2;


 
        sumaPromedios += promedio;
    }

    let promedioGeneral = sumaPromedios / totalEstudiantes;

    alert(`El promedio general de la clase de 20 estudiantes es: ${promedioGeneral.toFixed(2)}`);
}
