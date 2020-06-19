// Tipos de funciones:
			// [function name ()] 			->	Simple
			// [let/var name = function ()]	->	Anónima
			// [()();]						->	IIFE
			// [function name(func){}]		->	Callback
	
	// Para funciones simples usamos [function] despues un nombre donde () denotan los elementos de entrada y usamos [return] para regresar algo
	// Para ser ejecutados deben de ser llamados por el nombre asignado
function prueba()
	{window.alert('Prueba de función');}
prueba();
	
function mensaje(begin, end)
	{window.alert('Contando de ' + begin + ' hasta ' + end)};
mensaje(0,5);
	
function suma(a, b)
	{return a + b;}
let total=suma(2,5);
window.alert(total)	


	//Para funciones anonimas estas se asignan a una variable con [let/var]
let potencia = function(x,n){
	let i=0, y=x;
	if(n==0){
		x = 1
	}else if(n<0){
		while(i>n-1){
			x = x / y
			i -= 1
			}
	}else{
		while(i<n-1){
			x = x * y
			i += 1
		}
	}return x
}
window.alert( potencia( prompt('Ingrese el número a elevar',''), prompt('Ingresa la potencia deseada','') ) );


	// Las funciones IIFE se escriben dentro de [()();], sonde en el primero se coloca la función anonia y en el segundo los datos ingresados a esta
(function(dato, color){
	document.write('Se imprime el dato ' + dato, ' y el color ', color, '<br>');
})('ingresado en el segundo parentesis', 'Azul');


	// Consiste en enlazar dos funciones ingresando el nombre de una en otra para que se ejecute la otra al usar comandos
function Batman(edad)
	{document.write('Edad de Batman es ', edad, '<br>');}
function Superman(func)
	{document.write('Edad de Superman es 40', '<br>');
	func(35)}
Superman(Batman);
