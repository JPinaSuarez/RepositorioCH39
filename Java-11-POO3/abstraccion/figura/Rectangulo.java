package org.generation.figura;

// Para poder usar los métodos abstractos, debe heredar de la clase abstracta
public class Rectangulo extends Figura {
	//Atributos
	private double base, altura;

	//Constructor
	public Rectangulo(double base, double altura) {
		super();
		this.base = base;
		this.altura = altura;
	}

	//Getters y Setters
	public double getBase() {
		return base;
	}

	public void setBase(double base) {
		this.base = base;
	}

	public double getAltura() {
		return altura;
	}

	public void setAltura(double altura) {
		this.altura = altura;
	}
	
	// Implementar método abstracto definido en la superclase, utilizando anulación de métodos. Como buena práctica puedo establecer que mi método es heredado, utilizando la anotación @Override
	@Override
	public double calcularArea() {
		return base * altura;
	}
	
	
}
