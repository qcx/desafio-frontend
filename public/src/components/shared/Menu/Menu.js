const Menu = () => {

    const data = [
        {
            name: 'Mariana Mattos',
            href: '#'
        },
        {
            name: 'Home',
            href: '#home'
        },
        {
            name: 'Sobre',
            href: '#about'
        },
        {
            name: 'Desafio',
            href: '#challenge'
        }
    ]

    const Responsive = `
    <li role="Botão mobile" aria-label="Clique para acessar o menu">
        <div class='responsiveMenu'>
            <a class="responsiveBtn">
                <div class='icon'>
                    <div></div>
                    <div></div>
                <div></div>
                </div>
            </a>
        </div> 
    </li>
    `

    var sectionMenu = document.createElement('section');
    sectionMenu.classList.add('menu');
    document.body.appendChild(sectionMenu);

    var navMenu = document.createElement('nav');
    sectionMenu.appendChild(navMenu);

    var ulMenu = document.createElement('ul');
    ulMenu.classList.add('menu');
    navMenu.appendChild(ulMenu);

    var createModal = document.createElement('div');
    createModal.classList.add('modal');
    document.body.appendChild(createModal);

    var createModalDialog = document.createElement('div');
    createModalDialog.classList.add('modalDialog');
    createModal.appendChild(createModalDialog);

    var modalDialog = document.getElementsByClassName('modalDialog')[0];

    var menu = document.getElementsByClassName('menu')[1];
    let Items = ``;
    
    data.forEach(item => {
        var liItem = `
            <li>
                <a href="${item.href}">
                   ${item.name}
                </a>
            </li>
           `;
        Items += liItem;
    });

    modalDialog.innerHTML += Items;
    Items += Responsive;
    menu.innerHTML = Items;

    var sectionMenu = document.getElementsByClassName('menu')[0];

    window.onscroll = () => { 
        if (document.documentElement.scrollTop > 500) {
            sectionMenu.classList.add('show')
    
        }
        if (document.documentElement.scrollTop < 500) {
            sectionMenu.classList.remove('show')
        }
    } 

    var responsiveBtn = document.getElementsByClassName('responsiveBtn')[0];

    responsiveBtn.addEventListener('click', function() {
        var modal = document.body.getElementsByClassName('modal')[0];
        var modalDialog = document.body.getElementsByClassName('modalDialog')[0];
        modalDialog.style.display = "flex";
        modal.style.display = "flex";
    });

    var modal = document.body.getElementsByClassName('modal')[0];
    
    modal.addEventListener('click', function() {
        var modal = document.body.getElementsByClassName('modal')[0];
        var modalDialog = document.body.getElementsByClassName('modalDialog')[0];
        modal.style.display = "none";
        modalDialog.style.display = "none";
    });
};

export default Menu;
