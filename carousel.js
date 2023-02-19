export default function carousel(containerName){

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