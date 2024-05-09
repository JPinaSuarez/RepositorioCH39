package org.generation.employee.colaborador;

import org.generation.employee.Employee;

public class Colaborador extends Employee{
	// departamento, manager
	private String departamento;
	private String manager;
	
	// Constructor 
	public Colaborador(long idEmpleado, String nombre, String apellido, double salario, String puesto,
			String departamento, String manager) {
		super(idEmpleado, nombre, apellido, salario, puesto);
		this.departamento = departamento;
		this.manager = manager;
	}

	// Getters y setters
	public String getDepartamento() {
		return departamento;
	}

	public void setDepartamento(String departamento) {
		this.departamento = departamento;
	}

	public String getManager() {
		return manager;
	}

	public void setManager(String manager) {
		this.manager = manager;
	}

	// toString
	@Override
	public String toString() {
		return "Colaborador [departamento=" + departamento + ", manager=" + manager + "]";
	} 
	
	// Métodos propios
	public void consultarDepartamento() {
	    System.out.println("El colaborador "+ this.getNombre()+" "+this.getApellido()+" pertenece al departamento de "+ this.departamento);
	}
	
	public void jefeDirecto() {
		System.out.println("El colaborador " + this.getNombre() + " " + this.getApellido() + " trabaja con " + this.manager);
	}
	
}
