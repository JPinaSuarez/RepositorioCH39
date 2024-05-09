package org.generation.main;

import org.generation.employee.Employee;

public class EmployeeMain {
	public static void main(String[] args) {
		Employee asbel = new Employee("Asbel", "Torales", 26, 15633.21d, "Front-end Dev");
		
		//System.out.println(asbel.puesto); //No me permite ingresar porque el atributo tiene un modificador protected
		//Por lo tanto utilizo el getter para poder acceder
		System.out.println(asbel.getPuesto());
	}
}
