#!/usr/bin/python		#  Hacer que interprete la terminal 
# -*- coding: latin-1 -*-	#  el código en Python 3.8.1
import os, sys			#  Llamar al sistema operativo

import math			#  Llamar a los comandos de math 
a = []				#  Declarar una matriz (sin tamaño)
print ("Ingrese los 3 lados del triangulo")	#  Imprimir mensaje para solicitar datos

for i in range(1):			#  Ciclo iterativo que define el número de renglones de la matriz
    a.append([])			#  Permitir a la matriz cambiar la dimensión del renglon
    for j in range(3):			#  Ciclo iterativo que define el número de columnas de la matriz 
        a[i].append(float(input()))	#  Permite llenar las casillas de la matriz con los datos del usuario

while a[0][1] < a[0][2]:	#  Comparación entre el 2do y 3er elemento introducidos para continuar con la sección lógica
      aux     = a[0][1]		#  Cambiar el 2do valor por 0 y almacenarlo en la variable (aux)
      a[0][1] = a[0][2]		#  Almacenar el valor del 3er elemento en el 2do 
      a[0][2] = aux		#  Almacenar el valor de la variable (aux) en la 3er
while a[0][0] < a[0][1]:
      aux     = a[0][0]		#  Se repite lo anterior pero ahora entre el 1er y 2do
      a[0][0] = a[0][1]
      a[0][1] = aux
while a[0][1] < a[0][2]:
      aux     = a[0][1]		# Se vuleve a repetir el proceso pero ahora entre el 2do y 3er 
      a[0][1] = a[0][2]
      a[0][2] = aux

if a[0][0] < a[0][1] + a[0][2]:		#  Secuencia lógica que demustra que es un triángulo
    P = a[0][0] + a[0][1] + a[0][2]	#  Se calcula y almacena el valor del périmetro
    print ("Lado a =",a[0][0],"Lado b =",a[0][1],"Lado c =",a[0][2])	#  Se imprime en pantalla las dimensiones del triángulo en orden descendente
    print ("  Perimetro del triangulo =",P)	#  Se imprime en pantalla el valor del périmetro
    print ("  Area del triangulo =",math.sqrt((P/2)*(P/2-a[0][0])*(P/2-a[0][1])*(P/2-a[0][2])))		#  Se calcula e imprime en pantalla el valor del área
else:						#  Si la secuencia lógica es falta envia continua aquí
    print ("!---No es un triangulo---!")	#  Imprime en pantalla que no es un triángulo
