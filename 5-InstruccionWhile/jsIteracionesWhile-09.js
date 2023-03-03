/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero=0;
	respuesta=true;

	do{	
		do{
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}while(isNaN(numeroIngresado));
	
	if (respuesta == true){//le da valor
		respuesta = false;
		
		numeroMaximo = numeroIngresado;
		numeroMinimo = numeroIngresado;
	}else{
		if(numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
		}
		else{
			if(numeroIngresado < numeroMinimo){
				numeroMinimo = numeroIngresado;
			}
		}
	}
	respuesta = confirm("Otro numero?");

}while(respuesta== true);

txtIdMaximo.value = numeroMaximo;
txtIdMinimo.value = numeroMinimo;

}//FIN DE LA FUNCIÓN
