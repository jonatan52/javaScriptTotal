function crearTienda(contenedorID, min, cantidadTiendas){
    // Encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorID);

    // loop para crear tantas tienda como se pidan
    for(let conteoTiendas = 1; conteoTiendas<=cantidadTiendas; conteoTiendas++){
        //Crear el texto de label para poder llamar a la funcion
        let textoEtiqueta = "Tienda " + conteoTiendas;

        //Crear tiendas con la funcion crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        //Agregar el pprafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }

}

function crearParrafoTienda(textoLabel, valorMin){
    //Crear etiqueta <p>
    let elementoParrafo = document.createElement("p");

    // Crear la etiqueta label
    let elementoEtiqueta = document.createElement("label");

    elementoEtiqueta.innerText = textoLabel + ": "

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
    
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}


// document.getElementById().innerHTML
function calcular(){
    let  ventas = [];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTienda");

    for(let item of elementosVentas.children){
        let valorVenta = estraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas + 1;

    }


    let ventasTotal = sumarTotal(ventas);
    let ventaMayor = calcularVentaMayor(ventas);
    let ventaMenor = calcularventaMenor(ventas);

    let mesajeSalida = "Total Ventas:" + 
        ventasTotal ;
    //     + " Venta Mayor:" + ventaMayor + 
    //    " Venta Menor: " + ventaMenor;

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