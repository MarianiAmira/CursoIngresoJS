function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var destino = txtIdDestino.value;
	var mensaje;

	switch(estacionIngresada){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					mensaje = "se viaja";
					break;
				default:
					mensaje = "no se viaja";
			}
		break
		case "Verano":
			switch(destino){
				case "Mar del plata":
				case "Cataratas":
					mensaje = "se viaja";
					break;
				default:
					mensaje = "no se viaja";
					break;
			}
		break
		case "Otoño":
			switch(destino){
				case "Mar del plata":
				case "bariloche":
				case "Cordoba":
				case "Cataratas":
					mensaje = "se viaja";
					break;
				default:
					mensaje = "no se viaja";
					break;
			}
		break
		default:
			switch(destino){
				case "Bariloche":
					mensaje = "se viaja";
					break;
				default:
					mensaje = "no se viaja";
					break;
			}
	}
	
alert(mensaje);
}//FIN DE LA FUNCIÓN