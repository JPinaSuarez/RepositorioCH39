package org.generation.figura;

// Para definir una clase abstracta, se utiliza la palabra clave abstract como modificador de acceso. Esta clase será implementada por subclases.

public abstract class Figura {
	// Método abstracto, se define sin un cuerpo de método, ya que el cuerpo se le dará en la clase que lo implementa
	public abstract double calcularArea();
	
	//Método concreto si posee un cuerpo de método
	public void infoFigura() {
		System.out.println("Esto es una figura");
	}
	
}
