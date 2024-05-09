package org.generation.exceptions;

public class FondosInsuficientesExc extends Exception {

	private static final long serialVersionUID = 1L; //ID para tabla de excepciones, generamos uno por default
	
	// Atributos
	private double monto;
	
	// Constructor
	public FondosInsuficientesExc(double monto) {
		this.monto = monto;
	}

	// Getters y Setters
	public double getMonto() {
		return monto;
	}

	public void setMonto(double monto) {
		this.monto = monto;
	}	
	
}
