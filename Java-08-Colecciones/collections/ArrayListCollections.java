package org.generation.collections;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ArrayListCollections {
	public static void main(String[] args) {
		/*--------- Arrays ------------ */
		String[] nombres = {"Daniel", "Fernanda", "Gaby" };
		int[] edades = {37, 30, 30};
		
		//Para imprimir los valores de un Array, debemos utilizar un método de Arrays y el array que queremos imprimir
		System.out.println(Arrays.toString(nombres));
		System.out.println(Arrays.toString(edades));
		
		//Acceder a un elemento del Array
		String nombre1 = nombres[0];
		System.out.println(nombre1); //Output: Daniel
		
		//Longitud de un Array
		int longitudEdades = nombres.length;
		System.out.println(longitudEdades); //Output: 3
		
		//Mostrar cada elemento con forEach
		for(String nombre : nombres) {
			System.out.println(nombre);
		}
		
		/*--------- ArrayList -----------*/
		//Es un Array que puede cambiar de tamaño y permite elementos duplicados
		ArrayList<String> peliculas = new ArrayList<String>(); //Como clase
		List<Double> salario = new ArrayList<Double>(); //Como interfase
		List<Integer> inventario = new ArrayList<>(); //Wrapper class
		
		//Agregando valores a los ArrayList
		peliculas.add("Titanic");
		peliculas.add("La isla siniestra");
		peliculas.add("Frozen");
		
		salario.add(17999.0d);
		salario.add(17999.0d);
		salario.add(17999.0d);
		
		inventario.add(20);		
		
		System.out.println(peliculas); //Output: [Titanic, La isla siniestra, Frozen]
		System.out.println(salario); //Output: [17999.0, 17999.0, 17999.0]
		System.out.println(inventario); //Output: [20]
		
		//Método para acceder a un elemento del ArrayList: name.get(index)
		String pelicula2 = peliculas.get(1);
		System.out.println(pelicula2); //Output: La isla siniestra
		
		//Método para modificar un elemento: name.set(index, newValue);
		inventario.set(0, 17);
		System.out.println(inventario); //Output: 17
		/*inventario.set(1, 98);
		System.out.println(inventario); //Exception, no existe el indice 1 dentro del ArrayList */
		
		//Agregando nuevo elemento
		salario.add(5000.0d);
		System.out.println(salario); //Output: [17999.0, 17999.0, 17999.0, 5000.0]
		
		//Método para acceder al último elemento del ArrayList
		int ultimoElemento = (salario.size()-1);
		
		//Método para eliminar un elemento
		salario.remove(ultimoElemento);
		System.out.println(salario); //Eliminó el elemento con el indice 3 (5000.0d)
		
		//Recorrer un ArrayList (forEach)
		for(String pelicula : peliculas) {
			System.out.println(pelicula);
		}
	}
}
