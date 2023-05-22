function recomendar(genero) {
    let peliculas = document.getElementById("textoGenero");
    let edad = document.getElementById("edad").value;
    switch (genero) {

        case 'Drama':
            if (edad < 13) {
                peliculas.textContent = "Casablanca - ATP";

            } else if (edad < 16) {
                peliculas.textContent = "The Shawshank Redemption ";

            } else {
                peliculas.textContent = "Taxi Driver";
            }
            break;

        case 'Comedia':
            if (edad < 13) {
                peliculas.textContent = "Back to the Future - ATP";
            } else if (edad > 13) {
                peliculas.textContent = "The Truman Show";
            } else {
                peliculas.textContent = "The Wolf of Wall Street";
            }
            break;

        case 'Musical':
            if (edad < 13) {
                peliculas.textContent = "La La Land - ATP";
            } else if (edad < 16) {
                peliculas.textContent = "Les Miserables ";
            } else {
                peliculas.textContent = "The Rocky Horror Picture Show ";
            }
            break;

        case 'Crimen':
            if (edad < 13) {
                peliculas.textContent = "No hay peliculas ATP";
            } else if (edad < 16) {
                peliculas.textContent = "El secreto de sus ojos";
            } else {
                peliculas.textContent = "The Godfather ";
            }
            break;
    }



}
