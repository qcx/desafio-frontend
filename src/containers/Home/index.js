import Header from '../../components/Header';

import './styles.css';

export default () => {
  const Home = document.createElement('div')

    const DivTitles = document.createElement('div')
    const Title = document.createElement('h1')
    const SubTitle = document.createElement('h2')

    const LinkedinLink = document.createElement('a')
    const LinkedinIcon = document.createElement('img')

    const GithubLink = document.createElement('a')
    const GithubIcon = document.createElement('img')

    const Footer = document.createElement('div')

  Title.innerText = 'Desenvolvedor Front-End'
  Title.classList.add('home-title')

  SubTitle.innerText = 'Desafio Qconcurso.com'
  SubTitle.classList.add('subtitle')

  DivTitles.classList.add('div-titles')
  DivTitles.appendChild(Title)
  DivTitles.appendChild(SubTitle)

  GithubIcon.src = 'https://www.flaticon.com/svg/static/icons/svg/733/733553.svg'
  GithubIcon.alt = 'Quadrado azul com um I e um N, logo do LinkedIn'
  GithubLink.href = 'https://github.com/carlosdoria'
  GithubLink.target = '_blank'
  GithubIcon.classList.add('icon')
  GithubLink.appendChild(GithubIcon)

  LinkedinIcon.src = 'https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
  LinkedinIcon.alt = 'Quadrado azul com um I e um N, logo do LinkedIn'
  LinkedinLink.href = 'https://www.linkedin.com/in/carlos-d%C3%B3ria-877122199/'
  LinkedinLink.target = '_blank'
  LinkedinIcon.classList.add('icon')
  LinkedinLink.appendChild(LinkedinIcon)

  Footer.classList.add('home-footer')
  Footer.appendChild(GithubLink)
  Footer.appendChild(LinkedinLink)

  Home.id = 'home'
  Home.classList.add('home')
  Home.append(Header())
  Home.appendChild(DivTitles)
  Home.appendChild(Footer)

  return Home
}
