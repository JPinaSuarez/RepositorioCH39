package org.generation.letras;

import java.util.Scanner;

public class Letras {

	/*
	 * Crear un programa que le solicite al usuario una cadena de texto y determine cuántas vocales, consonantes, números y símbolos tiene dicha entrada.
	 * Utiliza la tabla ASCII para desarrollarlo.
	 * Utiliza POO
	 * Refactorización y reutilización de código
	 * Datos primitivos, operadores.
	 * */
	
	//En letras vamos a crear métodos que servirán para interactuar con el usuario
	Scanner scanner = new Scanner(System.in);
	
	//Método para retornar el scanner y poder usarlo las veces que quiera
	public String leerEntrada() {
		return scanner.nextLine();
	}
	
	//Método para dar contexto al usuario
	public void mostrarMensaje(String mensaje) {
		System.out.println(mensaje);
	}
	
}
