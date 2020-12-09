import "../avatar/Avatar";
import "../gitInfo/GitInfo";
import { getData } from "../../data/githubRepository";
import styles from "./cartao.scss";

const templateElement = document.createElement("template");

function createStyle() {
  const style = document.createElement("style");
  style.textContent = styles;
  return style;
}

function createTemplate() {
  templateElement.innerHTML = `
		<div>
			<c-avatar></c-avatar>
			<c-git-info></c-git-info>
		</div>
	`;
  return templateElement.content.cloneNode(true);
}

class Cartao extends HTMLElement {
  constructor() {
    super();
    const style = createStyle();
    const template = createTemplate();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template);
    this.init();
  }

  async init() {
    const gitInfo = this.shadowRoot.querySelector("c-git-info");
    gitInfo.data = await getData();
  }
}

customElements.define("c-cartao", Cartao);
export default Cartao;
