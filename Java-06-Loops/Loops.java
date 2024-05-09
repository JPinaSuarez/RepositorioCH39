package org.generation.loops;

import java.util.Scanner;

public class Loops {
	public static void main(String[] args) {
		// 1. Crear un programa que solicite al usuario un número final que se utilizará para contar del 1 al n, donde n es el número que ingresó el usuario. 
		Scanner sc = new Scanner(System.in);
		System.out.println("Escribe un número final para la cuenta");
		
		int numInicio, numFinal;
		numInicio = 1;
		numFinal = sc.nextInt();
		
		while ( numInicio <= numFinal )  {
			System.out.println(numInicio);
			numInicio++;
		}
		
		// 2. Crear un programa que solicite al usuario un número entre 1 y 999, para determinar cuántos dígitos tiene dicho número. El programa se ejecuta sin terminar hasta que el usuario ingrese el número 0
		int numero;
		
		do {
			System.out.println("Ingresa un número para conocer cuántos dígitos tiene.\nAl ingresar el 0 se termina el programa.");
			numero = sc.nextInt();
			
			if (numero >= 100) {
				System.out.println("Su número tiene 3 o más digitos");
			} else if (numero >= 10 && numero <= 99) {
				System.out.println("Su número tiene 2 dígitos");
			} else {
				System.out.println("Su número tiene un dígito");
			}
		} while ( numero != 0 );
		System.out.println("\u001B[33mEl programa ha finalizado\u001B[37m");
		
		// 3. Crear un programa para calcular el área de un círculo. Solicite al usuario el valor del radio de la circunferencia
		System.out.println("Ingresa el radio de la circunferencia para conocer el área");
		double radio = sc.nextDouble();
		
		double areaCircunferencia = Math.PI * Math.pow(radio, 2); 
		
		System.out.println("El área de la circunferencia es " + areaCircunferencia + " metros cuadrados");
		
		sc.close();
		
		// 4. Determinar el cliente ganador
		for (int j = 1; j <= 10; j++){
		    if(j == 7) {
		    	System.out.println("Cliente ganador " + j);
		        continue;
		    }
		    System.out.println("Cliente " + j);
		}
		
		
	}
}
