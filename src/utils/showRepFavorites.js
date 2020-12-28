export default function showRepFavorites(repositories) {
  let title = document.querySelector("#title-list");
  let html = document.querySelector("#data-list");
  let favs = false;
  title.innerHTML = "Lista dos repositórios favoritos";
  html.innerHTML = "";
  repositories.forEach((rep) => {
    if (rep.stargazers_count > 0) {
      favs = true;

      html.innerHTML += `
            <li>
              <span>${rep.name}</span> <span>${rep.stargazers_count}<i class="fas fa-star"></i></span>
            </li>`;
    }
  });
  if (!favs) html.innerHTML = `<li>Não há repositórios favoritos!</li>`;
}
