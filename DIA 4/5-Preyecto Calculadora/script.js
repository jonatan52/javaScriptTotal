//Funcion para mostrar resultado
function mostrarResultado(resultado){
    document.getElementById("resultado").value = resultado;
}


//Funcion suma
function suma(){
    let num1 = +document.getElementById("numUno").value;
    let num2 = +document.getElementById("numDos").value;
    
    mostrarResultado(num1 + num2);
}

//Funcion resta
function resta(){
    let num1 = +document.getElementById("numUno").value;
    let num2 = +document.getElementById("numDos").value;    
    mostrarResultado(num1 - num2);
}

//Funcion multiplicacion
function multiplicacion(){
    let num1 = +document.getElementById("numUno").value;
    let num2 = +document.getElementById("numDos").value;    
    mostrarResultado(num1 * num2);
}

//Funcion division
function dividir(){
    let num1 = +document.getElementById("numUno").value;
    let num2 = +document.getElementById("numDos").value;    
    mostrarResultado(num1 / num2);
}

//Funcion raiz cuadrada
function raizCuadrada(num){
    let raiz = Math.sqrt(num) 
    return raiz;
}

//Funcion valor absoluto
function valorAbsoluto(num){
    let absoluto = Math.abs(num);
    return absoluto;
}

//Funcion redondeo Abajo
function redondeoAbajo(){
    let redondearAbajo = Math.floor();

    return redondearAbajo;
}

//Funcion redondeo Arriba
function redondeoArriba(){
    let redondearArriba = Math.ceil();

    return redondearArriba;
}


//Funcion un numero aleatorio
function elementoRandon(){
    let randon = Math.random();
}

//Funcion para redondear 
function redondear(){
    let randon = Math.round();
}
