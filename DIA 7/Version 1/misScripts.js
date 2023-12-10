function estraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas1;
    let ventas2; 
    let ventas3;
    let ventas4; 
    let ventas5;
    let ventas6;

    ventas1 = estraerNumeroDesdeElemento("ventasTienda1");
    ventas2 = estraerNumeroDesdeElemento("ventasTienda2");
    ventas3 = estraerNumeroDesdeElemento("ventasTienda3");
    ventas4 = estraerNumeroDesdeElemento("ventasTienda4");
    ventas5 = estraerNumeroDesdeElemento("ventasTienda5");
    ventas6 = estraerNumeroDesdeElemento("ventasTienda6");

    let ventasTotal = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;
    let mesajeSalida = "Total Ventas: " + ventasTotal;
    let elemntosSalida = document.getElementById("parrafoSalida");
    elemntosSalida.textContent = mesajeSalida;


}