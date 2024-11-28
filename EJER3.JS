function calcularSueldo() {
    let nombreTrabajador = prompt("Ingrese el nombre del trabajador:");
    let horasTrabajadas = parseFloat(prompt("Ingrese el número de horas trabajadas (HT):"));
    let sueldoBasicoPorHora = parseFloat(prompt("Ingrese el sueldo básico por hora (SB):"));
    let codigoTrabajo = parseInt(prompt("Ingrese el código de trabajo (10, 11, 12, 13, 14):"));


    let sueldoBruto = sueldoBasicoPorHora * horasTrabajadas;

    let descuento = 0;
    switch (codigoTrabajo) {
        case 10:
            descuento = sueldoBruto * 0.10;
            break;
        case 11:
            descuento = sueldoBruto * 0.11;
            break;
        case 12:
            descuento = sueldoBruto * 0.12;
            break;
        case 13:
            descuento = sueldoBruto * 0.13; 
            break;
        case 14:
            descuento = sueldoBruto * 0.14;
            break;
        default:
            alert("Código de trabajo no válido.");
            return;
    }


    let sueldoNeto = sueldoBruto - descuento;


    alert(`Nombre del trabajador: ${nombreTrabajador}`);
    alert(`Sueldo Bruto: S/. ${sueldoBruto.toFixed(2)}`);
    alert(`Descuento de Ley: S/. ${descuento.toFixed(2)}`);
    alert(`Sueldo Neto: S/. ${sueldoNeto.toFixed(2)}`);
}
