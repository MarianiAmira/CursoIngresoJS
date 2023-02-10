function mostrar()
{
	let nota;
    nota = Math.random()*10 + 1;
	nota = parseInt(nota);

	alert(nota);

    if (nota >= 9 || nota == 10)
	{
		alert("EXCELENTE");
	}
    else if (nota >= 4)
	{
		alert("APROBO");
	}
    else
	{
		alert("Vamos, la próxima se puede");
	}

}//FIN DE LA FUNCIÓN
