package org.generation.controlDeFlujo;

import java.util.Scanner;

public class ControlDeFlujo {
	public static void main(String[] args) {
		/**
		 * Scanner. Clase que me permite interactuar con un usuario. 
		 * Debo definir el tipo de valor a leer*/
		Scanner scanner = new Scanner(System.in);
		//Dar contexto al usuario
		System.out.println("Ingresa tu nombre");
		String nombre = scanner.next();
		
		System.out.println("Ingresa tu edad");
		int edad = scanner.nextInt();
		
		//Usando las dos variables
		//System.out.println("Hola " + nombre + " tienes " + edad + " años");
		
		//Utilizando un if-else, le solicite al usuario su nombre y edad. Si es mayor de 18 años, autorizamos la venta de alcohol. Si es menor. no se le autoriza
		if (edad < 18) {
			System.out.println(nombre + " NO puedes comprar alcohol");
		} else {
			System.out.println(nombre + " aquí está su chelita");
		}
		
		//Determinar si una persona es un bebé, un niño, un adolescente o un adulto con base en su edad. Si la persona es un adulto, determinar si es un adulto (18 a 59 años) o un adulto mayor (mayor a 60 años) 
		
		if (edad >= 18) {
		    //Anidando sentencias condicionales
		    if (edad < 60) {
		    	System.out.println("Es un adulto");
		    } else {
		    	System.out.println("Adulto mayor");
		    }
		} else if (edad >= 12) {
			System.out.println("Es un adolescente");
		} else if (edad >= 3) {
			System.out.println("Es un niño");
		} else {
			System.out.println("Es un bebé");
		}
		
		//Sentencia switch. Solicite al usuario un número del 1 al 7 por cada día de la semana (1 = lunes, 2 = martes... 7 = domingo). Si no se elige un número correcto envíe un mensaje de advertencia
		System.out.println("Ingresa un número del 1 al 7 para conocer el día de la semana");
		int numeroDia = scanner.nextInt();
		
		switch(numeroDia) {
		case 1:
			System.out.println("Lunes");
			break;
		case 2:
			System.out.println("Martes");
			break;
		case 3:
			System.out.println("Miércoles");
			break;
		case 4:
			System.out.println("Jueves");
			break;
		case 5:
			System.out.println("Viernes");
			break;
		case 6: 
			System.out.println("Sábado");
			break;
		case 7:
			System.out.println("Domingo");
			break;
			default:
				System.out.println("No es un número válido");
				break;
		}
		
		//Operador ternario
		//variable = (condición) ? true : false;
		int hora = 16;
		String momentoDia = (hora < 20) ? "Buenas tardes" : "Buenas noches";
		System.out.println(momentoDia);
		
		scanner.close(); //Cerrar scanner
	}	
}
