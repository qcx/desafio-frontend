//Variáveis globais utilizadas por funções diversas-----------------------------
const profileContainer = document.querySelector('#show-profile')
const profileShowRepositories = document.querySelector('#show-repositories')
const profileShowFavorities = document.querySelector('#show-favorities')
const profilenotfoundContainer = document.querySelector('#profilenotfound')
const background = document.querySelector('.show-totalInfo').classList
background["value"] = "show-totalInfoInicial"
const api = `https://api.github.com/users/`

//Buscando o perfil do usuário com chamada em outras funções--------------------
const getProfile = async (user) => {
  const responseProfile = await fetch(api + user)  
  if(responseProfile["status"] === 404){    
      return "not found"
  }
  return responseProfile.json()  
}

//Buscando repositórios---------------------------------------------------------
const getRepositories = async (user) => {
  const profile = await getProfile(user)
  const responseRepositories = await fetch(profile["repos_url"])
  const listRepositories = await responseRepositories.json()
  const nameRepositories = listRepositories.map(item => item.name)
  return nameRepositories
}

//Buscando favoritos------------------------------------------------------------
const getFavorities = async (user) => {
  const responseStarred = await fetch(`${api}${user}/starred`)
  const listStarred = await responseStarred.json()
  const nameStarred = listStarred.map(item => item.name)
  return nameStarred
}

//Campo de busca de usuários com chamada imediata de função---------------------
const searchProfile = (() => {  
  const searchInput = document.querySelector('#search')
  const emptyContainer = document.querySelector('#formEmpty')
  form.addEventListener('submit', event => {
    event.preventDefault()
    const searchTerm = searchInput.value.trim()

    /*Abaixo ocorre a limpeza de dados do DOM.A cada nova busca, o display na tela 
    do DOM é eliminado, dando lugar a novos dados buscados*/
    profileContainer.innerHTML = ''
    profileShowRepositories.innerHTML = ''
    profileShowFavorities.innerHTML = ''
    emptyContainer.innerHTML = ''
    profilenotfoundContainer.innerHTML = ''
    if(!searchTerm){
      background["value"] = "show-totalInfoInicial"
      emptyContainer.innerHTML = `
        <div class="warning-message">Digite um nome válido.</div>
      `
      return
    }

    /*Caso o nome buscado exista, as funções abaixo irão exibir o display com informações*/
    addProfileInDOM(searchTerm) 
    addRepositoriesInDOM(searchTerm)
    addFavoritiesInDOM(searchTerm)
    searchInput.value = ''
  })
})()

//Adicionando o display principal de perfil com foto ao DOM---------------------
const addProfileInDOM = async (user) => {  
  const profile = await getProfile(user)  
  if(profile === 'not found'){
    background["value"] = "show-totalInfoInicial"
    profilenotfoundContainer.innerHTML += `
        <div class="warning-message">Perfil não encontrado.</div>
      `
      return
  }
  background["value"] = "show-totalInfo" 
  
  const profileTemplate = `    
    <div class="profile">
      <img src="${profile["avatar_url"]}" class="avatar"/>
      <a href="${profile["html_url"]}" target="_blank" class="visit-profile">
        Visitar Perfil
      </a>
      <div class="repo">
        <div class="repo-number">REPOSITÓRIOS: ${profile["public_repos"]}</div>
        <div class="followers">SEGUIDORES: ${profile["followers"]}</div>
        <div class="following">SEGUINDO: ${profile["following"]}</div>
      </div>
      <div class="repo-button">
        <input type="button" id="repo-list" onclick="toggleRepo()" value="ESCONDER REPOSITÓRIO"/>          
        <input type="button" id="repo-starred" onclick="toggleFav()" href="#show-favorities" value="ESCONDER FAVORITOS"/>      
      </div>
    </div>  
  `  
  profileContainer.innerHTML += profileTemplate
}

//Adicionando o display de repositórios ao DOM--------------------------------------------------------------------------*/
const addRepositoriesInDOM = async (user) => {  
  const repositories = await getRepositories(user)
    let showRepositoriesTemplate = []
    let contadorRep = 0
    for(item of repositories){   
      if(contadorRep % 2 === 0){
        color = "itemRepositories1"
        contadorRep += 1
      }else{
        color = "itemRepositories2"
        contadorRep += 1
      }
      showRepositoriesTemplate +=`<div class=${color}>${item}</div>`
    } 

  profileShowRepositories.innerHTML += `
    <div class="profileShowRepositories">
      <div class="titleListRepositories">LISTA DE REPOSITÓRIO</div>
      ${showRepositoriesTemplate}
    </div>
  `
}

//Adicionando o display de favoritos ao DOM-------------------------------------
const addFavoritiesInDOM = async (user) => {  
  const starred = await getFavorities(user)
    let showFavoritiesTemplate = []
    let contadorFav = 0;
      for(item of starred){  
        if(contadorFav % 2 === 0){
          color = "itemRepositories1"
          contadorFav += 1
        }else{
          color = "itemRepositories2"
          contadorFav += 1
        }  
        showFavoritiesTemplate +=`<div class=${color}>${item}</div>`
      } 

  profileShowFavorities.innerHTML += `
    <div class="profileShowFavorities">
      <div class="titleListFavorities">LISTA DE FAVORITOS</div>
      ${showFavoritiesTemplate}
    </div>
  `   
}

/*Função para alternância entre mostrar e não mostrar os repositórios-----------
Chamada na funçao addProfileInDOM*/
let flagRepo = 1
const toggleRepo = () => {      
  if(flagRepo === 1){
    document.getElementById('show-repositories').style.display='none'
    document.getElementById('repo-list').value = 'VER REPOSITÓRIO'
    flagRepo = 0      
  }else{      
    document.getElementById('show-repositories').style.display='block'      
    document.getElementById('repo-list').value = 'ESCONDER REPOSITÓRIO'
    flagRepo = 1
  }
}

/*Função para alternância entre mostrar e não mostrar os favoritos--------------
Chamada na funçao addProfileInDOM*/
let flagFav = 1
const toggleFav = () => {       
  if(flagFav === 1){
    document.getElementById('show-favorities').style.display='none'
    document.getElementById('repo-starred').value = 'VER FAVORITOS'
    flagFav = 0
  }else{
    document.getElementById('show-favorities').style.display='block'
    document.getElementById('repo-starred').value = 'ESCONDER FAVORITOS'
    flagFav = 1
  }
}














