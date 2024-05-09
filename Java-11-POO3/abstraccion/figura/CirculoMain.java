package org.generation.figura;

public class CirculoMain {

	public static void main(String[] args) {
		Circulo circulo1 = new Circulo(2);
		System.out.println("Circulo 1");
		System.out.println(circulo1.calcularArea());
		
		Circulo circulo2 = new Circulo(5);
		System.out.println("Circulo 2");
		System.out.println(circulo2.calcularArea());
	}

}