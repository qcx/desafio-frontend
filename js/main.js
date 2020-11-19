const profile = document.getElementById('perfil');
const reposList = document.getElementById('listar-repositorios');
const starredList = document.getElementById('listar-favoritos');
const userUrl = 'https://api.github.com/users/DanVilela'
const repos_url = 'https://api.github.com/users/DanVilela/repos'
const starred_url = 'https://api.github.com/users/DanVilela/starred'

async function getProfile() {
  try {
    const response = await fetch(userUrl)
    const data = await response.json()
    renderFields(data)
  } catch(error){
    console.log(error)
  }
}

const renderFields = data => {
  const { name, avatar_url, html_url, public_repos, followers, following } = data

  profile.innerHTML = `
  <div id="perfil-qcx">
  <h3>${name}</h3>
  <img src="${avatar_url}" alt="imagem Qconcursos">
  <a href="${html_url}" target="blank">Visitar perfil</a>
  </div>
  
  <div id="informacoes-qcx">
  <ul>
  <li>Repositórios: ${public_repos} </li>
  <li>Seguidores: ${followers}</li>
  <li>Seguindo: ${following}</li>
  </ul>
  
  <div class="btn-repositorio">
  <input id="btn-left" type="button" value="Ver Repositórios" onclick="btnShowListRepo(repos_url,reposList)">
  <input id="btn-right" type="button" value="Ver Favoritos" onclick="btnShowListStarred(starred_url,starredList)">
  </div>
  `
}

async function getRepos(url,element) {
  try {
    const responseRepos = await fetch(url)
    const repos = await responseRepos.json()
    renderReposByList(repos,element)
  } catch(error) {
    console.log(error)
  }
}

const renderReposByList = (repos,element) => {
  
  if (element === reposList) {
    element.innerHTML = '<h4>Lista dos Repositórios</h4>' 
  } else { 
    element.innerHTML = '<h4>Lista dos Favoritos</h4>'
  }

  for(i=0; i<repos.length; i++) {
    element.innerHTML += `
    <ul>
      <li><a href="https://github.com/DanVilela/${repos[i]['name']}">${repos[i]['name']}</a></li> 
    </ul>
    `
  }
}

const displayList = element => {
  if(element.style.display == 'block') return element.style.display = 'none'


  if(element === reposList) {
    reposList.style.display = 'block'
    starredList.style.display = 'none'
  } else { 
    starredList.style.display = 'block' 
    reposList.style.display = 'none' 
  }
}

function btnShowListRepo(repo,element) {
  displayList(element)
  getRepos(repo,element)
}

function btnShowListStarred(repo,element) {
  displayList(element)
  getRepos(repo,element)
}
getProfile();

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
