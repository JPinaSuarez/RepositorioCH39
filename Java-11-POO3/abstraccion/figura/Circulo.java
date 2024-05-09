package org.generation.figura;

public class Circulo extends Figura{
	private double radio;
	//private double pi = 3.1416;
	
	Circulo(double radio) {
		super();
		this.radio = radio;
		//this.pi = pi;
	}
	
	// Getters y Setters
	public double getRadio() {
		return radio;
	}
	public void setRadio(double radio) {
		this.radio = radio;
	}

	@Override
	public double calcularArea() {
		double area = Math.PI * Math.pow(radio, 2);
		return area;
	}
	

}
