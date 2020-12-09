import styles from "./sobre.scss";

const templateElement = document.createElement("template");

function createStyle() {
  const style = document.createElement("style");
  style.textContent = styles;
  return style;
}

function createTemplate() {
  templateElement.innerHTML = `
		<section>
			<header>Sobre QConcursos</header>
			<article>
				<p>
					A prática cotidiana prova que a execução dos pontos do programa não pode mais se dissociar do levantamento das variáveis envolvidas. O empenho em analisar o início da atividade geral de formação de atitudes desafia a capacidade de equalização dos métodos utilizados na avaliação de resultados. Do mesmo modo, a determinação clara de objetivos cumpre um papel essencial na formulação das formas de ação. Desta maneira, o surgimento do comércio virtual agrega valor ao estabelecimento de alternativas às soluções ortodoxas. Gostaria de enfatizar que a expansão dos mercados mundiais oferece uma interessante oportunidade para verificação das condições financeiras e administrativas exigidas.
				</p>
				<p>
					É importante questionar o quanto a consulta aos diversos militantes prepara-nos para enfrentar situações atípicas decorrentes do sistema de participação geral. Neste sentido, a estrutura atual da organização representa uma abertura para a melhoria das condições inegavelmente apropriadas. O incentivo ao avanço tecnológico, assim como a mobilidade dos capitais internacionais facilita a criação dos níveis de motivação departamental.
				</p>
				<p>
					Assim mesmo, a adoção de políticas descentralizadoras aponta para a melhoria dos conhecimentos estratégicos para atingir a excelência. Percebemos, cada vez mais, que o consenso sobre a necessidade de qualificação nos obriga à análise das posturas dos órgãos dirigentes com relação às suas atribuições. As experiências acumuladas demonstram que o desafiador cenário globalizado maximiza as possibilidades por conta dos índices pretendidos. Ainda assim, existem dúvidas a respeito de como o desenvolvimento contínuo de distintas formas de atuação deve passar por modificações independentemente do retorno esperado a longo prazo.
				</p>
			</article>
		</section>
`;
  return templateElement.content.cloneNode(true);
}

class Sobre extends HTMLElement {
  constructor() {
    super();
    const style = createStyle();
    const template = createTemplate();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template);
  }
}

customElements.define("c-sobre", Sobre);
export default Sobre;
