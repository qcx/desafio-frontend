import './styles.css'

export default (repository) => {
  const CardRepository = document.createElement('div')
    const NameRepository = document.createElement('p')
    const ForksRepository = document.createElement('p')
    const StarsRepository = document.createElement('p')
    const UrlRepository = document.createElement('a')

  CardRepository.appendChild(NameRepository)
  CardRepository.appendChild(ForksRepository)
  CardRepository.appendChild(StarsRepository)
  CardRepository.appendChild(UrlRepository)
  CardRepository.classList.add('card-repository')

  NameRepository.innerText = `Nome do Repositório: ${repository.name}`
  NameRepository.classList.add('p')

  ForksRepository.innerText = `Número de Forks: ${repository.forks}`
  ForksRepository.classList.add('p')

  StarsRepository.innerText = `Número de Estrelas: ${repository.stargazers_count}`
  StarsRepository.classList.add('p')

  UrlRepository.innerText = 'Ir para o repositório'
  UrlRepository.href = `${repository.html_url}`
  UrlRepository.target = '_blank'
  UrlRepository.classList.add('link')



  return CardRepository
}
