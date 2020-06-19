	// --> Ciclo if anidado
		//  [if]		Inicio para la condición
		//  [else]		Condición default o última
		//  [else if]		Condición extra 
let dato = 25;
if(dato<25)
  {console.log(dato," < 25")}
else if(dato>25)
  {console.log(dato," > 25")}
else
  {console.log(dato," = 25")}
  
  
	// --> Por casos 
		//  [switch]		
		//  [case]		Declarar los tipos de casos
		//  [default]		Caso default o último
		//  [break]		terminar el switch o detener labor
		
	// Dentro de [switch] se coloca un elemento que quiera comparar con los diferentes [case] y se ejecuta el primero de ellos, sino el default
	// Se usa el [break] para terminar el [switch]
switch(true){
	case(dato < 25):
		console.log("Es < 25");
		break;
	case(dato > 25):
		console.log("Es > 25");
		break;
	default:
		console.log("Es = 25");}
  
  
  	// --> Condiciones cortas
  		//  [?]		Pregunta si es True o False
  		//  [:]		Representa un else 
  		//  [&& -(T)-> 2do]	Juegan de puestas para acceder al segundo comando
  		//  [|| -(F)-> 2do]	Juegan de puestas para acceder al segundo comando
  		
  	// Cuando la condicición sea True se ejectutará el primer comando después de [?] y al ser False el segundo 
let resultado1 = dato-25 < 10 ? "resultado < 10" : "resultado > 10";
console.log(resultado1);
	// Con [||] si la condición es True se almacenará esta, pero con False se ejecuta el segundo comando
let resultado2 = dato-10 < 10 || "resultado2 > 10";
console.log(resultado2);
	// Con [&&] si la condición es True se ejecuta el segundo comando, pero con False se almacena el mismo
let resultado3 = dato-10 < 10 && "resultado2 > 10";
console.log(resultado3);
