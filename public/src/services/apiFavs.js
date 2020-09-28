import ReposFav from '../components/ReposFav/ReposFav.js';

async function getFavs() {

    const res3 = await fetch('https://api.github.com/users/marianasmmattos/starred');
    const json3 = await res3.json();

    var favRepos = [];

    json3.forEach(item => {
        favRepos.push(item.name);
    });

    ReposFav(favRepos);
};

export default getFavs;