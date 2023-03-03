/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadosPares;
	let acumuladorPositivos;
	let acumuladorNegativos;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	respuesta= true;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadosPares = 0;
	acumuladorPositivos = 0;
	acumuladorNegativos = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;
	promedioNegativos = 0 ;
	promedioPositivos = 0 ;
	diferencia = 0 ;


	do{	
		do{
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}while(isNaN(numeroIngresado));

		if(numeroIngresado < 0){
			acumuladorNegativos += numeroIngresado;
			contadorNegativos++;
		}else{
			if(numeroIngresado != 0){
				acumuladorPositivos += numeroIngresado;
				contadorPositivos;
			}
			else{
				if(numeroIngresado < 0){
					contadorNegativos += numeroIngresado;
					contadorNegativos++;
				}
				else{
					if(numeroIngresado < 0){
							contadorPositivos += numeroIngresado;
							contadorPositivos ++;
						}
					else{
						if(numeroIngresado == 0){
						contadorCeros++;
					}
						else{
							if(numeroIngresado % 2 == 0){
							contadosPares++;
						}
						else{
							if(diferencia = contadorPositivos - contadorNegativos){
								contadorPositivos += numeroIngresado &&  contadorNegativos == numeroIngresado;
							}
						}
						}

						
					}
				}
			}
		}

		respuesta = confirm("Otro numero?");
    
    }while(respuesta== true);

	if(contadorPositivos < 0){
		promedioPositivos = acumuladorPositivos / contadorPositivos;	
	}
	else{
		promedioPositivos = 0;
	}
	
	if(contadorNegativos > 0){
		promedioNegativos = acumuladorNegativos / contadorNegativos;
	}
	else{
		promedioPositivos = 1;
	}

	document.write (" la suma de los negativos es " + acumuladorNegativos);
	document.write (" la suma de los positivos es " + acumuladorPositivos);
	document.write (" la cantidad de negativos " + contadorNegativos);
	document.write (" la cantidad de positivos " + contadorPositivos);
	document.write (" cantidad de pares " + contadosPares);
	document.write (" cantidad de ceros " + contadorCeros);
	document.write (" promedio de positivos " + promedioPositivos);
	document.write (" promedio de negativos " + promedioNegativos);
	document.write (" diferencia entre positivos y negativos +" + diferencia);

}//FIN DE LA FUNCIÓN