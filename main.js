// Animação FRONT END DEVELOPER titulo-intro

    function typeWriter(el) {
        const textoArray = el.innerHTML.split('');
        el.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(() => el.innerHTML += letra, 135 * i);
        });
    }

    const titulo = document.querySelector('.typing-animation');
    typeWriter(titulo);

// Consulta repositório do GitHUB 

(function() {
    const search = document.getElementById('search');
    const profile = document.getElementById('profile');
    const url = "https://api.github.com/users";
    const client_id = "c94bff12ed5dd7e29615";
    const client_secret = "5b0981c0165b30bbb4f04f0e923b0edfb532145f";
    const count = "";
    const sort = "created: asc";

    async function getUser(user){
    const profileResponse = await fetch(
        `${url}/${user}?client_id=${client_id}$client_secret=${client_secret}`
    );

    const reposResponse = await fetch(
        `${url}/${user}/repos?per_page=${count}&sort=${sort}$client_id=${client_id}$client_secret=${client_secret}`
    );

    
    
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();


        return { profile, repos};
    }

    function showProfile(user) {
    profile.innerHTML = `

        <div class="container-card">
            <div class="card">
                <img class="card-img" src="${user.avatar_url}" alt="Avatar">
                <p class="card-name-user">${user.name}</p>
                <ul class="list-group">
                    <li class="list-group-item">Repositórios: <span >${user.public_repos}</span></li>
                    <li class="list-group-item">Seguidores: <span >${user.followers}</span></li>
                    <li class="list-group-item">Seguindo: <span >${user.following}</span></li>
                </ul>
                <div class="card-btn">
                    <a href="${user.html_url}" target="_blank" class="btn-ver-perfil" ">Ver Perfil</a>
                </div>
            </div>
            </div>

                <div class="container-repo-list">
                    <p>Lista de Repositórios </p>
                    <div id="repos"></div>
                </div>
        </div>
    `;
    }

    function showRepos(repos) {
        let output = '';

        repos.forEach(repo => {
        output += `
        <div class="repo-body">
            <div class="container-repo">
                <div class="title-repo-list"><a href="${repo.html_url}" target="_blank" >${repo.name}</a></div>
                <div class="list-contribution">
                    <span class="contribuition stars">Stars:${repo.stargazers_count}</span>
                    <span class="contribuition watch">Watch:${repo.watchers}</span>
                    <span class="contribuition forks">Forks:${repo.forks_count}</span>
                </div>
            </div>
        </div>
        `
        });

        document.getElementById('repos').innerHTML = output;
    }



    search.addEventListener("keyup", e => {
        const user = e.target.value;

        if(user.length > 0) {
            getUser(user).then(res => {
                showProfile(res.profile);
                showRepos(res.repos);
            });
            } 
        });
    })();



