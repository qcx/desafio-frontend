import styles from "./navBar.scss";

const templateElement = document.createElement("template");

function createStyle() {
  const style = document.createElement("style");
  style.textContent = styles;
  return style;
}

function createTemplate() {
  templateElement.innerHTML = `
		<nav>
			<span class="brand">Fábio Henriques</span>
			<a href="#home" class="btn-secao"> Home </a>
			<a href="#sobre" class="btn-secao"> Sobre </a>
			<a href="#desafio" class="btn-secao"> Desafio </a>
		</nav>
`;
  return templateElement.content.cloneNode(true);
}

class NavBar extends HTMLElement {
  constructor() {
    super();
    const style = createStyle();
    const template = createTemplate();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template);
    this.addSmoothScrollOnClick();
  }

  addSmoothScrollOnClick() {
    this.shadowRoot.querySelectorAll(".btn-secao").forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }
}

customElements.define("c-nav-bar", NavBar);
export default NavBar;
