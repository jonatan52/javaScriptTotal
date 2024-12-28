//Clase Animal
class Animal{
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion(){
        return(`Nombre:${this.nombre}  Peso:${this.peso}kg  Edad:${this.edad}`);
    }
}

class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;

    }

    informacion(){
    return(`Nombre:${this.nombre} Peso:${this.peso}kg  Edad:${this.edad}  Raza:${this.raza} `);
    }

}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo = sexo;

    }

    informacion(){
        return(`Nombre:${this.nombre}  Peso:${this.peso}kg  Edad:${this.edad}  Sexo:${this.sexo} `);
        }

}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color = color;

    }

    informacion(){
        return(`Nombre:${this.nombre} Peso:${this.peso}kg Edad:${this.edad} Color:${this.color} `);
        }

}

let animales = []
//instancias
let perro1 = new Perro('Toby', '25', 3, 'Fespuder');
let gatoo1 = new Gato('Mishi', '15', 1, 'Macho' );
let conejo1 = new Conejo('bug', '25', 3, 'Blanco');

animales.push(perro1,gatoo1,conejo1);
let boton = document.querySelector('#botonMostrar')
//let listaAnimales = document.getElementById('lista');
let listaAnimales = document.querySelector('#tbody')

function mostrarAnimales(){
    
    for(let animal of animales){
        let elementoTr= document.createElement('tr')
        elementoTr.innerHTML=`
        <td>${animal.nombre}</td>
        <td>${animal.peso}</td>
        <td>${animal.edad}</td>
        <td>${[animal.raza, animal.sexo, animal.color]}</td>
        `
        listaAnimales.appendChild(elementoTr)

        console.log(listaAnimales)
 
       
    }
    

}

boton.addEventListener('click', mostrarAnimales)