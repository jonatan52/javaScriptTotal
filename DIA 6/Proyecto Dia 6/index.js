// let arrayNota = [4.5, 5.2, 3.5,3.2]
// for(let nota of arrayNota){
//    // let suma = nota+=nota;
//   console.log(nota)
    
// }



function promedio(){
   let nota1 = parseInt(document.querySelector("#nota1").value)
   console.log(nota1)
   
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
   
  document.querySelector("#NotaAlta").innerHTML=`<span>${parseInt(notaMax)}</span>`
  
}

function aplazos(){
   promedio()
   if(promedio.promedioNota < 4){
      document.querySelector("#Aplazos").innerHTML=`<span>Aplazos</span>`
   }
  
   
}