/****** Choose the repo ******/
let user = 'SylarK';

/****** Nav ******/
const burguer = document.querySelector('.btn');
const opcoes = document.querySelectorAll('.opcoes');

/****** Output ******/
const outRepositorios = document.querySelector('#repositorios');
const outSeguidores = document.querySelector('#seguidores');
const outSeguindo = document.querySelector('#seguindo');
const link = document.querySelector('#ref-link');
const imgProfile = document.querySelector('#imagem');

/****** Table ******/
const tableData = document.querySelector('#table-data');
const boxRepositorio = document.querySelector('.box-repo');

const btnRepositorio = document.querySelector('#btnRepositorio');
const btnFavorito = document.querySelector('#btnFavorito');

/****** Variables ******/
let dataRepo = [];
let dataFavo = [];
let variavel = null;

/****** Code ******/

window.addEventListener('load', () => {
  listenBurguer();
  listenButtons();
  doFetchDataGit();
  doFetchDataRepo();
  doFetchDataFavo();
});

function listenBurguer() {
  burguer.addEventListener('click', () => {
    opcoes.forEach((opcao) => {
      opcao.classList.toggle('mostrar');
      //console.log(opcao);
    });
  });
}

function listenButtons() {
  btnRepositorio.addEventListener('click', () => {
    renderTable(dataRepo, boxRepositorio);
  });
  btnFavorito.addEventListener('click', () => {
    renderTable(dataFavo, boxRepositorio);
  });
}

function printData(data) {
  outRepositorios.innerHTML = data.public_repos;
  outSeguidores.innerHTML = data.followers;
  outSeguindo.innerHTML = data.following;

  imgProfile.setAttribute('src', data.avatar_url);
  imgProfile.setAttribute('title', data.name);
  link.setAttribute('href', data.html_url);
}

async function doFetchDataGit() {
  try {
    const res = await fetch('https://api.github.com/users/'+user);
    const json = await res.json();
    printData(json);
    /* console.log(json); */
  } catch (err) {
    console.log('Lucas, houve um erro na requisição ao Github/Users.');
    console.log(`Log -> ${err}`);
  }
}

async function doFetchDataRepo() {
  try {
    const res = await fetch('https://api.github.com/users/'+ user +'/repos');
    const json = await res.json();
    variavel = json;
    dataRepo = json.map((data) => {
      const { id, name, html_url } = data;

      return {
        id,
        name,
        html_url,
      };
    });
    /* console.log(json); */
  } catch (err) {
    console.log('Lucas, houve um erro na requisição ao Github/repos.');
    console.log(`Log -> ${err}`);
  }
}

async function doFetchDataFavo() {
  try {
    const res = await fetch('https://api.github.com/users/'+ user +'/starred');
    const json = await res.json();
    variavel = json;
    dataFavo = json.map((data) => {
      const { id, name, html_url } = data;

      return {
        id,
        name,
        html_url,
      };
    });
    /* console.log(json); */
  } catch (err) {
    console.log('Lucas, houve um erro na requisição ao Github/starred.');
    console.log(`Log -> ${err}`);
  }
}

function renderTable(repositorio, box) {
  let dataHTML = `
  <thead>
    <tr>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
  `;

  repositorio.forEach((data) => {
    const { id, name, html_url } = data;

    const saveData = `
    <tr>
      <td id="${id}"><a href="${html_url}">${name}</a></td>
    </tr>
    `;

    dataHTML += saveData;
  });

  dataHTML += '</tbody>';
  tableData.innerHTML = dataHTML;
  boxRepositorio.style.display = 'block';
}
