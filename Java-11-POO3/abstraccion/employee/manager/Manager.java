package org.generation.employee.manager;

import org.generation.employee.Employee;
import org.generation.employee.Trabajador;

public class Manager extends Employee implements Trabajador{
	// Atributos propios de Manager
	private int colaboradores;
	private double bono;
	
	// La clase Manager será una subclase que heredará atributos y métodos de la superclase Employee. Para heredar definimos la herencia con la palabra clave extends dentro de la subclase
	// Constructor con parámetros heredados
	public Manager(long idEmpleado, String nombre, String apellido, double salario, String puesto, int colaboradores,
			double bono) {
		super(idEmpleado, nombre, apellido, salario, puesto);
		this.colaboradores = colaboradores;
		this.bono = bono;
	}
	
	// Métodos de comportamiento propios del Manager
	public void supervisar() {
		System.out.println("El Manager " + this.getNombre() + " " + this.getApellido() + " le pregunta a sus " + colaboradores + " colaboradores, ¿cómo vas?");
	}

	public void calcularSalario() {
		double salarioTotal = this.getSalario() + this.bono;
		System.out.println("El Manager " + this.getNombre() + " " + this.getApellido() + " gana $" + salarioTotal);
	}
	
	// Getters y Setters
	public int getColaboradores() {
		return colaboradores;
	}

	public void setColaboradores(int colaboradores) {
		this.colaboradores = colaboradores;
	}

	public double getBono() {
		return bono;
	}

	public void setBono(double bono) {
		this.bono = bono;
	}

	// toString
	@Override
	public String toString() {
		return "Manager [colaboradores=" + colaboradores + ", bono=" + bono + ", toString()=" + super.toString() + "]";
	}


}
