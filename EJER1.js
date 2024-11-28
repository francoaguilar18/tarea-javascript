function mostrarMes() {
    let mesNumero = parseInt(prompt("Ingrese el número del mes (1-12)"));
    let nombreMes;
    switch (mesNumero) {
        case 1:
            nombreMes = "Enero";
            alert(`Mes de ${nombreMes}, Año Nuevo, Día de Reyes.`);
            break;
        case 2:
            nombreMes = "Febrero";
            alert(`Mes de ${nombreMes}, mes de la amistad y del amor`);
            break;
        case 3:
            nombreMes = "Marzo";
            alert(`Mes de ${nombreMes}, mes de la Mujer`);
            break;
        case 4:
            nombreMes = "Abril";
            alert(`Mes de ${nombreMes}, de la semana Santa`);
            break;
        case 5:
            nombreMes = "Mayo";
            alert(`Mes de ${nombreMes}, mes de la Madre`);
            break;
        case 6:
            nombreMes = "Junio";
            alert(`Mes de ${nombreMes},mes del dia del padre y la fiesta de san juan`);
            break;
        case 7:
            nombreMes = "Julio";
            alert(`Mes de ${nombreMes}, mes de las fiestas patrias`);
            break;
        case 8:
            nombreMes = "Agosto";
            alert(`Mes de ${nombreMes}, mes de santa rosa de lima`);
            break;
        case 9:
            nombreMes = "Septiembre";
            alert(`Mes de ${nombreMes}, mes de la primavera`);
            break;
        case 10:
            nombreMes = "Octubre";
            alert(`Mes de ${nombreMes}, dia cancion criolla`);
            break;
        case 11:
            nombreMes = "Noviembre";
            alert(`Mes de ${nombreMes}, dia de los muertos`);
            break;
        case 12:
            nombreMes = "Diciembre";
            alert(`Mes de ${nombreMes}, navidad y año nuevo`);
            break;
    }
}