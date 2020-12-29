export default function showProfile(item) {
  let html = document.querySelector("#list-info");
  let img = document.querySelector(".c-desafio__profile img");
  let link_profile = document.querySelector(".c-desafio__link-profile");

  html.innerHTML = `
        <li>respositórios: ${item.public_repos}</li>
        <li>seguidores: ${item.followers}</li>
        <li>Seguindo: ${item.following}</li>
      `;
  img.setAttribute("src", item.avatar_url);
  img.setAttribute("alt", `Visite o perfil de ${item.name}`);
  link_profile.setAttribute("href", item.html_url);
  link_profile.setAttribute("title", `Ir para o perfil de ${item.name}`);
}
