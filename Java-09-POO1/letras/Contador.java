package org.generation.letras;

public class Contador {
	//Aquí vive la lógica de mi programa: determinar si es vocal, consonante, etc...
	//--- Grupo 1 -> Métodos booleanos para determinar a qué tipo de caracteres corresponde
	//--- Grupo 2 -> Métodos int para contar el número de cada tipo
	
	//Grupo 1
	public boolean esVocal(char caracter) {
		return ( caracter == 'a' || caracter == 'A' || caracter == 'e' || caracter == 'E' || caracter == 'i' || caracter == 'I' || caracter == 'o' || caracter == 'O' || caracter == 'u' || caracter == 'U');
	}
	
	public boolean esConsonante(char caracter) {
		//Casteo para poder utilizar tabla ASCII
		short codigoAscii = (short) caracter;
		return ((codigoAscii >= 65 && codigoAscii <= 90) || (codigoAscii >= 97 && codigoAscii <= 122)) && !esVocal(caracter);
	}
	
	public boolean esNumero(char caracter) {
		short codigoAscii = (short) caracter;
		return (codigoAscii >= 48 && codigoAscii <= 57);
	}
	
	public boolean esSimbolo(char caracter) {
		return !(esVocal(caracter) || esConsonante(caracter) || esNumero(caracter)); 
	}
	
	//Grupo 2
	public int contarVocales(String texto) {
		int vocales = 0;
		for (char caracter : texto.toCharArray()) {
			if (esVocal(caracter)) {
				vocales++;
			}
		}
		return vocales;
	}
	
	public int contarConsonantes(String texto) {
		int consonantes = 0;
		for (char caracter : texto.toCharArray()) {
			if (esConsonante(caracter)) {
				consonantes++;
			}
		}
		return consonantes;
	}
	
	public int contarNumeros(String texto) {
		int numeros = 0;
		for (char caracter : texto.toCharArray()) {
			if (esNumero(caracter)) {
				numeros++;
			}
		}
		return numeros;
	}
	
	public int contarSimbolos(String texto) {
		int simbolos = 0;
		for (char caracter : texto.toCharArray()) {
			if (esSimbolo(caracter)) {
				simbolos++;
			}
		}
		return simbolos;
	}	
}
