const user = "DanVilela";
const userUrl = `https://api.github.com/users/${user}`;
const reposUrl = `https://api.github.com/users/${user}/repos`;
const starredUrl = `https://api.github.com/users/${user}/starred`;
const profile = document.querySelector('.perfil');
const reposList = document.querySelector('.listar-repositorios');
const starredList = document.querySelector('.listar-favoritos');

const getInfo = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const renderProfile = data => {
  const { name, avatar_url, html_url, public_repos, followers, following } = data;

  profile.innerHTML = `
  <div class="perfil-repo">
  <h3>${name}</h3>
  <img src="${avatar_url}" alt="imagem Perfil">
  <a href="${html_url}" target="blank">Visitar perfil</a>
  </div>
  
  <div class="informacoes-repo">
  <ul>
  <li>Repositórios: ${public_repos} </li>
  <li>Seguidores: ${followers}</li>
  <li>Seguindo: ${following}</li>
  </ul>
  
  <div class="btn-repositorio">
  <input class="btn-left" type="button" value="Ver Repositórios" onclick="btnToggleDisplay(reposList)">
  <input class="btn-right" type="button" value="Ver Favoritos" onclick="btnToggleDisplay(starredList)">
  </div>
  `
}

const renderRepos = (repos, element) => {
  if (element === reposList) {
    element.innerHTML = '<h4>Lista dos Repositórios</h4>'
  } else {
    element.innerHTML = '<h4>Lista dos Favoritos</h4>'
  }

  for (item of repos) {
    element.innerHTML += `
    <ul>
      <li><a href="${[item.html_url]}">${[item.name]}</a></li> 
    </ul>
    `
  }
}

const btnToggleDisplay = element => {
  if (element.style.display == 'block') return element.style.display = 'none'

  if (element === reposList) {
    reposList.style.display = 'block'
    starredList.style.display = 'none'
  } else {
    starredList.style.display = 'block'
    reposList.style.display = 'none'
  }
}

const startProfile = async () => {
  try {
    const data = await getInfo(userUrl);
    const dataRepos = await getInfo(reposUrl);
    const dataStarred = await getInfo(starredUrl);
    renderProfile(data);
    renderRepos(dataRepos, reposList);
    renderRepos(dataStarred, starredList);
  } catch (error) {
    console.log(error)
  }
}
startProfile();

const btnTopFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}