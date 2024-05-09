package org.generation.employee;

public interface Trabajador {
	//Aquí van a vivir los métodos abstractos que quiero implementar en otras clases. Al ser abstractos no necesitan un cuerpo de método
	public abstract void calcularSalario();
	
	//Para implementar esta interface en cualquier clase, debemos utilizar la palabra reservada implements y el nombre de la interface
}
