function calcular(){
    let elemntoRespuetas1 = document.getElementById("respuestas1");
    let elemntoRespuetas2 = document.getElementById("respuestas2");
    let elemntoRespuetas3 = document.getElementById("respuestas3");

    let elementoEdad = document.getElementById("textoEdad");
    let edad = elementoEdad.value;

    let puedeBeber = edad >= 18;
    elemntoRespuetas1.textContent = puedeBeber;

    let puedeIngresar = edad >= 18  && edad <= 30;
    elemntoRespuetas2.textContent = puedeIngresar;

    let entradaGratis = edad == 20  || edad == 25;
    elemntoRespuetas3.textContent = entradaGratis;
}

