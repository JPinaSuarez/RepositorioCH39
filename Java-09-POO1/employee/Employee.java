package org.generation.employee;

public class Employee {
	
	// 1. Declarar atributos
	String nombre;
	String apellido;
	int edad;
	double salario;
	String puesto;
	
	// 2. Método constructor, no retorna, recibe argumentos que corresponden a los atributos y estos se guardan con la palabra reservada this
	//Atajo para crear constructor. Click derecho en la clase > Source > Generate constructor using Fields > Generate
	public Employee(String nombre, String apellido, int edad, double salario, String puesto) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.salario = salario;
		this.puesto = puesto;
	}
	
	// 3. Métodos de comportamiento
	public void trabajar() {
		System.out.println("Estoy trabajando");
	}
	
	public void calcularSalario() {
		System.out.println("El salario es de $" + this.salario);
	}

	public void informacion() {
		System.out.println("Nombre " + this.nombre + ", Apellido " + this.apellido + ", edad " + this.edad + ", puesto " + this.puesto);
	}
	
	
	// 4. Métodos para acceder y modificar el objeto (getters y setter)
	//Atajo para crear getters y setters. Click derecho en la clase > Source > Generate getters y setters > Generate
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}

	public String getPuesto() {
		return puesto;
	}

	public void setPuesto(String puesto) {
		this.puesto = puesto;
	}

	// 5. Método para leer el objeto: toString con anotación Override
	//Atajo para crear toString. Click derecho en la clase > Source > Generate toString > Generate
	@Override
	public String toString() {
		return "Employee [nombre=" + nombre + 
				", apellido=" + apellido + 
				", edad=" + edad + 
				", salario=" + salario + 
				", puesto=" + puesto + 
				"]";
	}

}
