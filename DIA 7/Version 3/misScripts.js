function crearParrafoTienda(textoLabel, valorMin){
    //Crear etiqueta <p>
    let elementoParrafo = document.createElement("p");

    // Crear la etiqueta label
    let elementoEtiqueta = document.createElement("label");

    // Conectar la etiqueta label con el input
    elementoEtiqueta.setAttribute("for", textoLabel);

    // Crear el input
    let elementoInput = document.createElement("input");

    // Establecer atributos del input
   elementoInput.setAttribute("type", "number");
   elementoInput.setAttribute("id", textoLabel);
   elementoInput.setAttribute("min", valorMin);
   elementoInput.setAttribute("value", 0);

   //agregar label e input al parrafo
   elementoParrafo.appendChild(elementoEtiqueta);
   elementoParrafo.appendChild(elementoInput);

   //Devolver el parrafo completo
   return elementoParrafo;




}

function estraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}


document.getElementById().innerHTML
function calcular(){
    let  ventas = [];
    ventas[0] = estraerNumeroDesdeElemento("ventasTienda1");
    ventas[1] = estraerNumeroDesdeElemento("ventasTienda2");
    ventas[2] = estraerNumeroDesdeElemento("ventasTienda3");
    ventas[3] = estraerNumeroDesdeElemento("ventasTienda4");
    ventas[4] = estraerNumeroDesdeElemento("ventasTienda5");
    ventas[5] = estraerNumeroDesdeElemento("ventasTienda6");


    let ventasTotal = sumarTotal(ventas);
    let ventaMayor = calcularVentaMayor(ventas);
    let ventaMenor = calcularventaMenor(ventas);

    let mesajeSalida = "Total Ventas:" + 
        ventasTotal + " Venta Mayor:" + ventaMayor + 
       " Venta Menor: " + ventaMenor;

    let elemntosSalida = document.getElementById("parrafoSalida");
    elemntosSalida.textContent = mesajeSalida;

}

function sumarTotal(array){
    let total = 0;
    for(let venta of array){
        total += venta;
       array.lengtht
    }
    return total;
}

function calcularVentaMayor(array){
    let maximo = array[0] ;
    for(let venta of array){
        if(venta > maximo){
            maximo = venta;
        }
    }
    return maximo;
}

function calcularventaMenor(array){
    let minimo = array[0];
    for(let venta of array){
        if(venta < minimo){
            minimo = venta;
        }
    }
    return minimo;
}