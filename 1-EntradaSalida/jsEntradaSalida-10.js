/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento ()
{
	let sueldo;
	let descuento;
	let nuevoImporte;

    sueldo = txtIdImporte.value;
	sueldo = parseInt(sueldo);

	descuento = sueldo * 25 / 100;

	nuevoImporte  = sueldo - descuento;

	txtIdResultado.value = nuevoImporte;
}

