// import Menu from "/menu.js";
// import Carousel from "/carousel.js";

// Menu();
carousel("noticias");
carousel("eventos");


const btnMenuBar = document.querySelector("#menu-bar");
const closeMenuBar = document.querySelector("#close-menu");
const menu = document.querySelector("#container-menu-bar");

btnMenuBar.addEventListener("click", exibirMenu);
closeMenuBar.addEventListener("click", fecharMenu);

function exibirMenu(){
    menu.style.display = "flex";
    menu.style.overflow = "scroll";
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

let divSubMenuDesktop = document.querySelector("#submenu-desktop");
function exibirSubMenuDesktop(event){
    let elementoEvento = event.currentTarget;
    
    let posicaoDoElemento = elementoEvento.getBoundingClientRect();

    let posicaoX = posicaoDoElemento.x;
    let posicaoY = posicaoDoElemento.y;
    let tamanhoElemento = posicaoDoElemento.width;

    divSubMenuDesktop.style.left = posicaoX - tamanhoElemento/2 + "px";
    appendChildSubMenuDesktop(elementoEvento);
}

// function appendChildSubMenuDesktop(elemento){
//     let elementoClicado = elemento.children[0].textContent; //ASSOCIADOS
//     let subMenu;
//     divSubMenuDesktop.style.display = "flex";

//     switch (elementoClicado){
//         case "ASSOCIADOS":
//             subMenu = document.createElement("ul");

//             let li1 = document.createElement("li");
//             let li2 = document.createElement("li");
//             let li3= document.createElement("li");
//             let tagA1 = document.createElement("a");
//             let tagA2 = document.createElement("a");
//             let tagA3 = document.createElement("a");

//             li1.innerText = "Presidente";
//             tagA1.appendChild(li1);
//             subMenu.appendChild(tagA1);
//             li2.innerText = "Diretoria";
//             tagA2.appendChild(li2);
//             subMenu.appendChild(tagA2);
//             li3.innerText = "Associados";
//             tagA3.appendChild(li3);
//             subMenu.appendChild(tagA3);

//             divSubMenuDesktop.appendChild(subMenu);
//             break;
//     }
// }

function carousel(containerName){

    const container = document.querySelector(`#${containerName}`);
    const carouselContainer = container.querySelectorAll('.carousel-container');
    let carouselItems;
    let containerCirclesCarousel = container.querySelector('.circulos-carrossel');

    let btnVoltar = container.querySelector(".aside-left");
    let btnAvancar = container.querySelector(".aside-right");

    switch (containerName){
        case "noticias":
            carouselItems = container.querySelectorAll('.carousel-item');
            break;
        case "eventos":
            carouselItems = container.querySelectorAll('.carousel-item');
            break;
    }

    let currentIndex = 0;
    let translateX = 0;
    
    function slideCarousel() {
        currentIndex++;
        
        if (currentIndex > carouselItems.length - 1) {
            currentIndex = 0;
        }
        
        translateX = -currentIndex * carouselItems[0].offsetWidth;
        
        carouselContainer.forEach(item => {
            item.style.transform = `translateX(${translateX}px)`;
        });
        
        pintarCirculoAtual(currentIndex);
        
    }

    function criarCirculosCarrossel(){
        let lengthItems = carouselItems.length;
        
        for (var i = 0; i < lengthItems; i++){
            containerCirclesCarousel.innerHTML += '<i class="fa fa-circle-thin" aria-hidden="true"></i>';
        }
    
       pintarCirculoAtual(0);
    }

    function pintarCirculoAtual(posicao){

        let classeAtual = containerCirclesCarousel.children[posicao].className;
        
        let classeDaVez = classeAtual == 'fa fa-circle-thin' ? 'fa fa-circle' : 'fa fa-circle-thin'

        containerCirclesCarousel.children[posicao].className = classeDaVez;

        if (posicao == 0){
            containerCirclesCarousel.children[containerCirclesCarousel.children.length - 1].className = classeAtual;
        }else{
            containerCirclesCarousel.children[posicao - 1].className = classeAtual;
        }
        
    }

    function despintarCirculoAtual(){
        if (currentIndex == 0){
            containerCirclesCarousel.children[containerCirclesCarousel.children.length - 1].className = 'fa fa-circle-thin';
        }else{
            containerCirclesCarousel.children[currentIndex].className = 'fa fa-circle-thin';
        }
    }

    function iniciarIntervalCarrossel(){
        intervalCarousel = setInterval(slideCarousel, 3000);
    }

    
    criarCirculosCarrossel();
    let intervalCarousel;
    iniciarIntervalCarrossel();

    btnAvancar.addEventListener(`click`, () => {
        clearInterval(intervalCarousel);
        slideCarousel();
        iniciarIntervalCarrossel();
    });

    btnVoltar.addEventListener(`click`, () => {
        if (currentIndex != 0){
            clearInterval(intervalCarousel);
            despintarCirculoAtual();
            currentIndex -= 2;
            slideCarousel();
            iniciarIntervalCarrossel();
        }
    });

    return true;
}