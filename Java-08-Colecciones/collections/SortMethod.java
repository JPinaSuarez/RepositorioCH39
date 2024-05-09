package org.generation.collections;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

public class SortMethod {
	public static void main(String[] args) {
		/*---- Método Sort ----*/
		//Permite ordenar los elementos de una Colección
		ArrayList<String> peliculas = new ArrayList<>();
		Set<Integer> edades = new HashSet<>();
		
		//Llenar el ArrayList y el HashSet
		peliculas.addAll(Arrays.asList("Glass", "interestelar", "Interestelar", "MadMax", "John Wick", "Oppenheimer", "Interestelar"));
		edades.addAll(Arrays.asList(18, 22, 37, 22, 27, 30, 25, 30, 27, 25));
		
		//Imprimir las Colecciones
		System.out.println(peliculas);
		System.out.println(edades);
		
		//Método para ordenar los elementos: Collections.sort(colección); utilizando como referencia la tablas ASCII
		Collections.sort(peliculas);
		System.out.println(peliculas);
		
		//Quise ordenar el HashSet con el método Sort pero Eclipse me dijo que no es compatible. Dice Patricio que con un TreeSet funcionaría
		TreeSet<Integer> edades1 = new TreeSet<Integer>();
		edades1.addAll(Arrays.asList(18, 22, 37, 22, 27, 30, 25, 30, 27, 25));
		System.out.println(edades1);
		
		edades = new TreeSet<>(edades);
		//edades.addAll(Arrays.asList(18, 22, 37, 22, 27, 30, 25, 30, 27, 25));
		System.out.println(edades);
		
	}
}
