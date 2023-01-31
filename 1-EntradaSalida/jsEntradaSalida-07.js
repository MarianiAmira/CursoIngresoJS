/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno = parseInt(txtIdNumeroUno.value);
	var numeroDos = parseInt(txtIdNumeroDos.value);

	var resultado = numeroUno + numeroDos;

	alert("la suma es de " + resultado );

}

function restar()
{
	var numeroUno = parseInt(txtIdNumeroUno.value);
	var numeroDos = parseInt(txtIdNumeroDos.value);

	var resultado = numeroUno - numeroDos;

	alert("la resta es de " + resultado );

}

function multiplicar()
{ 
	var numeroUno = parseInt(txtIdNumeroUno.value);
	var numeroDos = parseInt(txtIdNumeroDos.value);

	var resultado = numeroUno * numeroDos;

	alert("la multipicacion es de " + resultado );

}

function dividir()
{
	var numeroUno = parseInt(txtIdNumeroUno.value);
	var numeroDos = parseInt(txtIdNumeroDos.value);

	var resultado = numeroUno / numeroDos;

	alert("la division es de " + resultado );

}

