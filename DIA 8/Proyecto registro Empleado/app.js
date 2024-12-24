let botonCarga = document.querySelector('#cargarEmpleado');
let botonMostrarEmpleado = document.querySelector('#mostrarEmpleado');
let empleados = [];

class Empleado {
    constructor(legajo, nombre, apellido, fecha, cargo) {
        this.legajo = legajo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha = fecha;
        this.cargo = cargo;

    }
}
//Funcion para crear un empleado
function crearEmpleado() {
    let legajoUsario = document.querySelector('#legajo').value;
    let nombreUsuario = document.querySelector('#nombre').value;
    let apellidoeUsuario = document.querySelector('#apellido').value;
    let fechaUsuario = document.querySelector('#fecha').value;
    let cargoUsuario = document.querySelector('#cargo').value;

    let empleado1 = new Empleado(legajoUsario, nombreUsuario, apellidoeUsuario, fechaUsuario, cargoUsuario);
    empleados.push(empleado1);
    alert('El empelado ha sido cargado con exito')
    limpiarInput();
}

//Funcion para mostrar un empleado
function mostrarEmpleado() {
    let empleadosInfo = empleados.map(emp =>
        `Legajo: ${emp.legajo}, Nombre: ${emp.nombre}, Apellido: ${emp.apellido}, Fecha: ${emp.fecha}, Cargo: ${emp.cargo}`
    ).join('\n');
    alert(empleadosInfo);

}

//Funcion para limpiar los input
function limpiarInput() {
    document.querySelector('#legajo').value = '';
    document.querySelector('#nombre').value = '';
    document.querySelector('#apellido').value = '';
    document.querySelector('#fecha').value = '';
    document.querySelector('#cargo').value = '';
}
botonMostrarEmpleado.addEventListener('click', mostrarEmpleado);
botonCarga.addEventListener('click', crearEmpleado)