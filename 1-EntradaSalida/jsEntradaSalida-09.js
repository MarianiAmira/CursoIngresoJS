/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var numeroSueldo= parseInt(txtIdSueldo.value);
	var sueldo = numeroSueldo * 10 / 100

	txtIdResultado.value = sueldo

	alert(txtIdResultado);
}
