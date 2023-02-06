function mostrar()
{
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	// if (!(edad >=13 && edad <=17)){
	if(!(edadIngresada < 13 || edadIngresada < 18)){
		alert("usted no es adolescente");
	}
	
}//FIN DE LA FUNCIÓN