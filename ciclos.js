// Tipos de ciclos:
		// [for]	->  Iterativo
		// [do]		->	
		// [while]	->	

for(let i=0; i<4; i++){
	document.write('for = ' + i, '<br>');
}

let j=0;
do{
	document.write('do = ' + j, '<br>');
	j++;
}while(j<3);


while(j<6){
	j++
	if(j==5){
		document.write('No aparece', '<br>');
		continue;
	}
	document.write('while = ' + j, '<br>');
}

