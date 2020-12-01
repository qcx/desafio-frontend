import { icon } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { githubUrl, linkedinUrl } from "../../data/constants";
import styles from "./midiaSocial.scss";

const iconLinkedin = icon(faLinkedin);
const iconGithub = icon(faGithub);

const templateElement = document.createElement("template");

function createStyle() {
  const style = document.createElement("style");
  style.textContent = styles;
  return style;
}

function createTemplate() {
  templateElement.innerHTML = `
		<ul>
			<li>
				<a href="${linkedinUrl}" target="_blank" class="link-linkedin">
					${iconLinkedin.node[0].outerHTML}
				</a>
			</li>
			<li>
				<a href="${githubUrl}" target="_blank" class="link-github">
					${iconGithub.node[0].outerHTML}
				</a>
			</li>
		</ul>
	`;
  return templateElement.content.cloneNode(true);
}

class MidiaSocial extends HTMLElement {
  constructor() {
    super();
    const style = createStyle();
    const template = createTemplate();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template);
  }
}

customElements.define("c-midia-social", MidiaSocial);
export default MidiaSocial;
