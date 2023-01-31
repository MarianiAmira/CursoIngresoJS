/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre
	let edad

	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;

	resultado = "su nombre es " + nombre + " y tiene " + edad + " años ";

	alert(resultado);
}

