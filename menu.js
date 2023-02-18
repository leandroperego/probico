export default function Menu(){

    let home = "home";
    let institucional = "institucional";
    let eventos = "eventos";
    let noticias = "notícias";
    let associados = {nome: "associados", presidente:"presidente", diretor:"diretor", associados:"associados"};
    let contato = "contato";
    
    const listaMenu = [home, institucional, eventos, noticias, associados, contato];

    let nav = document.querySelector("#menu-desktop");
    criarMenu(nav);

    function criarMenu(locationInsert){

        let newElement_ul = document.createElement("ul");

        listaMenu.forEach((item, indice) => {
            let newElement_a = document.createElement("a"); //cria elemento a
            let newElement_li = document.createElement("li"); //cria elemento a
    
                if (typeof item == "object"){ //verificação se é object para incluir submenus

                    // li.innerText = item.nome.toUpperCase();
                    newElement_li.innerHTML = 
                    `
                        ${item.nome.toUpperCase()}
                        <span id="icon-place">
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    `;
                } else{
                    newElement_li.innerText = item.toUpperCase(); //elemento li criado insere o conteudo do item do forEach
                }
                newElement_a.appendChild(newElement_li); //insere a li dentro da tag a
                newElement_ul.appendChild(newElement_a); //insere a tag a dentro da ul
        }); //repete para cada item da lista de menus declarados
        
        locationInsert.appendChild(newElement_ul)

    }

    return true;
}