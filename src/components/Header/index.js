import Button from '../Button';

import './styles.css';

export default () => {
  const Header = document.createElement('div')
    const Container = document.createElement('div')
      const Text = document.createElement('p')
      const Buttons = document.createElement('div')

    Buttons.classList.add('buttons')
  // o componente 'button' recebe um nome como prop, esse nome vai ser renderizado em tela, o nome deve ser igual ao ID do container para que seja realizado a navegação na lading page
  Buttons.append(Button('home'))
  Buttons.append(Button('sobre'))
  Buttons.append(Button('desafio'))

  Text.innerText = 'Desafio Front-End'
  Text.classList.add('text-header')

  Container.classList.add('container')
  Container.appendChild(Text)
  Container.appendChild(Buttons)

  Header.classList.add('header')
  Header.appendChild(Container)

  return Header
}
