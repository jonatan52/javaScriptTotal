function multiplicar(){
    //Obtener numero
    let elementoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);

    // Obtener la tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    //Producir y mostrar resultados
    for(i=1; i<=10; i++){

        //Calcular el resultado
        let numeroResultado = numeroTabla * i;

        // Armar string con resultado
        let textoResultado = numeroTabla + " X " + i + " = " + numeroResultado;

        //Crear un elemento de la lsita
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista); 
        
    
        
    }
    
}  






// function recargar(){
//     let recargarTabla = document.getElementById("mostrarTablas");
//     document.location.update();
// }