/*class: La clase es como una plantilla-molde con el que podemos crear un objeto 
constructor: Es una caracteristica que tiene las clases, es una funcion obligatoria que nos va a ayudar a construit el objeto. El constructor va a contener las propiedades o parametros de nuestra clase 
this.:Se refiere al objeto que estamos creando
Metodo : Se refiere a lo que puede hacer nuestro objeto 
Instanciacion: Cuando se finalixa todo este proceso tenemos la clase instanciada (materializada) (new)
Atributo : Es una caracteristica o propiedad asociado a un objeto
Abstraccion : Se basa en reducir al objeto, es decir que sea lo menos complejo posible 
Herencia : Se refiere a que cuando creamos una clase, va a tomar todo lo que tiene esa clase y se lo va a "heredar" (pasar) a la siguiente clase (subclase)
Polimorfismo : Tener instancias de clases diferentes, pero responden al mismo metodo pero de forma diferente. Como un objeto se comporta de forma distinta ante el mismo metodo
 */




// class animal {  
//     constructor(especie, color, edad) {
//         this.species = especie;
//         this.color = color;
//         this.age = edad;
//         this.desc = `Soy un ${this.species}, soy de ${this.color} y tengo ${this.age}`
//     }
//     verDescripcion(){
//         console.log(this.desc);

//     }
// }


// let perro = new animal("Perro", 3, "negro");
// let conejo = new animal("Conejo", 1, "gris");
// let gato = new animal("Gato", 7, "negro");

// // console.log(perro);
// // console.log(gato);
// // console.log(conejo);

// perro.verDescripcion();
// conejo.verDescripcion();
// gato.verDescripcion();


class ch39 {
    constructor(nombre, apellido, email, telefono) {
        this.name = nombre;
        this.lastName = apellido;
        this.email = email;
        this.telephone = telefono;
        this.info = `Hola soy ${this.name} ${this.lastName}, mi email es ${this.email} y mi cel es ${this.telephone}`

    }
    infoIntegrantes() {
        console.log(this.info);
    }

    organizadores() {
        if (this.name == "Gabriela") {
            console.log("Eres organizadora");
        } else if (this.name == "Maara") {
            console.log("Organizadora 2");
        } else if (this.name == "Daniel") {
            console.log("Eres organizador");
        } else if (this.name == "Fernanda") {
            console.log("Organizador 4");
        } else {
            console.log("No eres administradorx");

        }

    }
}

class participante extends ch39 {
    constructor(nombre, apellido, email, telefono, edad) {
        super(nombre, apellido, email, telefono);
        this.age = edad;
    }
    canvas(){
        alert("Terminaste e ejercicio");
    }
}






    const int1 = new ch39("Gabriela", "Cortes", "gaby@mail.com", 5512639852);
    const int2 = new ch39("Daniel", "Maldnado", "dani@gmail.com", 5578451265);
    const int3 = new ch39("Maara", "Lomeli", "maara@gmail.com", 5512874565);
    const int4 = new ch39("Fernanda", "Ramos", "fer@gmail.com", 5541213256);
    const int5 = new ch39("Andy", "Garibaldi", "andy@gmail.com", 5578451267, 24);
    const int6 = new participante("Javier", "Cadena", "javi@gmail.com", 5512874575, 25);
    const int7 = new ch39("Lizbeth", "Lopez", "liz@gmail.com", 5541213756, 23);

int6.canvas();
int2.infoIntegrantes();
int7.canvas();