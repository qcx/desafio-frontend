import "../../components/midiaSocial/MidiaSocial";
import styles from "./rodape.scss";

const templateElement = document.createElement("template");

function createStyle() {
  const style = document.createElement("style");
  style.textContent = styles;
  return style;
}

function createTemplate() {
  templateElement.innerHTML = `
		<footer>
			Desafio Desenvolvedor Front Qconcursos.com
		</footer>
	`;
  return templateElement.content.cloneNode(true);
}

class Rodape extends HTMLElement {
  constructor() {
    super();
    const style = createStyle();
    const template = createTemplate();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template);
  }
}

customElements.define("c-rodape", Rodape);
export default Rodape;
