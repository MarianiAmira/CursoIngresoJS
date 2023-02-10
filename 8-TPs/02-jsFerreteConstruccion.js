/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre;

    largo  = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = largo + ancho * 2;

    alambre = perimetro * 3;

    alert("la cantidad de alambre que se neccesita es de : " + alambre);

}
function Circulo () 
{
    let radio;
    let perimetro;
    let pi;
    let alambre;
    

    radio = document.getElementById("txtIdRadio").value;

    radio = parseInt(radio);

    pi = 3.14 ;
    perimetro = pi * radio * 2;

    alambre = perimetro * 3;

    alert("la cantidad de alambre que se necesita es de : " + alambre);

}
function Materiales () 
{
	let radio ;
    let largo;
    let ancho;
    let cemento;
    let cal;
    let bolsas;

    radio = document.getElementById("txtIdRadio").value;
    largo  = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    
    radio = parseInt (radio);
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    cemento = (largo * ancho )*2;
    cal = (largo * ancho)*3;

    bolsas = cemento + cal;

    alert("Las bolsas que necesita son " + bolsas);

}