function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino = txtIdDestino.value;
	var tarifa;
	var mensaje;
	var aumento;
	let precioFinal;

	switch(estacionIngresada){
		case "Invierno":
			switch(destino){
				case "bariloche":
					aumento = 1.20;
				break;
				case "Cataratas":
				case "Cordoba":
					aumento = 0.90;
					break;
				default:
					aumento= 0.80;
					break;
			}
		break
		case "Verano":
			switch(destino){
				case "bariloche":
					aumento = 1.20;
				break;
				case "Cataratas":
				case "Cordoba":
					aumento = 0.90;
					break;
				default:
					aumento= 0.80;
					break;
			}
		break
		default:
			switch(destino){
				case "bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento = 0.90;
					break;
				default:
					aumento= 1,20;
					break;
			}
		break
	}

tarifa = 15000;
precioFinal = tarifa * aumento / 100;
alert(precioFinal);
}//FIN DE LA FUNCIÓN

