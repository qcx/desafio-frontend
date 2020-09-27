/*
    Teste Desenvolvedor Front End QConcursos.com
    Script Menu Mobile
    Author Name: Maychon Douglas
    @maychondouglas
    27/09/2020
*/

const botaoMenu = document.querySelector(".menu-mobile-botao");
const minhaCheckBox = document.querySelector("#check");
const menuMobileDiv = document.querySelector(".main-menu");
const topBar = document.querySelector('.top-bar');



botaoMenu.addEventListener('change', function(){
    if(minhaCheckBox.checked){
        menuMobileDiv.style.right = "0";
        botaoMenu.style.position = "fixed";
        botaoMenu.classList.add('botao-menu-deslizado');

    }else{
        fecharMenu();
        
    }
});

function  fecharMenu(){
    menuMobileDiv.style.right = "-50%";
    minhaCheckBox.checked = false;
    botaoMenu.style.position = "absolute";
    botaoMenu.classList.remove('botao-menu-deslizado');
}

function topbarScroll(){

        if(window.scrollY > 50){
            topBar.classList.add('top-bar-scroll')
        }else{
            topBar.classList.remove('top-bar-scroll')
        }
    
}

window.onscroll = topbarScroll;
    
