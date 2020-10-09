import { ApiUser, ApiRepositories } from '../../services/services'

import CardRepository from '../CardRepository'

import './styles.css';

export default async () => {
  let user = 'carlosdoria'
  const { data } = await ApiUser.get(`/${user}`)
  const responseRepository = await ApiRepositories.get(`/${user}/repos`)
  console.log(data)

  const Card = document.createElement('div');
    const CardProfile = document.createElement('div');
      const DivImage = document.createElement('div');
        const Image = document.createElement('img');
        const ImageSubTitle = document.createElement('a');

      const DivStatus = document.createElement('div');
        const Repositories = document.createElement('p');
        const Seguidores = document.createElement('p');
        const Seguindo = document.createElement('p');

    const RepositoriesCard = document.createElement('div');
      const TitleRepositories = document.createElement('p');

  Image.src = `${data.avatar_url}`;
  Image.classList.add('img')

  ImageSubTitle.innerText = 'Visitar Perfil';
  ImageSubTitle.href = `${data.html_url}`;
  ImageSubTitle.target = '_blank';
  ImageSubTitle.classList.add('image-subtitle');

  DivImage.classList.add('div-image');
  DivImage.appendChild(Image);
  DivImage.appendChild(ImageSubTitle);

  Repositories.innerText = `Repositórios: ${data.public_repos}`
  Repositories.classList.add('status')

  Seguidores.innerText = `Seguidores: ${data.followers}`
  Seguidores.classList.add('status')

  Seguindo.innerText = `Seguindo: ${data.following}`
  Seguindo.classList.add('status')

  DivStatus.classList.add('div-status')
  DivStatus.appendChild(Repositories)
  DivStatus.appendChild(Seguidores)
  DivStatus.appendChild(Seguindo)

  CardProfile.classList.add('card-profile')
  CardProfile.appendChild(DivImage);
  CardProfile.appendChild(DivStatus);

  TitleRepositories.innerText = 'Lista de Repositórios'
  TitleRepositories.classList.add('title-respositories')

  RepositoriesCard.classList.add('repositories-card')
  RepositoriesCard.appendChild(TitleRepositories)
  responseRepository.data.forEach(repository => {
    RepositoriesCard.appendChild(CardRepository(repository));
  });

  Card.classList.add('card');
  Card.appendChild(CardProfile);
  Card.appendChild(RepositoriesCard)

  return Card
}
