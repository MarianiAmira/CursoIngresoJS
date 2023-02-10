function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch(destinoIngresado){
		case "Bariloche":
			mensaje = "frio";
			break;
		case "Cataratas":
			mensaje = "calor";
			break;
	    case "Mar del plata":
			mensaje = "calor";
			break;
		default:
			mensaje = "frio";

	}	
alert(mensaje);
}//FIN DE LA FUNCIÓN