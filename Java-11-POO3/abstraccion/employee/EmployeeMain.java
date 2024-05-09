package org.generation.employee;

public class EmployeeMain {

	public static void main(String[] args) {
		Employee susana = new Employee(2023101516, "Susana", "Martinez", 12000, "Java Developer");
		Employee sergio = new Employee(2022083014, "Sergio", "Cruz", 20963.21, "Scrum master");
		Employee patricio = new Employee(2024123633, "Patricio", "Piña", 19863.33, "Java Fullstack");
		
		//Instanciar un objeto de tipo Trabajador
		Trabajador daniel = new Employee(22202232, "Daniel", "Maldonado", 3522.3, "Instructor");
		
		susana.trabajar();
		sergio.calcularSalario();
		patricio.informacion();
		daniel.calcularSalario();

	}

}
