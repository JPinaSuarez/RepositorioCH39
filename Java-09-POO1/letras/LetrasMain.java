package org.generation.letras;

public class LetrasMain {

	public static void main(String[] args) {
		//Instanciar objetos (letras y contador)
		Letras letras = new Letras();
		letras.mostrarMensaje("Escribe un texto para conocer el número de vocales, consonantes, números y símbolos que posee");
		
		String texto = letras.leerEntrada();
		
		Contador contador = new Contador();
		
		int totalVocales = contador.contarVocales(texto);
		System.out.println("Hay " + totalVocales + " vocales");
		
		int totalConsonantes = contador.contarConsonantes(texto);
		System.out.println("Hay " + totalConsonantes + " consonantes");
		
		int totalNumeros = contador.contarNumeros(texto);
		System.out.println("Hay " + totalNumeros + " números");
		
		int totalSimbolos = contador.contarSimbolos(texto);
		System.out.println("Hay " + totalSimbolos + " símbolos");
		
	}

}
