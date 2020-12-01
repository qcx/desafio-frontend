import { githubUrl, githubAvatarUrl } from "../../data/constants";
import styles from "./avatar.scss";

const templateElement = document.createElement("template");

function createStyle() {
  const style = document.createElement("style");
  style.textContent = styles;
  return style;
}

function createTemplate() {
  templateElement.innerHTML = `
	<div>
		<img src="${githubAvatarUrl}" alt="Avatar" />
		<div>
			<a href="${githubUrl}" target="_blank">VISITAR PERFIL</a>
		</div>
	</div>
`;
  return templateElement.content.cloneNode(true);
}

class Avatar extends HTMLElement {
  constructor() {
    super();
    const style = createStyle();
    const template = createTemplate();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template);
  }
}

customElements.define("c-avatar", Avatar);
export default Avatar;
