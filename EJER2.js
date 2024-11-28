function mostrarFigura() {
    let numeroLados = parseInt(prompt("Ingrese el número de lados de la figura (3-8)"));
    let figura;

    switch (numeroLados) {
        case 3:
            figura = "Triángulo";
            alert(`La figura con ${numeroLados} lados es un ${figura}.`);
            break;
        case 4:
            figura = "Cuadrado o Rectángulo";
            alert(`La figura con ${numeroLados} lados es un ${figura}.`);
            break;
        case 5:
            figura = "Pentágono";
            alert(`La figura con ${numeroLados} lados es un ${figura}.`);
            break;
        case 6:
            figura = "Hexágono";
            alert(`La figura con ${numeroLados} lados es un ${figura}.`);
            break;
        case 8:
            figura = "Octágono";
            alert(`La figura con ${numeroLados} lados es un ${figura}.`);
            break;
        default:
            alert("Por favor ingrese un número válido de lados (3, 4, 5, 6, 8).");
            break;
    }
}
