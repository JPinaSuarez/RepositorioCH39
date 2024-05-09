package org.generation.iterable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;

public class IterableMain {

	public static void main(String[] args) {
		// 1. Iterar mediante ciclo for-each
		ArrayList<String> nombres = new ArrayList<String>();
		nombres.addAll(Arrays.asList("Mario", "Juan", "Julia", "Jessica"));
		
		System.out.println(nombres);
		
		for (String nombre : nombres) {
			System.out.println(nombre);
		}
		
		// 2. Iterar mediante Iterator
		ArrayList<Double> salarios = new ArrayList<Double>();
		salarios.addAll(Arrays.asList(22136.22d, 8766.3d, 12455.01d, 6222.12d));
		
		System.out.println(salarios);
		
		//Mandamos a llamar la interfaz Iterator y la importamos (java.util). Le asignamos un nombre y definimos el ArrayList sobre el cual va a iterar utilizando el método iterator();
		Iterator<Double> iteradorSalarios = salarios.iterator(); 
		System.out.println(iteradorSalarios); //No me muestra la lista. Output: java.util.ArrayList$Itr@4617c264
		
		//Utilizar el Iterator en un ciclo while, para que los elementos se muestren en forma de lista, utilizando el método hasNext() que será true, siempre que encuentre más elementos en el Iterator. Estos elementos se guardan en una variable que puede imprimirse
		while (iteradorSalarios.hasNext()) {
			Double elemento = iteradorSalarios.next();
			System.out.println(elemento);
		}
		
		// 3. Iterar mediante expresiones Lambda-forEach
		ArrayList<String> posiciones = new ArrayList<String>();
		
		posiciones.addAll(Arrays.asList("Frontend", "Backend", "DevOps", "Tester", "Scrum master", "Fullstack"));
		
		posiciones.forEach((posicion) -> {
				System.out.println(posicion);
		});
		
		
		
		
		
	}

}
