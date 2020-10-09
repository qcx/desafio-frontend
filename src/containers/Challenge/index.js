import Card from '../../components/Card';

import './styles.css';

export default async () => {
  const Challenge = document.createElement('div')
    const Title = document.createElement('p')
    const Footer = document.createElement('div')

  Title.innerText = 'Desafio'
  Title.classList.add('challenge-title')

  Footer.innerText = 'Desafio Desenvolvedor Front-End Qconcurso.com'
  Footer.classList.add('challenge-footer')

  Challenge.id = 'desafio'
  Challenge.classList.add('challenge')
  Challenge.appendChild(Title)
  Challenge.append(await Card())
  Challenge.appendChild(Footer)

  return Challenge
}
