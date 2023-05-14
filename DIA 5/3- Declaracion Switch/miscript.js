function consultarPrecio(){
    let elementoRespuesta = document.getElementById("textoPrecio");

    let elementoFruta = document.getElementById("numeroFruta")

    let fruta = elementoFruta.value;

    switch(fruta){
        case "1" : 
        elementoRespuesta.textContent = "$ 8.45";
        break;

        case "2" : 
        elementoRespuesta.textContent = "$ 7.45";
        break;

        case "3" : 
        elementoRespuesta.textContent = "$ 3.20";
        break;

        case "4" : 
        elementoRespuesta.textContent = "$ 8.60";
        break;

        case "5" : 
        elementoRespuesta.textContent = "$ 10.45";
        break;


    }
}