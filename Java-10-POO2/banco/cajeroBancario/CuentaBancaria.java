package org.generation.cajeroBancario;

import org.generation.exceptions.FondosInsuficientesExc;

/* Lógica del programa.
 * Trabajar con POO (atributos, métodos específicos, método del objeto, etc., encapsulamiento)
 * Métodos específicos: 
 * */

public class CuentaBancaria {
	// Atributos
	private double saldo;
	private int idCuenta;
	
	// Método constructor sin saldo, ya que no le vamos a definir un saldo inicial porque todas las cuentas inician en cero
	public CuentaBancaria(int idCuenta) {
		this.idCuenta = idCuenta;
	}
	
	// Método para ingresar dinero
	public void depositar(double monto) {
		saldo += monto;
	}
	
	// Método para retirar dinero (implementar FondosInsuficientesExc).
	// Le digo al método que debe recibir la excepción utilizando la palabra reservada throws
	public void retirar(double monto) throws FondosInsuficientesExc {
		if (monto <= saldo) {
			saldo -= monto;			
		} else {
			double faltante = monto - saldo; //El cajero te dirá cuánto dinero te hace falta para retirar esa cantidad
			throw new FondosInsuficientesExc(faltante);
		}
	}
	
	// Método para consultar saldo
	public void consultar() {
		System.out.println("Tu saldo es de $" + saldo);
	}
	
	// Métodos getters y setters
	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public int getIdCuenta() {
		return idCuenta;
	}

	public void setIdCuenta(int idCuenta) {
		this.idCuenta = idCuenta;
	}
	
}
