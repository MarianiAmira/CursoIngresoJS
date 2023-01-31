/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldoIngresado = parseInt(txtIdImporte.value);
	var sueldo = sueldoIngresado * 25 / 100;

	txtIdResultado.value = sueldo;

}
