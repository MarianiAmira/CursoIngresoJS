function mostrar()
{
	var contador ;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador < 5){
		contador  ++;
		numeroIngresado = prompt("Ingresa un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado)){ 
		numeroIngresado = prompt("Error, ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado)
	    }
		acumulador = acumulador + numeroIngresado;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/5;


}//FIN DE LA FUNCIÓN
