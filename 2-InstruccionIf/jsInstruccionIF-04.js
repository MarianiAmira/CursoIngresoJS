function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt (edad);

	if(edad >= 13 && edad < 18){
		alert("usted es adolescente");
	}

}//FIN DE LA FUNCIÓN