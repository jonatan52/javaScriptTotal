function calcularLitros(){
    let kilometros = document.getElementById("textoKm");
    let textoKm = kilometros.value;
    let canKm = Number(textoKm);

    let cantLitros = canKm / 8.8;

    let resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga " + cantLitros + " Litros de combustible";

}