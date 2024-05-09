package org.generation.employee;

public class EmployeeMain {
	public static void main(String[] args) {
		//Instanciar en método main 
		Employee daniel = new Employee("Daniel", "Maldonado", 37, 2000d, "Instructor");
		Employee erick = new Employee("Erick", "Ramirez", 22, 10999.0d, "Tester QA");
		Employee javier = new Employee("Javier", "Cadena", 31, 6122.33d, "Data Analyst");
		Employee lizeth = new Employee("Lizeth", "López", 25, 25837.12d, "DevOps");
		
		System.out.println(daniel);
		System.out.println(erick);
		System.out.println(javier);
		System.out.println(lizeth);
		
		//Invocando métodos definidos a nuestros objetos
		erick.trabajar();
		javier.informacion();
		lizeth.calcularSalario();
		
		//Utilizar información de los objetos (getters)
		System.out.println(daniel.getNombre() + " " + daniel.getApellido() + " trabaja como " + daniel.getPuesto());
		System.out.println(javier.getNombre() + " " + javier.getApellido() + " tiene un salario base de $" + javier.getSalario() + " pero se le incrementaron $2000, quedando su salario en $" + (javier.getSalario() + 2000));
		
		javier.calcularSalario(); //Output: aparece el mismo salario, no hubo modificación 
		
		//Modificar información de los objetos (setters)
		double nuevoSalario = javier.getSalario() + 2000;
		javier.setSalario(nuevoSalario);
		
		javier.calcularSalario();
		
	}
}
