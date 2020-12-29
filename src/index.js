import "./scss/style.scss";
import showProfile from "./utils/showProfile";
import showRepositories from "./utils/showRepositories";
import showRepFavorites from "./utils/showRepFavorites";

// font
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons/faFacebookSquare";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

library.add(faSpinner);
library.add(faStar);
library.add(faFacebookSquare);
library.add(faLinkedin);
library.add(faGithub);
dom.watch();

const getUserModule = () =>
  import(/* webpackChunkName: "dataRepository" */ "./utils/dataRepository");

const btnListRepos = document.getElementById("list-respositories");
const btnListFav = document.getElementById("list-favorites");

// carrega perfil ao iniciar a pagina
window.addEventListener("DOMContentLoaded", () => {
  getUserModule()
    .then(({ getUser }) => {
      getUser().then((json) => {
        showProfile(json);
      });
    })
    .catch(function (err) {
      console.error("Não foi possível achar a informação", err);
    });
});

btnListRepos.addEventListener("click", () => {
  let button = document.querySelector("#list-respositories span");
  let spinner = document.querySelector("#list-respositories .fa-spinner");
  let titleList = document.querySelector(".c-desafio__title-list");
  let dataList = document.querySelector(".c-desafio__data-list");
  spinner.style.display = "inline-block";
  titleList.style.display = "none";
  dataList.style.display = "none";
  button.textContent = "Loading ...";
  getUserModule()
    .then(({ listRepositories }) => {
      listRepositories().then((json) => {
        setTimeout(() => {
          showRepositories(json);
          spinner.style.display = "none";
          titleList.style.display = "block";
          dataList.style.display = "block";
          button.textContent = "Ver Repositórios";
        }, 2500);
      });
    })
    .catch(function (err) {
      console.error("Não foi possível achar a informação", err);
    });
});

btnListFav.addEventListener("click", () => {
  let button = document.querySelector("#list-favorites span");
  let spinner = document.querySelector("#list-favorites .fa-spinner");
  let titleList = document.querySelector(".c-desafio__title-list");
  let dataList = document.querySelector(".c-desafio__data-list");
  spinner.style.display = "inline-block";
  titleList.style.display = "none";
  dataList.style.display = "none";
  button.textContent = "Loading ...";
  getUserModule().then(({ listRepositories }) => {
    listRepositories().then((json) => {
      setTimeout(() => {
        showRepFavorites(json);
        spinner.style.display = "none";
        titleList.style.display = "block";
        dataList.style.display = "block";
        button.textContent = "Ver Favoritos";
      }, 2500);
    });
  });
});
