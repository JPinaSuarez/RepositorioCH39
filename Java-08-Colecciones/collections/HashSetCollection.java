package org.generation.collections;

import java.util.Arrays;
import java.util.HashSet;

public class HashSetCollection {
	public static void main(String[] args) {
		/*----- HashSet -----*/
		//En los hashSet cada elemento es único, no existen elementos duplicados
		HashSet<String> animalitos = new HashSet<String>();
		
		animalitos.addAll(Arrays.asList("Perrito", "Gatito", "Conejito", "Pingüino", "Capibara", "capibara", "Capibara", "Gatito"));
		System.out.println(animalitos); //Output:[capibara, Pingüino, Conejito, Perrito, Capibara, Gatito]
		
		//Utilizando la tabla Hash, recorre todos los elementos y muestra elementos únicos 
		HashSet<Character> caracteres = new HashSet<Character>();
		caracteres.addAll(Arrays.asList('b', 'a', 'b', 'b', 'c', 'a', 'a', 'b', 'c', 'b', 'c', 'a', 'a', 'b', 'c', 'b', 'c', 'a', 'a', 'b', 'c', 'b', 'c', 'a', 'a', 'b', 'c', 'b', 'c', 'a'));
		System.out.println(caracteres);
		
		//Método para conocer si un elemento se encuentra en el Set
		System.out.println(animalitos.contains("Gatito")); //Output: true
		
		//Aplicando size para conocer la longitud del Set
		System.out.println(animalitos.size()); //Output: 6 porque ignora los repetidos
		
		//Eliminando elementos
		caracteres.remove('a');
		System.out.println(caracteres);
		System.out.println(caracteres.size()); //Output: 2
		
		//Método para limpiar 
		animalitos.clear();
		System.out.println(animalitos); //Output: []
		
	}
}
