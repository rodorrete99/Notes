	// Para declarar objetos igualamos a {} lo que indica un listado de caraterísticas del mismo 
	// El comando [this.caract] es usado para referirse al nombre del objeto dentro del mismo, de manera que se pueda cambiar el nombre y rehusar
let persona = {
	nombre: 'Juan', 
	pasos: 0, 
	hablar: function(){
		document.write(this.nombre + ' está hablando', '<br>');
	},
	caminar: function caminar(){
		this.pasos++;						// Al usar [++] indicamos que se le suma el anterior +1
		document.write(this.nombre + ' está caminando ' + this.pasos + (this.pasos > 1 ? ' pasos' : ' paso'), '<br>' );
	},
	parar: function detener(){
		document.write(this.nombre + ' esta congelado', '<br>');
	},
}

	// Para llamar a un atributo o caracteristica del objeto es necerio usar [name.caract] para usarse y se se usa una funcion agregar al final [()]
persona.hablar();
persona.parar();
persona.caminar();
persona.caminar();


	// Es posible hacer Object Functions deflarando la funcion de objeto y regresando esta para almacenarla en una variable 
function mascota(name){
	return{
		comida: 0,
		nombre: name,
		comer: function comer(){
			this.comida += 3
		}
	}
}

	// Aquí se almacena el objeto al llamar a la función
let spanki = mascota('Spanki')
	// Aquí se almacena el objeto al llamar a la función y además se le ingresa un valor en específico al objeto
let terry = mascota()
terry.nombre = 'Terry'
	
	
	// Se imprime en consola el objeto mostrando todos sus atributos
console.log(terry);
	// Se llama al objeto con un atributo en especifico para usar la funcin necesaria [name.caract()] 
spanki.comer();
terry.comer();
terry.comer();
	// se imprime en pantalla el atributo en especifico de cierto objeto [name.caract]
document.write('<br>', 'Spanki ha comida estas veces: ' + spanki.comida)
document.write('<br>', 'Terry ha comida estas veces: ' + terry.comida)
