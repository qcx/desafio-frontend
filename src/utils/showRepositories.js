export default function showRepositories(repositories) {
  let title = document.querySelector("#title-list");
  let html = document.querySelector("#data-list");

  html.innerHTML = "";
  title.innerHTML = "Lista dos repositórios";
  repositories.forEach((rep) => {
    html.innerHTML += `
          <li>${rep.name}</li>
        `;
  });
}
