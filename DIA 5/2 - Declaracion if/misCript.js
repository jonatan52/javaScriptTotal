function evaluarCompra(){
    let elementoRespuestas = document.getElementById("desicion")
    let elementoprecio = document.getElementById("textoPrecio");
    let precio = elementoprecio.value;

    if (precio < 5 ){
        elementoRespuestas.textContent ="Comprar dos cartones de leche ";
    }else{
        if(precio < 8){
            elementoRespuestas.textContent ="Comprar un carton de leche ";
        }else{
            elementoRespuestas.textContent ="No comprar ";
        }
        
    }
}