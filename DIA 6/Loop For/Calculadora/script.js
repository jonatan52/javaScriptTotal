// function multiplicar(){
//     //Obtener numero
//     let elementoTabla = document.getElementById("textoTabla");
//     let textoNumeroTabla = elementoTabla.value;
//     let numeroTabla = Number(textoNumeroTabla);

//     // Obtener la tabla
//     let elementoTablaMultiplicar = document.getElementById("listaTabla");

//     //Producir y mostrar resultados
//     for(i=1; i<=10; i++){

//         //Calcular el resultado
//         let numeroResultado = numeroTabla * i;

//         // Armar string con resultado
//         let textoResultado = numeroTabla + " X " + i + " = " + numeroResultado;

//         //Crear un elemento de la lsita
//         let itemLista = document.createElement("li");
//         itemLista.innerText = textoResultado;
//         elementoTablaMultiplicar.appendChild(itemLista); 
        
//     }
//     acualizar();

    
   
// }  

// multiplicar.reset();

// function recargar(){
//     //let recargarTabla = document.getElementById("listaTabla").value;
//     document.location.reload("");
// }
// let inpu = document.querySelector("#textoTabla");
// let numero = inpu.value;



function multiplicar(){
    let input = document.querySelector("#textoTabla");
    let numero = parseInt(input.value);

        for(let i=1; i<11; i++){
            document.querySelector("#listaTabla").innerHTML+=`
            <li>
            ${(actilazarTabla())} x ${i} = ${(actilazarTabla()) * i}
            </li>
         `
        }
    }


    function actilazarTabla(){
       valor = document.querySelector("#textoTabla").addEventListener("change",multiplicar());
       valor.value;

    }
