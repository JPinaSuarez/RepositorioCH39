package org.generation.cajeroBancario;

import org.generation.exceptions.FondosInsuficientesExc;

/* Interacción con el usuario */

public class Cajero {

	public static void main(String[] args) {
		//Instanciar un nuevo objeto
		CuentaBancaria cuentaDaniel = new CuentaBancaria(6989);
		
		System.out.println("Ingresando $500");
		cuentaDaniel.depositar(500);
		
		cuentaDaniel.consultar(); //Output: 500
		
		System.out.println("Ingresando $1500");
		cuentaDaniel.depositar(1500);
		
		cuentaDaniel.consultar(); //Output: 2000
		
		//Retirar dinero. Para manejar la Exception debo utilizar un try-catch
		try {
			System.out.println("Retirando $500");
			cuentaDaniel.retirar(500);
			
			cuentaDaniel.consultar(); //Output: $1500
		} catch (FondosInsuficientesExc e){
			System.out.println("\u001B[31mLo siento, te falta dinero\u001B[31m");
		}
		
		//Segundo retiro por $5000
		try {
			System.out.println("\u001B[0mRetirando $5000\u001B[0m");
			cuentaDaniel.retirar(5000);
			
			cuentaDaniel.consultar();
		} catch (FondosInsuficientesExc e){
			System.out.println("\u001B[31mLo siento, te faltan\u001B[31m $" + e.getMonto());
			e.printStackTrace(); //Sigue la Exception personalizada
		} finally {
			System.out.println("\u001B[32mVuelva pronto\u001B[32m");
		}
		
		// Depositando los $3500
		System.out.println("\u001B[0mDepositando $3500\u001B[0m");
		cuentaDaniel.depositar(3500);
		
		//Reintentar retirar $5000
		try {
			System.out.println("\u001B[0mRetirando $5000\u001B[0m");
			cuentaDaniel.retirar(5000);
			
			cuentaDaniel.consultar();
		} catch (FondosInsuficientesExc e){
			System.out.println("\u001B[31mLo siento, te faltan\u001B[31m $" + e.getMonto());
		} finally {
			System.out.println("\u001B[32mVuelva pronto\u001B[32m");
		}
		
	}
}
