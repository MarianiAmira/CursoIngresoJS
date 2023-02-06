function mostrar(){

	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 13){
		alert("ES NIÑO");
	}
	else{
		if(edad >=13 && edad <= 17){
			alert("ES ADOLESCENTE");
		}
		else{
			if(edad >=18 && edad <= 30){
				alert("SOS JOVEN");
			}
			else{
				if(edad >=31 && edad <= 60){
					alert("SOS ADULTO");
				}
				else{
					alert("SOS JUBILADO");
				}
			}
		}
	}

}//FIN DE LA FUNCIÓN