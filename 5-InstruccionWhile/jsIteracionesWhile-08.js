/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var numero;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	acumulador = 0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta= true;


	do{	
		do{
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);

		}while(isNaN(numero));

		if(numero >= 0){
			sumaPositivos += numero;
		}
		else{
			multiplicacionNegativos *= numero;
			contador = true;
		}
		respuesta = confirm("Otro numero?");
	}while( respuesta == true);

	document.getElementById("txtIdSuma").value = sumaPositivos;

	if(contador){
		document.getElementById("txtIdProducto").value = multiplicacionNegativos;
	} else{
		txtIdProducto.value = "no ingreso numeros negativos";
	}
	
}//FIN DE LA FUNCIÓN
 