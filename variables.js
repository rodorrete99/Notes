// Se diferencian (M/m), se debe de declarar variable con el primer caracter como letra y solo se pueden usar los caracteres especiales (_) y ($).  

	// Declarar variables globales en el código almacenandolas se usa [var] seguido de nombre y el dato deseado con un = haciendolo dinámico
	// De igual manera para variables dentro de un bloque {} se usa [let]
let texto = "7.5", nombre = "Zaida";	// string
var entero = 25;						// number (integer)
let decimal = 149.99;					// number (float o double)
let mayor = true;						// boolean
let taco = null; 						// object
let casa = undefined;  					// undefined
let texto_decimal = texto + decimal;	// sting por concatenar al adherir valores



// -> Formas de imprimir datos y solicitalos	
	// Pedir en pantalla que se ingrese algun dato por teclado ("Mensaje","Sugerencia")
let algo = prompt("Ingresa algo","gato, 25")
	// Escribir en el documento html para imprimir en la pagina del navegador web la variable y saltar línea con ['<br>'] en html
document.write(algo,'<br>',"Se a saltado de línea");
	// Escribir un mensaje simple en una ventana del navegador
window.alert('Mensaje emergente');
	// Imprimir en consola del navegador web la variable 
console.log(decimal);
	// Dentro del archivo html se cambia el párrafo [id='párrafo'] con los datos nuevos 
document.getElementById('p2').innerHTML = 2/3;


	// Imprimir en consola del navegador web el tipo de variable usando [typeof]
console.log(typeof casa);			// Muestra que esta almacenado como undefined
console.log(typeof carro);			// undefined yet


	// Operador [%] indica división dando un integer si es posible o un 0, null tipo objeto y [===] es un operador de relación 
console.log(entero % 1 === 0);		// Lanza True si es integer
console.log(decimal % 1 === 0);		// Lanza False si es float
console.log(taco === null);			// Lanza True si es null (object) 


	// Cambiar el tipo de variables y como se escribe 
console.log(Number(texto));			// string -> number
console.log(parseInt(decimal));		// number (integer) -> string
console.log(parseFloat(decimal));	// number (float) -> string
console.log(nombre.toUpperCase());	// string -> STRING
console.log(nombre.toLowerCase());	// STRING -> string 
