const btnMenuBar = document.querySelector("#menu-bar");
const closeMenuBar = document.querySelector("#close-menu");
const menu = document.querySelector("#container-menu-bar");

btnMenuBar.addEventListener("click", exibirMenu);
closeMenuBar.addEventListener("click", fecharMenu);

function exibirMenu(){
    menu.style.display = "flex";
    document.body.style.overflow = "hidden";
    menu.style.animation = "exibirMenu 1000ms forwards";
}

function fecharMenu(){
    menu.style.display = "none";
    document.body.style.overflow = "scroll";
}

// --------------------abrir lacuna associados
const liAssociados = document.querySelector("#associados");
const divSubMenu = document.querySelector("#associados-subMenu");
const placeIcon = document.querySelector("#icon-place");

liAssociados.addEventListener("click", exibirSubMenu);

function exibirSubMenu(){
    let displayDiv = divSubMenu.style.display;

    if(displayDiv == "none"){
        divSubMenu.style.display = "block";
        placeIcon.children[0].remove();
        placeIcon.innerHTML = '<i class="fa fa-angle-up" aria-hidden="true"></i>';
    } else{
        divSubMenu.style.display = "none";
        placeIcon.children[0].remove();
        placeIcon.innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>';
    }
}