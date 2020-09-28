const ReposFav = (favRepos) => {

    var reposDiv = document.getElementsByClassName('repos')[0];
    reposDiv.innerHTML = ``
    reposDiv.classList.remove('list')

    var info = ``
    reposDiv.innerHTML = `<h3>Lista de Favoritos</h3>`

    favRepos.forEach(repo => {
        if (favRepos.indexOf(repo) % 2 == 0) {
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

export default ReposFav;