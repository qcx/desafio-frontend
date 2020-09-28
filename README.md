# :star: Frontend Challenge - Qconcursos
> Landing page com integração à API do GitHub feita em ES6 puro.

<div align="center">
<img src="https://i.ibb.co/nBnYGSZ/mysite.png" height="300px" alt="imagem da versão web"><img src="https://i.ibb.co/8MnpLYJ/mobile.png" height="300px" alt="Imagem da versão mobile">
</div>
<br>
Este projeto foi desenvolvido para candidatura à vaga de desenvolvedor FrontEnd da Qcx. A SPA deveria ser feita sem utilização de frameworks FrontEnd e preferencialmente componentizando a aplicação. Não foi requisitado backend. Realizado em 7 dias, você pode checar o resultado em minha prévia online, deploy feito pelo Heroku devido a utilização de servidor para levantar a aplicação em NodeJS https://qcxconc.herokuapp.com/

## :sparkles: Lighthouse e prioridades durante o desevolvimento
<div align="center">
<img src="https://i.ibb.co/7nHzzvb/lighthouse.png" alt="Análise pelo LightHouse">
</div>

Esse desafio não foi feito em TDD, dada a prioridade em mostrar proeficiência sobre a arquitetura de um projeto componentizado e domínio das tecnologias básicas, além de originalidade na solução. Ainda sim, algumas considerações foram feitas durante a realização, principalmente voltadas para SEO, responsividade e acessibilidade do site. Ressalto a importância desses pontos e trago uma breve análise da prévia online no heroku feita pelo Google Lighthouse. 

Infelizmente, a performace não ficou dentro do ideal de carregamento de página. Talvez, a utilização de uma função universal para gerar componentes fosse uma possível solução. Algo como: 

```shell
function createComponent(element, class, parent,){
    let el = document.createElement(element);
    let parent = document.querySelector(parent);
    el.classList.add(class)
    parent.appendChild(el) || parent.innerHTML = el 
}
```

## :boom: Tecnologias utilizadas

* HTML5
* CSS3
* SCSS
* ES6

## :cat: Getting Started

Para rodar essa aplicação em sua máquina, você precisa ter uma IDE instalada. Recomendo particularmente o VSCode, com a extensão Live Sass para compilação dos arquivos .scss. Com a IDE instalada e preparada, é necessário fazer  também a instalação do Express e do ejs para que a aplicação possa ser hospedada em servidor local. Em seu terminal, execute:

```shell
npm i express
```
Para o ejs:

```shell
npm i ejs
```

Por padrão, essa aplicação é rodada na portar 8080 em sua máquina local. Para isso, execute o comando:

```shell
node server.js
```

Após a execução do comando, a seguinte mensagem deve aparecer em seu terminal:

```shell
Listening on port 8080
```

Pronto! Você conseguiu rodar a aplicação. 

Para continuar o desenvolvimento adequadamente, é importante clicar no botão "watch sass" no rodapé do VSCode. Outra opção é a utilização de webpack, que está entre as tasks desse projeto, mas não foi posível no tempo.

## :fire: Task list

- [x] Utilização de HTML5, CSS3 e JS puro
- [x] Desenvolvimento em ES6+
- [x] Desenvolvimento em SCSS
- [x] Componentização da aplicação
- [x] Integração com API do GitHub
- [x] Acessibilidade e SEO
- [x] Manipulação do DOM e domínio de condicionais
- [x] Animações
- [x] Responsividade/compatibilidade com diversos dispositivos
- [ ] Utilização de WebPack 
- [ ] Utilização de Babel
- [ ] Criação de função universal para criação de componentes
