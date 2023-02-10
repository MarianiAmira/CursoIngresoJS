function mostrar()
{
	//tomo el mes

	var mesDelAño =txtIdMes.value;
	var mensaje;

	switch(mesDelAño){
		case "Diciembre":
		case "Enero":
		case "Febrero":
			mensaje = "Verano"
			break;


		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "otoño"
			break;
		
		case "Julio":
		case "Agosto":
		case "Septiembre":
			mensaje = "invierno"
			break

		default:
			mensaje = "Primavera"	
	}
alert(mensaje);
}//FIN DE LA FUNCIÓN