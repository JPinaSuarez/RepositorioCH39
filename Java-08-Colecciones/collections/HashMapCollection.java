package org.generation.collections;

import java.util.HashMap;
import java.util.Map;

public class HashMapCollection {

	public static void main(String[] args) {
		/*---- HashMap ----*/
		//Almacena elementos en pares (key/value) y se puede acceder a ellos mediante index. No es ordenado y no permite datos duplicados
		HashMap<Integer, String> nombreCompleto = new HashMap<Integer, String>();
		
		//Método para agregar pares .put();
		nombreCompleto.put(36, "Daniel Maldonado");
		nombreCompleto.put(12, "Gaby Cortes");
		nombreCompleto.put(22, "Fer Ramos");
		nombreCompleto.put(36, "Daniel Maldonado");
		
		System.out.println(nombreCompleto);
		
		//Recorrer un HashMap, vamos a implementar un método de la interfaz Map que se llama Entry
		for( Map.Entry<Integer, String> nombre : nombreCompleto.entrySet() ) {
			System.out.println("Id: " + nombre.getKey() + ", Nombre completo: " + nombre.getValue());
		}	
	}
}
