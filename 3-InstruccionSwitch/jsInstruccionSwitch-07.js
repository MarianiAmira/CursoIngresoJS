function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch(destinoIngresado){
		case "Bariloche":
			mensaje = "oeste";
			break;
		case "Cataratas":
			mensaje = "norte";
			break;
	    case "Mar del plata":
			mensaje = "este";
			break;
		default:
			mensaje = "sur";

	}	
alert(mensaje);
}//FIN DE LA FUNCIÓN