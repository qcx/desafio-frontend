import "../../components/cartao/Cartao";
import styles from "./desafio.scss";

const templateElement = document.createElement("template");

function createStyle() {
  const style = document.createElement("style");
  style.textContent = styles;
  return style;
}

function createTemplate() {
  templateElement.innerHTML = `
		<section>
			<header>Desafio</header>
			<c-cartao></c-cartao>
		</section>
	`;
  return templateElement.content.cloneNode(true);
}

class Desafio extends HTMLElement {
  constructor() {
    super();
    const style = createStyle();
    const template = createTemplate();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template);
  }
}

customElements.define("c-desafio", Desafio);
export default Desafio;
