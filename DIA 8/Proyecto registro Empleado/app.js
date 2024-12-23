let botonCarga = document.querySelector('#cargarEmpleado');
let botonMostrarEmpleado = document.querySelector('#mostrarEmpleado');

let empleados = [];

class Empleado {
    constructor(legajo, nombre, fecha, cargo) {
        this.legajo = legajo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha = fecha;
        this.cargo = cargo;

    }
}

function crearEmpleado() {
    let legajoUsario = document.querySelector('#legajo').value;
    let nombreUsuario = document.querySelector('#nombre').value;
    let apllidoeUsuario = document.querySelector('#apellido').value;
    let fechaUsuario = document.querySelector('#fecha').value;
    let cargoUsuario = document.querySelector('#cargo').value;


    let empleado1 = new Empleado(legajo, nombre, apellido, fecha, cargo);
    empleado1.legajo = legajoUsario;
    empleado1.nombre = nombreUsuario;
    empleado1.apellido = apllidoeUsuario;
    empleado1.fecha = fechaUsuario;
    empleado1.cargo = cargoUsuario;
    empleados.push(empleado1);
    alert('El empelado ha sido cargado con exito')

    console.log(empleados);
    function mostrarEmpleado() {
        for (let emp in empleados) {
            alert(`${emp}  Codigo:${empleado1.legajo} Nombre:${empleado1.nombre} Fecha:${empleado1.fecha} Cargo:${empleado1.cargo}`)
        }
    }
    
    botonMostrarEmpleado.addEventListener('click', mostrarEmpleado)
   
}
botonCarga.addEventListener('click', crearEmpleado);