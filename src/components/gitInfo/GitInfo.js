import { githubUrl } from "../../data/constants";
import styles from "./gitInfo.scss";

const templateElement = document.createElement("template");

function createStyle() {
  const style = document.createElement("style");
  style.textContent = styles;
  return style;
}

function createTemplate(repositorios, seguidores, seguindo) {
  templateElement.innerHTML = `
		<ul>
			<li>Repositórios: <span>${repositorios.length}</span></li>
			<li>Seguidores: <span>${seguidores.length}</span></li>
			<li>Seguindo: <span>${seguindo.length}</span></li>
		</ul>
		<div>
			<a href="${githubUrl}?tab=repositories" target="_blank" class="button btn-link-github">VER REPOSITÓRIOS</a>
			<a href="${githubUrl}?tab=stars" target="_blank" class="button btn-link-github">VER FAVORITOS</a>
		</div>
	`;
  return templateElement.content.cloneNode(true);
}

class GitInfo extends HTMLElement {
  constructor() {
    super();
    const style = createStyle();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
  }

  set data({ repositorios, seguidores, seguindo }) {
    const template = createTemplate(repositorios, seguidores, seguindo);
    this.shadowRoot.appendChild(template);
  }
}

customElements.define("c-git-info", GitInfo);
export default GitInfo;
