export default function Menu(){

    let home = "home";
    let institucional = "institucional";
    let eventos = "eventos";
    let noticias = "notícias";
    let associados = {nome: "associados", presidente:"presidente", diretor:"diretor", associados:"associados"};
    let contato = "contato";
    
    const listaMenu = [home, institucional, eventos, noticias, associados, contato];

    let nav = document.querySelector("#menu-desktop");
    criarMenu();

    function criarMenu(){

        let ul = document.createElement("ul");

        listaMenu.forEach((item, indice) => {
            let tagA = document.createElement("a");
                let li = document.createElement("li");
    
                if (typeof item == "object"){
                    // li.innerText = item.nome.toUpperCase();
                    li.innerHTML = `${item.nome.toUpperCase()}<span id="icon-place">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>`;
                } else{
                    li.innerText = item.toUpperCase();
                }
                tagA.appendChild(li);
                ul.appendChild(tagA);
        });
        
        nav.appendChild(ul)

    }

    return true;
}