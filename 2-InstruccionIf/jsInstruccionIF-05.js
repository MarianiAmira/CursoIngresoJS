function mostrar()
{
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada <=12)
	{
		alert("usted no es adolescente");
	}
	else if (edadIngresada >=17)
	{
		alert("usted no es adolescente");
	}

}//FIN DE LA FUNCIÓN