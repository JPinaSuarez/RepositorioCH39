package org.generation.expections;

public class DivisionMain {

	//Método para dividir dos enteros
	public static int divisionEnteros(int a, int b) {
		return a / b;
	}
	
	public static void main(String[] args) {
		// 1. Si el método divisionEnteros no es static, tengo que instancia un objeto
		/*DivisionMain division = new DivisionMain();
		System.out.println(division.divisionEnteros(5, 10));*/
		
		// 2. Si no quiero instanciar objetos, tengo que declarar el método divisionEnteros como método propio de la clase (static)
		System.out.println(divisionEnteros(50, 10)); //Output: 5
		//System.out.println(divisionEnteros(50, 0));
		
		//------ Manejando Excepciones ------//
		try {
			int resultado = divisionEnteros(50, 0);
			System.out.println("El resultado de la division es " + resultado);
		} catch (ArithmeticException e) {
			System.out.println("\u001B[31mNo puedes dividir entre 0\u001B[0m");
		} finally {
			System.out.println("\u001B[32mPrograma finalizado");
		}
				
	}

}
