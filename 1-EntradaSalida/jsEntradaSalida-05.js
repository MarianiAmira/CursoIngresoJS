/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	let nombreIngresado; 
	let edadIngresada;
	let resultado;

	nombreIngresado = txtIdNombre.value;
	edadIngresada = txtIdEdad.value;

	resultado = "Su nombre es : " + nombreIngresado + " y su edad es : " + edadIngresada;

	alert(resultado);
}