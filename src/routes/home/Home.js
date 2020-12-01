import "../../components/midiaSocial/MidiaSocial";
import styles from "./home.scss";

const templateElement = document.createElement("template");

function createStyle() {
  const style = document.createElement("style");
  style.textContent = styles;
  return style;
}

function createTemplate() {
  templateElement.innerHTML = `
		<section>
			<article>
				<h1>Desenvolvedor FrontEnd</h1>
				<h3>Desafios QConcursos.com</h3>
			</article>

			<c-midia-social></c-midia-social>
		</section>
`;
  return templateElement.content.cloneNode(true);
}

class Home extends HTMLElement {
  constructor() {
    super();
    const style = createStyle();
    const template = createTemplate();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template);
  }
}

customElements.define("c-home", Home);
export default Home;
