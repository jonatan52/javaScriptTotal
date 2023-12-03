/*Loop While: evalúa antes de cada iteración del bucle. 
Si la condicion se evalúa como verdadera, se ejecuta el codigo dentro del bloque. 
Si la condicion se evalúa como falsa, el bucle termina y la ejecución continúa con la siguiente sentencia. */

let nombre;
while(nombre != "Tatan"){
    nombre = prompt("Dime mi nombre")
}
document.write(`<h1>Hola ${nombre}</h1>`)