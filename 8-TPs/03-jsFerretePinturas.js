/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() 
{
	let Fahrenheit;
    let centigrados;
    let resultado;

    Fahrenheit = document.getElementById("txtIdTemperatura").value;
    Fahrenheit = parseInt(Fahrenheit);

    centigrados =(Fahrenheit - 32) * 5 ;
    resultado = centigrados / 9;

    alert("los " + Fahrenheit + " son " + resultado + " centigrados");

}

function CentigradosFahrenheit () 
{
    let centigrados;
    let Fahrenheit;

    centigrados = document.getElementById("txtIdTemperatura").value;
    centigrados = parseInt(centigrados);

    Fahrenheit = centigrados * 1.8 + 32 ;

    alert("los " + centigrados + " son " + Fahrenheit + " Fahrenheit");

}
