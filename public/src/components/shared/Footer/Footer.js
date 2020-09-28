const Footer = () => {

    var sectionFooter = document.createElement('section');
    sectionFooter.classList.add('footer');
    document.body.appendChild(sectionFooter);

    var txtFooter = document.createElement('h4');
    txtFooter.classList.add('txtFooter');
    txtFooter.textContent = 'Desafio desenvolvedora FrontEnd QConcursos @ Copyright Mariana Mattos';
    sectionFooter.appendChild(txtFooter);
   
};

export default Footer;