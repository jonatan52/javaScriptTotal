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
function raizCuadrada(){
    let num1 = +document.getElementById("numUno").value;
    mostrarResultado(Math.sqrt(num1));
    
    
}

// potencia
function potencia(){
    let num1 = +document.getElementById("numUno").value;
    let num2 = +document.getElementById("numDos").value;
    mostrarResultado(Math.pow(num1, num2));
}

//Funcion valor absoluto
function valorAbsoluto(){
    let absoluto = +document.getElementById("numUno").value
    mostrarResultado(Math.abs(absoluto));
    
}

//Funcion redondeo Abajo
function redondeoAbajo(){
    let redondearAbajo = +document.getElementById("resultado").value
    mostrarResultado(Math.floor(redondearAbajo));

   
}

//Funcion redondeo Arriba
function redondeoArriba(){
    let redondearArriba = +document.getElementById("resultado").value
    mostrarResultado(Math.ceil(redondearArriba));

    
}


//Funcion un numero aleatorio
function elementoRandon(){
    let randon = +document.getElementById("resultado").value
    mostrarResultado(Math.random(randon));
}

//Funcion para redondear 
function redondear(){
    let rendodeo = +document.getElementById("resultado").value
    mostrarResultado(Math.round(rendodeo));
}
