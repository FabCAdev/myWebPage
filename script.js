let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Java");
        habilidades[1].classList.add("HTMLCSS");
        habilidades[2].classList.add("Javascript");
        habilidades[3].classList.add("SQLServer");
        habilidades[4].classList.add("MongoDB");
        habilidades[5].classList.add("VSCode");
        habilidades[6].classList.add("NetBeans");
        habilidades[7].classList.add("Comunicacion");
        habilidades[8].classList.add("Equipo");
        habilidades[9].classList.add("Creatividad");
        habilidades[10].classList.add("Dedicacion");
        habilidades[11].classList.add("PM");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 