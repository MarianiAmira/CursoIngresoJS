/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = document.getElementById("txtIdNumeroDividendo").value;
	numeroDos = document.getElementById("txtIdNumeroDivisor").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno % numeroDos;

	alert("El resultado es de " + resultado);

}

