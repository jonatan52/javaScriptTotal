let ancho = 4;
let alto = 3;

loopExterno:
for(y = 1; y<alto; y++){
    for(x = 1; x<ancho; x++){
        console.log(y + "." + x );
        if(y==2 && x==2){
            break loopExterno;
        }
    }
}