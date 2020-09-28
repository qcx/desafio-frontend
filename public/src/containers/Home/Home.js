const Home = () => {

    var sectionHome = document.createElement('section');
    sectionHome.classList.add('home');
    sectionHome.id ='home';
    sectionHome.setAttribute('role', `Plano de Fundo`);
    sectionHome.setAttribute('aria-label', `Carousel de Imagens por trás do título. Pessoas alegres com computadores, acompanhadas de familiares, alternado com pessoas digitando no computador e na tela códigos de programação.`);
    document.body.appendChild(sectionHome);

    var parent = document.getElementsByClassName('home')[0];

    var divHomeContent = document.createElement('div');
    divHomeContent.classList.add('content');
    parent.appendChild(divHomeContent);

    const homeTxt = () => {

        var content = document.getElementsByClassName('content')[0];

        var title = document.createElement('h1');
        title.classList.add('homeTitle');
        title.textContent = 'Desenvolvedora FrontEnd'

        var subTitle = document.createElement('h2');
        subTitle.classList.add('homeSubTitle');
        subTitle.textContent = 'Desafio QConcursos.com';

        var divHomeTxt = document.createElement('div');
        divHomeTxt.classList.add('txt');
        content.appendChild(divHomeTxt);
        
        var txt = document.getElementsByClassName('txt')[0];

        txt.appendChild(title);
        txt.appendChild(subTitle);

    }

    const socialMedia = () => {

        var gitImg = '../../../assets/img/github-icon.png';
        var gitLink = 'https://github.com/marianasmmattos/';

        var InImg = '../../../assets/img/linkedin.png';
        var InLink = 'https://www.linkedin.com/in/marianasmmattos/';


        var content = document.getElementsByClassName('content')[0];

        var divSocialMedia = document.createElement('div');
        divSocialMedia.classList.add('socialMedia');
        content.appendChild(divSocialMedia);

        var socialMedia = document.getElementsByClassName('socialMedia')[0];

        var gitHubImg = document.createElement('img');
        gitHubImg.setAttribute('src', `${gitImg}`)
        gitHubImg.setAttribute('alt', `Ícone clicável para GitHub`);
        var gitHubLink = document.createElement('a');
        gitHubLink.classList.add('gitHub');
        gitHubLink.setAttribute('href', `${gitLink}`)
        socialMedia.appendChild(gitHubLink);

        var linkedInImg = document.createElement('img');
        linkedInImg.setAttribute('src', `${InImg}`)
        linkedInImg.setAttribute('alt', `Ícone clicável para LinkedIn`);
        var linkedInLink = document.createElement('a');
        linkedInLink.classList.add('linkedIn');
        linkedInLink.setAttribute('href', `${InLink}`)
        socialMedia.appendChild(linkedInLink);

        var gitInnerHtml = document.getElementsByClassName('gitHub')[0];
        gitInnerHtml.appendChild(gitHubImg);

        var linkedInHtml = document.getElementsByClassName('linkedIn')[0];
        linkedInHtml .appendChild(linkedInImg);
    }

    homeTxt();
    socialMedia();
};

export default Home;