function estraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
document.createElement
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