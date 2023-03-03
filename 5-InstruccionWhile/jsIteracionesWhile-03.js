/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	let clave;

	claveIngresada = prompt("ingrese el número clave.");

	clave = "utn750";

	while(claveIngresada != "utn750"){ // salta si no es la clave
		claveIngresada = prompt("Error!");
	}

	alert("Bienvenido");
	
}//FIN DE LA FUNCIÓN
