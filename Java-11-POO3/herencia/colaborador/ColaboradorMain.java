package org.generation.employee.colaborador;

public class ColaboradorMain {
	public static void main(String[] args) {
		Colaborador monserrat = new Colaborador(18522563, "Monserrat", "Pérez", 12366.22, "UI/UX designer", "Mkt", "Andrea Garibaldi");
		
		monserrat.informacion();
		monserrat.jefeDirecto();
		monserrat.consultarDepartamento();
	}
	
	
}
