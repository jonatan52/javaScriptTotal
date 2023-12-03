/*Loops For Of : es una declaración que ejecuta un bloque de código para 
cada elemento de un objeto iterable, como un array, un string, un set, un map, etc. 
La sintaxis del bucle for…of es la siguiente:
for (variable of iterable) {
  // codigo que se ejecuta para cada elemento del iterable
}
*/

const LIBROS = ["Don quijote", "La cenicienta", "Pulgarcito"]

for(let libro of LIBROS){
    console.log(libro)
}
