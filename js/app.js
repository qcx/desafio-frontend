/*
    Teste Desenvolvedor Front End QConcursos.com
    Script Consumo API Github
    Author Name: Maychon Douglas
    @maychondouglas
    27/09/2020
*/

const username = `maychondouglas`;
const user_url = `https://api.github.com/users/${username}`;
const repos_url = `https://api.github.com/users/${username}/repos`;
const favorites_url = `https://api.github.com/users/${username}/starred`;

/*Para alterar o DOM*/
const profileLink = document.querySelector('.profile-link')
const userPicture = document.querySelector('.user-picture');
const userNumberRepos = document.querySelector('.repositories');
const userNumberFollowers = document.querySelector('.followers');
const userFollowing = document.querySelector('.following');
const listRepos = document.querySelector('.respositories-list');
const listReposSection = document.querySelector('#repos');
const listFavorites = document.querySelector('.favorites-list');
const listFavoritesSection = document.querySelector('#reposFavoritos');

/*Botões de Controle*/
const verRepos = document.querySelector('.ver-repos');
const verFavoritos = document.querySelector('.ver-favoritos');

async function  getData(url){
    try{
        let request = await fetch(url);
    
        let response = await request.json();
        
        var corMsg;
        if(request.ok){
            return response;
        }else{
            return null
        }
        
        }catch(error){
            console.log(error);
        }
}
async function loadDataUser(){
    let result = await getData(user_url);
    
    if(result){
        userNumberRepos.innerHTML = result.public_repos;
        userNumberFollowers.innerHTML = result.followers;
        userFollowing.innerHTML = result.following;
        userPicture.setAttribute('src', result.avatar_url);
        profileLink.setAttribute('href', result.html_url);
    }else{
        userNumberRepos.innerHTML = "indisponível";
        userNumberFollowers.innerHTML = "indisponível";
        userFollowing.innerHTML = "indisponível";
    }
    
}

async function loadRepos(){
    let result = await getData(repos_url);
    listRepos.innerHTML = "";

    if(result){
        result.forEach(element => {
            let a = document.createElement('a');
            a.setAttribute('href', element.html_url);
            a.innerText = element.name;
    
            let li = document.createElement('li');
            li.appendChild(a);
            listRepos.appendChild(li);
        });
    }else{
        let li = document.createElement('li');
        li.innerHTML = "Dados Indisponíveis. Tente mais tarde...";
        listRepos.appendChild(li);
    }

}

async function loadFavorites(){
    let result = await getData(favorites_url);
    listFavorites.innerHTML = "";

    if(result){
        result.forEach(element => {
            let a = document.createElement('a');
            a.innerHTML = element.full_name;
            a.setAttribute('href', element.html_url);
            
    
            let li = document.createElement('li');
            li.appendChild(a);
            listFavorites.appendChild(li);
        });
    }else{
        let li = document.createElement('li');
        li.innerHTML = "Dados Indisponíveis. Tente mais tarde...";
        listFavorites.appendChild(li);
    }
    
}

/*
    O carregamento do conteúdo buscado na API do github é realizado logo 
    depois do carregamento do DOM.

    A lista de repositórios e a lista repositórios favoritos ficaram 
    visíveis somente quando clicado no respectivo botão, porém já foram carregados na inicialização
*/

window.addEventListener('load', function(){
    loadDataUser();
    loadRepos();
    loadFavorites();
});

verRepos.addEventListener('click', function(){
    listFavoritesSection.classList.remove('show');
    listFavoritesSection.classList.add('hide');
    listReposSection.classList.add('show');
    listReposSection.classList.remove('hide');
});

verFavoritos.addEventListener('click', function(){
    listReposSection.classList.remove('show');
    listReposSection.classList.add('hide');
    listFavoritesSection.classList.add('show');
    listFavoritesSection.classList.remove('hide');
})
