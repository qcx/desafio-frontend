const RepoList = (userRepos) => {

    var reposDiv = document.getElementsByClassName('repos')[0];
    reposDiv.classList.remove('list')
    reposDiv.innerHTML = ``

    var info = ``

    reposDiv.innerHTML = `<h3>Lista de Repositórios</h3>`
    
    userRepos.forEach(repo => {
        if (userRepos.indexOf(repo) % 2 == 0) {
            const item = `<p class="repos green">${repo}</p>`;          
            return info += item;
        } else {
            const item = `<p class="repos">${repo}</p>`;
            return info += item;
        }
    });

    reposDiv.classList.add('list')
    reposDiv.innerHTML += info;

};

export default RepoList;