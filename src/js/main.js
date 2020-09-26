const fetchRepositoriesPromise = fetch('https://api.github.com/users/gabsleep/subscriptions');
const fetchFavoritesPromise = fetch('https://api.github.com/users/gabsleep/starred');
const fetchFollowersPromise = fetch('https://api.github.com/users/gabsleep/followers');
const fetchFollowingPromise = fetch('https://api.github.com/users/gabsleep/following');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

Promise.all([
  fetchRepositoriesPromise,
  fetchFavoritesPromise,
  fetchFollowersPromise,
  fetchFollowingPromise
])
  .then(response => Promise.all(response.map(v => v.json()))
  .then(([repositories, favorites, followers, following]) => {
    const repositoryID = document.getElementById('repository');
    const followersID = document.getElementById('followers');
    const followingID = document.getElementById('following');
    const cardID = document.getElementById('card');

    class Repositorio extends HTMLElement{
      constructor() {
        super();
      }

      connectedCallback() {
        for (const repository of repositories) {                        
          repoList.innerHTML += (`
            <li>
              <a href="${repository.html_url}" target="_blank">
                ${repository.name}
              </a>
            </li>
          `);
        }
      }

      disconnectedCallback() {
      }
    }

    class Favoritos extends HTMLElement{
      constructor() {
        super();
      }
      connectedCallback() {
        for (const favorite of favorites) {                        
        favList.innerHTML += (`
          <li>
            <a href="${favorite.html_url}" target="_blank">
              ${favorite.name}
            </a>
          </li>`
          );
        }
      }

      disconnectedCallback() {
      }
    }

    class Card extends HTMLElement{
      constructor() {
        super();
      }
      connectedCallback() {
        cardID.innerHTML += (`
          <div class="challenge-content">
            <div class="image-container">
                <img class="profile-img" src="${repositories[0].owner.avatar_url}" alt="">

                <a href="${repositories[0].owner.html_url}" class="profile-link" target="_blank">visitar perfil</a>
            </div>

            <div class="info-container">
                <ul class="infos">
                    <li>
                        Repositórios: <span>${repositories.length}</span>
                    </li>
                    <li>
                        Seguidores: <span>${followers.length}</span>
                    </li>
                    <li>
                        Seguindo: <span>${following.length}</span>
                    </li>
                </ul>

                <div class="info-buttons">
                    <div class="button" id="repoButton">
                        ver repositórios
                    </div>
                    <div class="button" id="favButton">
                        ver favoritos
                    </div>
                </div>
            </div>
          </div>
      
          <repo-list>
            <div class="list-container">
                <div class="list-title">
                    Lista de repositórios
                </div>

                <ul class="list" id="repoList">
                </ul>
            </div>
          </repo-list>

          <fav-list>
            <div class="list-container">
                <div class="list-title">
                    Lista de favoritos
                </div>

                <ul class="list" id="favList">
                </ul>
            </div>
          </fav-list>
        `);

        const repoListID = document.getElementById('repoList');
        const favListID = document.getElementById('favList');

        const repoButtonID = document.getElementById('repoButton');
        const favButtonID = document.getElementById('favButton');
        
        repoListID.parentElement.style.display = "none";
        favListID.parentElement.style.display = "none";
        
        favButtonID.addEventListener('click', () => {
          if (favListID.parentElement.style.display === "none") {
            favButtonID.classList.add('active')
            favListID.parentElement.style.display = "block";
          } else {
            favButtonID.classList.remove('active')
            favListID.parentElement.style.display = "none";
          }

          repoButtonID.classList.remove('active')
          repoListID.parentElement.style.display = 'none';
        })

        repoButtonID.addEventListener('click', () => {
          if (repoListID.parentElement.style.display === "none") {
            repoButtonID.classList.add('active')
            repoListID.parentElement.style.display = "block";
          } else {
            repoButtonID.classList.remove('active')
            repoListID.parentElement.style.display = "none";
          }
          
          favButtonID.classList.remove('active')
          favListID.parentElement.style.display = 'none';
        })
      }

      disconnectedCallback() {
      }
    }

    customElements.define('repo-list', Repositorio);
    customElements.define('fav-list', Favoritos);
    customElements.define('user-card', Card);
  }));