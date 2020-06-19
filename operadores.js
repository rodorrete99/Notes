// Tipos de operdarores:
	// --> Asignación
		//  [=]	Asignacion / Igual a
	// --> Relación
		//  [==]	Igual que 
		//  [===]	Estrictamente igual que
		//  [!=]	Diferente de 
		//  [!==]	Estrictamente diferente de 
		//  [<]	Menor que
		//  [>]	Mayor que
		//  [<=]	Mayor o igual que 
		//  [>=]	Menor o igual que
	// --> Lógicos
		//  [&&]	And (Y)
		//  [||]	Or (ó)
		//  [!]	Not (Negación)
	// --> Matemáticos
		//  [/]	División
		//  [*]	Multiplicación
		//  [-]	Resta
		//  [+]	Suma
		//  [%]	Divisible
		
		
	// Si el elemento esta escrito "igual que" lanza un True 
if(1=="1")
  {console.log("Si");}
else
  {console.log("No");}
	// Si el elemento esta escrito "igual que" y es de tipo diferente lanza un False 
if(1==="1")
  {console.log("Si");}
else
  {console.log("No");}


	// Si ambas son True se ejecuta el if, pero si alguna o ambas es False se ejecuta el else
if(1<=5 && 0>-1)
  {console.log("+");}
else
  {console.log("-");}
	// Si alguna o ambas es True se ejecuta if y si ambas son false se ejecuta else
if(1<=5 || 0>1)
  {console.log("a");}
else
  {console.log("b");}
	// Si el resultado original era True lo vuelve False y viceversa
if(!100 < 50)
  {console.log("T")}
else
  (console.log("F"))
