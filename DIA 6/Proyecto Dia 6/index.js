
function promedio(){
   let nota1 = parseInt(document.querySelector("#nota1").value)
  
   
   let nota2 = parseInt(document.querySelector("#nota2").value)

   let nota3 = parseInt(document.querySelector("#nota3").value)

   let nota4 = parseInt(document.querySelector("#nota4").value)

   let promedioNota = parseInt((nota1 + nota2 + nota3 + nota4)/4);
   console.log(promedioNota)

    let prom = document.querySelector("#promedio").innerHTML=`<span>${parseInt(promedioNota)}</span>`
   return  prom;


}

function NotaAlta(){
   let nota1 = parseInt(document.querySelector("#nota1").value)
   
   
   let nota2 = parseInt(document.querySelector("#nota2").value)

   let nota3 = parseInt(document.querySelector("#nota3").value)

   let nota4 = parseInt(document.querySelector("#nota4").value)

   let notaMax = Math.max(nota1, nota2, nota3, nota4);
   
   not = document.querySelector("#NotaAlta").innerHTML=`<span>${parseInt(notaMax)}</span>`
   return not;
  
}

function aplazos(){
   let nota1 = parseInt(document.querySelector("#nota1").value)
   let nota2 = parseInt(document.querySelector("#nota2").value)

   let nota3 = parseInt(document.querySelector("#nota3").value)

   let nota4 = parseInt(document.querySelector("#nota4").value)

   let plazoNotas =[];

   let aplazo = "No";
    plazoNotas.push(nota1,nota2,nota3,nota4)
    console.log(plazoNotas);

    for(let nota of plazoNotas){
      if(nota < 4){
         aplazo = "Si"
         document.querySelector("#Aplazos").innerHTML=`${aplazo}`;
      }else{
         document.querySelector("#Aplazos").innerHTML=`${aplazo}`;
      }
    }

   
}