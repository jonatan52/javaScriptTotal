let marca = document.getElementById('marca');
let modelo = document.getElementById('modelo');
let color = document.getElementById('color');
let anio = document.getElementById('anio');
let titular = document.getElementById('titular');
let btn = document.getElementById('btnRegistrar');
let btnMostrar = document.getElementById('btnMostrar');
let form = document.getElementById('registroAutos');

let autosRegistrados = [];

class Auto {
    constructor(marca, modelo, color, anio, titular) {
        this.marca = marca.value;
        this.modelo = modelo.value;
        this.color = color.value;
        this.anio = anio.value;
        this.titular = titular.value;

    }

    //metodo para mostrar datos
    venderAutomovil(){
        console.log(`Se vendio el auto ${this.marca} ${this.modelo} ${this.color} ${this.anio} ${this.titular}`);
    }

    verAuto(){
        console.log(`Auto: ${this.marca} ${this.modelo} ${this.color} ${this.anio} ${this.titular}`);
    }

    encender(){
        console.log('El auto esta encendido');
    }

}

function agregarAuto(e){
    e.preventDefault();
    let auto = new Auto(marca, modelo, color, anio, titular);
    autosRegistrados.push(auto);
    alert('Auto registrado con exito');
    form.reset();
    
}

function mostrarAutos(){
    autosRegistrados.forEach(auto => {
        auto.verAuto();
    });
    
    //mostrar autos registrados en tbody
    let tbody = document.getElementById('filasAutos');
    tbody.innerHTML = '';
    autosRegistrados.forEach(auto => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${auto.marca}</td>
        <td>${auto.modelo}</td>
        <td>${auto.color}</td>
        <td>${auto.anio}</td>
        <td>${auto.titular}</td>
        `;
        tbody.appendChild(tr);
    });


    
}
console.log(autosRegistrados);
btn.addEventListener('click', agregarAuto);
btnMostrar.addEventListener('click', mostrarAutos);

